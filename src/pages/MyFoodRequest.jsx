import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";
import Loader from "../components/Loader";

const MyFoodRequest = () => {

      // routes title
  useEffect(() => {
    document.title="FoodUnityHub || MyFoodRequest"
}, [])


  const [food, setFood] = useState();
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getData();
  }, [user]);
  const getData = async () => {
    const { data } = await axios(`https://server-kappa-gray.vercel.app/myRequest/${user?.email}`, {withCredentials: true});
    setFood(data);
    setLoading(false)
  };
  console.log(food);

  if(loading) return <Loader/>
  return (
  <div className="py-14 sm:py-20 md:py-24 lg:py-28">
      <div className="flex justify-center items-center mx-auto md:mx-[4%]">
    <div className="container p-4 sm:p-6 mx-auto dark:text-gray-800 my-8 sm:my-10 md:my-12 lg:my-16 bg-white rounded-lg shadow-md">
      <h2 className="mb-6 text-lg font-semibold leading-tight text-center">My Requested Food</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <colgroup>
            <col />
            <col />
            <col />
            <col />
          </colgroup>
          <thead className="bg-gray-200 dark:bg-gray-300">
            <tr className="text-left">
              <th className="p-3">Donor Name</th>
              <th className="p-3">Pickup Location</th>
              <th className="p-3">Expire Date</th>
              <th className="p-3">Request Date</th>
            </tr>
          </thead>
          <tbody>
            {food?.map((item, index) => (
              <tr key={index} className="border-b border-opacity-20 dark:border-gray-300">
                <td className="p-3">{item?.donatorName}</td>
                <td className="p-3">{item?.pickupLocation}</td>
                <td className="p-3">{item?.expiryDateTime}</td>
                <td className="p-3">{item?.requestedDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
  </div>
  
  );
};

export default MyFoodRequest;