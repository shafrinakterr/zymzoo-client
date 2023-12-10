import { useInfiniteQuery } from "@tanstack/react-query";
import InfiniteScroll from 'react-infinite-scroll-component';
import { Helmet } from "react-helmet-async";
const getImages = async ({ pageParam = 0 }) => {
    const response = await fetch(`https://fitness-tracker-server-swart.vercel.app/image?limit=5&offset=${pageParam}`);
    const data = await response.json();
    return { ...data, prevOffset: pageParam }

}
const Gallery = () => {
    const { data, fetchNextPage, hasNextPage } = useInfiniteQuery({
        queryKey: ['imagess'],
        queryFn: getImages,
        getNextPageParam: (lastPage) => {
            if (lastPage.prevOffset + 5 > lastPage.articlesCount) {
                return false;
            }
            return lastPage.prevOffset + 5
        }
    })
    console.log(data);

    const images = data?.pages.reduce((acc, page) => {
        console.log(page.imagess);
        console.log(acc);
        return [...acc, page]
    }, [])

    console.log(images);

    return (
        <div>
            <Helmet>
                <title>ZYMZOO | Gallary</title>
            </Helmet>
            <div className="pt-32 -pb-20">
                <h1 className="text-center space-y-3 text-5xl mb-5 drop-shadow-lg  font-semibold ">Our <span className="text-primaryColor-0">Gelary</span></h1>
                <div className="divider  divider-neutral text-primaryColor-0">ZYMZOO</div>
            </div>
            <InfiniteScroll
                dataLength={images ? images.length : 0}
                next={() => fetchNextPage()}
                hasMore={hasNextPage}
                loading={<div>Loading...</div>}

            >
                <div>
                    {images &&
                        images.map((image, idx) => {
                            return (
                                <div className="w-full h-screen  p-4 text-center" key={idx}>
                                    <section class="text-gray-600 body-font">
                                        <div class="container px-5 py-24 mx-auto flex flex-wrap">

                                            <div class="flex flex-wrap md:-m-2 -m-1">
                                                <div class="flex flex-wrap w-1/2">
                                                    <div class="md:p-2 p-1 w-1/2">
                                                        <img class="w-full object-cover h-full object-center block" src="https://images.pexels.com/photos/7592345/pexels-photo-7592345.jpeg?auto=compress&cs=tinysrgb&w=600" alt="gallery" />
                                                    </div>
                                                    <div class="md:p-2 p-1 w-1/2">
                                                        <img class="w-full object-cover h-full object-center block" src="https://images.pexels.com/photos/260352/pexels-photo-260352.jpeg?auto=compress&cs=tinysrgb&w=600" alt="gallery" />
                                                    </div>
                                                    <div class="md:p-2 p-1 w-full">
                                                        <img class="w-full object-cover h-full object-center block" src="https://images.pexels.com/photos/2475875/pexels-photo-2475875.jpeg?auto=compress&cs=tinysrgb&w=600" alt="gallery" />
                                                    </div>
                                                </div>
                                                <div class="flex flex-wrap w-1/2">
                                                    <div class="md:p-2 p-1 w-full">
                                                        <img class="w-full object-cover h-full object-center block" src="https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=600" alt="gallery" />
                                                    </div>
                                                    <div class="md:p-2 p-1 w-1/2">
                                                        <img class="w-full object-cover h-full object-center block" src="https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=600" alt="gallery" />
                                                    </div>
                                                    <div class="md:p-2 p-1 w-1/2">
                                                        <img class="w-full object-cover h-full object-center block" src="https://images.pexels.com/photos/7674484/pexels-photo-7674484.jpeg?auto=compress&cs=tinysrgb&w=600" alt="gallery" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                    <section class="text-gray-600 -mt-44 body-font">
                                        <div class="container px-5 py-24 mx-auto flex flex-wrap">
                                            <div class="flex flex-wrap md:-m-2 -m-1">
                                                <div class="flex flex-wrap w-1/2">
                                                    <div class="md:p-2 p-1 w-1/2">
                                                        <img class="w-full object-cover h-full object-center block" src="https://images.pexels.com/photos/4944978/pexels-photo-4944978.jpeg?auto=compress&cs=tinysrgb&w=600" alt="gallery" />
                                                    </div>
                                                    <div class="md:p-2 p-1 w-1/2">
                                                        <img class="w-full object-cover h-full object-center block" src="https://images.pexels.com/photos/2468339/pexels-photo-2468339.jpeg?auto=compress&cs=tinysrgb&w=600" alt="gallery" />
                                                    </div>
                                                    <div class="md:p-2 p-1 w-full">
                                                        <img class="w-full object-cover h-full object-center block" src="https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=600" alt="gallery" />
                                                    </div>
                                                </div>
                                                <div class="flex flex-wrap w-1/2">
                                                    <div class="md:p-2 p-1 w-full">
                                                        <img class="w-full object-cover h-full object-center block" src="https://images.pexels.com/photos/7031705/pexels-photo-7031705.jpeg?auto=compress" alt="gallery" />
                                                    </div>
                                                    <div class="md:p-2 p-1 w-1/2">
                                                        <img class="w-full object-cover h-full object-center block" src="https://images.pexels.com/photos/13885345/pexels-photo-13885345.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="gallery" />
                                                    </div>
                                                    <div class="md:p-2 p-1 w-1/2">
                                                        <img class="w-full object-cover h-full object-center block" src="https://images.pexels.com/photos/4162490/pexels-photo-4162490.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="gallery" />
                                                    </div>
                                                </div>
                                                <div class="flex flex-wrap w-1/2">
                                                    <div class="md:p-2 p-1 w-full">
                                                        <img class="w-full object-cover h-full object-center block" src="https://images.pexels.com/photos/4047154/pexels-photo-4047154.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="gallery" />
                                                    </div>
                                                    <div class="md:p-2 p-1 w-1/2">
                                                        <img class="w-full object-cover h-full object-center block" src="https://images.pexels.com/photos/13885345/pexels-photo-13885345.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="gallery" />
                                                    </div>
                                                    <div class="md:p-2 p-1 w-1/2">
                                                        <img class="w-full object-cover h-full object-center block" src="https://images.pexels.com/photos/4162490/pexels-photo-4162490.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="gallery" />
                                                    </div>
                                                </div>
                                                <div class="flex flex-wrap w-1/2">
                                                    <div class="md:p-2 p-1 w-full">
                                                        <img class="w-full object-cover h-full object-center block" src="https://images.pexels.com/photos/14679047/pexels-photo-14679047.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="gallery" />
                                                    </div>
                                                    <div class="md:p-2 p-1 w-1/2">
                                                        <img class="w-full object-cover h-full object-center block" src="https://images.pexels.com/photos/13885345/pexels-photo-13885345.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="gallery" />
                                                    </div>
                                                    <div class="md:p-2 p-1 w-1/2">
                                                        <img class="w-full object-cover h-full object-center block" src="https://images.pexels.com/photos/4162490/pexels-photo-4162490.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="gallery" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            )
                        })
                    }
                </div>
            </InfiniteScroll>

        </div>
    );
};

export default Gallery;