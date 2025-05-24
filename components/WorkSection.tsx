


import React from 'react';
import SectionWrapper from './SectionWrapper';
import ProjectCard from './ProjectCard';
import { PROJECTS_DATA } from '../constants';
import type { Project } from '../types';
import { SectionId } from '../types';

const WorkSection: React.FC = () => {
  return (
    <SectionWrapper id={SectionId.Work} title="My Work & Projects" className="bg-[#222629]">
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 xl:gap-10">
        {PROJECTS_DATA.map((project: Project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      {PROJECTS_DATA.length === 0 && (
        <p className="text-center text-[#6B6E70] text-lg mt-12">More projects coming soon. Stay tuned!</p>
      )}
    </SectionWrapper>
  );
};

export default WorkSection;