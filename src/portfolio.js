/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to true if you want to use the splash screen.
  useCustomCursor: false, // Change this to false if you want the good'ol cursor
  googleTrackingID: "G-0G3SBVY8Y2",
};

//Home Page
const greeting = {
  title: "Hello 👋.",
  title2: "Hakim",
  logo_name: "hakim.h()",
  nickname: "hildhan / hakim",
  full_name: "Hildhan Fauzul Hakim",
  subTitle: "Full Stack Developer, Software Engineering, and Hard Worker person 🔥.",
  resumeLink:
    "https://drive.google.com/file/d/1as7UaNHZNcBAL3-hSrDhCkOmEK3le76-/view?usp=sharing",
  mail: "mailto:hildhan123@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/hildhan123",
  linkedin: "https://www.linkedin.com/in/hildhan-fauzul-hakim/",
  gmail: "hildhan123@gmail.com",
  // gitlab: "#",
  facebook: "https://www.facebook.com/hildhan.hakim/",
  youtube: "http://www.youtube.com/@hildhanfauzulhakim1778/",
  instagram: "https://www.instagram.com/hakim_hildhan/",
};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Develop interactive and modern web applications using JavaScript and TypeScript",
        "⚡ Build responsive front-end interfaces with frameworks like React.js and Next.js",
        "⚡ Create robust backend systems using PHP (Laravel) and Node.js",
        "⚡ Deploy and manage applications on cloud platforms such as AWS and Google Cloud Platform",
        "⚡ Integrate third-party services and APIs to enhance application functionality",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "devicon-plain:java-wordmark",
          style: {
            color: "#f89820",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "simple-icons:typescript",
          style: {
            color: "#3178C6",
          },
        },
        {
          skillName: "PHP",
          fontAwesomeClassname: "logos:php",
          style: {
            color: "#777BB4",
          },
        },
        {
          skillName: "C#",
          fontAwesomeClassname: "simple-icons:csharp",
          style: {
            color: "#239120",
          },
        },
        {
          skillName: "Next.js",
          fontAwesomeClassname: "devicon:nextjs",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "Laravel",
          fontAwesomeClassname: "logos:laravel",
          style: {
            color: "#FF2D20",
          },
        },

      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Hands-on experience with AWS and Google Cloud Platform",
        "⚡ Hosting and managing web applications using cloud services",
        "⚡ Familiar with basic CI/CD workflows and deployment automation",
        "⚡ Continuously learning to optimize cloud infrastructure and deployment pipelines",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "GCP",
          fontAwesomeClassname: "logos:google-cloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "#6863A6",
          },
        },
        {
          skillName: "Vercel",
          fontAwesomeClassname: "simple-icons:vercel",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "tRPC",
          fontAwesomeClassname: "simple-icons:trpc",
          style: {
            color: "#2596be",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "WordPress",
          fontAwesomeClassname: "simple-icons:wordpress",
          style: {
            color: "#21759B",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "SEO",
          fontAwesomeClassname: "simple-icons:google",
          style: {
            color: "#34A853",
          },
        },
        {
          skillName: "Unity",
          fontAwesomeClassname: "simple-icons:unity",
          style: {
            color: "#000000",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Private Education Institution Nakamura Eisu Gakuen",
      subtitle: "Japanese Language Course",
      logo_path: "nakamura.png",
      alt_name: "nakamura",
      duration: "2025 - 2026 Mar (Expected)",
      descriptions: [
        "🎯 Aiming to achieve JLPT N1/N2 proficiency to support career opportunities in Japan.",
        "📚 Intensive Japanese language training focused on reading, writing, listening, and speaking skills.",
        "🌏 Preparing for work and daily life adaptation in Japan through cultural and language immersion.",
      ],
      website_link: "https://www.kyushu-eisu.ac.jp/en/",
    },
    {
      title: "State University of Malang",
      subtitle: "Bachelor in Information Technology",
      logo_path: "logoUM.png",
      alt_name: "UM",
      duration: "2020 - 2024",
      descriptions: [
        "🎓 GPA: 3.85 / 4.00",
        "⚡ Active in lecturer's projects and organizational activities (Workshop Electro).",
        "🧑‍💻 Worked as a freelance Fullstack and Backend Developer during college.",
        "🏆 Participated in various national competitions and bootcamps",
        "💡 Gained practical experience in Fullstack Development, Game Programming, and Software Engineering.",
      ],
      website_link: "https://um.ac.id/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Associate Cloud Engineer",
      subtitle: "Google Cloud",
      logo_path: "gcp.png",
      certificate_link: "https://drive.google.com/file/d/1KpZmIMt7Hhor_BibFLstth0puAl0OaV1/view?usp=drive_link",
      alt_name: "Google Cloud",
      color_code: "#708090",
    },
    {
      title: "Become a Google Cloud Engineer ",
      subtitle: "Dicoding",
      logo_path: "gcp.png",
      certificate_link: "https://drive.google.com/file/d/1KMEtq4tlHAL5E66278RUF2e5mOGV2HUr/view?usp=drive_link",
      alt_name: "Dicoding",
      color_code: "#4682B4",
    },
    {
      title: "Become a Google Cloud Architect",
      subtitle: "Dicoding",
      logo_path: "gcp.png",
      certificate_link: "https://drive.google.com/file/d/1gsxv1gWdZ1ctlPBHMUXvZHN4EORs6bRp/view?usp=drive_link",
      alt_name: "Dicoding",
      color_code: "#8E44AD",
    },
    {
      title: "System Administration and IT Infrastructure Services",
      subtitle: "Coursera by Google",
      logo_path: "google_logo.png",
      certificate_link: "https://drive.google.com/file/d/1TiJJDw3DIDqhNETdkFYFTgIoO3_t7ngv/view?usp=drive_link",
      alt_name: "Coursera by Google",
      color_code: "#E67E22",
    },
    {
      title: "The Bits and Bytes of Computer Networking",
      subtitle: "Coursera by Google",
      logo_path: "google_logo.png",
      certificate_link: "https://drive.google.com/file/d/1B36AYzdPv_ts68Jx2PtjSUnQISg7hYuz/view?usp=drive_link",
      alt_name: "Coursera by Google",
      color_code: "#191970",
    },
    {
      title: "Create back-end applications with GCP",
      subtitle: "Dicoding",
      logo_path: "gcp.png",
      certificate_link: "https://drive.google.com/file/d/14EvdgIb1SLcoMlcyfYQyjOfWC3mFBFjT/view?usp=drive_link",
      alt_name: "Dicoding",
      color_code: "#D35400",
    },
    {
      title: "Cloud Computing Training",
      subtitle: "Kemdikbud - Ministry of Education and Culture",
      logo_path: "huawei.png",
      certificate_link: "https://drive.google.com/file/d/1Iv4P7ZkDDPIn5tUPg0dRxotYWdOpjdMs/view?usp=drive_link",
      alt_name: "Kemdikbud",
      color_code: "#3498DB",
    },
    {
      title: "Finalis Startup Competition (IWDM)",
      subtitle: "Kemdikbud - Ministry of Education and Culture",
      logo_path: "kemdikbud.png",
      certificate_link: "https://drive.google.com/file/d/1X9V7M6BrqLwhXlGLZTLBgaaWNXnXMpYR/view?usp=drive_link",
      alt_name: "Kemdikbud",
      color_code: "#AF7AC5",
    },
    {
      title: "Finalis Game Competition (Gemastik)",
      subtitle: "Kemdikbud - Ministry of Education and Culture",
      logo_path: "unity.png",
      certificate_link: "https://drive.google.com/file/d/1cND2Sg-toYErAWMhEd7FV2_OS3I0vU9m/view?usp=drive_link",
      alt_name: "Kemdikbud",
      color_code: "#FFFF00",
    },
    {
      title: "HCIA Cloud Service Course",
      subtitle: "Huawei Cloud",
      logo_path: "huawei.png",
      certificate_link: "https://drive.google.com/file/d/1Q2iSweiuXuiX2TRVYfwlrWEGAyBwS7B5/view?usp=drive_link",
      alt_name: "Huawei",
      color_code: "#1ABC9C",
    },
    {
      title: "Learn AWS Essentials",
      subtitle: "Dicoding",
      logo_path: "aws.png",
      certificate_link: "https://drive.google.com/file/d/1xYXanUzXMw58f6VxngsR9AObNtqRzLiJ/view?usp=drive_link",
      alt_name: "Dicoding",
      color_code: "#00BCD4",
    },
    {
      title: "TOEFL ITP Prediction",
      subtitle: "Webster",
      logo_path: "toefl.png",
      certificate_link: "https://drive.google.com/file/d/10V7KVCl0bPfDgCm2HOaWmhfWG9lQ7eqi/view?usp=drive_link",
      alt_name: "Webster",
      color_code: "#2ECC71",
    },
    {
      title: "Learn Flutter",
      subtitle: "Dicoding",
      logo_path: "flutter.png",
      certificate_link: "https://drive.google.com/file/d/1lggfVCLtaoEEaAgCW2aepGVU38Tr162V/view?usp=drive_link",
      alt_name: "Dicoding",
      color_code: "#FFFF00",
    },
    {
      title: "Duolingo English Test Score",
      subtitle: "Duolingo",
      logo_path: "duolingo.png",
      certificate_link: "https://drive.google.com/file/d/1LiTgDhsWfvWG9h5iUV0Qq5zG-EHWy-KA/view?usp=drive_link",
      alt_name: "Duolingo",
      color_code: "#2ECC71",
    },
    {
      title: "Learn Adonis.js",
      subtitle: "Dicoding",
      logo_path: "adonisjs.png",
      certificate_link: "https://drive.google.com/file/d/169EnL9Nz2mqyB6i9PBIZ4AOOghkN1I6R/view?usp=drive_link",
      alt_name: "Dicoding",
      color_code: "#00BCD4",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Startup",
  description:
    "As a Node.js Backend Developer, I have worked with real projects for over two years. I've mostly done projects on my own. I love organizing workshops to share my knowledge with others.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Engineer (Part-time)",
          company: "Expact Inc.",
          company_url: "https://expact.co.jp/",
          logo_path: "expactJP.png",
          duration: "Aug 2024 - Present",
          location: "Shizuoka, Japan (Remote)",
          description:
            "At Expact Inc., I work remotely as a fullstack engineer, developing and maintaining scalable applications using technologies such as Next.js, tRPC, AWS, and Vercel. I take part in both frontend and backend development, ensuring code quality and maintainability. I also lead technical planning and task coordination in a remote-first, international team environment, continuously improving engineering processes through code reviews and CI/CD pipelines.",
          color: "#005B9F",
        },
        {
          title: "Programming & Coding Mentor (Part-time)",
          company: "Timedoor Academy",
          company_url: "https://timedooracademy.com/",
          logo_path: "timedoorLOGO.jpg",
          duration: "Feb 2024 - Aug 2024",
          location: "Semarang, Indonesia",
          description:
            "MAt Timedoor Academy, I mentored children and teenagers in programming and game development using JavaScript, Python, and emerging technologies like AI and AR. I was responsible for designing lesson materials tailored to each student's learning level and interest, fostering creativity and critical thinking through project-based learning.",
          color: "#F06D06",
        },
        {
          title: "Co Founder (Remote)",
          company: "Herbify",
          company_url: "https://herbify.id/",
          logo_path: "herbify.jpg",
          duration: "Jul 2023 - Jul 2024",
          location: "Malang, Indonesia (Remote)",
          description:
            "As one of the co-founders of Herbify, a tech-driven herbal startup, I led backend development using Node.js and Laravel while overseeing technical planning, database architecture, and API integration. I contributed to the company’s success in securing early-stage funding and am currently involved in building an AI-powered image recognition system using YOLO for product scanning purposes.",
          color: "#4CAF50",
        },
        {
          title: "Fullstack Developer Internship",
          company: "Dinkominfo Demak",
          company_url: "https://demakkab.go.id/",
          logo_path: "dinkominfo.png",
          duration: "Jun 2023 - Jul 2023",
          location: "Demak, Indonesia",
          description:
            "During my internship at Dinkominfo Demak, I contributed to the development of internal government systems using PHP and Laravel. I collaborated closely with senior developers to meet strict deadlines and ensure timely delivery of essential features for public service applications.",
          color: "#8E24AA",
        },
        {
          title: "Chief Technology Officer (CTO)",
          company: "Melijo.id",
          company_url: "https://melijo.id/",
          logo_path: "melijo.jpg",
          duration: "Jul 2022 - Jul 2023",
          location: "Malang, Indonesia",
          description:
            "At Melijo.id, a startup I co-founded, I served as CTO and led the development of various technology products including mobile apps, landing pages, and internal admin dashboards. I managed the engineering team and worked cross-functionally with the business and marketing divisions. The project was recognized through a competitive startup funding award.",
          color: "#FF6F00",
        },
      ],
    },
    {
      title: "Freelance & other experiences",
      experiences: [
        {
          title: "Workshop Elektro (Organization)",
          company: "State University of Malang",
          company_url: "https://elektro.um.ac.id/wse",
          logo_path: "wseLOGO.png",
          duration: "Jun 2021 - Dec 2022",
          location: "Malang, Indonesia",
          description:
            "A fun but tough organization. Learned many soft skills like time management, communication, and hard skills such as website development.",
          color: "#0288D1",
        },
        {
          title: "Poltekbang Information System",
          company: "Politeknik Penerbangan Surabaya",
          company_url: "#",
          logo_path: "poltekbang.png", // Ganti sesuai file logo jika ada
          duration: "Apr 2022 - Jul 2022",
          location: "Malang, Indonesia",
          description:
            "Developed an airport navigation system as part of a freelance project. Built with Laravel and responsible for backend system development.",
          color: "#009688",
        },
        {
          title: "Arsip Demak",
          company: "Freelance Project",
          company_url: "#",
          logo_path: "dinkominfo.png", // Ganti sesuai file logo jika ada
          duration: "Mar 2023 - May 2023",
          location: "Demak, Indonesia",
          description:
            "Built an archiving system for Demak local government using Laravel. Designed and implemented backend structure and logic.",
          color: "#8BC34A",
        },
        {
          title: "E-voting BINA AMAL SEMARANG",
          company: "Freelance Project",
          company_url: "#", // Tambahkan link jika ada
          logo_path: "binaamal.webp", // Ganti sesuai file logo jika ada
          duration: "May 2024 - Jul 2024",
          location: "Semarang, Indonesia",
          description:
            "Created an e-voting application for BINA AMAL SEMARANG school. Full-stack responsibility including frontend and backend using Laravel.",
          color: "#9C27B0",
        },
      ],
    },
  ],
};


// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "These projects come from my experiences in freelance work, university assignments, organizational activities, and professional jobs. I love exploring different technologies and applying them to real-world problems. Below are some of my favorite projects. You can find more on my GitHub (though not all projects are published there).",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "hakim_real.jpg",
    description:
      "Feel free to contact me!",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "Write anything fun and knowledgable. You can find my blogs here.",
    link: "https://www.lingkuptekno.com",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      id: "0",
      name: "Lingkup Tekno",
      url: "https://www.lingkuptekno.com",
      description:
        "Lingkup Tekno is my own blog (with my friend) which is about Technology. I learn SEO, Analytic, Adsense, Content Management from here.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "logos-html-5",
        },
        {
          name: "CSS3",
          iconifyClass: "logos-css-3",
        },
        {
          name: "Blog",
          iconifyClass: "logos-blogger",
        },
        {
          name: "Wordpress",
          iconifyClass: "logos-wordpress-icon",
        },
      ],
      links: [
        {
          name: "Website",
          url: "https://www.lingkuptekno.com",
          iconifyClass: "mdi:web",
        },
      ],
    },
    {
      id: "1",
      name: "Laundry Information System",
      url: "https://github.com/Hildhan123/laundry",
      description:
        "Laundry Information System is my school project made by Laravel. I am responsible for making all Backend System and Frontend (with my friend).",
      languages: [
        {
          name: "Laravel",
          iconifyClass: "logos-laravel",
        },
        {
          name: "PHP",
          iconifyClass: "logos-php",
        },
        {
          name: "Bootstrap",
          iconifyClass: "logos-bootstrap",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/Hildhan123/laundry",
          iconifyClass: "ri:github-fill",
        },
      ],
    },
    {
      id: "2",
      name: "UM Line Tracer Design Competition (LTDC)",
      url: "http://ltdc.um.ac.id",
      description:
        "UM Line Tracer Design Competition (LTDC) is my national competition held by my organization (Workshop Elektro) and my University. In 2022, I am responsible for making all systems including Backend and Frontend or can be called Full Stack Developer.",
      languages: [
        {
          name: "Laravel",
          iconifyClass: "logos-laravel",
        },
        {
          name: "PHP",
          iconifyClass: "logos-php",
        },
        {
          name: "Bootstrap",
          iconifyClass: "logos-bootstrap",
        },
      ],
      links: [
        {
          name: "Website",
          url: "http://ltdc.um.ac.id",
          iconifyClass: "mdi:web",
        },
      ],
    },
    {
      id: "3",
      name: "PKM KITA",
      url: "https://github.com/Hildhan123/PKMKITA",
      description:
        "PKM KITA is my school project made by Laravel. Mostly all Backend and Frontend I made it, others is my friend. This project is the service center of PKM (Program Kreativitas Mahasiswa or Student creativity program in english).",
      languages: [
        {
          name: "Laravel",
          iconifyClass: "logos-laravel",
        },
        {
          name: "PHP",
          iconifyClass: "logos-php",
        },
        {
          name: "Bootstrap",
          iconifyClass: "logos-bootstrap",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/Hildhan123/PKMKITA",
          iconifyClass: "ri:github-fill",
        },
      ],
    },
    {
      id: "4",
      name: "Dancing Line 2D",
      url: "https://github.com/Hildhan123/Dancing-Line-2D-Unity-Project",
      description:
        "Dancing Line 2D is a game made by Unity. The concept is a mix of arcade with rhythm.",
      languages: [
        {
          name: "Unity",
          iconifyClass: "simple-icons:unity",
        },
        {
          name: "C#",
          iconifyClass: "logos-c-sharp",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/Hildhan123/Dancing-Line-2D-Unity-Project",
          iconifyClass: "ri:github-fill",
        },
        {
          name: "Documentation",
          url: "https://www.lingkuptekno.com/2021/12/dancing-line-2d-membuat-game-dengan-unity.html",
          iconifyClass: "mdi:web",
        },
      ],
    },
    {
      id: "5",
      name: "Poltekbang Information System",
      url: "https://github.com/Giraken/Poltekbang",
      description:
        "Poltekbang Information System is a project to build an airport navigation system. This is just a paid project from a client (like freelance). Created by Laravel and responsible for creating the Backend System.",
      languages: [
        {
          name: "Laravel",
          iconifyClass: "logos-laravel",
        },
        {
          name: "PHP",
          iconifyClass: "logos-php",
        },
        {
          name: "Bootstrap",
          iconifyClass: "logos-bootstrap",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/Giraken/Poltekbang",
          iconifyClass: "ri:github-fill",
        },
      ],
    },
    {
      id: "6",
      name: "Melijo.id",
      url: "https://melijo.id",
      description:
        "Melijo.id is my start up team company. Here I take care of various technologies such as creating landing pages.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "logos-html-5",
        },
        {
          name: "CSS3",
          iconifyClass: "logos-css-3",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "Wordpress",
          iconifyClass: "logos-wordpress-icon",
        },
      ],
      links: [
        {
          name: "Website",
          url: "https://melijo.id",
          iconifyClass: "mdi:web",
        },
      ],
    },
    {
      id: "7",
      name: "TILANG",
      url: "https://youtu.be/R8fVaqckvoE",
      description:
        "TILANG is my team's game project where we made it for participating in a gemastik competition(Finalis). I created the game system with Unity.",
      languages: [
        {
          name: "Unity",
          iconifyClass: "simple-icons:unity",
        },
        {
          name: "C#",
          iconifyClass: "logos-c-sharp",
        },
      ],
      links: [
        {
          name: "YouTube",
          url: "https://youtu.be/R8fVaqckvoE",
          iconifyClass: "mdi:youtube",
        },
      ],
    },
    {
      id: "8",
      name: "Arsip Demak",
      url: "https://github.com/Hildhan123/arsipDemak",
      description:
        "Arsip Demak is my freelance project that make system about archive in my live city, Demak. Created by Laravel.",
      languages: [
        {
          name: "Laravel",
          iconifyClass: "logos-laravel",
        },
        {
          name: "PHP",
          iconifyClass: "logos-php",
        },
        {
          name: "Bootstrap",
          iconifyClass: "logos-bootstrap",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/Hildhan123/arsipDemak",
          iconifyClass: "ri:github-fill",
        },
      ],
    },
    {
      id: "9",
      name: "Siminsa (Sistem Informasi Desa)",
      url: "https://github.com/Hildhan123/siminsa",
      description:
        "Siminsa (Sistem Informasi Desa) is an application about village information systems. I made this application myself based on my internship assignment at Dinkominfo Demak. I made it with Laravel and in my opinion this project is the most difficult among the others.",
      languages: [
        {
          name: "Laravel",
          iconifyClass: "logos-laravel",
        },
        {
          name: "PHP",
          iconifyClass: "logos-php",
        },
        {
          name: "Bootstrap",
          iconifyClass: "logos-bootstrap",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/Hildhan123/siminsa",
          iconifyClass: "ri:github-fill",
        },
      ],
    },
    {
      id: "10",
      name: "Herbify App and Website",
      url: "https://herbify.site/",
      description:
        "Herbify App and Website is my project in Herbify. I create various Backend APIs and website for landing pages.",
      languages: [
        {
          name: "Laravel",
          iconifyClass: "logos-laravel",
        },
        {
          name: "PHP",
          iconifyClass: "logos-php",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "TypeScript",
          iconifyClass: "logos-typescript-icon",
        },
        {
          name: "Node.js",
          iconifyClass: "logos-nodejs",
        },
      ],
      links: [
        {
          name: "Website",
          url: "https://herbify.site/",
          iconifyClass: "mdi:github-fill",
        },
      ],
    },
    {
      id: "11",
      name: "E-voting",
      url: "",
      description:
        "Create e-vote application for school BINA AMAL SEMARANG. Part of freelance project.",
      languages: [
        {
          name: "Laravel",
          iconifyClass: "logos-laravel",
        },
        {
          name: "PHP",
          iconifyClass: "logos-php",
        },
        {
          name: "Bootstrap",
          iconifyClass: "logos-bootstrap",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/Hildhan123/e-voting",
          iconifyClass: "mdi:web",
        },
      ],
    },
    {
      id: "12",
      name: "Penetration Testing Expert System",
      url: "https://github.com/Hildhan123/Penetration-Testing-Expert-System",
      description:
        "An expert system to test website vulnerabilities using penetration testing methods with OWASP ZAP integration. Built using Streamlit and Python for intuitive interface and automation.",
      languages: [
        {
          name: "OWASP ZAP",
          iconifyClass: "simple-icons:owasp",
        },
        {
          name: "Streamlit",
          iconifyClass: "simple-icons:streamlit",
        },
        {
          name: "Python",
          iconifyClass: "logos:python",
        },
      ],
      links: [
        {
          name: "GitHub",
          url: "https://github.com/Hildhan123/Penetration-Testing-Expert-System",
          iconifyClass: "mdi:github",
        },
      ],
    },
    {
      id: "13",
      name: "TWEAK",
      url: "https://tweak.jp",
      description:
        "Maintaining and refactoring the infrastructure hosted on AWS, implementing chatbot features, fixing bugs, and improving system stability. Continuously improving existing features in a production-ready environment.",
      languages: [
        {
          name: "Next.js",
          iconifyClass: "vscode-icons:file-type-next",
        },
        {
          name: "TypeScript",
          iconifyClass: "logos-typescript-icon",
        },
        {
          name: "Amazon Web Services",
          iconifyClass: "simple-icons:amazonaws",
        },
        {
          name: "tRPC",
          iconifyClass: "simple-icons:trpc",
        },
        {
          name: "PostgreSQL",
          iconifyClass: "logos:postgresql",
        },
      ],
      links: [
        {
          name: "Website",
          url: "https://tweak.jp",
          iconifyClass: "mdi:web",
        },
      ],
    },
    {
      id: "14",
      name: "MealMiru",
      url: "https://mealmiru.jp",
      description:
        "Developed PayPay payment integration via API, enhanced frontend UI/UX, and resolved bugs across multiple components. Actively involved in deploying features in a real-time production system.",
      languages: [
        {
          name: "Next.js",
          iconifyClass: "vscode-icons:file-type-next",
        },
        {
          name: "TypeScript",
          iconifyClass: "logos-typescript-icon",
        },
        {
          name: "Amazon Web Services",
          iconifyClass: "simple-icons:amazonaws",
        },
        {
          name: "tRPC",
          iconifyClass: "simple-icons:trpc",
        },
        {
          name: "PostgreSQL",
          iconifyClass: "logos:postgresql",
        },
      ],
      links: [
        {
          name: "Website",
          url: "https://mealmiru.jp",
          iconifyClass: "mdi:web",
        },
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
