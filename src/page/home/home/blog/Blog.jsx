import { useEffect, useState } from "react";
import Card from "./Card";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";

const Blog = () => {
    const [blogs, setBlogs] = useState([])
    const axiosPublic = useAxiosPublic();
    axiosPublic.get('/blogs')
        .then(res => {
            setBlogs(res.data);
        })
    return (
        <div>
            <div className="-mb-8">
                <h1 className="text-center text-5xl mt-10 drop-shadow-lg  font-semibold ">Blog <span className="text-primaryColor-0">& </span> News</h1>
                <div className="divider  divider-neutral text-primaryColor-0">ZYMZOO</div>
            </div>
            <div className="grid p-4 gap-10 mt-20 grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
                {
                   blogs.map(blog => <Card key={blog._id} blog={blog}></Card>)
                }

            </div>
        </div>
    );
};

export default Blog;