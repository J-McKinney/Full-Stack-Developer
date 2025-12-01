import homepage from '../src/assets/homepage.jpeg';
import etrade from '../src/assets/etradeLogo.png';
import limerent from '../src/assets/limerent.jpg';
import naylor from '../src/assets/naylorLogo.jpg';
import mvc from '../src/assets/mvc.svg';
import gig from '../src/assets/GIG.webp';
import srm from '../src/assets/srm.jpg';

const email = process.env.REACT_APP_EMAIL;
const service_id = process.env.REACT_APP_SERVICE_ID;
const template_id = process.env.REACT_APP_TEMPLATE_ID;
const user_id = process.env.REACT_APP_USER_ID;

const logoText = "JESSE";
const meta = {
    title: "Jesse McKinney",
    description: "I’m Jesse McKinney. A passionate Full Stack Web Developer.",
};

const introData = {
    title: "I’m Jesse McKinney",
    animated: {
        first: "I love coding",
        second: "I bring ideas to life",
        third: "I develop web applications",
    },
    description: "I am a passionate full stack developer with over 6 years of experience in building dynamic web applications",
    your_img_url: homepage,
};

const aboutData = {
    title: "and then some...",
    aboutMe: "I am a certified & versatile Software Engineer with 6+ years of experience developing & managing complex sites & internal frameworks seeking a full time position in development. Specializing in JavaScript and JavaScript frameworks & responsive designs with dedication to quality work & a high attention to detail. Demonstrating flawless code to design, create, update, maintain, and deploy web applications & production environments at a WCAG compliant level.",
};

const workData = [
    {
        jobTitle: "UI/Frontend Developer",
        company: "E*Trade from Morgan Stanley",
        date: "2022-2025",
    },
    {
        jobTitle: "Lead Web Developer",
        company: "Limerent",
        date: "2022-2025",
    },
    {
        jobTitle: "UI/Node Developer",
        company: "Naylor Association Solutions",
        date: "2022-2022",
    },
    {
        jobTitle: "Full Stack Developer",
        company: "Marietta Vet Clinic",
        date: "2019-2022",
    },
    {
        jobTitle: "Full Stack Developer",
        company: "SLA Labs",
        date: "2021-2022",
    },
    {
        jobTitle: "Full Stack Developer",
        company: "Southern Restoration Maintenance Inc.",
        date: "2020-2021",
    },
];

const skills = [
    {
        name: "HTML5",
        value: 90,
    },
    {
        name: "CSS3",
        value: 85,
    },
    {
        name: "JavaScript",
        value: 90,
    },
    {
        name: "ReactJS",
        value: 85,
    },
    {
        name: "JQuery",
        value: 85,
    },
];

const servicesData = [
    {
        title: "Full Stack Design",
        description: "Solid grasp of both client-side (front-end) and server-side (back-end) technologies.",
    },
    {
        title: "Clean Code Principles",
        description: "Writing clean, readable, and maintainable code is essential. SOLID & DRY.",
    },
    {
        title: "Version Control",
        description: "Proficiency in version control systems like Git.",
    },
    {
        title: "API Development and Integration",
        description: "Skilled in creating and consuming APIs for enabling communication between the front end and back end.",
    },
    {
        title: "Database Management",
        description: "Working with databases, both SQL and NoSQL, for data storage and retrieval.",
    },
    {
        title: "Responsive Design",
        description: "Knowledgeable of responsive design principles ensuring applications work well on various devices and screen sizes, enhancing user experience.",
    },
];

const portfolioData = [
    {
        img: etrade,
        title: "Frontend Developer",
        description: "E*Trade from Morgan Stanley redesign project",
        link: "https://us.etrade.com/home",
    },
    {
        img: mvc,
        title: "Full Stack Developer",
        description: "Marietta Vet Clinic - Pet Travel Services",
        link: "https://www.mariettavetclinic.com",
    },
    // {
    //     img: "https://picsum.photos/400/?grayscale",
    //     description: "The wisdom of life consists 333",
    //     link: "#",
    // },
    // {
    //     img: "https://picsum.photos/400/600",
    //     description: "The wisdom of life consists 444",
    //     link: "#",
    // },
    {
        img: limerent,
        title: "Lead Web Developer",
        description: "Limerent - Digital Marketing Agency",
        link: "https://getlimerent.com",
    },
    {
        img: gig,
        title: "Full Stack Developer",
        description: "SLA Labs - SaaS Application Development",
        link: "https://slalabs.org/gigpilot",
    },
    // {
    //     img: "https://picsum.photos/400/600",
    //     description: "The wisdom of life consists 777",
    //     link: "#",
    // },
    // {
    //     img: "https://picsum.photos/400",
    //     description: "The wisdom of life consists 888",
    //     link: "#",
    // },
    {
        img: naylor,
        title: "UI/Node Developer",
        description: "Naylor Association Solutions - Products and Services",
        link: "https://www.naylor.com",
    },
    {
        img: srm,
        title: "Full Stack Developer",
        description: "Southern Restoration Maintenance Inc. - Facility Maintenance Services",
        link: "https://j-mckinney.github.io/srm-inc/home",
    },
    // {
    //     img: "https://picsum.photos/400/400",
    //     description: "The wisdom of life consists 1111",
    //     link: "#",
    // },
    // {
    //     img: "https://picsum.photos/400/700",
    //     description: "The wisdom of life consists 1212",
    //     link: "#",
    // },
];

const contactConfig = {
    // https://www.emailjs.com
    YOUR_EMAIL: email,
    YOUR_FONE: "See Resume",
    description: "Please feel free to reach out to me and I will get back to you as soon as possible.",
    YOUR_SERVICE_ID: service_id,
    YOUR_TEMPLATE_ID: template_id,
    YOUR_USER_ID: user_id,
};

export {
    meta,
    aboutData,
    portfolioData,
    workData,
    skills,
    servicesData,
    introData,
    contactConfig,
    logoText,
};