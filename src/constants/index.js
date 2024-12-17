import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `Motivated and detail-oriented Computer Science recent graduate seeking an entry-level position to leverage my technical skills and academic knowledge in a professional setting as a Software Developer/Engineer. Committed to continuous learning and contributing to the success of the team.`;

export const ABOUT_TEXT = `I’m Shaik Naheda, a motivated and detail-oriented Computer Science graduate from Vasireddy Venkatadri Institute of Technology, Guntur. With a strong foundation in software development and a passion for solving complex problems, I am actively seeking an entry-level position as a Software Developer/Engineer. My expertise includes proficiency in various programming languages like Python, JavaScript, and SQL, as well as hands-on experience in web development using technologies such as ReactJS, Node.js, and Tailwind CSS. Throughout my academic journey, I have worked on a variety of projects ranging from web applications to machine learning algorithms. These projects have honed my skills in full-stack development, cloud platforms, and agile methodologies. I’m passionate about continuous learning and thrive in environments where I can collaborate with teams to build innovative solutions. I’m excited to contribute my technical skills and problem-solving abilities to a dynamic organization, and I’m committed to growing as a professional while contributing to the success of the team.`;

export const INTERNSHIPS = [
  {
    duration: "Mar 2022 - May 2022 (10 Weeks)",
    role: "Virtual Cybersecurity Intern",
    company: "AICTE NEAT EduSkills in Partnership with Palo Alto Networks",
    description: `Successfully completed a 10-week Cybersecurity Virtual Internship, supported by Palo Alto Networks.
Learned and gained hands-on experience in:
Introduction to Cybersecurity: Key concepts of securing systems and data.
Fundamentals of Network Security: Techniques for protecting networks against threats.
Fundamentals of Cloud Security: Strategies for safeguarding cloud infrastructures.
The Fundamentals of SOC (Security Operations Center): Monitoring and responding to security incidents.`,
    technologies: [
      "Firewalls",
      "Cloud Security Platforms",
      "Basic Network Monitoring Tools",
    ],
  },
  {
    duration: "July 2022 - Sep 2022 (8 Weeks)",
    role: "Salesforce Developer Intern",
    company: "SmartInternz in Partnership with NEAT Cell-AICTE",
    description: `Completed an 8-week virtual internship, gaining hands-on experience in Salesforce development.
Learned and completed the following Salesforce Trailhead modules:
Salesforce Fundamentals
Organizational Setup
Relationship & Process Automation
Types of Flows & Security
Apex, Testing & Debugging
VS Code Setup & CLI Setup
Lightning Web Components (LWC) & API
Achieved Super Badges:
Apex Specialist
Process Automation Specialist.`,
    technologies: [
      "Salesforce CRM",
      "Salesforce CLI",
      "Visual Studio Code",
      "Lightning Web Components (LWC)",
      "Apex",
    ],
  },
];

export const PROJECTS = [
  {
    title: "Implementation of Stroop Test",
    image: project1,
    description:
      "Development of a Stroop test using python tkinter. To know how strong a person's mind and the fast reflexes and reaction times we created this. It is purely depended on individual ability and the wide range of perception.",
    technologies: ["HTML", "CSS", "Python", "Tkinter", "OpenCV "],
  },
  {
    title: "E-Library Management System",
    image: project2,
    description:
      "Developed an Online Library Management System to automate library tasks, enhancing efficiency for librarians and users. Enabled students to search for books, view book statuses, and request books, while providing administrators with features for book management and reporting. ",
    technologies: [
      "HTML",
      "CSS",
      "PHP",
      "JavaScript",
      "XAMPP (Apache, MySQL, PHP)",
    ],
  },
  // {
  //   title: "Portfolio Website",
  //   image: project3,
  //   description:
  //     "A personal portfolio website showcasing projects, skills, and contact information.",
  //   technologies: ["HTML", "CSS", "React", "Bootstrap"],
  // },
  {
    title: "Exercise Tutoring Website",
    image: project3,
    description:
      "Promotes the importance of regular physical activity for overall health. Highlights the limitations of existing mobile-centric tutoring applications. Introduces a new web based fitness application to address these limitations. ",
    technologies: ["HTML", "CSS", "JavaScript", "ReactJS", "NodeJS"],
  },
  {
    title: "Machine Learning Algorithm for Brain Stroke Detection",
    image: project4,
    description:
      "Developed a machine learning algorithm to predict brain stroke likelihood using various classifiers. Utilized Python, Django, and machine learning libraries (e.g., NumPy, scikit-learn) for data analysis and model building. Designed user-friendly web application modules for data upload, preprocessing, model training, and result prediction. ",
    technologies: ["HTML", "CSS", "Machine Learning", "Django"],
  },
];

export const CONTACT = {
  address: "Mani hotel center, Guntur, Andhar Pradesh, India 522001",
  phoneNo: "+91 9705833669 ",
  email: "shaiknaheda24@gmail.com",
};
