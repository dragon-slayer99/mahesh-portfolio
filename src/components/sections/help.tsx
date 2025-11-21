
import React from 'react';
import { achievements } from '@/lib/portfolio-data';

const baseCommands = [
  { cmd: 'about', desc: 'Displays a short bio about me.' },
  { cmd: 'skills', desc: 'Lists my technical skills.' },
  { cmd: 'projects', desc: 'Shows my personal and professional projects.' },
  { cmd: 'experience', desc: 'Outlines my professional experience.' },
  { cmd: 'education', desc: 'Details my educational background.' },
];

const conditionalCommands = [
  ...(achievements && achievements.length > 0 ? [{ cmd: 'achievements', desc: 'Lists my achievements.' }] : []),
];

const finalCommands = [
  ...baseCommands,
  ...conditionalCommands,
  { cmd: 'contact', desc: 'Shows how to get in touch with me.' },
  { cmd: 'socials', desc: 'Lists my social media profiles.' },
  { cmd: 'date', desc: 'Displays the current date and time.' },
  { cmd: 'clear', desc: 'Clears the terminal history.' },
  { cmd: 'help', desc: 'Shows this list of commands.' },
].sort((a, b) => a.cmd.localeCompare(b.cmd));

const Help = () => {
  return (
    <div>
      <p className="mb-2">Here are the available commands:</p>
      <ul className="grid grid-cols-[auto,1fr] gap-x-4 gap-y-1">
        {finalCommands.map(({ cmd, desc }) => (
          <React.Fragment key={cmd}>
            <span className="text-primary font-medium group-hover:underline">{cmd}</span>
            <span className="text-muted-foreground leading-relaxed">{desc}</span>
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
};

export default Help;
