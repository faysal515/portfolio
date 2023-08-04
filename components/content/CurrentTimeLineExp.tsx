'use client';

import { Timeline, TimelineEvent } from './TimeLineExp';
import { Badge, List, ThemeIcon } from '@mantine/core';
import { FaArrowRightLong } from 'react-icons/fa6';

const CurrentTimeLineExp = () => {
  const experiences = [
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
      skills: ['Node.js', 'React', 'Websocket', 'Redis']
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
      skills: ['React Native', 'mobile banking integration']
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
      skills: ['XMPP', 'Ejabberd', 'React Native', 'Typescript']
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
      skills: ['Slackbot', 'Software Development']
    }
  ];
  return (
    <Timeline>
      {experiences.map((info) => {
        return (
          <TimelineEvent key={info.id} active={info.active}>
            <TimelineEvent.Title>
              <a
                href={info.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white hover:underline transition-all ease"
              >
                {`${info.name}${' • '}`}
              </a>
              {info.period}
            </TimelineEvent.Title>
            <TimelineEvent.Description>
              <List
                // icon={<FaArrowRightLong />}
                type="ordered"
                spacing="md"
                className="text-white"
              >
                {info.description.map((d, i) => (
                  <List.Item className="text-slate-200" key={i}>
                    {d}
                  </List.Item>
                ))}
              </List>
            </TimelineEvent.Description>
            <div className="space-x-2 font-bold">
              {info.skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-gradient-to-r from-red-400 to-pink-500 px-3.5 py-1 rounded-full text-white"
                >
                  {skill}
                </span>
              ))}
            </div>
          </TimelineEvent>
        );
      })}
    </Timeline>
  );
};

export default CurrentTimeLineExp;
