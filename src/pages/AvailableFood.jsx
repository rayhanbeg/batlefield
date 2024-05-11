import axios from "axios";
import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { FaLocationDot } from "react-icons/fa6";
import Loader from "../components/Loader";
import { Link } from "react-router-dom";




const AvailableFood = () => {
  // const {user} = useContext(AuthContext)
  const [available, setAvailable] = useState([]);
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState()
  const [sortedAvailable, setSortedAvailable] = useState([]);
  const [sortBy, setSortBy] = useState('newest');



  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(`http://localhost:5000/food/foodStatus`);
      setAvailable(data);
      setSortedAvailable([...data])
      setLoading(false)
    };
    getData();
  }, []);
  console.log(available);

  // search food by name
  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filteredData = available.filter(item => item.foodName.toLowerCase().includes(term));
    setSortedAvailable([...filteredData]);
  }


  // sorting by date
  const handleSortChange = (e) => {
    const value = e.target.value;
    setSortBy(value);
    let sortedData;
    if (value === "newest") {
      sortedData = [...sortedAvailable].sort(
        (a, b) => new Date(b.expiryDateTime) - new Date(a.expiryDateTime)
      );
    } else {
      sortedData = [...sortedAvailable].sort(
        (a, b) => new Date(a.expiryDateTime) - new Date(b.expiryDateTime)
      );
    }
    setSortedAvailable(sortedData);
  };

  if(loading) return <Loader/>

  return <div>
       <div className="container mx-auto flex justify-center">
        <div className="max-w-4xl">
            <div className="text-center lg:text-3xl mt-12 text-[#87CEEB] font-bold sm:font-bold md:font-semibold lg:font-extrabold">
                <h1 className=" pb-4">Available Food</h1>
            </div>
            <div className="mt-10">
          <input
            type="text"
            placeholder="Search by food name..."
            value={searchTerm}
            onChange={handleSearch}
            className="border border-gray-300 rounded-md px-4 py-2 w-full mb-4"
          />
        </div>
        <div className="mt-2 mb-4">
          <select
            value={sortBy}
            onChange={handleSortChange}
            className=" border-2 font-bold py-2 px-4 rounded"
          >
            <option value="newest">Sort by Newest Expiry Date</option>
            <option value="oldest">Sort by Oldest Expiry Date</option>
          </select>
        </div>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
                {sortedAvailable.slice(0, 6).map((item, index) => (
                    <Fade key={index} delay={index * 30} direction="left">
                        <div className="max-w-md rounded-md shadow-md overflow-hidden">
                            <img
                                src={item.foodImage}
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
                                <Link to={`foodDetails/${item._id}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">
                                    View Detail
                                </Link>
                            </div>
                        </div>
                    </Fade>
                ))}
            </div>
        </div>
    </div>
  </div>

};

export default AvailableFood;
