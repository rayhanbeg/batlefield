import Lottie from "lottie-react";
import loader from "../assets/Loader.json"
const Loader = () => {
    return (
        <div className=" flex justify-center items-center mx-auto py-40">
             <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
                <Lottie animationData={loader} className="w-full h-auto" />
            </div>
        </div>
    );
};

export default Loader;