import axios from "axios";
import { useEffect, useState } from "react";

const Food = () => {
    const [food, setFood] = useState([])

    useEffect(() => {
        const getData = async () => {
            const { data } = await axios(`http://localhost:5000/food`)
            setFood(data)
        }
        getData()
    } ,[])
console.log(food);

    return (
        <div>
            <h1>Food: {food?.length}</h1>
        </div>
    );
};

export default Food;