import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { Zoom } from "react-awesome-reveal";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const MyFood = () => {
  const [food, setFood] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    getData();
  }, [user]);
  const getData = async () => {
    const { data } = await axios(`http://localhost:5000/foods/${user?.email}`);
    setFood(data);
  };
  console.log(food);

  // delete
  const handleDelete = async (id) => {
    const confirmation = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (confirmation.isConfirmed) {
      try {
        const { data } = await axios.delete(`http://localhost:5000/food/${id}`);
        console.log(data);
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });

        // Refresh UI
        getData();
      } catch (err) {
        console.log(err.message);
        toast.error(err.message);
      }
    }
  };

  return (
    <div className="py-28">
      <div className="container mx-[2%] my-28">
        <Zoom>
          <div className="">
            <div className=" mx-auto max-w-screen-lg shadow-md border-b-2 border-purple-400 rounded-b-lg">
              <div className="overflow-x-auto">
                <table className="w-full md:w-auto shadow-lg rounded-lg overflow-hidden">
                  <thead className="bg-gray-600 text-white">
                    <tr>
                      <th className="px-4 md:px-6 py-3 text-left font-semibold">
                        Image
                      </th>
                      <th className="px-4 md:px-6 py-3 text-left font-semibold">
                        Location
                      </th>
                      <th className="px-4 md:px-6 py-3 text-left font-semibold">
                        Quantity
                      </th>
                      <th className="px-4 md:px-6 py-3 text-left font-semibold">
                        Description
                      </th>
                      <th className="px-4 md:px-6 py-3 text-left font-semibold">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {food?.map((cart, index) => (
                      <tr key={index} className="text-gray-700">
                        <td className="px-2 md:px-4 py-2 whitespace-nowrap">
                          <Link to={`/cartDetails/${cart._id}`}>
                            <img
                              src={cart?.foodImageURL}
                              alt=""
                              className="object-cover object-center w-20 h-20 md:w-24 md:h-24 rounded-md shadow-md hover:shadow-lg transition-shadow duration-300"
                            />
                          </Link>
                        </td>
                        <td className="px-2 md:px-4 py-2">
                          <div className="flex items-center space-x-1 text-gray-500 text-xs md:text-sm truncate">
                            <FaLocationDot className="text-purple-500" />
                            <p>{cart?.pickupLocation}</p>
                          </div>
                        </td>
                        <td className="px-2 md:px-4 py-2 text-xs text-gray-500 md:text-sm">
                          {cart?.foodQuantity}
                        </td>
                        <td className="px-2 md:px-4 py-2 text-xs md:text-sm text-gray-500">
                          {cart?.additionalNotes?.slice(0, 50)}...
                        </td>
                        <td className="px-2 md:px-4 py-2">
                          <div className="flex space-x-1">
                            <Link to={`/updateFood/${cart._id}`}>
                              <button className="px-2 md:px-3 py-1 text-white text-xs md:text-sm font-semibold bg-blue-500 rounded-md hover:bg-blue-600 transition-colors duration-300">
                                Update
                              </button>
                            </Link>
                            <button
                              onClick={() => handleDelete(cart._id)}
                              className="px-2 md:px-3 py-1 text-white text-xs md:text-sm font-semibold bg-red-500 rounded-md hover:bg-red-600 transition-colors duration-300"
                            >
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </Zoom>
      </div>
    </div>
  );
};

export default MyFood;
