import img1 from "../assets/image/team1.jpg"
import img2 from "../assets/image/team2.jpg"
import img3 from "../assets/image/team3.jpg"
import img4 from "../assets/image/team4.jpg"

const OurTeam = () => {
  return (
    <section className="mb-28 flex justify-center items-center mx-auto">
      <div className="container px-6 py-8 mx-auto">
        <h2 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl">Meet Our Volunteers</h2>

        <div className="grid gap-8 mt-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <div className="w-full max-w-xs text-center">
            <img
              className="object-cover object-center w-full h-48 mx-auto rounded-lg"
              src={img1}
              alt="avatar"
            />
            <div className="mt-2">
              <h3 className="text-lg font-medium text-gray-700">Emily Patel</h3>
              <span className="mt-1 font-medium text-gray-600">Nourishment Navigator</span>
            </div>
          </div>

          <div className="w-full max-w-xs text-center">
            <img
              className="object-cover object-center w-full h-48 mx-auto rounded-lg"
              src={img2}
              alt="avatar"
            />
            <div className="mt-2">
              <h3 className="text-lg font-medium text-gray-700">Benjamin Garcia</h3>
              <span className="mt-1 font-medium text-gray-600">Meal Mobilizer</span>
            </div>
          </div>

          <div className="w-full max-w-xs text-center">
            <img
              className="object-cover object-center w-full h-48 mx-auto rounded-lg"
              src={img3}
              alt="avatar"
            />
            <div className="mt-2">
              <h3 className="text-lg font-medium text-gray-700">Food Aid Advocate</h3>
              <span className="mt-1 font-medium text-gray-600">Food Aid Advocate</span>
            </div>
          </div>

          <div className="w-full max-w-xs text-center">
            <img
              className="object-cover object-center w-full h-48 mx-auto rounded-lg"
              src={img4gi}
              alt="avatar"
            />
            <div className="mt-2">
              <h3 className="text-lg font-medium text-gray-700">Jackson Adams</h3>
              <span className="mt-1 font-medium text-gray-600">Community Cuisine Coordinator</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
