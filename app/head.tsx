'use client';

import { usePathname } from 'next/navigation';

const Head = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const pathname = usePathname() as string;

  const titleFixedToShow =
    pathname.slice(1).charAt(0).toUpperCase() + pathname.slice(2);

  const meta = {
    title: `Faysal Ahmed - Lead Software Engineer`,
    description: `Seasoned Software developer having a decade of experince delivery software for startups`,
    keywords: 'full stack developer, software consultant, solutions architect',
    type: 'website'
  };

  return (
    <>
      <title>{meta.title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="follow, index" />
      <meta content={meta.description} name="description" />
      <meta name="keywords" content={meta.keywords} />
      <link rel="canonical" href={`https://faysal515.dev${pathname}`} />
      <link rel="me" href="mailto:faysal515.ae@gmail.com" />
      <meta property="og:type" content={meta.type} />
      <meta property="og:site_name" content="Faysal Ahmed" />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
    </>
  );
};

export default Head;
