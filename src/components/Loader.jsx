import Lottie from "lottie-react";
import loader from "../assets/Loader.json"
const Loader = () => {
    return (
        <div className=" flex justify-center items-center mx-auto my-40">
            <Lottie animationData={loader}/>
        </div>
    );
};

export default Loader;