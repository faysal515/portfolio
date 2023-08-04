import ContactMe from '../content/ContactMe';
import CurrentTimeLineExp from '../content/CurrentTimeLineExp';
import Hero from '../content/Hero';
import SectionContainer from '../utils/SectionContainer';
import OpenSourceProject from './OpenSourceProject';
import {
  FaStackOverflow,
  FaLinkedin,
  FaGithub,
  FaWhatsapp
} from 'react-icons/fa6';

import { links } from '../data';

const SocialLinks = ({ links }: any) => {
  return (
    <div className="flex flex-row w-full text-white space-x-4 sm:justify-start justify-center">
      <a href={links.whatsapp} target="_blank" rel="noreferrer">
        <FaWhatsapp size={32} title="whatsapp" />
      </a>
      <a href={links.stackoverlow} target="_blank" rel="noreferrer">
        <FaStackOverflow size={32} />
      </a>
      <a href={links.linkedin} target="_blank" rel="noreferrer">
        <FaLinkedin size={32} />
      </a>
      <a href={links.github} target="_blank" rel="noreferrer">
        <FaGithub size={32} />
      </a>
    </div>
  );
};

const HomeSection = () => {
  return (
    <SectionContainer>
      <Hero />
      <SocialLinks links={links} />
      <CurrentTimeLineExp />
      <OpenSourceProject />
      <ContactMe />
    </SectionContainer>
  );
};

export default HomeSection;
