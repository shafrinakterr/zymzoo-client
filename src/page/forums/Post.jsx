import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useContext, useState } from 'react';
import VoteButtons from './VoteButtons';
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";
import { Authcontext } from "../../provider/AuthProvider";
const Post = ({ post }) => {
    const [upvoteCount, setUpvoteCount] = useState(0);
    const [downvoteCount, setDownvoteCount] = useState(0);
    const { user } = useContext(Authcontext);
    const axiosPublic = useAxiosPublic()
    const handleVote = (type) => {
        // Simulate sending the vote to the server (replace with actual API calls)
        if (type === 'up') {
            setUpvoteCount(upvoteCount + 1);
        } else if (type === 'down') {
            setDownvoteCount(downvoteCount + 1);
        }
    };
    return (
        <div>
            <section class="text-white body-font">
                <div class="container mx-auto">
                    <div>
                        <div class="p-4">
                            <div class="h-full border border-primaryColor-0 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden relative">
                                <h1 class="title-font sm:text-2xl text-xl font-medium text-primaryColor-0 mb-3">{post.name}</h1>
                                <p class="leading-relaxed mb-3">OpeningTime: {post.schedule.openingTime}</p>
                                <p class="leading-relaxed mb-3">ClosingTime: {post.schedule.closingTime}</p>
                                <p class="leading-relaxed mb-3 flex">day: &nbsp; <span className="flex gap-5">
                                    {post.schedule.days[0]},
                                    {post.schedule.days[1]},
                                    {post.schedule.days[2]}
                                </span> </p>
                                <p class="leading-relaxed mb-3">location: {post.location}</p>
                                <p class="leading-relaxed text-sm mb-3 h-[150px]">{post.description}</p>
                                <div class="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                                    <div className="post flex items-center">
                                        {user ? (
                                            <>
                                                <span className='' id="upvote-count">
                                                    {upvoteCount}
                                                </span>

                                                <VoteButtons onVote={handleVote} />
                                                <span className='' id="downvote-count">
                                                    {downvoteCount}
                                                </span>

                                            </>
                                        ) : (
                                            <div className='flex gap-5'>
                                                <button className='btn btn-outline text-2xl text-white border-0 hover:bg-[#010313]'>
                                                    <BiSolidUpArrow />
                                                </button>
                                                <button className='btn btn-outline text-2xl text-white border-0 hover:bg-[#010313] ml-5'>
                                                    <BiSolidDownArrow />
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Post;