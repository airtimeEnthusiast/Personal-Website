import swiftIcon from '../../assets/swift.png';
import pythonIcon from '../../assets/python.png';
import cppIcon from '../../assets/cpp.png';
import pytorchIcon from '../../assets/pytorch.png';
import cIcon from '../../assets/c.png';
import sqlIcon from '../../assets/Postgresql.png';
import expressjsIcon from '../../assets/expressjs.png';
import javaIcon from '../../assets/java.png';
import beautifulsoup from '../../assets/beautifulsoup.png'

export interface Project {
  id: number;
  title: string;
  description: string;
  link: string;
  technologies: string[]
}

export const projectsData: { [key: string]: Project[] } = {
  programming: [
    {
      id: 1, title: 'Ride Experience', description: "An iOS App that logs data from the iPhone's onboard sensors, enabling users to analyze ride dynamics. It also tracks theme park wait times and provides detailed theme park-related statistics.",
      link: 'https://github.com/airtimeEnthusiast/Ride_Experience',
      technologies: [swiftIcon]
    },
    {
      id: 2, title: 'Cat versus Dog Image Classifier', description: 'Solving the famous Cat versus Dog problem: given an image, use a CNN model to classify whether it is a dog image or a cat image.',
      link: 'https://github.com/airtimeEnthusiast/Cat-vs.-Dog-Image-Classification',
      technologies: [pythonIcon, pytorchIcon]
    },
    {
      id: 3, title: 'Airline-Flight-Path-Optimizer', description: 'A command line tool used to generate the shortest flight route using the Dijistra shortest path algorithm. Accounts for distances between airports and available flight connections, to deliver the optimal travel path.',
      link: 'https://github.com/airtimeEnthusiast/Airline-Flight-Path-Optimizer',
      technologies: [cppIcon]
    },
    {
      id: 4, title: 'General Language Compiler', description: 'A command line tool used to generate the shortest flight route using the Dijistra shortest path algorithm. Accounts for distances between airports and available flight connections, to deliver the optimal travel path.',
      link: 'https://github.com/airtimeEnthusiast/General-Language-Compiler',
      technologies: [cppIcon]
    },
    {
      id: 5, title: 'Roller Coaster Database Web Scraper', description: 'A command line tool used to generate the shortest flight route using the Dijistra shortest path algorithm. Accounts for distances between airports and available flight connections, to deliver the optimal travel path.',
      link: 'https://github.com/airtimeEnthusiast/RCDBScraper',
      technologies: [pythonIcon, beautifulsoup]
    },
    {
      id: 6, title: 'DisneyTriviaApp', description: 'An interactive trivia app that allows a single or multiple users to answer Disney related trivia questions. Implemented a scoring mechanism to assess user performance based on answer accuracy.',
      link: 'https://github.com/airtimeEnthusiast/DisneyTriviaApp',
      technologies: [swiftIcon, expressjsIcon, sqlIcon]
    },
    {
      id: 7, title: 'Snake Game', description: 'A command line tool used to generate the shortest flight route using the Dijistra shortest path algorithm. Accounts for distances between airports and available flight connections, to deliver the optimal travel path.',
      link: 'https://github.com/airtimeEnthusiast/Snake_Game',
      technologies: [cIcon]
    },
    {
      id: 8, title: 'CSV Data Visualizer', description: 'Java Swing application for displaying and storing attendance data. Uses maven dependencies such as JFreeChart and OpenCSV',
      link: 'https://github.com/airtimeEnthusiast/CSV-DataVisualizer',
      technologies: [javaIcon]
    },


  ],
  "3dmodeling": [
    {
      id: 1, title: '3D Model 1', description: 'Description of 3D Model 1',
      link: 'https://www.linkedin.com/in/yourprofile',
      technologies: [swiftIcon]
    },
    {
      id: 2, title: '3D Model 2', description: 'Description of 3D Model 2',
      link: 'https://www.linkedin.com/in/yourprofile',
      technologies: [swiftIcon]
    },
    // Add more 3D modeling projects here
  ],
  other: [
    {
      id: 1, title: 'No Limits 2 Roller Coaster Simulation', description: 'Description of Other Project 1',
      link: 'https://www.linkedin.com/in/yourprofile',
      technologies: [swiftIcon]

    },
    {
      id: 2, title: 'Other Project 2', description: 'Description of Other Project 2',
      link: 'https://www.linkedin.com/in/yourprofile',
      technologies: [swiftIcon]
    },
    // Add more other projects here
  ],
};