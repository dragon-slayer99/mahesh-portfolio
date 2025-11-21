import React from 'react';
import { skills } from '@/lib/portfolio-data';
import { Terminal } from 'lucide-react';

const Skills = () => {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <Terminal className="w-5 h-5 text-primary" />
        <h2 className="font-headline text-lg text-primary">Technical Skills</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-1">
        {skills.map((skill, index) => (
          <p key={index} className="break-all">{skill}</p>
        ))}
      </div>
    </div>
  );
};

export default Skills;
