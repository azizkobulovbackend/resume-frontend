import { Element } from 'react-scroll';

const About = () => {
  return (
    <Element name="about" className="section bg-white text-gray-800">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="text-lg max-w-xl mx-auto">
        I’m a passionate backend developer with experience in backend technologies like Nodejs, Nestjs, Prisma and modern technologies.
      </p>
    </Element>
  );
};

export default About;