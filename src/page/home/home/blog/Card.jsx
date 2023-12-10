import { Link } from "react-router-dom";


const Card = ({ blog }) => {
    const { image, title, description, _id } = blog
    return (
        <div>
            <div class="relative  h-[500px] flex flex-col  p-4 text-white border border-primaryColor-0 shadow-md rounded-xl bg-clip-border">
                <div class="relative h-full overflow-hidden text-gray-700 bg-white rounded-xl bg-clip-border">
                    <img
                        src={image}
                        className="object-cover w-full h-full"
                    />
                </div>
                <div>
                    <div class="flex items-center justify-between mb-2">
                        <h1 class="block mt-3 text-2xl font-semibold font-sans  antialiased  leading-relaxed text-blue-gray-900">
                            {title}
                        </h1>
                    </div>
                    <p class="block text-clip overflow-hidden font-sans text-md  font-normal leading-normal  opacity-75">
                        {
                            description?.length > 100 ? <p className=''>{description.slice(0, 100)}...... <br />
                                <div class="p-6 pt-0 mt-5">
                                    <Link to={`/details/${_id}`}>
                                        <button
                                            class="block w-full bg-primaryColor-0 text-[#010313] select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                            type="button"
                                        >
                                            read more
                                        </button>
                                    </Link>
                                </div> </p> :
                                <p className='mt-5 text-white'>{description}</p>
                        }
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Card;