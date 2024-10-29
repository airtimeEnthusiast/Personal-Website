// src/data/aboutData.ts

import { typescript } from "../../index.ts";

export interface Experience {
    title: string;
    description: string;
    date: string;
  }
  
export interface ResumeSection {
    title: string;
    experiences: Experience[];
  }

export const languages = [
    {title: "typescript", icon: typescript}, 
];

  
export interface AboutData {
    summary: string;
    education: string;
    engineeringExperience: ResumeSection;
    customerExperience: ResumeSection;
    skills: string[];
  }
  
  export const aboutData: AboutData = {
    summary: `Recent Computer Science graduate with experience in software development, data structures, 
    and algorithms. Hands-on experience in software development, data processing, and backend systems, 
    with projects utilizing Swift, Python, C++, Java, and JavaScript. A motivated learner with a commitment 
    to developing technical skills and contributing to a collaborative team environment.`,
  
    education: "Bachelor of Science in Computer Science, Arizona State University",
  
    engineeringExperience: {
      title: "Engineering Experience",
      experiences: [
        { title: "Software Developer - DataAnnotation", 
          description: "Utilized DataAnnotation tools and platforms to label and tag data for machine learning and AI applications.",
          date: "March 2024 - Present" 
        },
        { title: "iOS Software Developer Intern - ANDBOUNDS", 
          description: "Worked with a front-end team, implementing industry-standard techniques and securing user logins with OAuth." ,
          date: "September 2023 - May 2024"
        },
        { title: "Project Engineer Intern - Largo Concrete", 
          description: "Monitored production quantities and assured regulatory compliance on construction projects.",
          date: "May 2022 - August 2022" 
        }
      ]
    },
  
    customerExperience: {
      title: "Customer Experience",
      experiences: [
        { title: "Barista - Guest Services International", 
          description: "Brewed and served beverages, handled transactions, maintained a clean workspace, and ensured a positive customer experience in a fast-paced environment.",
          date: "October 2024 - Present"
        },
        { title: "Waiter - Blue Line Pizza", 
          description: "Delivered friendly and efficient service, managed orders using the Toast POS system, and maintained a clean dining environment.",
          date: "May 2022 - August 2022"
        },
        { title: "Ride Operator - Six Flags Entertainment", 
          description: "Operated rides safely, assisted guests, and ensured a positive experience in a busy amusement park setting.",
          date: "March 2018 - August 2019"
        }
      ]
    },
  
    skills: ["Swift & iOS Development", "3D Modeling & Animation", "Full-Stack Development", "Data Analytics & Visualization"]
  };