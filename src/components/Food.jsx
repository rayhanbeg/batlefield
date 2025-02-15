import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loader from "../components/Loader";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Fetch function
const fetchFoodData = async () => {
  const { data } = await axios.get("https://server-kappa-gray.vercel.app/food");
  return data;
};

const Food = () => {
  const { data: food, isLoading } = useQuery({
    queryKey: ["foodData"],
    queryFn: fetchFoodData,
  });

  if (isLoading) return <Loader />;

  return (
    <div className="my-28">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mt-12 mb-8">Donation Food</h1>
        <div className="flex justify-center items-center">
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
            {food?.slice(0, 6)?.map((item, index) => (
              // Wrap each item in motion.div for animation
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }} // Initial state
                animate={{ opacity: 1, y: 0 }} // Final state (visible, original position)
                transition={{ delay: index * 0.1, duration: 0.5 }} // Delay and duration per item
              >
                <div className="w-full max-w-lg overflow-hidden bg-gray-100 rounded-lg shadow-lg">
                  <div className="max-w-full rounded-md shadow-md overflow-hidden">
                    <img
                      className="object-cover object-center w-full h-64 lg:h-56 transform transition-transform duration-300 hover:scale-105"
                      src={item.foodImageURL}
                      alt="food"
                    />
                    <div className="p-4">
                      <h2 className="text-lg font-semibold mb-2">{item.foodName}</h2>
                      <div className="flex items-center mb-2">
                        <img
                          src={item?.donator?.donatorImageURL}
                          alt="donator"
                          className="w-8 h-8 rounded-full mr-2"
                        />
                        <span className="text-gray-700 text-sm">
                          {item?.donator?.donatorName}
                        </span>
                        <span>{" - "}Donator</span>
                      </div>
                      <p className="text-gray-700 text-sm mb-2">Quantity: {item.foodQuantity}</p>
                      <p className="text-gray-700 text-sm mb-2">Location: {item.pickupLocation}</p>
                      <p className="text-gray-700 text-sm mb-2">
                        Expiry Date: {new Date(item.expiryDateTime).toLocaleDateString()}
                      </p>
                      <p title={item.additionalNotes} className="text-gray-700 text-sm mb-2">
                        Additional Notes: {item.additionalNotes.slice(0, 15)}...
                      </p>
                      <div className="mt-2 w-full text-center">
                        <Link
                          to={`/foodDetails/${item._id}`}
                          className="block bg-[#4682B4] hover:bg-[#4169E1] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-sm"
                        >
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Food;
