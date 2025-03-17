import ProgrammingImg from "./assets/programming.jpeg";
import htmlImg from "./assets/technologies/html.png";
import cssImg from "./assets/technologies/css3.png";
import jsImg from "./assets/technologies/js.webp";
import mysqlImg from "./assets/technologies/mysql.png";
import nodeImg from "./assets/technologies/nodejs.png";
import reactImg from "./assets/technologies/react.webp";
import Card from "./components/Card";
import Layout from "./components/Layout";
import HeroSection from "./components/HeroSection";

const technologies = [htmlImg, cssImg, jsImg, mysqlImg, nodeImg, reactImg];

const heroSection = {
  title: "Gustavo Rodrigues",
  role: "Specialist in React + TypeScript",
  contact: "Contact Me",
};

function App() {
  //fetch API
  return (
    <main className="px-4 text-gray-900 lg:px-20">
      <Layout>
        <HeroSection content={heroSection} />
        <section id="about" className="text-center">
          <h3 className="text-3xl font-bold">About me</h3>
          <div className="grid lg:grid-cols-2">
            <div className="flex justify-center mt-8">
              <img
                className="h-40 rounded-sm"
                src={ProgrammingImg}
                alt="programming"
              />
            </div>
            <div>
              <p className="mt-4 text-lg lg:text-justify">
                Hi, I’m Gustavo Rodrigues, a Brazilian full-stack developer with
                over 6 years of experience. I specialize in building
                high-quality, scalable software products, taking care of
                everything from conception to deployment across all application
                layers.
              </p>
              <p className="mt-4 text-lg lg:text-justify">
                I’m passionate about sharing knowledge and have had the
                opportunity to deliver talks on programming, teach in-person
                courses on JavaScript, Typescript, React, and Node.js, and
                mentor developers who are just starting their careers. Helping
                others grow and succeed in their tech journeys is something I
                deeply enjoy.
              </p>
            </div>
          </div>
        </section>

        <section className="text-center py-12">
          <h3 className="text-3xl font-bold">My Tech Stack</h3>
          <p className="text-lg">
            Technologies I’ve been working with recently
          </p>
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-3 justify-items-center mt-6">
            {technologies.map((technology, key) => (
              <img
                className="w-22 h-18 object-contain"
                key={`technology-${key}`}
                src={technology}
                alt={`img-${key}`}
              />
            ))}
          </div>
        </section>

        <section>
          <h3 className="text-3xl font-bold text-center mb-4">Projects</h3>
          <div className="grid  md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-6">
            {[1, 2, 3, 4, 5, 6].map((project) => (
              <Card key={`project-${project}`} />
            ))}
          </div>
        </section>
      </Layout>
    </main>
  );
}

export default App;
