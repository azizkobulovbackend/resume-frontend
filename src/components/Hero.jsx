import { Element, Link } from 'react-scroll';

const Hero = () => {
  return (
    <Element name="hero" className="hero">
      <div className="text-center max-w-2xl px-6 mx-auto py-24">
        <h1 className="text-5xl font-extrabold mb-4">
          Hello, I’m <span className="text-purple-300">Aziz</span>
        </h1>
        <p className="text-xl mb-6">
          A passionate Backend Developer with a knack for creating efficient and scalable applications. I specialize in Node.js, Postgres, MongoDb, Prisma
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="/Kobulov Azizbek.pdf"
            className="bg-purple-600 hover:bg-purple-500 px-6 py-3 rounded-lg text-white font-medium shadow-lg transition"
            download
          >
            Download Resume
          </a>
          <a
            href='https://t.me/azizkobul'
            to="contact"
            smooth={true}
            duration={500}
            className="border border-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-900 transition cursor-pointer"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Scroll arrow using react-scroll */}
      <div className="scroll-arrow">
        <Link
          to="about"
          smooth={true}
          duration={500}
          className="text-white text-2xl cursor-pointer"
        >
          &#8595;
        </Link>
      </div>
    </Element>
  );
};

export default Hero;
