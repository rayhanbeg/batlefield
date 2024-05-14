import Lottie from "lottie-react";
import errorPage from "../assets/404.json";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center container mx-auto ">
      <div className="mt-12 w-96 h-full">
        <Lottie animationData={errorPage} />
      </div>
      <div>
        <section className="flex items-center h-full ">
          <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
            <div className="max-w-md text-center">
              <p className="text-2xl font-semibold md:text-3xl">
                Sorry, we couldn't find this page.
              </p>
              <p className="mt-4 mb-8">
                But dont worry, you can find plenty of other things on our
                homepage.
              </p>
              <Link to="/"
                rel="noopener noreferrer"
                href="#"
                className="px-8 py-3 text-white font-semibold rounded bg-[#4682B4] hover:bg-[#4169E1]"
              >
                Back to homepage
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ErrorPage;
