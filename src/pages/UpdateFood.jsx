import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import ReactDatePicker from "react-datepicker";

const UpdateFood = () => {

    // routes title
    useEffect(() => {
      document.title="FoodUnityHub || UpdateFood"
  }, [])
  
  const food = useLoaderData();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  console.log(food);
  const [startDate, setStartDate] = useState(
    new Date(food?.expiryDateTime) || new Date()
  );
  const handleUpdate = async (e) => {
    e.preventDefault();
    const foodName = e.target.foodName.value;
    const foodImageURL = e.target.foodImageURL.value;
    const donatorEmail = food.donator.donatorEmail;
    const foodQuantity = e.target.foodQuantity.value;
    const pickupLocation = e.target.pickupLocation.value;
    const expiryDateTime = startDate;
    const foodStatus = e.target.foodStatus.value;
    const additionalNotes = e.target.additionalNotes.value;

    const addInfo = {
      foodName,
      foodImageURL,
      foodQuantity,
      pickupLocation,
      expiryDateTime,
      foodStatus,
      additionalNotes,
      donator: {
        donatorEmail,
        donatorName: user?.displayName,
        donatorImageURL: user?.photoURL,
      },
    };
    console.log(addInfo);

    try {
      const { data } = await axios.put(
        `https://server-kappa-gray.vercel.app/food/${food._id}`,
        addInfo
      );
      console.log(data);
      toast.success("Food Data Updated Successfully!");
      navigate("/myFood");
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };

  return (
    <div className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28">
    <div className="flex items-center justify-center mx-auto max-w-4xl">
      <div className=" p-10 lg:p-12 rounded-lg w-full">
        <div className="text-center text-3xl lg:text-4xl mb-8 lg:mb-12 font-bold">
          <h1 className="p-4">Update Your Food</h1>
        </div>
        <form onSubmit={handleUpdate} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="foodName" className="block text-gray-700">
              Food Name:
            </label>
            <input
              type="text"
              id="foodName"
              name="foodName"
              required
              className="form-input mt-1 w-full h-10 lg:h-12 rounded-md shadow-sm"
              defaultValue={food?.foodName}
            />
          </div>
  
          <div className="flex items-center space-x-4">
            <img
              src={food?.donator?.donatorImageURL}
              className="w-12 h-12 lg:w-14 lg:h-14 rounded-full"
            />
            <div>
              <p className="text-gray-700 font-medium">
                Donator: {food?.donator?.donatorName}
              </p>
              <p
                title={food?.donator?.donatorEmail}
                className="text-gray-500"
              >
                Email: {food?.donator?.donatorEmail.slice(0, 9)}...
              </p>
            </div>
          </div>
  
          <div>
            <label htmlFor="expiryDateTime" className="block text-gray-700">
              Expiry Date Time:
            </label>
            <ReactDatePicker
              className="border p-2 rounded-md"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </div>
  
          <div>
            <label htmlFor="foodImageURL" className="block text-gray-700">
              Food Image URL:
            </label>
            <input
              type="url"
              id="foodImageURL"
              name="foodImageURL"
              required
              className="form-input mt-1 w-full h-10 lg:h-12 rounded-md shadow-sm"
              defaultValue={food.foodImageURL}
            />
          </div>
  
          <div>
            <label htmlFor="foodQuantity" className="block text-gray-700">
              Food Quantity:
            </label>
            <input
              type="text"
              id="foodQuantity"
              name="foodQuantity"
              required
              className="form-input mt-1 w-full h-10 lg:h-12 rounded-md shadow-sm"
              defaultValue={food.foodQuantity}
            />
          </div>
  
          <div>
            <label htmlFor="foodStatus" className="block text-gray-700">
              Food Status:
            </label>
            <input
              type="text"
              id="foodStatus"
              name="foodStatus"
              required
              className="form-input mt-1 w-full h-10 lg:h-12 rounded-md shadow-sm"
              defaultValue={food?.foodStatus}
            />
          </div>
  
          <div>
            <label htmlFor="pickupLocation" className="block text-gray-700">
              Pickup Location:
            </label>
            <input
              type="text"
              id="pickupLocation"
              name="pickupLocation"
              required
              className="form-input mt-1 w-full h-10 lg:h-12 rounded-md shadow-sm"
              defaultValue={food?.pickupLocation}
            />
          </div>
  
          <div>
            <label htmlFor="additionalNotes" className="block text-gray-700">
              Additional Notes:
            </label>
            <input
              type="text"
              id="additionalNotes"
              name="additionalNotes"
              required
              className="form-input mt-1 w-full h-10 lg:h-12 rounded-md shadow-sm"
              defaultValue={food?.additionalNotes}
            />
          </div>
  
          <button
            type="submit"
            className="col-span-1 md:col-span-2 lg:col-span-3 bg-[#4682B4] hover:bg-[#4a67bc] text-white py-3 px-6 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 w-full"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  </div>
  
  );
};

export default UpdateFood;
