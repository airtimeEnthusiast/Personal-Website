export interface Project{
    id: number;
    title: string;
    description: string;
}


export const projectsData: { [key: string]: Project[] } = {
    programming: [
      { id: 1, title: 'Project 1', description: 'Description of Project 1' },
      { id: 2, title: 'Project 2', description: 'Description of Project 2' },
      // Add more programming projects here
    ],
    "3dmodeling": [
      { id: 1, title: '3D Model 1', description: 'Description of 3D Model 1' },
      { id: 2, title: '3D Model 2', description: 'Description of 3D Model 2' },
      // Add more 3D modeling projects here
    ],
    other: [
      { id: 1, title: 'Other Project 1', description: 'Description of Other Project 1' },
      { id: 2, title: 'Other Project 2', description: 'Description of Other Project 2' },
      // Add more other projects here
    ],
  };