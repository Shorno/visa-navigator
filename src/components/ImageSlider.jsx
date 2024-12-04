import Image1 from "/src/assets/travel-image (1).jpg"
import Image2 from "/src/assets/travel-image (2).jpg"
import Image3 from "/src/assets/travel-image (3).jpg"
import Image4 from "/src/assets/travel-image (4).jpg"
import Image5 from "/src/assets/travel-image (5).jpg"
import Image6 from "/src/assets/travel-image (6).jpg"
import Image7 from "/src/assets/travel-image (7).jpg"
import Image8 from "/src/assets/travel-image (8).jpg"
import {Carousel} from "antd";
const slides = [
    {
        image: Image1,
        title: "Discover Breathtaking Landscapes",
        description: "Explore the world's most stunning destinations"
    },
    {
        image: Image2,
        title: "Adventure Awaits",
        description: "Unforgettable journeys start here"
    },
    {
        image: Image3,
        title: "Cultural Experiences",
        description: "Immerse yourself in local traditions"
    },
    {
        image: Image4,
        title: "Luxury Retreats",
        description: "Escape to paradise"
    },
    {
        image: Image5,
        title: "Natural Wonders",
        description: "Witness the beauty of our planet"
    },
    {
        image: Image6,
        title: "Urban Exploration",
        description: "Discover vibrant city life"
    },
    {
        image: Image7,
        title: "Hidden Gems",
        description: "Uncover secret destinations"
    },
    {
        image: Image8,
        title: "Memorable Journeys",
        description: "Create lasting memories"
    }
];
export default function ImageSlider() {
    return (
        <>
            <div className="relative">
                <Carousel arrows infinite autoplay>
                    {slides.map((slide, index) => (
                        <div key={index} className="relative">
                            <div className="relative">
                                <img
                                    src={slide.image}
                                    className="lg:h-[800px] w-full  object-cover"
                                    alt={`Travel image ${index + 1}`}
                                />

                                <div
                                    className="absolute inset-0 flex flex-col justify-center items-center text-center text-white bg-black bg-opacity-40 p-4">
                                    <h2 className="lg:text-8xl text-4xl font-bold mb-4 drop-shadow-lg">
                                        {slide.title}
                                    </h2>
                                    <p className="text-xl lg:text-4xl max-w-2xl drop-shadow-md">
                                        {slide.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>

        </>
    )
}