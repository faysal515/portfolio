export const info = {
  name: 'Faysal Ahmed',
  subtext: 'Elevating Businesses with All-Round Tech Expertise',
  description: `With a decade of hands-on experience and a strategic mindset, I offer premium consultancy services to help you navigate your software development journey. Whether you need guidance in setting up a robust backend, integrating an intuitive frontend, or building an efficient infrastructure, I bring my expertise to ensure your project's success. My high-end services are a strategic investment in your project's longevity and effectiveness`
};

export const links = {
  email: 'faysal515.ae@gmail.com',
  whatsapp: '+971505352169',
  stackoverlow: 'https://stackoverflow.com/users/1652667/faysal-ahmed',
  github: 'https://github.com/faysal515',
  linkedin: 'https://www.linkedin.com/in/faysal515/'
};

export const experiences = [
  {
    id: 1,
    position: 'Senior/Lead Software Engineer',
    name: 'Momos - B2B SaaS platform for restaurants',
    url: 'https://momos.com',
    period: 'August 2021 - May 2023',
    description: [
      'Owned the full cycle of social media realtime message import, replying and analytics including system design, backend, intregation, e2e testing and monitoring datadog alerts using Node.js and React',
      'Worked end to end for building classification based chatbot covering backend and frontend development that significantly reduced the number of support tickets using socket.io and Redis',
      'Implemented platform wide role-based granular permission management',
      'Built dyanamic form analytics and survey version 2 making the system backward compatible',
      'Interviewed candidates for full stack developer position and did primary resume screening'
    ],
    active: true,
    skills: [
      'Node.js',
      'React',
      'PostgreSQL',
      'Typescript',
      'Websocket',
      'Redis',
      'Serverless'
    ]
  },
  {
    id: 2,
    position: 'Technical Lead',
    name: 'Now Delivery & Munchies - Last mile food & parcel delivery',
    url: '',
    period: 'April 2020 - Jul 2021',
    description: [
      'Revamped the whole parcel delivery flow with multi warehouse dispatching which resulted in 300% growth in number of orders per day.',
      'Assembled and led a 6-person engineering team, building it from the ground up like screening Resumes, interviewing, onboarding, and training.',
      'Automated the merchant payment system by integrating mobile banking that saved 3 hours of manual work per day.',
      'Introduced the concept of system design debate sessions which helped new developers to see the software as a connecting piece of puzzle.',
      'Built the Rider delivery app using React Native which increased delivery efficiancy by 20%'
    ],
    active: false,
    skills: [
      'Node.js',
      'React',
      'GraphQL',
      'React Native',
      'Mobile Payment',
      'MongoDB'
    ]
  },
  {
    id: 3,
    position: 'Software Engineer',
    name: 'Sendhelper by PropertyGuru',
    url: 'https://sendhelper.com',
    period: 'Jan 2017 - Jun 2020',
    description: [
      'Managed and improved XMPP based Ejabberd Messaging solution for service related chats. Built custom ejabberd plugin/hook for sending realtime push notification',
      'Developed customized react native xmpp library to implement message read feature like whatsapp',
      'Added keyword based message filtering to the chat system which helped the team to find out suppliers/customer who are paying outside/hiring outside the platform',
      'Built an interactive map tool for internal use which helped reduce the unacceptance job drastically.',
      'Migrated to Typescript from legacy codebase which improved the code quality'
    ],
    active: false,
    skills: [
      'Node.js',
      'MongoDB',
      'XMPP',
      'Ejabberd',
      'React Native',
      'Typescript',
      'MySQL'
    ]
  },
  {
    id: 4,
    position: 'Software Engineer',
    name: 'Inovio - Software firm',
    url: '',
    period: 'Jan 2016 - Dec 2016',
    description: [
      'Contributed to a Healthy Food On Demand and by subscription app',
      'Built slackbot for internal team to track and log working hours and take standups',
      'Built software to take inputs of health metrics for a campaign in Africa Region'
    ],
    active: false,
    skills: ['Slackbot', 'Software Development', 'Node.js', 'Meteor']
  }
];

export const projects = [
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

export const contact = {
  email: 'faysal515.ae@gmail.com',
  phone: '+971505352169'
};
