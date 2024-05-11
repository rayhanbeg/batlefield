import axios from "axios";
import { useEffect, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { Fade } from "react-awesome-reveal";
import Loader  from "../components/Loader"
import { Link } from "react-router-dom";

const Food = () => {
    const [food, setFood] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get("http://localhost:5000/food");
            setFood(data);
            setLoading(false);
        };
        fetchData();
    }, []);

    if (loading) 
        return <Loader/>


    return (
        <div className="container mx-auto flex justify-center">
        <div className="max-w-4xl">
            <div className="text-center lg:text-3xl mt-12 text-[#87CEEB] font-bold sm:font-bold md:font-semibold lg:font-extrabold">
                <h1 className=" pb-4">Food</h1>
            </div>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
                {food.map((item, index) => (
                    <Fade key={index} delay={index * 30} direction="left">
                        <div className="max-w-md rounded-md shadow-md overflow-hidden">
                            <img
                                src={item.foodImageURL}
                                alt={item.foodName}
                                className="object-cover object-center w-full h-48 sm:h-56 transform transition-transform duration-300 hover:scale-105"
                            />
                            <div className="p-4">
                                <h1 className="text-[#4682B4] font-semibold flex items-center">
                                    <FaLocationDot className="mr-1" />
                                    <span>Pick up: {item.pickupLocation}</span>
                                </h1>
                                <h1 className="text-lg font-semibold">{item.foodName}</h1>
                                <p className="text-sm">Quantity: {item.foodQuantity}</p>
                                <p className="text-sm">Expired Date/Time: {item.expiryDateTime}</p>
                                <p className="text-sm">{item.additionalNotes}</p>
                                <div className="flex items-center">
                                    <img src={item.donatorImageURL} alt="Donator" className="w-8 h-8 rounded-full mr-2" />
                                    <span className="text-sm">{item.donatorName}</span>
                                </div>
                                <Link to={`/foodDetails/${item._id}`}
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">
                                    View Detail
                                </Link>
                            </div>
                        </div>
                    </Fade>
                ))}
            </div>
        </div>
    </div>
    
    );
};

export default Food;
