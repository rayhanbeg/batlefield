import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";
import Loader from "../components/Loader";

const MyFoodRequest = () => {
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
    <div className="flex justify-center items-center mx-[4%] ">
     <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800 my-24 sm:my-24 md:my-28 lg:my-32">
    <h2 className="mb-8 text-2xl font-semibold leading-tight text-center">My Requested Food</h2>
    <div className="overflow-x-auto">
        <table className="min-w-full text-xs">
            <colgroup>
                <col />
                <col />
                <col />
                <col />
                <col />
                <col className="" />
            </colgroup>
            <thead className="dark:bg-gray-300">
                <tr className="text-left">
                    
                    <th className="p-3">Donar Name</th>
                    <th className="p-3">Pickup Location</th>
                    <th className="p-3">Expire Date</th>
                    <th className="p-3">Request Date</th>
                    
                </tr>
            </thead>
            {food?.map((item, index) => <tbody key={index}>
                <tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
                    <td className="p-3">
                        <p>{item?.donatorName}</p>
                    </td>
                    <td className="p-3">
                        <p>{item?.pickupLocation}</p>
                    </td>
                    <td className="p-3">
                        <p>{item?.expiryDateTime}</p>
                       
                    </td>
                    <td className="p-3">
                        <p>{item?.requestedDate}</p>
                        
                    </td>
                </tr>
               
            </tbody>)}
        </table>
    </div>
</div>

    </div>
  );
};

export default MyFoodRequest;