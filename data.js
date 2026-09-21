/**
 * BCA Department Portal - Data Store
 * Centralized Single Source of Truth for all departmental content.
 * Separated cleanly from presentation/UI logic.
 */

const BCA_DATA = {
  departmentInfo: {
    code: "BCA",
    name: "Department of Computer Applications",
    shortName: "BCA Department",
    institution: "Apex Institute of Science & Technology",
    university: "State Technical University (Autonomous)",
    tagline: "Empowering Next-Generation Technologists, Innovators & Leaders",
    establishedYear: 2004,
    accreditation: [
      { body: "NAAC", grade: "A++ (Cycle 3)", score: "3.72/4.0" },
      { body: "NBA", grade: "Tier-1 Accredited", validity: "2024-2029" },
      { body: "AICTE", grade: "Approved Institution", code: "STU-10293" }
    ],
    hod: {
      name: "Dr. Aris Thorne, Ph.D.",
      designation: "Head of Department & Senior Professor",
      qualifications: "Ph.D. in Computer Science (IIT Bombay), M.Tech (Software Eng), B.Tech (CSE)",
      email: "hod.bca@apextech.edu",
      phone: "+91 (080) 4567-8901",
      officeLocation: "Tech Block-A, 3rd Floor, Room 301",
      message: "Welcome to the Department of Computer Applications. Our BCA program is meticulously crafted to bridge academic rigor and industrial frontier technologies. From artificial intelligence to cloud architectures, our students graduate not just with degrees, but with real-world problem-solving capabilities, professional ethics, and an insatiable spirit of inquiry."
    },
    contact: {
      address: "Tech Block-A, Apex Institute Campus, Innovation Valley, Bengaluru, Karnataka 560068",
      email: "bca.admissions@apextech.edu",
      generalInquiries: "info.bca@apextech.edu",
      phone: "+91 (080) 4567-8900 / 8902",
      workingHours: "Monday – Saturday: 9:00 AM – 5:00 PM (2nd & 4th Sat Holiday)",
      emergencyContact: "+91 98765 43210"
    },
    socialLinks: {
      linkedin: "https://linkedin.com/school/apex-bca",
      github: "https://github.com/apex-bca",
      twitter: "https://twitter.com/apex_bca",
      youtube: "https://youtube.com/c/ApexBCAOfficial"
    }
  },

  stats: [
    { label: "Placement Success", value: "96.4%", subtext: "Class of 2025 across top product & service MNCs", icon: "briefcase" },
    { label: "Highest Package", value: "₹24 LPA", subtext: "International & National cloud tier offers", icon: "award" },
    { label: "Faculty Members", value: "28+", subtext: "Over 65% holding Ph.D. or pursuing doctoral research", icon: "users" },
    { label: "Specialized Labs", value: "6 Labs", subtext: "AI/ML, Cloud, IoT, and Web Engineering hubs", icon: "cpu" },
    { label: "Active Student Body", value: "480+", subtext: "Across 3 cohorts with vibrant tech clubs", icon: "graduation-cap" },
    { label: "Alumni Worldwide", value: "2,500+", subtext: "Leading innovation across 18+ countries", icon: "globe" }
  ],

  about: {
    overview: "Established in 2004, the Department of Computer Applications is a premier center of excellence fostering high-caliber computing professionals. Combining theoretical foundations with hands-on coding, product incubations, and research mentorship, our department stands out as a vibrant launchpad for aspiring software engineers, data analysts, cloud architects, and tech entrepreneurs.",
    vision: "To be recognized globally as a center of transformative computing education, pioneering applied research, and producing socially responsible technocrats equipped to lead the digital revolution.",
    mission: [
      "Deliver an industry-aligned, outcome-based computing curriculum continuously refreshed with cutting-edge industry practices.",
      "Cultivate experiential learning through state-of-the-art laboratory infrastructure, capstone projects, and industry internships.",
      "Instill ethical values, analytical problem-solving, lifelong learning attitudes, and entrepreneurial leadership among graduates.",
      "Foster faculty and student research collaborations addressing real-world socio-economic and technological challenges."
    ],
    peos: [
      { id: "PEO1", title: "Core Competence", desc: "Graduates will apply computational theory, algorithmic principles, and modern software tools to architect robust software solutions." },
      { id: "PEO2", title: "Professional Growth", desc: "Graduates will excel in corporate software careers or pursue higher educational credentials with adaptable, multidisciplinary skills." },
      { id: "PEO3", title: "Leadership & Ethics", desc: "Graduates will demonstrate professional integrity, collaborative teamwork, effective communication, and social responsibility." }
    ],
    strengths: [
      { title: "NEP 2020 Compliant", desc: "Choice-Based Credit System (CBCS) with multiple entry/exit options and multidisciplinary minors." },
      { title: "Industry MoUs & Labs", desc: "Active partnerships with AWS Academy, Microsoft Learn, Cisco Networking Academy, and Red Hat." },
      { title: "Project-First Pedagogy", desc: "Mandatory mini-projects in Semesters 3, 4, 5 and a semester-long industry capstone internship in Semester 6." },
      { title: "Coding Culture", desc: "Student-run coding club 'ByteCraft' hosting weekly algorithmic sprints, hackathons, and open-source contributions." }
    ]
  },

  programs: [
    {
      id: "bca-general",
      name: "Bachelor of Computer Applications (General & Honors)",
      duration: "3 Years (6 Semesters) / 4 Years (Honors with Research)",
      degree: "BCA / BCA (Hons.)",
      intake: "120 Seats",
      eligibility: "10+2 / Higher Secondary in any stream with Mathematics / Business Math / Statistics / Computer Science with min 50% aggregate.",
      description: "Comprehensive software engineering foundation spanning object-oriented programming, data structures, full-stack web architectures, database management, and agile methodologies.",
      tracks: ["Full Stack Web Dev", "Mobile Apps (Android & Flutter)", "Enterprise Java & Spring Boot"],
      careers: ["Full-Stack Software Engineer", "Systems Analyst", "Frontend / Backend Developer", "Application Consultant"]
    },
    {
      id: "bca-aiml",
      name: "BCA with Specialization in AI & Machine Learning",
      duration: "3 Years (6 Semesters)",
      degree: "BCA (AI & ML Specialization)",
      intake: "60 Seats",
      eligibility: "10+2 with Mathematics / Computer Science with minimum 55% aggregate.",
      description: "Deep dive into statistical computation, Python for data science, machine learning models, neural networks, computer vision, and natural language processing applications.",
      tracks: ["Supervised & Deep Learning", "NLP & Large Language Models", "Computer Vision & AI Deployment"],
      careers: ["Machine Learning Associate", "Data Scientist / Analyst", "AI Prompt Engineer", "Cognitive Solutions Developer"]
    },
    {
      id: "bca-cloud-cyber",
      name: "BCA with Specialization in Cloud Computing & Cyber Security",
      duration: "3 Years (6 Semesters)",
      degree: "BCA (Cloud & Security)",
      intake: "60 Seats",
      eligibility: "10+2 with Mathematics / Computer Science with minimum 50% aggregate.",
      description: "Focused training on distributed computing, AWS/Azure cloud architecture, containerization with Docker & Kubernetes, ethical hacking, and cyber threat forensics.",
      tracks: ["Cloud Infrastructure & DevOps", "Penetration Testing & SOC Operations", "Network Security Protocols"],
      careers: ["Cloud Support Associate", "DevOps Trainee Engineer", "Cyber Security Analyst", "Information Security Specialist"]
    }
  ],

  curriculum: [
    {
      semester: 1,
      totalCredits: 22,
      courses: [
        { code: "BCA101", title: "Problem Solving & Programming in C", type: "Core Theory", credits: 4, hours: "3L+1T", description: "Structured programming principles, pointers, memory allocation, and modular software design." },
        { code: "BCA102", title: "Foundations of Computer Systems & Architecture", type: "Core Theory", credits: 4, hours: "3L+1T", description: "Digital logic, boolean algebra, processor microarchitecture, memory hierarchy, and I/O buses." },
        { code: "BCA103", title: "Mathematical Foundations for Computing", type: "Allied Theory", credits: 4, hours: "3L+1T", description: "Discrete mathematics, set theory, propositional logic, relations, and graph algorithms." },
        { code: "BCA104", title: "Technical Communication & Soft Skills", type: "Ability Enhancement", credits: 2, hours: "2L", description: "Professional documentation, technical presentations, resume crafting, and interpersonal communication." },
        { code: "BCA105P", title: "C Programming Laboratory", type: "Practical", credits: 2, hours: "4P", description: "Hands-on implementation of algorithmic solutions, sorting, searching, and file structures in C." },
        { code: "BCA106P", title: "Digital Office & Productivity Tools Lab", type: "Practical", credits: 2, hours: "4P", description: "Linux shell scripting basics, markdown, Git version control, and data visualization tools." },
        { code: "BCA107", title: "Environmental Studies & Digital Ethics", type: "Value Added", credits: 4, hours: "2L", description: "Green computing, digital carbon footprints, intellectual property, and cyber ethics." }
      ]
    },
    {
      semester: 2,
      totalCredits: 22,
      courses: [
        { code: "BCA201", title: "Object-Oriented Programming with C++", type: "Core Theory", credits: 4, hours: "3L+1T", description: "Encapsulation, inheritance, polymorphism, templates, STL containers, and modern C++ features." },
        { code: "BCA202", title: "Data Structures & Algorithms", type: "Core Theory", credits: 4, hours: "3L+1T", description: "Linear and non-linear data structures: stacks, queues, trees, graphs, hashing, and complexity analysis." },
        { code: "BCA203", title: "Probability & Applied Statistics", type: "Allied Theory", credits: 4, hours: "3L+1T", description: "Probability distributions, hypothesis testing, linear regression, and variance analysis." },
        { code: "BCA204", title: "Operating Systems Principles", type: "Core Theory", credits: 4, hours: "3L+1T", description: "Process scheduling, thread concurrency, deadlocks, memory management, and virtual memory." },
        { code: "BCA205P", title: "Data Structures & C++ Lab", type: "Practical", credits: 2, hours: "4P", description: "Implementation of trees, graph traversals, shortest path, and custom data containers." },
        { code: "BCA206P", title: "Linux Administration & Shell Lab", type: "Practical", credits: 2, hours: "4P", description: "Command line proficiency, bash scripting, permission handling, process monitoring, and networking utilities." },
        { code: "BCA207", title: "Critical Thinking & Reasoning", type: "Ability Enhancement", credits: 2, hours: "2L", description: "Aptitude development, quantitative reasoning, and algorithmic logic formulation." }
      ]
    },
    {
      semester: 3,
      totalCredits: 24,
      courses: [
        { code: "BCA301", title: "Database Management Systems (DBMS)", type: "Core Theory", credits: 4, hours: "3L+1T", description: "Relational algebra, SQL, normalization (1NF-BCNF), indexing, transactions, and ACID properties." },
        { code: "BCA302", title: "Java Programming (Core & Advanced)", type: "Core Theory", credits: 4, hours: "3L+1T", description: "JVM architecture, collections, multithreading, I/O streams, lambda expressions, and JDBC." },
        { code: "BCA303", title: "Computer Networks & Protocols", type: "Core Theory", credits: 4, hours: "3L+1T", description: "OSI and TCP/IP models, routing protocols, subnetting, transport layer sockets, and DNS/HTTP." },
        { code: "BCA304", title: "Web Technologies & UI/UX Essentials", type: "Skill Enhancement", credits: 3, hours: "3L", description: "Semantic HTML5, CSS Grid/Flexbox, modern JavaScript (ES6+), responsive design, and UI wireframing." },
        { code: "BCA305P", title: "RDBMS & SQL Laboratory", type: "Practical", credits: 2, hours: "4P", description: "PostgreSQL/MySQL queries, triggers, stored procedures, view generation, and transaction handling." },
        { code: "BCA306P", title: "Java Programming Laboratory", type: "Practical", credits: 2, hours: "4P", description: "Building multi-tier console and GUI apps using Java, OOP design patterns, and database connectivity." },
        { code: "BCA307P", title: "Mini Project - I (Web Engineering)", type: "Project", credits: 3, hours: "4P", description: "Team-based development of an interactive client-side web application incorporating version control." },
        { code: "BCA308", title: "Open Elective - I", type: "Elective", credits: 2, hours: "2L", description: "Cross-department elective: E-Commerce Fundamentals / Financial Accounting for IT." }
      ]
    },
    {
      semester: 4,
      totalCredits: 24,
      courses: [
        { code: "BCA401", title: "Python Programming & Data Science Toolkit", type: "Core Theory", credits: 4, hours: "3L+1T", description: "Pythonic idioms, NumPy, Pandas, Matplotlib, Scikit-learn, and exploratory data analysis." },
        { code: "BCA402", title: "Software Engineering & Agile Methodologies", type: "Core Theory", credits: 4, hours: "3L+1T", description: "SDLC phases, Scrum, sprint planning, Jira workflows, UML modeling, and automated testing." },
        { code: "BCA403", title: "Cloud Computing Fundamentals", type: "Core Theory", credits: 3, hours: "3L", description: "IaaS, PaaS, SaaS models, virtualization, AWS core services (EC2, S3, IAM), and serverless computing." },
        { code: "BCA404", title: "Elective - I (Specialization Track)", type: "Discipline Elective", credits: 3, hours: "3L", description: "Choose Track: Intro to Machine Learning / Cyber Forensics / React.js Fullstack." },
        { code: "BCA405P", title: "Python & Data Analytics Lab", type: "Practical", credits: 2, hours: "4P", description: "Data wrangling, cleansing, exploratory visual dashboards, and baseline predictive model fitting." },
        { code: "BCA406P", title: "Cloud & DevOps Lab", type: "Practical", credits: 2, hours: "4P", description: "Deploying web applications to AWS, configuring Docker containers, and establishing CI/CD pipelines." },
        { code: "BCA407P", title: "Mini Project - II (Full Stack Application)", type: "Project", credits: 4, hours: "4P", description: "End-to-end full stack web application featuring RESTful API, authentication, and database persistence." },
        { code: "BCA408", title: "Life Skills & Personality Mastery", type: "Ability Enhancement", credits: 2, hours: "2L", description: "Mock HR interviews, group discussions, business etiquette, and emotional intelligence." }
      ]
    },
    {
      semester: 5,
      totalCredits: 24,
      courses: [
        { code: "BCA501", title: "Information Security & Cryptography", type: "Core Theory", credits: 4, hours: "3L+1T", description: "Symmetric/asymmetric encryption, hashing, digital certificates, OWASP Top 10 vulnerabilities, and firewalls." },
        { code: "BCA502", title: "Enterprise Web Frameworks (Node & Spring)", type: "Core Theory", credits: 4, hours: "3L+1T", description: "Microservices architecture, REST/GraphQL design, Express.js / Spring Boot middleware, and JWT security." },
        { code: "BCA503", title: "Elective - II (Specialization Track)", type: "Discipline Elective", credits: 4, hours: "3L+1T", description: "Choose: Deep Learning & NLP / Cloud Native Architecture / Mobile App Development (Flutter)." },
        { code: "BCA504", title: "Elective - III (Domain Specialization)", type: "Discipline Elective", credits: 3, hours: "3L", description: "Choose: Internet of Things (IoT) / Big Data Analytics (Hadoop & Spark) / Blockchain Fundamentals." },
        { code: "BCA505P", title: "Enterprise Frameworks Lab", type: "Practical", credits: 2, hours: "4P", description: "Building microservices, handling API gateways, state management, and continuous integration." },
        { code: "BCA506P", title: "Specialization Track Lab", type: "Practical", credits: 2, hours: "4P", description: "Hands-on projects tailored to the selected elective specialization." },
        { code: "BCA507P", title: "Capstone Project Phase - I", type: "Project", credits: 3, hours: "4P", description: "Problem identification, literature survey, software requirement specification (SRS), and architectural blueprint." },
        { code: "BCA508", title: "Research Methodology & Intellectual Property", type: "Value Added", credits: 2, hours: "2L", description: "Research ethics, technical paper writing, patent filing procedures, and bibliography formatting." }
      ]
    },
    {
      semester: 6,
      totalCredits: 20,
      courses: [
        { code: "BCA601", title: "DevOps, Containerization & Kubernetes", type: "Core Theory", credits: 3, hours: "3L", description: "Infrastructure as Code (Terraform), Kubernetes orchestration, monitoring (Prometheus/Grafana), and SRE principles." },
        { code: "BCA602", title: "Software Quality Assurance & Automated Testing", type: "Core Theory", credits: 3, hours: "3L", description: "Selenium test automation, Jest, unit testing, performance benchmarking, and test-driven development (TDD)." },
        { code: "BCA603", title: "Open Elective - II / Emerging Technologies", type: "Elective", credits: 3, hours: "3L", description: "Generative AI Systems & Prompt Engineering / Quantum Computing Primer / AR-VR Technologies." },
        { code: "BCA604P", title: "Industry Internship / Full-Semester Capstone Project", type: "Industry Capstone", credits: 10, hours: "20P", description: "16-week full-time industrial internship in an IT enterprise OR on-campus research project with defense/viva voce." },
        { code: "BCA605", title: "Comprehensive Departmental Viva Voce", type: "Evaluation", credits: 1, hours: "Evaluation", description: "Comprehensive oral examination covering foundational and advanced computing competencies." }
      ]
    }
  ],

  faculty: [
    {
      id: "fac-01",
      name: "Dr. Aris Thorne",
      title: "Head of Department & Professor",
      category: "Professors",
      qualification: "Ph.D. (IIT Bombay), M.Tech, B.Tech",
      experience: "22 Years",
      specialization: "Distributed Systems, Cloud Architectures, High Performance Computing",
      email: "hod.bca@apextech.edu",
      subjects: ["Cloud Computing", "Computer Networks", "Distributed Systems"],
      publications: 48,
      avatar: "👨‍🏫",
      bio: "Dr. Thorne has served as consultant for major enterprise cloud migrations and has published over 45 papers in IEEE and ACM transactions. He champions industry-academia partnerships."
    },
    {
      id: "fac-02",
      name: "Dr. Meera Vasudevan",
      title: "Professor & Academic Dean",
      category: "Professors",
      qualification: "Ph.D. (IISc Bangalore), M.E., B.E.",
      experience: "19 Years",
      specialization: "Artificial Intelligence, Deep Learning, Natural Language Processing",
      email: "meera.v@apextech.edu",
      subjects: ["Machine Learning", "Artificial Intelligence", "Python for Data Science"],
      publications: 39,
      avatar: "👩‍🏫",
      bio: "Dr. Meera spearheads the AI & Cognitive Computing Research Lab. Recipient of the National Women in AI Research Award and holds 4 published patents."
    },
    {
      id: "fac-03",
      name: "Dr. Rajeshwar Kulkarni",
      title: "Associate Professor",
      category: "Associate Professors",
      qualification: "Ph.D. (NIT Surathkal), M.Tech, MCA",
      experience: "15 Years",
      specialization: "Database Systems, Big Data Analytics, Query Optimization",
      email: "rajeshwar.k@apextech.edu",
      subjects: ["DBMS", "Big Data Analytics", "Advanced SQL"],
      publications: 26,
      avatar: "👨‍💻",
      bio: "Expert in scalable relational and NoSQL storage engines. Has delivered over 30 keynote sessions on big data workflows and distributed querying."
    },
    {
      id: "fac-04",
      name: "Prof. Priya Chandran",
      title: "Associate Professor",
      category: "Associate Professors",
      qualification: "M.Tech (Software Eng), B.Tech (CSE), Pursuing Ph.D.",
      experience: "13 Years",
      specialization: "Cyber Security, Ethical Hacking, Network Forensics",
      email: "priya.c@apextech.edu",
      subjects: ["Information Security & Cryptography", "Computer Networks", "Cyber Forensics"],
      publications: 18,
      avatar: "👩‍💻",
      bio: "Certified Ethical Hacker (CEH v12) and CISSP trainer. Mentors the university Capture The Flag (CTF) security team with top state rankings."
    },
    {
      id: "fac-05",
      name: "Dr. Alok Sen Gupta",
      title: "Associate Professor",
      category: "Associate Professors",
      qualification: "Ph.D. (BITS Pilani), M.Tech",
      experience: "14 Years",
      specialization: "Algorithms, Graph Theory, Theory of Computation",
      email: "alok.sengupta@apextech.edu",
      subjects: ["Data Structures & Algorithms", "Discrete Mathematics", "Operating Systems"],
      publications: 22,
      avatar: "👨‍🔬",
      bio: "Renowned competitive programming coach. Lead advisor for the student developer club, coaching students who qualified for ACM-ICPC regionals."
    },
    {
      id: "fac-06",
      name: "Prof. Sneha Nandakumar",
      title: "Assistant Professor & Placement Coordinator",
      category: "Assistant Professors",
      qualification: "M.Tech (Computer Science), MCA",
      experience: "9 Years",
      specialization: "Full Stack Web Engineering, Microservices, DevOps",
      email: "sneha.n@apextech.edu",
      subjects: ["Enterprise Web Frameworks", "Web Technologies", "Java Programming"],
      publications: 11,
      avatar: "👩‍💼",
      bio: "Ex-Senior Full Stack Engineer at an international SaaS unicorn. Bridges real industry coding standards and corporate interview training into class curricula."
    },
    {
      id: "fac-07",
      name: "Prof. Vikramaditya Rao",
      title: "Assistant Professor",
      category: "Assistant Professors",
      qualification: "M.Tech (Data Science), B.Tech (IT)",
      experience: "8 Years",
      specialization: "Computer Vision, Image Processing, Edge AI",
      email: "vikram.rao@apextech.edu",
      subjects: ["Deep Learning Lab", "Python Programming", "C++ Programming"],
      publications: 9,
      avatar: "👨‍🏫",
      bio: "Active contributor to open-source PyTorch ecosystem and OpenCV applications. Mentors autonomous drone and vision robotics student projects."
    },
    {
      id: "fac-08",
      name: "Prof. Divya Raghunath",
      title: "Assistant Professor",
      category: "Assistant Professors",
      qualification: "M.Tech (Network Systems), MCA",
      experience: "7 Years",
      specialization: "Internet of Things (IoT), Embedded Systems, Wireless Sensor Nets",
      email: "divya.r@apextech.edu",
      subjects: ["IoT & Embedded Systems", "Linux Administration", "Operating Systems"],
      publications: 8,
      avatar: "👩‍🔬",
      bio: "Curates the IoT hardware prototyping lab. Guides students through Arduino, ESP32, and Raspberry Pi smart campus automation initiatives."
    },
    {
      id: "fac-09",
      name: "Mr. Karthik Natarajan",
      title: "Senior Laboratory Instructor",
      category: "Technical Staff",
      qualification: "B.Tech (CSE), CCNA, AWS Solutions Architect",
      experience: "11 Years",
      specialization: "System Administration, Cloud Infrastructure, Docker / Kubernetes",
      email: "karthik.lab@apextech.edu",
      subjects: ["Cloud & DevOps Lab", "Networking Lab"],
      publications: 2,
      avatar: "👨‍🔧",
      bio: "Manages the department's private server rack, high-speed virtualized sandboxes, and ensures zero-downtime campus lab operations."
    },
    {
      id: "fac-10",
      name: "Ms. Ananya Deshmukh",
      title: "Laboratory Instructor",
      category: "Technical Staff",
      qualification: "MCA, Red Hat Certified Engineer (RHCE)",
      experience: "6 Years",
      specialization: "Open Source Systems, Database Clusters, Shell Automation",
      email: "ananya.lab@apextech.edu",
      subjects: ["RDBMS & SQL Lab", "Linux Shell Lab", "C Programming Lab"],
      publications: 1,
      avatar: "👩‍🔧",
      bio: "Specializes in modern Linux system provisioning, student automated code submission portals, and hands-on debugging clinics."
    }
  ],

  notices: [
    {
      id: "not-01",
      title: "End-Semester Practical & Theory Examination Schedule (Even Sem 2025)",
      category: "Examinations",
      date: "2026-09-18",
      urgent: true,
      pinned: true,
      summary: "Detailed timetable for BCA Sem 2, 4, and 6 End-Semester Examinations released by the Controller of Examinations.",
      content: "All students are instructed to download their hall tickets from the student portal starting September 22. Strict adherence to exam hall rules and identity cards is mandatory. No electronic gadgets except approved calculators for numerical papers are permitted.",
      fileUrl: "#",
      fileLabel: "Download Timetable PDF (420 KB)"
    },
    {
      id: "not-02",
      title: "Campus Placement Drive: CloudFront Technologies & Tata Consultancy",
      category: "Placements",
      date: "2026-09-15",
      urgent: false,
      pinned: true,
      summary: "Registration open for 6th semester BCA students with minimum 60% aggregate and no active backlogs.",
      content: "CloudFront Technologies will conduct online technical screening for Cloud Trainee & Software Developer roles (CTC: ₹6.5 – ₹11 LPA). Shortlisted students will attend group discussions and technical interviews on September 28 at Seminar Hall 2.",
      fileUrl: "#",
      fileLabel: "Register on Placement Portal"
    },
    {
      id: "not-03",
      title: "Call for Papers: 5th National Student Tech Symposium 'BYTECON 2026'",
      category: "Academic",
      date: "2026-09-12",
      urgent: false,
      pinned: false,
      summary: "Submissions invited on Artificial Intelligence, Cyber Security, Blockchain, and Sustainable Computing.",
      content: "Undergraduate students can submit full research papers or work-in-progress posters. Selected manuscripts will be published in the departmental symposium proceedings with an ISBN number. Best paper prize: ₹15,000.",
      fileUrl: "#",
      fileLabel: "Submission Guidelines PDF"
    },
    {
      id: "not-04",
      title: "AWS Cloud Certification Sponsorship & Discount Vouchers",
      category: "Academic",
      date: "2026-09-08",
      urgent: false,
      pinned: false,
      summary: "AWS Academy offering 50% discount vouchers for Cloud Practitioner and Solutions Architect Associate exams.",
      content: "BCA students who have completed the internal Cloud Computing course with grade 'A' or above are eligible to claim the discount voucher. Apply before September 30 through the department lab coordinator.",
      fileUrl: "#",
      fileLabel: "Voucher Application Form"
    },
    {
      id: "not-05",
      title: "Semester Fee Payment & Subject Registration Last Date Extended",
      category: "General",
      date: "2026-09-04",
      urgent: false,
      pinned: false,
      summary: "The deadline for elective course selection and balance semester fee clearance is extended to September 25.",
      content: "Students unable to register their electives for Semester 3 and Semester 5 can complete the process through the student ERP without late fee penalty until September 25, 5:00 PM.",
      fileUrl: "#",
      fileLabel: "ERP Portal Link"
    },
    {
      id: "not-06",
      title: "Annual Sports & Cultural Week 'Spandana' Auditions",
      category: "Events",
      date: "2026-08-29",
      urgent: false,
      pinned: false,
      summary: "Department auditions for inter-departmental coding sprints, debate, e-sports, and theater teams.",
      content: "BCA Department cultural and technical committees invite energetic participants to showcase their talents. Auditions will take place at Room 204 from 4:30 PM to 6:30 PM.",
      fileUrl: "#",
      fileLabel: "Audition Schedule"
    }
  ],

  events: [
    {
      id: "evt-01",
      title: "ByteCraft 36-Hour National Hackathon 2026",
      type: "Upcoming",
      category: "Hackathon",
      date: "October 10-12, 2026",
      time: "Starts 9:00 AM (36 Hours Continuous)",
      venue: "Main Computing Hub & Innovation Arena",
      imageTag: "hackathon",
      speaker: "Jury from Microsoft, Google & Zerodha",
      description: "Our flagship annual hackathon bringing together 80+ student teams to solve real-world challenges across FinTech, HealthTech, AI Agents, and Smart City Governance. Over ₹1,50,000 in cash prizes, API credits, and angel mentorship.",
      registrationStatus: "Open",
      ctaLabel: "Register Your Team"
    },
    {
      id: "evt-02",
      title: "Masterclass: Building Scalable LLM Applications with LangChain & Vector DBs",
      type: "Upcoming",
      category: "Workshop",
      date: "October 18, 2026",
      time: "10:00 AM – 4:00 PM",
      venue: "Department Seminar Hall & Hybrid Online",
      imageTag: "ai-workshop",
      speaker: "Dr. Vikram Sethi (Principal AI Architect, NeuraCloud)",
      description: "An intensive hands-on workshop covering Retrieval-Augmented Generation (RAG), vector similarity search with Pinecone/Qdrant, prompt chaining, and deploying production-ready AI agents.",
      registrationStatus: "Open",
      ctaLabel: "Reserve Seat (Limited 60)"
    },
    {
      id: "evt-03",
      title: "Hands-on Bootcamp: Kubernetes in Production & GitOps with ArgoCD",
      type: "Upcoming",
      category: "Bootcamp",
      date: "November 05-07, 2026",
      time: "2:00 PM – 5:30 PM Daily",
      venue: "Advanced Cloud & Networks Lab (Lab 3)",
      imageTag: "cloud-bootcamp",
      speaker: "Mr. Rohan Mehta (DevOps Lead, CloudCraft Systems)",
      description: "Learn zero-downtime rolling upgrades, ingress controllers, cluster scaling, Helm charts, and continuous deployment workflows directly on enterprise cloud testbeds.",
      registrationStatus: "Open",
      ctaLabel: "Enroll Now"
    },
    {
      id: "evt-04",
      title: "Distinguished Guest Lecture: The Evolution of Web3 & Decentralized Ledgers",
      type: "Past",
      category: "Guest Lecture",
      date: "August 24, 2026",
      time: "11:00 AM – 1:00 PM",
      venue: "Auditorium Block-B",
      imageTag: "guest-lecture",
      speaker: "Ms. Shalini Gupta (VP Engineering, Polygon Labs)",
      description: "Delved into zero-knowledge rollups, EVM compatibility, and cryptographic guarantees securing modern decentralized protocols. Attended by over 320 undergraduate students.",
      registrationStatus: "Completed",
      ctaLabel: "View Event Highlights"
    },
    {
      id: "evt-05",
      title: "Cyber Security CTF (Capture The Flag) Intra-College Championship",
      type: "Past",
      category: "Competition",
      date: "July 15, 2026",
      time: "Full Day (8 Hours)",
      venue: "Network Security Lab (Lab 4)",
      imageTag: "cyber-ctf",
      speaker: "Organized by BCA Cyber Club",
      description: "Students competed in jeopardy-style security challenges covering reverse engineering, binary exploitation, web vulnerabilities (SQLi, XSS, CSRF), and digital steganography.",
      registrationStatus: "Completed",
      ctaLabel: "See Winners List"
    }
  ],

  facilities: [
    {
      id: "fac-lab1",
      name: "High-Performance AI & Data Science Lab",
      category: "Computing Laboratory",
      capacity: "60 Workstations",
      tag: "Flagship Research Hub",
      icon: "cpu",
      specs: [
        "Intel Core i9-14900K, 64 GB DDR5 RAM, NVIDIA RTX 4080 (16 GB VRAM) Workstations",
        "Preloaded with PyTorch, TensorFlow, CUDA Toolkit, JupyterHub, and Apache Spark clusters",
        "High-throughput 10 Gbps fiber backbone connected to central campus computational server",
        "Dual 4K HDR IPS development monitors per terminal for deep data visualization"
      ],
      description: "Engineered specifically for training complex neural networks, big data wrangling, parallel computing algorithms, and undergraduate capstone research experiments."
    },
    {
      id: "fac-lab2",
      name: "Advanced Software Engineering & Web Tech Lab",
      category: "Computing Laboratory",
      capacity: "65 Workstations",
      tag: "Development Hub",
      icon: "code",
      specs: [
        "Intel Core i7-13700, 32 GB RAM, 1 TB NVMe SSD fast development machines",
        "Dual-boot configuration: Ubuntu 24.04 LTS & Windows 11 Enterprise",
        "Configured with Docker, Node.js, OpenJDK 21, VS Code, IntelliJ IDEA Ultimate, and Git",
        "Local intranet Gitlab server for automated student code verification and continuous integration"
      ],
      description: "Dedicated to modern full-stack development, mobile applications, data structures programming, and team-based agile software engineering sprints."
    },
    {
      id: "fac-lab3",
      name: "Cloud Computing & Cyber Defense Sandbox Lab",
      category: "Specialized Laboratory",
      capacity: "50 Workstations",
      tag: "Security & Cloud Hub",
      icon: "shield",
      specs: [
        "Dedicated isolated network rack with Cisco Catalyst layer-3 switches and Fortinet hardware firewalls",
        "Kali Linux penetration testing suites, Wireshark, Metasploit, Nessus, and Burp Suite Pro",
        "AWS Academy Cloud Workstation sandbox environments for hands-on cloud provisioning",
        "Automated CTF scoring engines and threat modeling simulation tools"
      ],
      description: "A secure, air-gapped experimental environment where students dissect network packets, learn ethical hacking countermeasures, and architect resilient cloud topologies."
    },
    {
      id: "fac-lab4",
      name: "IoT & Embedded Computing Hardware Lab",
      category: "Hardware Laboratory",
      capacity: "45 Stations",
      tag: "Prototyping Arena",
      icon: "activity",
      specs: [
        "Over 80 kit sets: Raspberry Pi 5, Arduino Mega/Uno, ESP32, and STM32 microcontroller boards",
        "Comprehensive sensor packs (LiDAR, ultrasonic, environmental, biometric, and RF transceivers)",
        "Digital storage oscilloscopes, soldering workbenches, and logic analyzers",
        "High-precision 3D rapid prototyping printer for custom robotics enclosures"
      ],
      description: "Where software meets physical hardware. Students construct smart home systems, automated agricultural telemetry nodes, and autonomous mobile robots."
    },
    {
      id: "fac-lib",
      name: "Departmental Library & Digital Information Resource Center",
      category: "Knowledge Center",
      capacity: "90 Seating Capacity",
      tag: "Digital & Physical Library",
      icon: "book-open",
      specs: [
        "6,500+ physical volumes dedicated exclusively to computing, software engineering, and mathematics",
        "Full campus subscriptions to IEEE Xplore, ACM Digital Library, SpringerLink, and ScienceDirect",
        "20 dedicated high-speed digital research terminals for browsing journals and e-books",
        "Dedicated quiet study zones and collaborative whiteboarding discussion pods"
      ],
      description: "An inspiring intellectual sanctuary providing round-the-clock digital access to the world's foremost computer science research papers, monographs, and textbooks."
    },
    {
      id: "fac-hall",
      name: "Smart Multimedia Lecture Theatres & Turing Seminar Hall",
      category: "Instructional Space",
      capacity: "180 Seating Capacity",
      tag: "Smart Classrooms",
      icon: "monitor",
      specs: [
        "Acoustically tuned lecture theatre with tiered ergonomic seating and charging docks",
        "Interactive 86-inch 4K touchscreen digital smart boards with live cloud whiteboarding",
        "Dual 4K laser projection system, wireless lapel microphones, and studio audio mixers",
        "Integrated high-definition pan-tilt-zoom cameras for seamless hybrid lectures and global webinars"
      ],
      description: "Hosts guest lectures, national symposia, research paper defenses, and tech club hackathon kickoff presentations in a premier audio-visual environment."
    }
  ],

  faqs: [
    {
      question: "What makes the BCA program at Apex Institute distinct from traditional degrees?",
      answer: "Our curriculum is 100% aligned with NEP 2020 guidelines and developed in active consultation with top software enterprise leaders. Students undergo mandatory hands-on projects every semester, earn industry certifications (AWS, Red Hat, Oracle), and complete a 16-week full-time corporate internship in their final semester."
    },
    {
      question: "What are the eligibility criteria for admissions into BCA?",
      answer: "Candidates must have passed 10+2 or equivalent examination with minimum 50% aggregate marks (45% for reserved categories). Candidates must have studied Mathematics, Business Mathematics, Statistics, or Computer Science at the qualifying level."
    },
    {
      question: "Can BCA students participate in campus placements alongside B.Tech graduates?",
      answer: "Yes! Over 120+ top-tier IT companies, product organizations, and fintech firms recruit BCA graduates directly. Roles offered include Full-Stack Developer, Cloud Support Associate, Data Analyst, Quality Assurance Engineer, and Cyber Security Analyst, with competitive compensation packages ranging up to ₹24 LPA."
    },
    {
      question: "Are there opportunities for higher studies and research after graduation?",
      answer: "Absolutely. Graduates can pursue MCA, M.Sc. in Computer Science/Data Science, MBA in Technology Management, or international M.S. degrees. Under the 4-year NEP framework, students completing BCA (Honors with Research) are directly eligible for direct Ph.D. admissions in many premier universities."
    },
    {
      question: "What scholarships and financial aid are available for students?",
      answer: "Merit-based scholarships are awarded to students scoring above 90% in 10+2 examinations. Additionally, institutional fee concessions, sports excellence scholarships, and state/central government scholarship facilitation are available for eligible candidates."
    }
  ]
};

// Expose globally so it works via file:// protocol without any CORS restrictions
window.BCA_DATA = BCA_DATA;
