import Swal from 'sweetalert2';

import useAxiosPublic from '../../../../hooks/useAxiosPublic';
const NewsLetter = () => {
    const axiosPublic = useAxiosPublic()
    const handleNewletter = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        console.log(name, email);
        const newsletterInfo = { name, email }
        axiosPublic.post('/news', newsletterInfo)
            .then(response => {
                if (response.data.acknowledged) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Subscribe Successful',
                        text: 'You are now logged in.',
                        customClass: {
                            container: 'custom-swal-container bg-red-300',
                            text: 'white text-xs',
                            title: 'custom-swal-title text-2xl text-white ',
                            confirmButton: 'hover:border-primaryColor-0 btn bg-primaryColor-0  text-black border-0 hover:bg-primaryColor-0',
                        },
                        color: 'white',
    
                        background: 'black',
                        buttonsStyling: false,
                    });
                }
            })

    }
    return (
        <div className="lg:w-full relative ">
            <div className="lg:p-20 hero">
            <div className="hero-overlay shadow-lg absolute opacity-40"></div>
                <div className="card w-full bg-gradient-to-r from-[#010313cc] to-[#01031357] shadow-sm shadow-primaryColor-0">

                    <div className="lg:p-16 p-5">
                        <h2 className="lg:text-5xl text-3xl  text-center">Subcribe to our <span className='text-primaryColor-0'>ZYMZOO</span></h2>
                        <div className='lg:w-[72%] mt-5 mx-auto'>
                            <p className='  text-center'>Elevate your fitness journey! Get expert tips, workout routines, and nutrition advice delivered straight to your inbox. Stay motivated with success stories, trends, and exclusive perks. Subscribe now for a healthier, stronger you!</p>
                        </div>

                        <div className="divider  divider-neutral text-primaryColor-0">ZYMZOO</div><br />
                        <form onSubmit={handleNewletter}>
                            <div className='md:flex w-full md:gap-5'>
                                <input required type="text " name='name' placeholder="Type your name" className="input bg-[#010313] border-white mb-5  w-1/2 " />
                                <input required type="email" name='email' placeholder="Type your email" className="input w-1/2 bg-[#010313] border-white " />


                            </div>
                            <div className=" md:flex justify-end mt-5 ">
                                <button className="btn bg-primaryColor-0 hover:bg-[#010313] hover:text-primaryColor-0 hover:border-primaryColor-0">Subscribe Now</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;