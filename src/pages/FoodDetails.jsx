import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";
import axios from "axios";

const FoodDetails = () => {
  const [showModal, setShowModal] = useState(false);
  const { id } = useParams();
  const [food, setFood] = useState({});
  const { user } = useContext(AuthContext);
  const [additionalNotes, setAdditionalNotes] = useState("");
  let requestedDate = new Date().toLocaleString();
  const {
    foodName,
    foodImageURL,
    foodQuantity,
    pickupLocation,
    expiryDateTime,
    donator,
  } = food || {};

  useEffect(() => {
    fetch(`http://localhost:5000/foodDetails/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setFood(data);
      });
  }, [id]);

  const handleRequest = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const requestData = {
      foodName,
      foodImageURL,
      foodId: food._id,
      donatorEmail: donator.donatorEmail,
      donatorName: donator.donatorName,
      email:user.email,
      pickupLocation: pickupLocation,
      expiryDateTime: new Date(expiryDateTime).toLocaleDateString(),
      additionalNotes,
      requestedDate,
    };
    console.log(requestData);
    try {
      const { data } = await axios.post(`http://localhost:5000/requestFood`, requestData);
      console.log(data);
      toast.success("Requested Successful!");
      // navigate("/myFood");
    } catch (err) {
      console.log(err);
    }
    // Here you can proceed with sending the data to your backend or perform any other action
    closeModal();
  };

  return (
    <div className="container mx-auto p-4 min-h-[calc(100vh-382px)]">
      <div className="flex flex-col md:flex-row justify-center items-center my-20 md:my-24 lg:my-28 xl:my-32">
        {/* Donor Information */}
        <div className="mb-8 md:mb-0 md:mr-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            Donor Information:
          </h2>
          <div className="flex items-center gap-4">
            <div className="rounded-full overflow-hidden border-4 border-blue-500">
              <img
                className="w-16 h-16 object-cover"
                src={donator?.donatorImageURL}
                alt=""
              />
            </div>
            <div>
              <p className="text-lg font-semibold text-gray-700">
                Donor Name: {donator?.donatorName}
              </p>
              <p className="text-lg text-gray-700">
                Food Pickup Location: {pickupLocation}
              </p>
            </div>
          </div>
        </div>

        {/* Food Details */}
        <div className="md:w-1/2">
          <div className="items-center mb-8 md:mb-0">
            <img
              src={foodImageURL}
              className="w-full h-40 object-cover rounded mb-4 md:mr-4"
              alt="Food"
            />
            <div>
              <p>Food Name: {foodName}</p>
              <p>Food Quantity: {foodQuantity}</p>
              <p>Expired Date/Time: {new Date(expiryDateTime).toLocaleDateString()}</p>
              <button
                className="bg-[#4682B4] hover:bg-[#4169E1] text-white px-4 py-2 rounded mt-2"
                onClick={handleRequest}
              >
                Request
              </button>
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed z-10 inset-0 overflow-y-auto mt-16">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle " aria-hidden="true">
              &#8203;
            </span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <form onSubmit={handleFormSubmit}>
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <h3 className="text-lg font-medium leading-6 text-gray-900 mb-4">
                        Request Form
                      </h3>
                      <div className="mb-4">
                        <p>Food Name: {foodName}</p>
                        <p>Food Image: <img src={foodImageURL} className="w-28 h-20 object-cover rounded" alt="Food Image" /></p>
                        <p>Food Id: {food?._id}</p>
                        <p>Food Donator Email: {donator?.donatorEmail}</p>
                        <p>Food Donator Name: {donator?.donatorName}</p>
                        <p>User Email: {user?.email}</p>
                        <p>Request Date: {requestedDate}</p>
                        <p>Pickup Location: {pickupLocation}</p>
                        <p>Expire Date: {new Date(expiryDateTime).toLocaleDateString()}</p>
                      </div>
                      <input
                        type="text"
                        name="additionalNotes"
                        value={additionalNotes}
                        onChange={(e) => setAdditionalNotes(e.target.value)}
                        className="w-full border border-gray-300 rounded p-2"
                        placeholder="Additional Notes"
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="submit"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Submit Request
                  </button>
                  <button
                    type="button"
                    onClick={closeModal}
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:w-auto sm:text-sm"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FoodDetails;
