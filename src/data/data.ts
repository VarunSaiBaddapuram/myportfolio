export const personalInfo = {
  name: "Varun Sai Baddapuram",
  role: "Full Stack Developer",
  email: "varunsai1533@gmail.com",
  phone: "+91-8978153351",
  github: "https://github.com/VarunSaiBaddapuram",
  linkedin: "https://www.linkedin.com/in/varun-sai1",
  location: "Hyderabad, Telangana, India",
  summary:
    "Full Stack Developer with hands-on experience in Java Full Stack and MERN Stack, along with a strong foundation in Data Structures & Algorithms. Passionate about building clean, responsive, and user-friendly web applications and RESTful APIs. Experienced in developing real-world projects using modern frontend and backend technologies, following agile and collaborative development practices. Highly motivated to learn new technologies, improve coding skills, and contribute effectively to a dynamic development team.",
};

export const skills = [
  {
    category: "Languages",
    items: ["Java", "JavaScript", "Python", "TypeScript", "Next.js"],
  },
  {
    category: "Development & Deployment",
    items: [
      "Git/GitHub",
      "GitHub Actions",
      "Bitbucket",
      "VS Code",
      "API Testing Tools",
      "Vercel",
      "Docker",
      "AWS",
    ],
  },
  {
    category: "Technologies & Concepts",
    items: [
      "MongoDB",
      "SQL",
      "PostgreSQL",
      "AI & ML",
      "DAA",
      "DBMS",
      "OS",
      "OOPs",
      "SDLC",
      "Agile",
      "Scrum",
    ],
  },
  {
    category: "Soft Skills",
    items: [
      "Team collaboration",
      "Analytical thinking",
      "Problem-solving",
      "Adaptability",
      "Time management",
      "Continuous Learner",
    ],
  },
];

export const experience = [
  {
    company: "Raiqa Health",
    role: "Software Developer",
    period: "Sep 2025 - Oct 2025",
    location: "Hyderabad, Telangana, India",
    achievements: [
      "Built responsive and scalable UI using React.js and Tailwind CSS, ensuring consistent cross-device behavior during UAT.",
      "Automated end-to-end workflow validation with Selenium and Cucumber.js, ensuring accurate patient-practitioner data mapping.",
      "Performed daily E2E regression and manual testing to improve reliability and conversational accuracy of the AI receptionist.",
    ],
  },
  {
    company: "Teleparadigm Networks",
    role: "Software Development Engineer (SDE) Summer Intern",
    period: "Oct 2024 - Dec 2024",
    location: "Hyderabad, Telangana, India",
    achievements: [
      "Developed a full-stack real estate platform enabling property listings, advanced search, and role-based workflows.",
      "Integrated dynamic location and price filtering, improving property discovery efficiency by 30%.",
      "Designed RESTful APIs using Node.js and Express.js to manage user profiles and property listings.",
      "Implemented secure authentication using OAuth login, password hashing, and session management.",
      "Optimized MongoDB queries and schemas, reducing backend response time by 35%.",
      "Built rule-based validation dashboards for real-time data quality monitoring.",
    ],
  },
];

