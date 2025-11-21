
import React from 'react';
import { education } from '@/lib/portfolio-data';
import { GraduationCapIcon } from 'lucide-react';

const Education = () => {
  return (
    <div>
      <div className="flex items-center gap-2 mb-4">
        <span className="text-primary"><GraduationCapIcon/></span>
        <h2 className="font-headline text-lg text-primary">Education</h2>
      </div>
      <div className="font-mono text-sm space-y-4">
        {education.map((edu, index) => (
          <div key={index} className="pl-2">
            <div className="items-baseline">
              <p className="text-muted-foreground whitespace-nowrap font-black text-lg">{edu.year}</p>
              <p className="font-bold text-base">{edu.institution}</p>
            </div>
            <p className="text-sm text-muted-foreground">{edu.degree}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
