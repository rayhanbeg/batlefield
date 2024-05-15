import { useEffect } from "react";
import Carousel from "../components/Carousel";
import Food from "../components/Food";
import ContactUs from "../components/ContactUs";
import OurTeam from "../components/OurTeam";

const Home = () => {

    useEffect(() => {
        document.title="FoodUnityHub || Home"
    }, [])

    return (
        <div>
            <Carousel/>
            <Food/>
            <OurTeam/>
            <ContactUs/>
        </div>
    );
};

export default Home;