export const projects = [
  {
    title: "Corescue - Emergency Rescue Management System",
    period: "Mar 2025 - Jun 2025",
    stack: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "JWT",
      "K-NN Algorithm",
    ],
    description: "MERN Stack web application for emergency rescue management.",
    achievements: [
      "Implemented GPS-based responder matching using k-Nearest Neighbors, reducing emergency response time by 35%.",
      "Integrated Google Maps and OpenWeather APIs for real-time location and weather awareness.",
      "Developed secure role-based authentication for users, responders, and administrators.",
      "Designed backend services to manage SOS alerts and emergency resource tracking.",
    ],
    github: "#",
    live: "#",
  },
  {
    title: "Plant Leaf Disease Detection",
    period: "Dec 2024 - Feb 2025",
    stack: [
      "Python",
      "TensorFlow",
      "Keras",
      "OpenCV",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "StreamLit"
    ],
    description: "Plant Leaf Disease Detection using Deep Learning (CNN).",
    achievements: [
      "Developed a deep learning based plant leaf disease detection system to automatically identify diseases from plant leaf images.",
      "Trained the model on a dataset of 5,400 leaf images across 5 disease classes using a 70% training, 15% validation, and 15% test split.",
      "Implemented image preprocessing using OpenCV, including resizing images to 128×128 resolution, normalization, and noise reduction to improve model learning.",
      "Built and trained a Convolutional Neural Network (CNN) with 4 convolution layers and max-pooling layers using TensorFlow/Keras for disease classification.",
      "Applied data augmentation techniques (rotation, flipping, zooming) which improved model generalization and reduced overfitting.",
      "Achieved 94.2% training accuracy and 91.8% test accuracy, with Precision: 0.90, Recall: 0.89, F1-score: 0.89.",
      "Built a simple prediction interface where users can upload leaf images and receive disease classification results in real time."
    ],
    github: "#",
    live: "#",
  },
  {
    title: "Real Time Communication",
    period: "Dec 2023 - Feb 2024",
    stack: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "WebSocket",
      "Bcrypt",
    ],
    description: "MERN Stack real-time messaging web application.",
    achievements: [
      "Built JWT-based authentication with HTTP-only cookies for secure sessions.",
      "Implemented WebSocket-based real-time messaging with online user tracking.",
      "Designed chat history APIs using MongoDB filters for efficient retrieval.",
      "Enabled file sharing with server-side persistence and message synchronization.",
    ],
    github: "https://github.com/VarunSaiBaddapuram/Reap-Time-Messaging-Web-App",
    live: "#",
  },
  {
    title: "Ransomware Detection and Elimination System.",
    period: "Jul 2023 - Oct 2023",
    stack: [
      "Python",
      "Machine Learning",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "StreamLit",
      "Virtual Box"
    ],
    description: "Ransomware Detection and Elimination using Machine Learning Algorithms.",
    achievements: [
      "Developed a machine learning based ransomware detection system that scans the entire system during initial boot-up to detect files exhibiting malicious or vulnerable behavioral patterns.",
      "Utilized datasets from PE Machine Learning Dataset, EMBER Dataset, and Kaggle malware datasets, combining approximately 8,500 executable samples (malicious + benign) for model training and evaluation.",
      "Engineered 10 behavioral features including file entropy, API call patterns, suspicious permission usage, file size anomalies, and abnormal execution behavior.",
      "Performed data preprocessing and feature extraction using Pandas and NumPy, including normalization and feature scaling to improve model learning performance.",
      "Achieved 93.6% detection accuracy with Random Forest and 90.8% accuracy with Decision Tree, with improved ransomware classification performance using ensemble learning.",
      "Tested the complete system inside a Virtual Machine environment using VirtualBox to safely simulate ransomware behavior without affecting the host operating system.",
      "Built a Streamlit-based interface for demonstration purposes, allowing users to upload and scan individual files and receive real-time predictions (benign or malicious)."
    ],
    github: "https://github.com/VarunSaiBaddapuram/Ransomeware-Detection",
    live: "#",
  },
  {
    title: "Entry way - Ticket Booking Web Application",
    period: "Oct 2023 - Dec 2023",
    stack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB"
    ],
    description: "A web application for booking tickets for Monuments, Museums, Holi Places, Art Galleries.",
    achievements: [
      "Users can browse and explore different cultural locations including monuments, museums, religious places, and art galleries, along with important information such as visiting hours and ticket availability.",
      "Implemented JWT-based authentication for secure login and session management.",
      "Designed a role-based authentication and authorization system to manage platform permissions.Each role is provided with separate dashboards and permissions to ensure controlled access to system resources.",
      "Implemented QR-based ticket generation and verification using the Node.js QR Code library. This allows fast, contactless and paper-less verification at entry points.",
      "Developed RESTful APIs using Node.js and Express.js to handle Authentication, Role-based access control, Ticket booking, QR ticket generation, Ticket verification. ",
      "Integrated MongoDB for efficient data storage and retrieval."
    ],
    github: "https://github.com/VarunSaiBaddapuram/Entry-Way",
    live: "#"
  }
];

export const competitiveProgramming = [
  {
    platform: "CodeChef",
    rating: "1400",
    problems: "600+",
    contests: "30+",
    streak: "100-day",
    url: "https://codechef.com/users/weirdovarun",
  },
  {
    platform: "LeetCode",
    rating: "1400",
    problems: "350+",
    contests: "25+",
    streak: "50-day",
    url: "https://leetcode.com/u/weirdovarun",
  },
  {
    platform: "Codeforces",
    rating: "900",
    problems: "120+",
    contests: "20+",
    streak: "50-day",
    url: "https://codeforces.com/profile/Varun_sai_baddapuram",
  },
];

export const education = [
  {
    institution: "Neil Gogte Institute of Technology, Osmania University",
    degree: "Bachelor of Engineering (B.E)",
    field:
      "Computer Science and Engineering (Artificial Intelligence and Machine Learning)",
    period: "Dec 2021 - Jul 2025",
    score: "CGPA: 8.2 / 10",
  },
  {
    institution: "Sri Chaitanya Junior College",
    degree: "Intermediate",
    field: "Board of Intermediate Education, Telangana",
    period: "May 2019 - Mar 2021",
    score: "836 / 1000",
  },
];

export const certifications = [
  {
    title: "Cisco Networking Academy: Introduction to Data Science",
    date: "Apr 2024",
  },
];