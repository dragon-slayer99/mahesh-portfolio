
import React from 'react';
import { achievements } from '@/lib/portfolio-data';
import { Trophy } from 'lucide-react';
import { Timeline } from '@/components/ui/timeline';

const Achievements = () => {
  if (!achievements || achievements.length === 0) {
    return null;
  }

  const timelineItems = achievements.map(achievement => ({
    title: achievement.title,
    subtitle: achievement.subtitle,
    date: achievement.date,
    details: achievement.details,
  }));

  return (
    <div>
      <div className="flex items-center gap-2 mb-4">
        <Trophy className="w-5 h-5 text-primary" />
        <h2 className="font-headline text-lg text-primary">Achievements</h2>
      </div>
      <Timeline items={timelineItems} />
    </div>
  );
};

export default Achievements;
