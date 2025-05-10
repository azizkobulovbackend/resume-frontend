import { Element } from 'react-scroll';
import agrobankLogo from '../assets/agrobank.jpg'; // Assuming the logo is in the assets folder

const Experience = () => {
  return (
    <Element name="experience" className="section bg-gray-100 text-gray-800">
      <h2 className="text-3xl font-bold mb-4">Experience</h2>
      <ul className="experience-list space-y-4">
        <li className="experience-item flex items-center space-x-4">
          <img
            src={agrobankLogo}
            alt="Agrobank Logo"
            className="experience-logo"
          />
          <span>Backend Developer at Agrobank</span>
        </li>
      </ul>
    </Element>
  );
};

export default Experience;