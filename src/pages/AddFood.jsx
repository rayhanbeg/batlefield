
const AddFood = () => {
    return (
        <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-8 text-center"><span className="bg-[hsl(207,44%,49%)] text-white px-3 rounded-md">Add</span> Food</h1>
        <form className="grid grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="col-span-2">
                <label htmlFor="foodName" className="block text-gray-700 font-semibold mb-2">Food Name</label>
                <input type="text" id="foodName" name="foodName" className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 w-full" required />
            </div>
    
            <div>
                <label htmlFor="foodImage" className="block text-gray-700 font-semibold mb-2">Food Image</label>
                <div className="flex items-center justify-between border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500">
                    <input type="file" id="foodImage" name="foodImage" className="hidden" accept="image/*" required />
                    <label htmlFor="foodImage" className="cursor-pointer text-blue-500 hover:text-blue-700">Choose Image</label>
                    <span className="text-gray-500">No file chosen</span>
                </div>
            </div>
    
            <div>
                <label htmlFor="foodQuantity" className="block text-gray-700 font-semibold mb-2">Food Quantity</label>
                <input type="number" id="foodQuantity" name="foodQuantity" className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 w-full" required />
            </div>
    
            <div>
                <label htmlFor="pickupLocation" className="block text-gray-700 font-semibold mb-2">Pickup Location</label>
                <input type="text" id="pickupLocation" name="pickupLocation" className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 w-full" required />
            </div>
    
            <div>
                <label htmlFor="expiryDateTime" className="block text-gray-700 font-semibold mb-2">Expiry Date/Time</label>
                <input type="datetime-local" id="expiryDateTime" name="expiryDateTime" className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 w-full" />
            </div>
    
            <div>
                <label htmlFor="additionalNotes" className="block text-gray-700 font-semibold mb-2">Additional Notes</label>
                <textarea id="additionalNotes" name="additionalNotes" rows="4" className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 w-full"></textarea>
            </div>
    
            <div>
                <label htmlFor="donatorImage" className="block text-gray-700 font-semibold mb-2">Donator Image</label>
                {/* Add logic to display logged-in user's image */}
                <input type="file" id="donatorImage" name="donatorImage" className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 w-full" accept="image/*" />
            </div>
    
            <div>
                <label htmlFor="donatorName" className="block text-gray-700 font-semibold mb-2">Donator Name</label>
                {/* Add logic to display logged-in user's name */}
                <input type="text" id="donatorName" name="donatorName" className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 w-full" value="John Doe" readOnly />
            </div>
    
            <div>
                <label htmlFor="donatorEmail" className="block text-gray-700 font-semibold mb-2">Donator Email</label>
                {/* Add logic to display logged-in user's email */}
                <input type="email" id="donatorEmail" name="donatorEmail" className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 w-full" value="john@example.com" readOnly />
            </div>
    
            <div className="col-span-2">
                <label htmlFor="foodStatus" className="block text-gray-700 font-semibold mb-2">Food Status</label>
                <select id="foodStatus" name="foodStatus" className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 w-full">
                    <option value="available">Available</option>
                    <option value="unavailable">Unavailable</option>
                </select>
            </div>
    
            <button type="submit" className="col-span-2 bg-[#4682B4] hover:bg-[#4a67bc] text-white py-3 px-6 rounded-md  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 w-full">Add</button>
        </form>
    </div>
    
    );
};

export default AddFood;
