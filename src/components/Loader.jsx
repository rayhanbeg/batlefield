import { ClipLoader } from "react-spinners";
const Loader = () => {
    return (
        <div className=" flex justify-center items-center mx-auto py-44">
             <div className="">
             <ClipLoader  className="w-full" />
            </div>
        </div>
    );
};

export default Loader;