import img1 from '../../../../assets/image/featured/img1.png'
// import img3 from '../../../../assets/image/featured/img3.png'
import img2 from '../../../../assets/image/featured/img2.png'
import img3 from '../../../../assets/image/featured/img3.png'
import img4 from '../../../../assets/image/featured/img4.png'
import img5 from '../../../../assets/image/featured/img5.png'
const Featured = () => {
    return (
        <div>
            <div>
                <h1 className="text-center space-y-3 text-5xl mb-5 drop-shadow-lg  font-semibold ">Our <span className="text-primaryColor-0">Featured</span></h1>
                <div className="divider  divider-neutral text-primaryColor-0">ZYMZOO</div>
            </div>
            <div className='grid grid-cols-1 p-4 mt-10 mb-10 md:grid-cols-2 lg:grid-cols-3 '>
                <div className="p-4 shadow-inner shadow-primaryColor-0 ">
                    <div>
                        <figure><img className='w-40 h-40 mx-auto' src={img1} alt="Shoes" /></figure>
                    </div>
                    <div className="text-center space-y-3">
                        <h2 className="capitalize text-3xl font-semibold text-gray-300">Body building</h2>
                        <p>Bodybuilding emphasizes sculpting a muscular physique via resistance training and nutrition, aiming for symmetry and low body fat. In competition, participants showcase muscle definition and size through posing routines.</p>
                    </div>
                </div>
                <div className="p-4 shadow-inner shadow-primaryColor-0 ">
                    <div>
                        <figure><img className='w-40  h-40 mx-auto' src={img2} alt="Shoes" /></figure>
                    </div>
                    <div className="text-center space-y-3">
                        <h2 className="capitalize text-3xl font-semibold text-gray-300 mt-2">Musculation</h2>
                        <p>French musculation means bodybuilding, emphasizing muscle development through targeted exercises and resistance training, prioritizing proper nutrition and muscle isolation for a defined, aesthetic physique.</p>
                    </div>
                </div>
                <div className="p-4 shadow-inner shadow-primaryColor-0 ">
                    <div>
                        <figure><img className='w-40 h-40 mx-auto' src={img3} alt="Shoes" /></figure>
                    </div>
                    <div className="text-center space-y-3">
                        <h2 className="capitalize text-3xl font-semibold text-gray-300">Fitness running</h2>
                        <p>Fitness running improves cardiovascular health and endurance through various workouts like steady runs and intervals. It's a key component for a well-rounded exercise routine, contributing to overall physical fitness.</p>
                    </div>
                </div>
                <div className="p-4 shadow-inner shadow-primaryColor-0 ">
                    <div>
                        <figure><img className='w-40 h-40 mx-auto' src={img4} alt="Shoes" /></figure>
                    </div>
                    <div className="text-center space-y-3">
                        <h2 className="capitalize text-3xl font-semibold text-gray-300">weight lifting</h2>
                        <p>Weight lifting involves lifting weights to build strength and muscle mass, contributing to improved overall fitness and health. It encompasses various techniques, including free weights and machines.</p>
                    </div>
                </div>
                <div className="p-4 shadow-inner shadow-primaryColor-0 ">
                    <div>
                        <figure><img className='w-40 h-40 mx-auto' src={img5} alt="Shoes" /></figure>
                    </div>
                    <div className="text-center space-y-3">
                        <h2 className="capitalize text-3xl font-semibold text-gray-300">Classic yoga</h2>
                        <p>Classic yoga intertwines physical postures, breath control, and meditation for holistic well-being, fostering harmony between the body and mind through ancient traditions. It prioritizes balance, flexibility, and mindfulness in its practice.</p>
                    </div>
                </div>
                <div className="p-4 shadow-inner shadow-primaryColor-0 ">
                    <div>
                        <figure><img className='w-40 h-40 mx-auto' src={img1} alt="Shoes" /></figure>
                    </div>
                    <div className="text-center space-y-3">
                        <h2 className="capitalize text-3xl font-semibold text-gray-300">Body building</h2>
                        <p>Bodybuilding emphasizes sculpting a muscular physique via resistance training and nutrition, aiming for symmetry and low body fat. In competition, participants showcase muscle definition and size through posing routines.</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Featured;