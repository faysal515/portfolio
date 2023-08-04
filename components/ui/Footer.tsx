import Link from 'next/link';
import AnimationContainer from '../utils/AnimationContainer';
import ExternalLink from './ExternalLink';

const Footer = () => {
  const linksData = [
    {
      href: '/',
      svgPath: 'M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z',
      label: 'Home'
    },
  ];

  const externalLinksData = [
    {
      href: 'https://github.com/jeandv',
      svgPath: 'M4.25 2A2.25 2.25 0 002 4.25v11.5A2.25 2.25 0 004.25 18h11.5A2.25 2.25 0 0018 15.75V4.25A2.25 2.25 0 0015.75 2H4.25zm4.03 6.28a.75.75 0 00-1.06-1.06L4.97 9.47a.75.75 0 000 1.06l2.25 2.25a.75.75 0 001.06-1.06L6.56 10l1.72-1.72zm4.5-1.06a.75.75 0 10-1.06 1.06L13.44 10l-1.72 1.72a.75.75 0 101.06 1.06l2.25-2.25a.75.75 0 000-1.06l-2.25-2.25z',
      label: 'GitHub'
    },
  ];

  return (
    <footer className='w-full lg:min-w-xs lg:max-w-screen-md flex flex-col justify-center items-center mx-auto'>

      <hr className='w-full border-1 border-gray-800 mb-8' />

      <AnimationContainer customClassName='w-full max-w-2xl grid place-items-center grid-cols-3 gap-1 lg:gap-4 pb-8 sm:grid-cols-3 mx-3'>

        <div className='flex flex-col space-y-4'>
          {linksData.map(({href, svgPath, label}) => (
            <Link
              key={href}
              href={href}
              className='flex items-center gap-2 text-gray-500 hover:text-gray-600 transition ease'
            >
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' className='w-5 h-5'>
                <path fillRule='evenodd' d={svgPath} clipRule='evenodd' />
              </svg>
              {label}
            </Link>
          ))}
        </div>

        <div className='flex flex-col space-y-4'>
          {externalLinksData.map(({href, svgPath, label}) => (
            <ExternalLink
              key={href}
              href={href}
            >
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' className='w-5 h-5'>
                <path fillRule='evenodd' d={svgPath} clipRule='evenodd' />
              </svg>
              {label}
            </ExternalLink>
          ))}
        </div>
      </AnimationContainer>
    </footer>
  );
};



export default Footer;