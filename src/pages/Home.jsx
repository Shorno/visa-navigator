import ImageSlider from "../components/ImageSlider.jsx";
import LatestVisa from "../components/LatestVisa.jsx";
import Testimonials from "../components/Testimonials.jsx";
import WhyChooseUs from "../components/WhyChooseUs.jsx";


export default function Home() {

    return (
        <main>
            <ImageSlider/>
            <LatestVisa/>
            <Testimonials/>
            <WhyChooseUs/>
        </main>
    )
}