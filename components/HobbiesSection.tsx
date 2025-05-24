import React from 'react';
import SectionWrapper from './SectionWrapper';
import HobbyItem from './HobbyItem';
import { HOBBIES_DATA } from '../constants';
import type { Hobby } from '../types';
import { SectionId } from '../types';

const HobbiesSection: React.FC = () => {
  return (
    <SectionWrapper id={SectionId.Hobbies} title="Hobbies & Interests" className="bg-[#222629]/90">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {HOBBIES_DATA.map((hobby: Hobby) => (
          <HobbyItem key={hobby.id} hobby={hobby} />
        ))}
      </div>
       {HOBBIES_DATA.length === 0 && (
        <p className="text-center text-[#6B6E70] text-lg mt-12">Details about hobbies coming soon!</p>
      )}
    </SectionWrapper>
  );
};

export default HobbiesSection;