
import React from 'react';
import SectionWrapper from './SectionWrapper';
import { SectionId, SkillItem } from '../types';
import { 
  PERSONAL_INFO, 
  TECHNICAL_SKILLS_DATA, 
  WORK_EXPERIENCE_DATA, 
  EDUCATION_DATA, 
  CERTIFICATIONS_DATA,
  LANGUAGES_SPOKEN_DATA,
  CURRENTLY_EXPLORING_DATA,
  LightbulbIcon // Keep for widget title, color will be overridden
} from '../constants';
import CurrentlyExploringWidget from './CurrentlyExploringWidget';

// Helper icons for section sub-titles (optional)
const BriefcaseIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" {...props}><path fillRule="evenodd" d="M6 3.75A2.75 2.75 0 018.75 1h2.5A2.75 2.75 0 0114 3.75v.443c.579.055 1.14.155 1.656.298C16.938 4.76 17.5 5.518 17.5 6.36V14.25A2.75 2.75 0 0114.75 17h-9.5A2.75 2.75 0 012.5 14.25V6.36c0-.841.562-1.6 1.844-1.868.516-.143 1.077-.243 1.656-.298V3.75zM8.75 2.5a1.25 1.25 0 00-1.25 1.25v.901A3.484 3.484 0 0110 4.5h0a3.484 3.484 0 012.5.151v-.9A1.25 1.25 0 0011.25 2.5h-2.5zM4 6.36V14.25a1.25 1.25 0 001.25 1.25h9.5a1.25 1.25 0 001.25-1.25V6.36C14.906 6.102 14.25 5.76 14.25 5.682c0-.077 0-.155-.002-.231a2.002 2.002 0 00-1.992-1.89C11.137 3.523 10.152 3.5 10 3.5c-.152 0-1.137.023-2.256.062a2.002 2.002 0 00-1.992 1.89c-.002.076-.002.154-.002.231 0 .078-.656.42-1.5.678z" clipRule="evenodd" /></svg>
);
const AcademicCapIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" {...props}><path d="M7.506 2.657A2.25 2.25 0 005.354 4.33c-1.15.422-2.098 1.003-2.798 1.64C2.02 6.48 1.5 7.02 1.5 7.887V13.5a.75.75 0 00.75.75h15a.75.75 0 00.75-.75V7.887c0-.867-.52-1.407-1.056-1.918-.7-.636-1.648-1.217-2.798-1.639a2.25 2.25 0 00-2.152-1.673h-5a2.25 2.25 0 00-2.152 1.673zM2.25 8.613a.75.75 0 000 .775V12a.75.75 0 00.75.75h2.25v-.001A.75.75 0 006 12V8.613a.75.75 0 00-1.5 0v1.462A.75.75 0 003.75 10.8V9.388a.75.75 0 00-1.5 0zm4.5 0a.75.75 0 000 .775V12A.75.75 0 007.5 12h.001A.75.75 0 009 11.25V8.613a.75.75 0 00-1.5 0v1.462a.75.75 0 00-.75.725V9.388a.75.75 0 00-1.5 0zm4.5-.775V12a.75.75 0 00.75.75h2.25A.75.75 0 0015 12V8.613a.75.75 0 00-1.5 0v1.462a.75.75 0 00-.75.725V9.388a.75.75 0 00-1.5 0a.75.75 0 000-.775zm3.75.775V12a.75.75 0 00.75.75H18a.75.75 0 00.75-.75V8.613a.75.75 0 00-1.5 0v1.462a.75.75 0 00-.75.725V9.388a.75.75 0 00-1.5 0zM10 2.5a.75.75 0 000 1.5h0l.018.001a.75.75 0 000-1.502L10 2.5z" /></svg>
);
const TechSkillsIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" {...props}><path fillRule="evenodd" d="M7.858 2.074a.75.75 0 01.884-.091l.444.222a.75.75 0 00.884-.091l.444-.222a.75.75 0 01.884.091l.444.222a.75.75 0 00.884-.091l.444-.222a.75.75 0 01.884.091l.444.222a.75.75 0 00.884-.091l.444-.222a.75.75 0 11.774 1.33L18.07 4.28a.75.75 0 01.091.884l-.222.444a.75.75 0 00.091.884l.222.444a.75.75 0 01-.091.884l-.222.444a.75.75 0 00-.091.884l.222.444a.75.75 0 01-.091.884l-.222.444a.75.75 0 00-.091.884l.222.444a.75.75 0 11-1.33.774l-.444-.222a.75.75 0 01-.884.091l-.444.222a.75.75 0 00-.884.091l-.444-.222a.75.75 0 01-.884-.091l-.444.222a.75.75 0 00-.884.091l-.444-.222a.75.75 0 01-.884-.091l-.444.222a.75.75 0 00-.884.091l-.444-.222a.75.75 0 11-.774-1.33l.222-.444a.75.75 0 01.091-.884l-.222-.444a.75.75 0 00-.091-.884l.222-.444a.75.75 0 01.091-.884l-.222-.444a.75.75 0 00-.091-.884l.222-.444a.75.75 0 01.091-.884l-.222-.444a.75.75 0 00.091-.884l.444-.222a.75.75 0 01.884-.091zM10 6.5A3.5 3.5 0 1010 13a3.5 3.5 0 000-6.5zM6.5 10a3.5 3.5 0 117 0 3.5 3.5 0 01-7 0z" clipRule="evenodd" /></svg>
);
const LanguageIcon = (props: React.SVGProps<SVGSVGElement>) => (
 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" {...props}><path fillRule="evenodd" d="M7 2.5a.5.5 0 01.5.5v1.586l2.293-2.293a.5.5 0 01.707 0l1.414 1.414a.5.5 0 010 .707L9.621 6.707l2.293 2.293a.5.5 0 010 .707l-1.414 1.414a.5.5 0 01-.707 0L7.5 8.828V10.5a.5.5 0 01-1 0V2.5zM4.002 4.002a.5.5 0 000 .707l3.29 3.29a.75.75 0 010 1.06l-3.29 3.292a.5.5 0 00-.707.707l1.414 1.414a.5.5 0 00.707 0L7.704 12.2a.75.75 0 011.06 0l2.294 2.293a.5.5 0 00.707 0l1.414-1.414a.5.5 0 000-.707L10.882 10l2.293-2.293a.5.5 0 000-.707l-1.414-1.414a.5.5 0 00-.707 0L8.766 7.879a.75.75 0 01-1.061 0L4.002 4.002z" clipRule="evenodd" /></svg>
);

