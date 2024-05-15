import Lottie from "lottie-react";
import errorPage from "../assets/404.json";
import { Link } from "react-router-dom";
import logo from "../assets/image/webLogo.png"

const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center container mx-auto ">
  <div className="mt-6 w-[300px] lg:w-96 h-full">
    <Lottie animationData={errorPage} />
  </div>
  <div>
    <section className="flex items-center h-full ">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto ">
        <div className="max-w-md text-center">
          <p className="text-2xl font-semibold md:text-3xl">
            Sorry, we couldn't find this page.
          </p>
          <p className="mt-4">
            But don't worry, you can find plenty of other things on our homepage.
          </p>
          <h1 className="my-2 flex justify-center items-center mx-auto">
            <img className="w-auto h-5 bg-black" src={logo} alt="" />
          </h1>
          {/* Copyright notice, contact information, social media links, address, etc. */}
          <div className=" text-sm text-gray-600">
            <p>© 2024 Food Unity Hub. All rights reserved.</p>
            <p>Contact: example@example.com</p>
            <p>Follow us on social media:</p>
            <div className="flex space-x-4 mt-2 justify-center items-center mx-auto">
              <a target="blank" href="https://www.facebook.com/rayhan4030" className="text-blue-500 hover:text-blue-700">Facebook</a>
              <a target="blank" href="#" className="text-blue-500 hover:text-blue-700">Twitter</a>
              <a target="blank" href="https://www.instagram.com/n.h._rafi/" className="text-blue-500 hover:text-blue-700">Instagram</a>
            </div>
            <p>123 Dhakkhinkhan, Dhaka, Bangladesh</p>
          </div>

         <div className="mt-4">
         <Link to="/"
            rel="noopener noreferrer"
            href="#"
            className="px-8 py-3 text-white font-semibold rounded bg-[#4682B4] hover:bg-[#4169E1]"
          >
            Back to homepage
          </Link>
         </div>
        </div>
      </div>
    </section>
  </div>
</div>

  );
};

export default ErrorPage;
