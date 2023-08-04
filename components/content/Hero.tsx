import Image from 'next/image';
import AnimationContainer from '../utils/AnimationContainer';

const info = {
  name: 'Faysal Ahmed',
  subtext: 'Elevating Businesses with All-Round Tech Expertise',
  description: `With a decade of hands-on experience and a strategic mindset, I offer premium consultancy services to help you navigate your software development journey. Whether you need guidance in setting up a robust backend, integrating an intuitive frontend, or building an efficient infrastructure, I bring my expertise to ensure your project's success. My high-end services are a strategic investment in your project's longevity and effectiveness`
};

const Hero = () => {
  return (
    <div className="flex flex-wrap-reverse justify-center w-full md:justify-auto md:grid md:grid-cols-3 text-white">
      <AnimationContainer customClassName="flex md:col-span-2 w-full flex-col items-center justify-between lg:items-start p-0 lg:pr-8">
        <h1 className="mx-auto mb-3 text-3xl font-bold tracking-tight text-center  lg:text-5xl lg:text-start lg:mx-0">
          {info.name}
        </h1>
        <h2 className="flex items-center gap-2 mx-auto mb-8  text-1xl lg:text-1xl lg:mx-0">
          <span className="font-bold text-amber-300">{info.subtext}</span>
        </h2>
        <p className="w-full mx-auto mb-5 text-base text-center  lg:text-start lg:mb-0 lg:mx-0">
          {info.description}
        </p>
      </AnimationContainer>

      <AnimationContainer customClassName="md:self-center relative mb-6 lg:mb-0">
        <Image
          alt="Faysal Ahmed"
          height={300}
          width={300}
          src="/5.png"
          sizes="30vw"
          priority
          className="transition rounded-3xl "
        />
      </AnimationContainer>
    </div>
  );
};

export default Hero;
