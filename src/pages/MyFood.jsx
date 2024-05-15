import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";
import { Link } from "react-router-dom";
import { Zoom } from "react-awesome-reveal";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import Loader from "../components/Loader";

const MyFood = () => {
  const [food, setFood] = useState([]);
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getData();
  }, [user]);
  const getData = async () => {
    const { data } = await axios(`https://server-kappa-gray.vercel.app/foods/${user?.email}`, {withCredentials:true});
    setFood(data);
    setLoading(false)
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
        const { data } = await axios.delete(`https://server-kappa-gray.vercel.app/food/${id}`);
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

  if(loading) return <Loader/>

  return (
    <div className="flex justify-center items-center">
    <div className="mx-[2%] w-full">
      <div className="container my-32">
        <div>
          <div className="mx-auto max-w-screen-lg rounded-b-lg">
            <div className="overflow-x-auto">
              <table className="w-full shadow-lg rounded-lg overflow-hidden">
                <thead className="bg-gray-600 text-white">
                  <tr>
                    <th className="px-2 md:px-4 py-2 md:py-3 text-left font-semibold">Image</th>
                    <th className="px-2 md:px-4 py-2 md:py-3 text-left font-semibold">Location</th>
                    <th className="px-2 md:px-4 py-2 md:py-3 text-left font-semibold">Quantity</th>
                    <th className="px-2 md:px-4 py-2 md:py-3 text-left font-semibold">Description</th>
                    <th className="px-2 md:px-4 py-2 md:py-3 text-left font-semibold">Actions</th>
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
                            className="object-cover object-center w-16 h-16 md:w-20 md:h-20 rounded-md shadow-md hover:shadow-lg transition-shadow duration-300"
                          />
                        </Link>
                      </td>
                      <td className="px-2 md:px-4 py-2">
                        <div className="flex items-center space-x-1 text-gray-500 text-xs md:text-sm truncate">
                          <p>{cart?.pickupLocation}</p>
                        </div>
                      </td>
                      <td className="px-2 md:px-4 py-2 text-xs md:text-sm text-gray-500">{cart?.foodQuantity}</td>
                      <td className="px-2 md:px-4 py-2 text-xs md:text-sm text-gray-500">{cart?.additionalNotes?.slice(0, 50)}...</td>
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
      </div>
    </div>
  </div>
  

  );
};

export default MyFood;
