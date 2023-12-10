
import { useState } from 'react';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import Post from './Post';

const Forums = () => {
  const [posts, setPosts] = useState([])
  const axiosPublic = useAxiosPublic()
  axiosPublic.get('/posts')
    .then(res => {
      setPosts(res.data);
    })

  return (
    <div className='pt-36 max-w-6xl mx-auto'>
      <div>
        <h1 className="text-center space-y-3 lg:text-4xl text-2xl mb-3 drop-shadow-lg font-semibold">
          ZYMZOO: Your Ultimate Destination for Gym <span className="text-primaryColor-0"> Enthusiasts</span>

        </h1>
        <p className='text-center mb-10 p-4'>Join our vibrant fitness community at FitForum, where gym enthusiasts unite to share insights, tips, and motivation on their fitness journeys. Whether you're a seasoned pro or just starting, this forum is your go-to space for discussing workouts, nutrition, equipment, and everything else related to the world of fitness. Dive into engaging conversations, seek advice, and celebrate milestones with like-minded individuals who share your passion for a healthier lifestyle. Let's lift each other up and sculpt our best selves together at FitForum – where the gym meets community!</p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {
          posts.map(post => <Post key={post._id} post={post}></Post>)
        }
      </div>

    </div>
  );
};

export default Forums;
