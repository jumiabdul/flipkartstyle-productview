
import carousel1 from "./assets/carousel1.webp"
import carousel2 from "./assets/carousel2.webp"
import carousel3 from "./assets/carousel3.webp"
import minute from "./assets/minute.webp"
import mobile from "./assets/mobile.webp"
import fashion from "./assets/fashion.jpg"
import electronics from "./assets/electronics.jpg"
import home1 from "./assets/home1.jpg"
import tv from "./assets/tv.webp"
import flight from "./assets/flight.webp"
import beauty from "./assets/beauty.png"
import grocery from "./assets/grocery.webp"
import RelatedProducts from "./RelatedProducts.jsx";

const Home = () => {
    return (
        <div className="p-4">
            <div className="grid grid-cols-9 bg-grey-900">
                <img src={minute} alt="" className="w-17 " />
                <img src={mobile} alt="" className="w-17" />
                <img src={fashion} alt="" className="w-17" />
                <img src={electronics} alt="" className="w-17 h-17" />
                <img src={home1} alt="" className="w-17" />
                <img src={tv} alt="" className="w-17" />
                <img src={flight} alt="" className="w-17 h-17" />
                <img src={beauty} alt="" className="w-17" />
                <img src={grocery} alt="" className="w-17" />
            </div>
            <div className="mt-5">
                <img src={carousel1} alt="" className="w-full " />
            </div>
            <div className="p-6 flex-grow">
                <RelatedProducts />
            </div>


        </div>



    )
}

export default Home;