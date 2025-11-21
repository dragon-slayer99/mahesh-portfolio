import React from 'react';
import { Circle } from 'lucide-react';
import { cn } from '@/lib/utils';


type TimelineItem = {
  title: string;
  subtitle: string;
  date: string;
  details?: string[];
  dateClassName?: string;
};

interface TimelineProps {
  items: TimelineItem[];
}

export const Timeline: React.FC<TimelineProps> = ({ items }) => {
  return (
    <div className="relative">
      <div className="absolute left-3 top-0 h-full w-0.5 bg-border -translate-x-1/2" />
      {items.map((item, index) => (
        <div key={index} className="relative flex items-start gap-6 mb-10">
          <div className="relative pt-1.5">
             <div className="w-6 h-6 flex items-center justify-center rounded-full bg-primary/10">
               <span className="text-primary font-mono text-xl">*</span>
             </div>
          </div>
          <div className="flex-1">
            <p className={cn("text-sm text-muted-foreground", item.dateClassName)}>{item.date}</p>
            <h3 className="text-lg font-headline text-primary">{item.title}</h3>
            <p className="font-medium">{item.subtitle}</p>
            {item.details && (
              <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                {item.details.map((detail, i) => (
                  <li key={i} className="flex gap-2">
                    <Circle className="w-1.5 h-1.5 mt-1.5 shrink-0 text-primary/70" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
