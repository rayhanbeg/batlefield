import axios from "axios";
import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import Loader from "../components/Loader";
import { Link } from "react-router-dom";
import { motion, useScroll } from "framer-motion"



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
       <div className="container mx-auto flex justify-center py-28">
        <div className="max-w-4xl">
        <div className="text-center lg:text-3xl mt-12 font-bold sm:font-bold lg:font-semibold">
                <h1 className="p-4 ">Available Food</h1>
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
            {sortedAvailable.map((item, index) => (
                <Fade key={index} delay={index * 30} direction="left">
                    <div  className="w-full max-w-sm sm:max-w-md overflow-hidden bg-gray-100 rounded-lg shadow-lg">
                  <div className="max-w-md rounded-md shadow-md overflow-hidden">
                    <img className="object-cover object-center w-full h-full sm:h-56 transform transition-transform duration-300 hover:scale-105" src={item.foodImageURL} alt="food" />
                    <div className="p-4">
                      <h2 className="text-lg font-semibold mb-2">{item.foodName}</h2>
                      <div className="flex items-center mb-2">
                        <img src={item?.donator?.donatorImageURL} alt="donator" className="w-8 h-8 rounded-full mr-2" />
                        <span className="text-gray-700 text-sm">{item?.donator?.donatorName}</span>
                        <span>{" - "}Donator</span>
                      </div>
                      <p className="text-gray-700 text-sm mb-2">Quantity: {item.foodQuantity}</p>
                      <p className="text-gray-700 text-sm mb-2">Location: {item.pickupLocation}</p>
                      <p className="text-gray-700 text-sm mb-2">Expiry Date: {new Date(item.expiryDateTime).toLocaleDateString()}</p>
                      <p className="text-gray-700 text-sm mb-2">Additional Notes: {item.additionalNotes.slice(0, 20)}</p>
                      <div className="mt-2 w-full text-center">
                        <Link to={`/foodDetails/${item._id}`} className="block bg-[#4682B4] hover:bg-[#4169E1] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-sm">
                          View Details
                        </Link>
                      </div>
                    </div>
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
