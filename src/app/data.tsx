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
        longDescription: 'Dispuutonline is a specialized accounting software designed for student associations. Trusted by hundreds of associations across the country, it helps manage day-to-day bookkeeping and streamline communication with thousands of students.',
        logo: (
            <svg className="size-10 text-blue-500 md:text-zinc-300 transition duration-300 ease-out group-hover:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="140" height="140" viewBox="0 0 140 140" fill="none">
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
    },
    {
        title: 'Good Eats',
        link: 'https://goodeats.nl',
        shortDescription: 'A place to share culinary hotspots with friends.',
        longDescription: 'GoodEats is an online platform where friends can share their dining experiences with friends. You can review and bookmark restaurants and easily share your public profile with friends and family.',
        logo: (
            <svg className="size-10 [&_*]:transition [&_*]:duration-300 [&_*]:ease-out md:[&_rect]:fill-zinc-200 md:[&_path]:fill-zinc-400 group-hover:[&_rect]:fill-[#00473B] group-hover:[&_path]:fill-[#A0C34E]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" fill="none">
                <rect width="800" height="800" rx="80" fill="#00473B"/>
                <path
                    d="M262.7 620.5C226.033 620.5 196.7 613.717 174.7 600.15C153.067 586.583 142.25 568.433 142.25 545.7C142.25 522.6 155.267 511.05 181.3 511.05C187.533 511.05 193.95 511.6 200.55 512.7C207.15 514.167 213.567 516.183 219.8 518.75C219.8 543.317 224.567 561.65 234.1 573.75C243.633 586.217 258.117 592.45 277.55 592.45C294.05 592.45 307.067 588.233 316.6 579.8C326.5 571.733 331.45 560.917 331.45 547.35C331.45 537.083 329.067 529.017 324.3 523.15C319.9 517.283 312.017 512.7 300.65 509.4C289.65 506.1 274.067 503.533 253.9 501.7C224.567 498.767 203.85 494 191.75 487.4C180.017 480.8 174.15 470.717 174.15 457.15C174.15 443.583 179.283 430.933 189.55 419.2C199.817 407.467 213.933 398.3 231.9 391.7L242.9 398.3C239.6 401.967 237.033 405.633 235.2 409.3C233.733 412.967 233 416.817 233 420.85C233 425.25 234.283 428.733 236.85 431.3C239.417 433.867 244.367 436.067 251.7 437.9C259.4 439.367 270.583 440.833 285.25 442.3C324.483 445.967 353.45 454.4 372.15 467.6C391.217 480.433 400.75 498.95 400.75 523.15C400.75 542.95 395.067 560.183 383.7 574.85C372.333 589.517 356.383 600.7 335.85 608.4C315.317 616.467 290.933 620.5 262.7 620.5ZM251.7 407.65C218.7 407.65 192.667 399.95 173.6 384.55C154.533 368.783 145 347.15 145 319.65C145 299.483 150.133 281.883 160.4 266.85C171.033 251.45 185.7 239.533 204.4 231.1C223.1 222.3 244.733 217.9 269.3 217.9C292.033 217.9 311.65 221.75 328.15 229.45C344.65 236.783 357.483 247.233 366.65 260.8C375.817 274 380.4 289.583 380.4 307.55C380.4 326.983 374.9 344.217 363.9 359.25C352.9 374.283 337.683 386.2 318.25 395C299.183 403.433 277 407.65 251.7 407.65ZM263.8 377.4C275.167 377.4 284.15 372.267 290.75 362C297.35 351.367 300.65 336.517 300.65 317.45C300.65 295.45 297.167 278.4 290.2 266.3C283.233 254.2 273.333 248.15 260.5 248.15C249.5 248.15 240.7 253.65 234.1 264.65C227.867 275.283 224.75 290.133 224.75 309.2C224.75 331.567 228.05 348.617 234.65 360.35C241.25 371.717 250.967 377.4 263.8 377.4ZM372.15 256.4C367.017 256.4 360.6 256.217 352.9 255.85C345.567 255.117 338.233 254.2 330.9 253.1C323.933 251.633 318.25 250.35 313.85 249.25L307.8 234.95L396.9 202.5C399.467 206.9 401.483 212.033 402.95 217.9C404.783 223.4 405.7 228.35 405.7 232.75C405.7 248.517 394.517 256.4 372.15 256.4ZM546.448 478.6C521.515 478.6 499.332 473.467 479.898 463.2C460.832 452.567 445.982 438.083 435.348 419.75C424.715 401.05 419.398 379.6 419.398 355.4C419.398 329.367 425.448 305.9 437.548 285C449.648 264.1 465.965 247.783 486.498 236.05C507.398 223.95 530.682 217.9 556.348 217.9C578.715 217.9 598.148 222.483 614.648 231.65C631.148 240.817 643.798 253.65 652.598 270.15C661.765 286.283 666.348 305.533 666.348 327.9C666.348 337.8 665.065 344.4 662.498 347.7C659.932 350.633 655.348 352.1 648.748 352.1H478.248V321.85L598.148 318.55L591.548 327.9C591.915 310.667 590.448 296 587.148 283.9C584.215 271.8 579.815 262.817 573.948 256.95C568.082 250.717 560.748 247.6 551.948 247.6C538.748 247.6 527.932 255.117 519.498 270.15C511.065 284.817 506.848 305.35 506.848 331.75C506.848 353.75 509.965 372.45 516.198 387.85C522.432 402.883 531.598 414.433 543.698 422.5C555.798 430.2 570.648 434.05 588.248 434.05C600.715 434.05 612.632 431.667 623.998 426.9C635.365 422.133 646.915 414.617 658.648 404.35L667.998 427.45C659.565 437.35 648.748 446.333 635.548 454.4C622.715 462.1 608.598 467.967 593.198 472C578.165 476.4 562.582 478.6 546.448 478.6Z"
                    fill="#A0C34E"/>
            </svg>
        ),
        imageUrl: '/projects/goodeats.png',
    },
];

export {workExperiences, studies, socialLinks, technologies, projects};