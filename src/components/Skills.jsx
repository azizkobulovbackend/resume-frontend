import { Element } from 'react-scroll';

const Skills = () => {
  return (
    <Element name="skills" className="section bg-white text-gray-800">
      <h2 className="text-3xl font-bold mb-4">Skills</h2>
      <ul className="space-y-2">
        <li>⚛️ JavaScript, Typescript, Nodejs</li>
        <li>💅 Nestjs, Express, Postgres, Mongodb</li>
      </ul>
    </Element>
  );
};

export default Skills;
