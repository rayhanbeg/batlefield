import { useEffect } from "react";
import Carousel from "../components/Carousel";
import Food from "../components/Food";

const Home = () => {

    useEffect(() => {
        document.title="FoodUnityHub || home"
    }, [])

    return (
        <div>
            <Carousel/>
            <Food/>
        </div>
    );
};

export default Home;