const TARGET_DEGREE_COLOR = '#479761';
const DEFAULT_DEGREE_COLOR_CLASS = 'text-[#86C232]';
const DEGREES_TO_STYLE = [
  "B.Tech, Computer Science Engineering (Data Science)",
  "Diploma, Electrical & Electronics Engineering",
  "SSC"
];

const TARGET_CERTIFICATION_COLOR = '#77A6F7';
const DEFAULT_CERTIFICATION_COLOR_CLASS = 'text-[#86C232]';
const CERTIFICATIONS_TO_STYLE = ["Data Science Certification"];

const AboutSection: React.FC = () => {
  return (
    <SectionWrapper 
      id={SectionId.About} 
      title="About Me" 
      className="bg-[#222629]/90"
      titleClassName="font-hero-heading" // Added for "DM Serif Display" font
    >
      <CurrentlyExploringWidget title="Currently Exploring" items={CURRENTLY_EXPLORING_DATA} />
      
      <div className="grid lg:grid-cols-3 gap-12 lg:gap-16 items-start mt-12">
        {/* Left Column: Image & Languages */}
        <div className="lg:col-span-1 relative group mx-auto lg:mx-0 max-w-sm">
          <div className="absolute -inset-1.5 bg-gradient-to-r from-[#86C232] via-[#61892F] to-[#474B4F] rounded-xl blur-md opacity-30 group-hover:opacity-60 transition-all duration-500 ease-in-out group-hover:blur-lg"></div>
          <img
            src="https://picsum.photos/seed/rahul-profile/600/600" 
            alt={`${PERSONAL_INFO.name} - Professional Headshot`}
            className="rounded-xl shadow-2xl relative w-full aspect-square object-cover border-2 border-[#474B4F]"
            loading="lazy"
          />
           <div className="mt-6 text-center lg:text-left">
             <h3 className="text-xl font-semibold text-[#86C232] mb-2 flex items-center justify-center lg:justify-start">
               <LanguageIcon className="w-5 h-5 mr-2 text-[#86C232]" />
               Languages Spoken
             </h3>
             <ul className="text-slate-300 space-y-1">
              {LANGUAGES_SPOKEN_DATA.map(lang => (
                <li key={lang.language} className="text-sm">{lang.language}: <span className="text-[#6B6E70]">{lang.proficiency}</span></li>
              ))}
            </ul>
           </div>
        </div>

        {/* Right Column: Details */}
        <div className="lg:col-span-2 text-slate-300 space-y-8">
          {/* Professional Summary */}
          <div>
            <h3 className="text-2xl font-semibold text-[#86C232] mb-3">Professional Summary</h3>
            <p className="text-lg leading-relaxed whitespace-pre-line text-slate-200">
              {PERSONAL_INFO.professionalSummary}
            </p>
          </div>

          {/* Technical Skills */}
          <div>
            <h3 className="text-2xl font-semibold text-[#86C232] mb-4 flex items-center">
              <TechSkillsIcon className="w-6 h-6 mr-2 text-[#86C232]" />
              Technical Skills
            </h3>
            <div className="space-y-5">
              {TECHNICAL_SKILLS_DATA.map(skillCat => (
                <div key={skillCat.category}>
                  <h4 className="text-lg font-medium text-[#86C232] mb-3">{skillCat.category}</h4>
                  <div className="flex flex-wrap gap-2.5">
                    {skillCat.skills.map((skill: SkillItem) => (
                      <div 
                        key={skill.name} 
                        className="inline-flex items-center bg-[#474B4F]/60 hover:bg-[#61892F]/70 text-sm px-3.5 py-1.5 rounded-full border border-[#6B6E70]/70 hover:border-[#86C232]/80 transition-all duration-200 group cursor-default shadow-sm hover:shadow-md"
                      >
                        {skill.IconComponent && (
                          <skill.IconComponent 
                            className={`w-4 h-4 mr-2 transition-transform duration-200 group-hover:scale-110 ${skill.animationClass || ''}`} 
                          />
                        )}
                        <span className="text-slate-100 group-hover:text-slate-50 transition-colors duration-200">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Work Experience */}
          <div>
            <h3 className="text-2xl font-semibold text-[#86C232] mb-4 flex items-center">
              <BriefcaseIcon className="w-6 h-6 mr-2 text-[#86C232]" />
              Work Experience
            </h3>
            {WORK_EXPERIENCE_DATA.map(exp => (
              <div key={exp.company + exp.role} className="mb-6 p-4 bg-[#2A2E31] rounded-lg border border-[#474B4F]/70 shadow-md">
                <h4 className="text-xl font-semibold text-[#86C232]">{exp.role}</h4>
                <p className="text-md text-[#61892F] mb-1">{exp.company}</p>
                <p className="text-sm text-[#6B6E70] mb-2">{exp.duration}</p>
                <ul className="list-disc list-inside space-y-1 text-slate-300 text-sm">
                  {exp.responsibilities.map((resp, index) => (
                    <li key={index}>{resp}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Education & Certifications */}
          <div>
            <h3 className="text-2xl font-semibold text-[#86C232] mb-4 flex items-center">
             <AcademicCapIcon className="w-6 h-6 mr-2 text-[#86C232]" />
              Education & Certifications
            </h3>
            <div className="space-y-5">
              {EDUCATION_DATA.map(edu => {
                const isTargetDegree = DEGREES_TO_STYLE.includes(edu.degree);
                return (
                  <div key={edu.degree + edu.institution} className="p-3 bg-[#2A2E31] rounded-md border border-[#474B4F]/50">
                    <h4 
                      className={`text-lg font-medium ${!isTargetDegree ? DEFAULT_DEGREE_COLOR_CLASS : ''}`}
                      style={isTargetDegree ? { color: TARGET_DEGREE_COLOR } : {}}
                    >
                      {edu.degree}
                    </h4>
                    <p className="text-sm text-[#61892F]">{edu.institution}</p>
                    <p className="text-xs text-[#6B6E70]">{edu.year} {edu.grade && `(${edu.grade})`}</p>
                  </div>
                );
              })}
              {CERTIFICATIONS_DATA.map(cert => {
                const isTargetCertification = CERTIFICATIONS_TO_STYLE.includes(cert.name);
                return (
                  <div key={cert.id || cert.name} className="p-3 bg-[#2A2E31] rounded-md border border-[#474B4F]/50">
                    <h4 
                      className={`text-lg font-medium ${!isTargetCertification ? DEFAULT_CERTIFICATION_COLOR_CLASS : ''}`}
                      style={isTargetCertification ? { color: TARGET_CERTIFICATION_COLOR } : {}}
                    >
                      {cert.name}
                    </h4>
                    <p className="text-sm text-[#61892F]">{cert.issuer}</p>
                    <p className="text-xs text-[#6B6E70]">{cert.year}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default AboutSection;
