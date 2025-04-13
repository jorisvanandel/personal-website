import {Job, Project, SocialLink, Study, TechStack} from "@/app/types";

const workExperiences: Job[] = [
    { link: 'https://andelwebsolutions.nl', title: 'Freelancing', start: 'Jun 2018', end: 'Feb 2022', company: 'Andelwebsolutions' },
    { link: 'https://copernica.com', title: 'Software Engineer', start: 'Jan 2020', end: 'Oct 2021', company: 'Copernica' },
    { link: 'https://van-ons.nl', title: 'Back-end Developer', start: 'Feb 2023', end: 'Oct 2023', company: 'Van Ons' },
    { link: 'https://paqt.com', title: 'Full-stack Developer', start: 'Oct 2023', end: 'Now', company: 'PAQT' },
];

const studies: Study[] = [
    { title: 'BSc Informatiekunde', university: 'University of Amsterdam', start: 'Sep 2016', end: 'Jun 2020' },
    { title: 'MSc Business Informatics', university: 'Utrecht University', start: 'Sep 2020', end: 'May 2021' },
    { title: 'Pre-master Software Engineering', university: 'University of Amsterdam', start: 'Sep 2021', end: 'Jun 2022' },
    { title: 'MSc Software Engineering (unfinished)', university: 'University of Amsterdam', start: 'Sep 2022', end: 'Jan 2023' },
];

const socialLinks: SocialLink[] = [
    {
        label: 'Github',
        link: 'https://github.com/jorisvanandel',
    },
    {
        label: 'X',
        link: 'https://x.com/JorisAndel',
    },
    {
        label: 'LinkedIn',
        link: 'https://www.linkedin.com/in/joris-van-andel-512774181',
    }
];

const technologies: TechStack[] = [
    {
        title: 'Front-end',
        content:
            '<b>Typescript</b> combined with <b>React</b> or <b>Vue</b>. <b>Tailwind</b> for styling. <b>Vite</b> and <b>Turbopack</b> for build and development. <b>Nuxt</b> and <b>Next</b> for larger web applications.',
    },
    {
        title: 'Back-end',
        content:
            '<b>PHP</b> combined with frameworks such as <b>Laravel</b> and <b>Symfony</b>. Recently I have been exploring <b>Golang</b> and <b>Java</b>.',
    },
    {
        title: 'Databases',
        content:
            '<b>MySQL</b> and <b>PostgreSQL</b>, depending on the project. <b>NoSQL</b> if special requirements demand for it.',
    },
    {
        title: 'DevOps',
        content:
            '<b>Docker</b> for local development, <b>NGINX</b> for most HTTP related stuff and <b>Kubernetes</b> for production. <b>Git</b> and <b>GitHub</b> for source control and CI/CD with <b>GitHub Actions</b>',
    },
    {
        title: 'Utilities',
        content:
            '<b>Redis</b> and <b>Elasticsearch</b> for blazing fast UX. <b>Composer</b> and <b>(P)NPM</b> for dependency management.',
    },
];

const projects: Project[] = [
    {
        title: 'Dispuutonline',
        link: 'https://dispuutonline.nl',
        shortDescription: 'Accounting SaaS for students associations.',
        longDescription: 'Dispuutonline is a specialized accounting software designed for student associations. Trusted by over 150 associations across the country, it helps manage day-to-day bookkeeping and streamline communication with thousands of students.',
        logo: (
            <svg className="h-12 text-blue-500 md:text-zinc-300 transition duration-300 ease-out group-hover:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="140" height="140" viewBox="0 0 140 140" fill="none">
                <g clipPath="url(#clip0_2_18)">
                    <path
                        d="M70 0C56.1554 -1.65097e-07 42.6216 4.10543 31.1101 11.7971C19.5987 19.4889 10.6266 30.4213 5.32847 43.2122C0.030333 56.0029 -1.3559 70.0776 1.34506 83.6562C4.04603 97.2347 10.7129 109.708 20.5026 119.498C30.2922 129.287 42.7651 135.954 56.3437 138.655C69.9224 141.356 83.9969 139.97 96.7883 134.671C109.579 129.373 120.511 120.402 128.203 108.89C135.895 97.3786 140 83.8444 140 70H126C126 81.0756 122.715 91.903 116.562 101.112C110.409 110.321 101.663 117.499 91.4301 121.737C81.1977 125.976 69.9379 127.085 59.075 124.924C48.2121 122.763 38.2338 117.43 30.402 109.598C22.5703 101.766 17.2368 91.7879 15.0761 80.9254C12.9153 70.0621 14.0243 58.8024 18.2628 48.5697C22.5013 38.3371 29.6789 29.591 38.8881 23.4377C48.0973 17.2843 58.9242 14 70 14V0Z"
                        fill="currentColor"/>
                    <path d="M137.564 0H84.7778V15.2923H137.564V0Z" fill="currentColor"/>
                    <path d="M140 0H125.382V55.2222H140V0Z" fill="currentColor"/>
                    <path d="M50.5556 59.1111H35V101.111H50.5556V59.1111Z" fill="currentColor"/>
                    <path d="M77.7778 70H62.2222V101.111H77.7778V70Z" fill="currentColor"/>
                    <path d="M105 41.2222H89.4445V101.111H105V41.2222Z" fill="currentColor"/>
                </g>
                <defs>
                    <clipPath id="clip0_2_18">
                        <rect width="140" height="140" fill="white"/>
                    </clipPath>
                </defs>
            </svg>
        ),
        imageUrl: '/projects/dispuutonline.png',
        finished: true,
    },
    {
        title: 'Good Eats',
        link: 'https://goodeats.nl',
        shortDescription: 'A place to share culinary hotspots with friends.',
        logo: (
            <span className="inline-flex items-center gap-x-1.5 rounded-md px-1.5 py-0.5 text-sm/5 font-medium sm:text-xs/5 forced-colors:outline bg-transparent border border-zinc-400/20 text-zinc-600 dark:text-zinc-400">
                    Coming soon
                </span>
        ),
        finished: false,
    },
];

export { workExperiences, studies, socialLinks, technologies, projects };