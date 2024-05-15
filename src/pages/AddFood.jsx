import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddFood = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate()
  const handleAdd = async (e) => {
    e.preventDefault();
    const foodName = e.target.foodName.value;
    const foodImageURL = e.target.foodImageURL.value;
    const email = user.email;
    const donatorEmail = e.target.donatorEmail.value;
    const foodQuantity = e.target.foodQuantity.value;
    const pickupLocation = e.target.pickupLocation.value;
    const expiryDateTime = e.target.expiryDateTime.value;
    const foodStatus = e.target.foodStatus.value;
    const additionalNotes = e.target.additionalNotes.value;

    const addInfo = {
      foodName,
      foodImageURL,
      email,
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
      const { data } = await axios.post(`https://server-kappa-gray.vercel.app/food`, addInfo);
      console.log(data);
      toast.success("Food Added Successfully!");
      navigate("/myFood");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container mx-auto py-20 md:py-24 lg:py-28">
      <h1 className="text-3xl font-bold mb-8 text-center">
        <span className="bg-[hsl(207,44%,49%)] text-white px-3 rounded-md">
          Add
        </span>{" "}
        Food
      </h1>
      <form
        onSubmit={handleAdd}
        className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto"
      >
        {/* Food Name */}
        <div className="col-span-1 md:col-span-2 lg:col-span-3">
          <label
            htmlFor="foodName"
            className="block text-gray-700 font-semibold mb-2"
          >
            Food Name
          </label>
          <input
            type="text"
            id="foodName"
            name="foodName"
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 w-full"
            required
          />
        </div>
        
        {/* Food Image URL */}
        <div className="col-span-1 md:col-span-2">
          <label
            htmlFor="foodImageURL"
            className="block text-gray-700 font-semibold mb-2"
          >
            Food Image URL
          </label>
          <input
            type="text"
            id="foodImageURL"
            name="foodImageURL"
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 w-full"
            required
          />
        </div>

        {/* Food Quantity */}
        <div className="col-span-1 md:col-span-1">
          <label
            htmlFor="foodQuantity"
            className="block text-gray-700 font-semibold mb-2"
          >
            Food Quantity
          </label>
          <input
            type="number"
            id="foodQuantity"
            name="foodQuantity"
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 w-full"
            required
          />
        </div>

        {/* Pickup Location */}
        <div className="col-span-1 md:col-span-1">
          <label
            htmlFor="pickupLocation"
            className="block text-gray-700 font-semibold mb-2"
          >
            Pickup Location
          </label>
          <input
            type="text"
            id="pickupLocation"
            name="pickupLocation"
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 w-full"
            required
          />
        </div>

        {/* Expiry Date/Time */}
        <div className="col-span-1">
          <label
            htmlFor="expiryDateTime"
            className="block text-gray-700 font-semibold mb-2"
          >
            Expiry Date/Time
          </label>
          <input
            type="datetime-local"
            id="expiryDateTime"
            name="expiryDateTime"
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 w-full"
          />
        </div>

        {/* Additional Notes */}
        <div className="col-span-1">
          <label
            htmlFor="additionalNotes"
            className="block text-gray-700 font-semibold mb-2"
          >
            Additional Notes
          </label>
          <textarea
            id="additionalNotes"
            name="additionalNotes"
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 w-full h-24"
          ></textarea>
        </div>

        {/* Donator Name */}
        <div className="col-span-1">
          <label
            htmlFor="donatorName"
            className="block text-gray-700 font-semibold mb-2"
          >
            Donator Name
          </label>
          <input
            type="text"
            id="donatorName"
            name="donatorName"
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 w-full"
            value={user ? user.displayName : " "}
            readOnly
          />
        </div>

        {/* Donator Email */}
        <div className="col-span-1">
          <label
            htmlFor="donatorEmail"
            className="block text-gray-700 font-semibold mb-2"
          >
            Donator Email
          </label>
          <input
            type="email"
            id="donatorEmail"
            name="donatorEmail"
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 w-full"
            value={user ? user.email : " "}
            readOnly
          />
        </div>

        {/* Donator Photo */}
        <div className="col-span-1">
          <label
            htmlFor="donatorPhotoURL"
            className="block text-gray-700 font-semibold mb-2"
          >
            Donator Photo
          </label>
          <img
            src={user ? user.photoURL : ""}
            alt="Donator"
            className="w-16 h-16 rounded-full mb-2 mx-auto"
          />
        </div>

        {/* Food Status */}
        <div className="col-span-1">
          <label
            htmlFor="foodStatus"
            className="block text-gray-700 font-semibold mb-2"
          >
            Food Status
          </label>
          <select
            id="foodStatus"
            name="foodStatus"
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 w-full"
          >
            <option value="available">Available</option>
            <option value="unavailable">Unavailable</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="col-span-1 md:col-span-2 lg:col-span-3 bg-[#4682B4] hover:bg-[#4a67bc] text-white py-3 px-6 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 w-full"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddFood;
