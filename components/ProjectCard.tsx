
import React from 'react';
import type { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ExternalLinkIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
  </svg>
);

const GithubIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" {...props} role="img" aria-label="GitHub Icon">
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
  </svg>
);


const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const descriptionParts = project.description.split(/(Approach:|Outcome:)/i);
  
  return (
    <div className="group bg-[#2A2E31] rounded-xl shadow-xl shadow-[#86C232]/10 overflow-hidden transform transition-all duration-300 hover:scale-[1.03] hover:shadow-[#86C232]/20 flex flex-col border border-[#474B4F]/50 hover:border-[#86C232]/50">
      <div className="overflow-hidden">
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-56 object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-110" 
          loading="lazy"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-semibold mb-3 text-[#86C232] group-hover:text-[#61892F] transition-colors duration-300">{project.title}</h3>
        
        <div className="text-slate-300 text-sm mb-4 flex-grow leading-relaxed space-y-2">
          {descriptionParts.map((part, index) => {
            if (part.toLowerCase() === 'approach:' || part.toLowerCase() === 'outcome:') {
              return <strong key={index} className="block mt-2 text-[#86C232]">{part}</strong>;
            }
            return <p key={index} className="inline">{part.trim()}</p>;
          })}
        </div>

        <div className="mb-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="inline-block bg-[#474B4F] text-[#86C232] text-xs font-medium px-2.5 py-1 rounded-full group-hover:bg-[#6B6E70]/80 transition-colors duration-300"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-auto flex items-center space-x-4 pt-2">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm text-[#86C232] hover:text-[#61892F] transition-colors duration-300 font-medium group/link"
              aria-label={`View live demo of ${project.title}`}
            >
              Live Demo
              <ExternalLinkIcon className="w-4 h-4 ml-1.5 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm text-[#6B6E70] hover:text-slate-200 transition-colors duration-300 font-medium group/link"
              aria-label={`View source code of ${project.title} on GitHub`}
            >
             <GithubIcon className="w-4 h-4 mr-1.5 text-[#6B6E70] group-hover/link:text-slate-300 transition-colors duration-300"/> Source Code
            </a>
          )}
           {!(project.liveUrl || project.repoUrl) && (
            <p className="text-xs text-[#474B4F] italic">No public links available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;