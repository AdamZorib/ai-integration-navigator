
import React from 'react';
import Header from './components/Header';
import SectionCard from './components/SectionCard';
import LaundryAssistant from './components/LaundryAssistant';
import LabIdeaGenerator from './components/LabIdeaGenerator';
import Footer from './components/Footer';
import { LeadershipIcon, LabIcon, LaundryIcon, LightbulbIcon, StrategyIcon, AutomationIcon } from './components/Icons';
import type { SectionConfig } from './types';

const App: React.FC = () => {
  const sections: SectionConfig[] = [
    {
      id: 'introduction',
      title: 'Welcome to the AI Integration Navigator',
      icon: <LightbulbIcon className="w-10 h-10 text-blue-500" />,
      content: (
        <>
          <p className="mb-4">
            This tool helps you explore strategies for effectively integrating Artificial Intelligence into your organization, inspired by the "Leadership, Lab, and Laundry" framework.
          </p>
          <p>
            Navigate through the sections below to understand key concepts and leverage interactive tools to brainstorm AI applications.
          </p>
        </>
      ),
    },
    {
      id: 'leadership',
      title: 'Leadership: Vision & Strategy',
      icon: <LeadershipIcon className="w-10 h-10 text-indigo-500" />,
      content: (
        <>
          <p className="mb-4">
            Effective AI integration starts with strong leadership. This involves crafting a clear vision, developing a robust strategy, fostering AI literacy, and addressing fears and misconceptions about AI within the organization.
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li><strong>Set a Clear Vision:</strong> Define what AI success looks like for your organization.</li>
            <li><strong>Strategic Alignment:</strong> Ensure AI initiatives support broader business goals.</li>
            <li><strong>Promote AI Literacy:</strong> Educate your teams about AI's capabilities and limitations.</li>
            <li><strong>Address Concerns:</strong> Openly discuss and mitigate fears related to job displacement or ethical issues.</li>
          </ul>
          <div className="p-4 bg-indigo-50 border border-indigo-200 rounded-lg">
            <h4 className="font-semibold text-indigo-700 mb-2 flex items-center"><StrategyIcon className="w-5 h-5 mr-2" /> Key Question for Leaders:</h4>
            <p className="text-indigo-600">"How can AI amplify our unique strengths and help us solve our most critical challenges, rather than just being a technology we adopt?"</p>
          </div>
        </>
      ),
    },
    {
      id: 'lab',
      title: 'Lab: Experimentation & Learning',
      icon: <LabIcon className="w-10 h-10 text-green-500" />,
      content: (
        <>
          <p className="mb-4">
            The "Lab" phase is about fostering a culture of experimentation. Start with small, manageable pilot projects to learn quickly, iterate, and build internal capabilities. Don't be afraid to "work backwards" from a specific problem.
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li><strong>Start Small:</strong> Focus on pilot projects with clear scope and measurable outcomes.</li>
            <li><strong>Fail Fast, Learn Faster:</strong> Embrace experimentation and view failures as learning opportunities.</li>
            <li><strong>Build Capabilities:</strong> Develop in-house AI talent or partner strategically.</li>
            <li><strong>Iterate:</strong> Continuously refine your approach based on pilot project results.</li>
          </ul>
        </>
      ),
      interactiveComponent: <LabIdeaGenerator />,
    },
    {
      id: 'laundry',
      title: 'Laundry: Automation & Efficiency',
      icon: <LaundryIcon className="w-10 h-10 text-sky-500" />,
      content: (
        <>
          <p className="mb-4">
            "Laundry" refers to the mundane, repetitive tasks that AI can automate, freeing up human employees for more strategic and creative work. These early wins can serve as "totems of progress," demonstrating AI's value.
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li><strong>Identify Repetitive Tasks:</strong> Look for processes that are time-consuming and rule-based.</li>
            <li><strong>Automate for Efficiency:</strong> Implement AI solutions to handle these tasks.</li>
            <li><strong>Free Up Human Potential:</strong> Allow employees to focus on higher-value activities.</li>
            <li><strong>Showcase Wins:</strong> Highlight successful automation projects to build momentum.</li>
          </ul>
          <div className="p-4 bg-sky-50 border border-sky-200 rounded-lg">
            <h4 className="font-semibold text-sky-700 mb-2 flex items-center"><AutomationIcon className="w-5 h-5 mr-2" /> The "Laundry" Mindset:</h4>
            <p className="text-sky-600">"What are the essential but tedious tasks that, if automated, would significantly boost our team's productivity and morale?"</p>
          </div>
        </>
      ),
      interactiveComponent: <LaundryAssistant />,
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-100 text-gray-800 flex flex-col items-center p-4 sm:p-8 font-sans">
      <Header
        title="AI Integration Navigator"
        subtitle="Guiding Your Organization Through Leadership, Lab, and Laundry"
      />
      <main className="w-full max-w-4xl space-y-8 sm:space-y-12">
        {sections.map((section) => (
          <SectionCard
            key={section.id}
            title={section.title}
            icon={section.icon}
          >
            {section.content}
            {section.interactiveComponent && (
              <div className="mt-6 pt-6 border-t border-gray-200">
                {section.interactiveComponent}
              </div>
            )}
          </SectionCard>
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default App;
