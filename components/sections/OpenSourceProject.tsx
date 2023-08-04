import React from 'react';
import AnimationContainer from '../utils/AnimationContainer';

const OpenSourceProject = () => {
  const projects = [
    {
      title: 'Parse Server',
      link: 'https://github.com/parse-community/parse-server',
      description:
        'Contributed to rewriting OAuth2 authentication for LinkedIn in Parse Server'
    },
    {
      title: 'Stackoverflow',
      link: 'https://stackoverflow.com/users/1652667/faysal-ahmed',
      description:
        'Answered more than 80 questions related to Javascript, MeteorJS and React. Top 5% contributor on MeteorJS and 23% overall as of Jan-2023'
    },
    {
      title: 'Bootcamp',
      link: '',
      description:
        'Mentored 20+ students in Brac University for 8 sessions which spanned over 2 months on Javascript, Meteor and MongoDB'
    },
    {
      title: 'Ejabberd plugin',
      link: 'https://github.com/faysal515/mod_offline_post',
      description:
        'Built a plugin for Ejabberd to send push notifications to mobile devices using Firebase Cloud Messaging'
    }
  ];

  return (
    <AnimationContainer customClassName="w-full">
      <h2 className="font-bold text-2xl tracking-tight text-white text-center lg:text-start">
        Open Source Projects
      </h2>
      <div className="p-4">
        {projects.map((project, index) => (
          <div key={index} className="my-4">
            <div className="flex justify-between items-center">
              <h2 className="font-bold text-xl text-yellow-200">
                {project.title}
              </h2>
            </div>
            <p className="mt-2 text-base text-white">{project.description}</p>
          </div>
        ))}
      </div>
    </AnimationContainer>
  );
};

export default OpenSourceProject;
