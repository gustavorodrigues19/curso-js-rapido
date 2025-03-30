import ProfileImg from "../assets/profile.jpeg";

export default function HeroSection({ content: { title, role, contact } }) {
  return (
    <header className=" text-center p-12">
      <div className="grid lg:grid-cols-2 lg:min-h-6/12 lg:mt-8">
        <div className="flex flex-col gap-4 justify-center items-center lg:items-start">
          <h2 className="text-4xl font-bold">{title}</h2>
          <h3 className="text-2xl text-blue-600">{role}</h3>
          <img
            className="w-58 rounded-full md:hidden"
            src={ProfileImg}
            alt="Gustavo"
          />
          <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg text-xl">
            {contact}
          </button>
        </div>
        <div>
          <img
            className="w-58 rounded-full hidden md:inline border-2 border-blue-600"
            src={ProfileImg}
            alt="Gustavo"
          />
        </div>
      </div>
    </header>
  );
}
