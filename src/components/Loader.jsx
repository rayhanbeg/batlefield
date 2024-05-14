import Lottie from "lottie-react";
import loader from "../assets/Loader.json"
const Loader = () => {
    return (
        <div className=" flex justify-center items-center mx-auto py-44">
             <div className="w-[25%] lg:w-[15%]">
                <Lottie animationData={loader} className="w-full h-auto" />
            </div>
        </div>
    );
};

export default Loader;