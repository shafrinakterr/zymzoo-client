import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";
import useAxiosPublic from "../hooks/useAxiosPublic";
export const Authcontext = createContext(null)
const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const axiosPublic = useAxiosPublic()
    // create user
    const createUser = async (name, email, password, photo) => {
        setLoading(true)
        const result = await createUserWithEmailAndPassword(auth, email, password);
        updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        })
        return result
    }

    // sing in user
    const singInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);

    }

    // google singIn
    const google = () => {
        setLoading(true)
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider)
    }


    // logOUt

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            if (currentUser) {
                const userInfo = { email: currentUser.email }
                axiosPublic.post('/jwt', userInfo)
                    .then(res => {
                        // console.log(res.data)
                        if (res.data) {
                            localStorage.setItem('access-token', res.data)
                            setLoading(false)
                        }
                    })
            } else {
                localStorage.removeItem('access-token')
            }

            setLoading(false)
        });
        return () => {
            unSubscribe();
        }
    }, [axiosPublic])

    const userinfo = {
        user,
        createUser,
        singInUser,
        google,
        logOut,
        loading
    }
    return (
        <Authcontext.Provider value={userinfo}>
            {children}
        </Authcontext.Provider>
    );
};

export default AuthProvider;