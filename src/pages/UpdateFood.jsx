import { useContext, useState } from "react";
import toast from "react-hot-toast";
import {  useLoaderData, useNavigate, } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import 'react-datepicker/dist/react-datepicker.css';
import axios from "axios";
import ReactDatePicker from "react-datepicker";



const UpdateFood = () => {
    const food = useLoaderData()
    const navigate = useNavigate()
    const { user } = useContext(AuthContext);
    console.log(food);
    const [startDate, setStartDate] = useState(new Date(food?.expiryDateTime) || new Date())
  const handleUpdate = async e => {
    e.preventDefault()
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
        `http://localhost:5000/food/${food._id}`,
        addInfo
      )
      console.log(data)
      toast.success('Food Data Updated Successfully!')
      navigate('/myFood')
    } catch (err) {
      console.log(err)
      toast.error(err.message)
    }
  }


    return (
        <div className="py-28">
<div className="min-h-screen flex items-center justify-center mx-[2%]">
  <div className="bg-white p-8 rounded-lg shadow-md lg:max-w-2xl md:max-w-xl sm:max-w-md w-full">
    <h1 className="text-3xl font-semibold text-center mb-8">
      <span className="text-purple-500">Update</span> Tourists Spot
    </h1>
    <form 
    onSubmit={handleUpdate}
     className="grid grid-cols-2 gap-4">
      <div>
        <label htmlFor="foodName" className="block text-gray-700">
          Food Name:
        </label>
        <input
          type="text"
          id="foodName"
          name="foodName"
          required
          className="form-input mt-1 w-full h-8 rounded-md shadow-sm"
          defaultValue="testing"
        />
      </div>

      <div className="flex items-center space-x-4">
        <img
          src={food?.donator?.donatorImageURL}
         
          className="w-12 h-12 rounded-full"
        />
        <div>
          <p className="text-gray-700 font-medium">Donator: {food?.donator?.donatorName}</p>
          <p className="text-gray-500">Email: {food?.donator?.donatorEmail}</p>
        </div>
      </div>

      <div>
        <label htmlFor="expiryDateTime" className="block text-gray-700">
          Expiry Date Time:
        </label>
        <ReactDatePicker
                className='border p-2 rounded-md'
                selected={startDate}
                onChange={date => setStartDate(date)}
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
          className="form-input mt-1 w-full h-8 rounded-md shadow-sm"
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
          className="form-input mt-1 w-full h-8 rounded-md shadow-sm"
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
          className="form-input mt-1 w-full h-8 rounded-md shadow-sm"
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
          className="form-input mt-1 w-full h-8 rounded-md shadow-sm"
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
          className="form-input mt-1 w-full h-8 rounded-md shadow-sm"
          defaultValue={food?.additionalNotes}
        />
      </div>

      <button
        type="submit"
        className="col-span-2 bg-purple-500 text-white py-2 px-4 rounded-md hover:bg-purple-600 transition duration-300"
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