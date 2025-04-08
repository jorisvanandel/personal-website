'use client';
import { motion } from 'motion/react'
import { Spotlight } from '@/components/ui/spotlight'
import {AnimatedBackground} from "@/components/ui/animated-background";
import {Magnetic} from "@/components/ui/magnetic";
import {
    MorphingDialog,
    MorphingDialogTrigger,
    MorphingDialogContent,
    MorphingDialogTitle,
    MorphingDialogImage,
    MorphingDialogSubtitle,
    MorphingDialogClose,
    MorphingDialogDescription,
    MorphingDialogContainer,
} from '@/components/ui/morphing-dialog';
import {JSX} from "react";

type Job = {
    company: string
    title: string
    start: string
    end: string
    link: string
}

type Study = {
    university: string
    title: string
    start: string
    end: string
}

type SocialLink = {
    label: string
    link: string
}

type Project = {
    title: string;
    link: string;
    shortDescription: string;
    longDescription?: string;
    logo: JSX.Element;
    imageUrl?: string;
    finished: boolean;
}

function MagneticSocialLink({children, link}: { children: React.ReactNode, link: string }) {
    return (
        <Magnetic springOptions={{ bounce: 0 }} intensity={0.3}>
            <a
                href={link}
                className="group relative inline-flex shrink-0 items-center gap-[1px] rounded-full bg-zinc-100 px-2.5 py-1 text-sm text-black transition-colors duration-200 hover:bg-zinc-950 hover:text-zinc-50 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
            >
                {children}
                <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3"
                >
                    <path
                        d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"
                    ></path>
                </svg>
            </a>
        </Magnetic>
    )
}

export default function Home() {
  const WORK_EXPERIENCE: Job[] = [
      { link: 'https://andelwebsolutions.nl', title: 'Freelancing', start: 'Jun 2018', end: 'Feb 2022', company: 'Andelwebsolutions' },
      { link: 'https://copernica.com', title: 'Software Engineer', start: 'Jan 2020', end: 'Oct 2021', company: 'Copernica' },
      { link: 'https://van-ons.nl', title: 'Back-end Developer', start: 'Feb 2023', end: 'Oct 2023', company: 'Van Ons' },
      { link: 'https://paqt.com', title: 'Full-stack Developer', start: 'Oct 2023', end: 'Now', company: 'PAQT' },
  ];

  const STUDIES: Study[] = [
      { title: 'BSc Informatiekunde', university: 'University of Amsterdam', start: 'Sep 2016', end: 'Jun 2020' },
      { title: 'MSc Business Informatics', university: 'Utrecht University', start: 'Sep 2020', end: 'May 2021' },
      { title: 'Pre-master Software Engineering', university: 'University of Amsterdam', start: 'Sep 2021', end: 'Jun 2022' },
      { title: 'MSc Software Engineering (unfinished)', university: 'University of Amsterdam', start: 'Sep 2022', end: 'Jan 2023' },
  ];

  const SOCIAL_LINKS: SocialLink[] = [
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

    const PROJECTS: Project[] = [
        {
            title: 'Dispuutonline',
            link: 'https://dispuutonline.nl',
            shortDescription: 'Accounting SaaS for students associations.',
            longDescription: 'Dispuutonline is a specialized accounting software designed for student associations. Trusted by over 150 associations across the country, it helps manage day-to-day bookkeeping and streamline communication with thousands of students.',
            logo: (
                <svg className="h-12 text-zinc-300 transition duration-300 ease-out group-hover:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="140" height="140" viewBox="0 0 140 140" fill="none">
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

    const DEFAULT_SECTION_VARIANTS = {
        hidden: {opacity: 0, y: 20, filter: 'blur(8px)'},
        visible: {opacity: 1, y: 0, filter: 'blur(0px)'},
    };

    const DEFAULT_SECTION_TRANSITION = {
        duration: 0.3,
    }

    const EMAIL = 'joris.andel@hotmail.com';

    return (
        <motion.main
            className="space-y-24"
            variants={{
                hidden: {opacity: 0},
                visible: {
                    opacity: 1,
                    transition: {
                        staggerChildren: 0.15,
                    },
                },
            }}
            initial="hidden"
            animate="visible"
        >
            <motion.section
                variants={DEFAULT_SECTION_VARIANTS}
                transition={DEFAULT_SECTION_TRANSITION}
            >
                <div className="flex-1">
                    <p className="text-muted-foreground [&>span]:text-foreground">
                        I&apos;m Joris, a 26-year
                        old <span>tech enthusiast</span> and <span>aspiring entrepreneur</span> based
                      in <span>Amsterdam</span>. I am currently working as
                      a <span>full-stack developer</span> at <span>PAQT</span>. I have a passion for crafting <span>elegant solutions</span> for
                      complex problems.
                  </p>
              </div>
          </motion.section>

          <motion.section
              variants={DEFAULT_SECTION_VARIANTS}
              transition={DEFAULT_SECTION_TRANSITION}
          >
              <h3 className="mb-5 text-lg font-medium">Work Experience</h3>
              <div className="flex flex-col space-y-2">
                  {WORK_EXPERIENCE.map((job, jobIdx) => (
                      <a
                          className="relative overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30"
                          href={job.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          key={jobIdx}
                      >
                          <Spotlight
                              className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
                              size={64}
                          />
                          <div className="relative h-full w-full rounded-[15px] bg-white p-4 dark:bg-zinc-950">
                              <div className="relative flex w-full flex-row justify-between">
                                  <div>
                                      <h4 className="font-normal dark:text-zinc-100">
                                          {job.title}
                                      </h4>
                                      <p className="text-zinc-500 dark:text-zinc-400">
                                          {job.company}
                                      </p>
                                  </div>
                                  <p className="text-zinc-600 dark:text-zinc-400">
                                      {job.start} - {job.end}
                                  </p>
                              </div>
                          </div>
                      </a>
                  ))}
              </div>
          </motion.section>

          <motion.section
              variants={DEFAULT_SECTION_VARIANTS}
              transition={DEFAULT_SECTION_TRANSITION}
          >
              <h3 className="mb-3 text-lg font-medium">Featured projects</h3>
              <div className="grid grid-cols-2 gap-4">
                  {PROJECTS.map((project, projectIdx) => (
                      <MorphingDialog
                          key={projectIdx}
                          transition={{
                              type: 'spring',
                              bounce: 0.05,
                              duration: 0.25,
                          }}
                      >
                          <MorphingDialogTrigger
                              disabled={!project.finished}
                              style={{
                                  borderRadius: '12px',
                              }}
                              className='relative group flex flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900'
                          >
                              {project.finished && (
                                  <svg
                                      className="opacity-0 translate-y-4 group-hover:translate-y-3 transition duration-300 group-hover:opacity-100 absolute right-3 text-zinc-400 size-5"
                                      xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                      viewBox="0 0 24 24">
                                      <path
                                          d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z"></path>
                                  </svg>
                              )}
                              <div className="h-48 flex justify-center items-center bg-zinc-50 dark:bg-zinc-950">
                                  {project.logo}
                              </div>
                              <div className='flex grow flex-row items-end justify-between px-3 py-2'>
                                  <div className="text-left">
                                      <MorphingDialogTitle className='text-zinc-950 dark:text-zinc-50'>
                                          {project.title}
                                      </MorphingDialogTitle>
                                      <MorphingDialogSubtitle className='text-zinc-700 dark:text-zinc-400'>
                                          {project.shortDescription}
                                      </MorphingDialogSubtitle>
                                  </div>
                              </div>
                          </MorphingDialogTrigger>
                          <MorphingDialogContainer>
                              <MorphingDialogContent
                                  style={{
                                      borderRadius: '24px',
                                  }}
                                  className='pointer-events-auto relative flex h-auto w-full flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900 sm:w-[500px]'
                              >
                                  <MorphingDialogImage
                                      src={project.imageUrl ?? ''}
                                      alt='Dispuutonline - Accounting SaaS for student associations.'
                                      className='h-full w-full'
                                  />
                                  <div className='p-6'>
                                      <MorphingDialogTitle className='text-2xl text-zinc-950 dark:text-zinc-50'>
                                          {project.title}
                                      </MorphingDialogTitle>
                                      <MorphingDialogSubtitle className='text-zinc-700 dark:text-zinc-400'>
                                          {project.shortDescription}
                                      </MorphingDialogSubtitle>
                                      <MorphingDialogDescription
                                          disableLayoutAnimation
                                          variants={{
                                              initial: { opacity: 0, scale: 0.8, y: 100 },
                                              animate: { opacity: 1, scale: 1, y: 0 },
                                              exit: { opacity: 0, scale: 0.8, y: 100 },
                                          }}
                                      >
                                          <p className='mt-2 text-zinc-500 dark:text-zinc-500'>
                                              {project.longDescription}
                                          </p>
                                          <a
                                              className='mt-2 inline-flex text-zinc-500 underline'
                                              href={project.link}
                                              target='_blank'
                                              rel='noopener noreferrer'
                                          >
                                              View website
                                          </a>
                                      </MorphingDialogDescription>
                                  </div>
                                  <MorphingDialogClose className='text-zinc-50' />
                              </MorphingDialogContent>
                          </MorphingDialogContainer>
                      </MorphingDialog>
                  ))}
              </div>
          </motion.section>

          <motion.section
              variants={DEFAULT_SECTION_VARIANTS}
              transition={DEFAULT_SECTION_TRANSITION}
          >
              <h3 className="mb-3 text-lg font-medium">Studies</h3>
              <div className="flex flex-col space-y-0">
                  <AnimatedBackground
                      enableHover
                      className="h-full w-full rounded-lg bg-zinc-100 dark:bg-zinc-700"
                      transition={{
                          type: 'spring',
                          bounce: 0,
                          duration: 0.2,
                      }}
                  >
                      {STUDIES.map((study, studyIdx) => (
                          <div key={studyIdx} data-id={studyIdx} className="-mx-3 rounded-xl px-3 py-3">
                              <div className="md:flex w-full flex-row justify-between">
                                  <div>
                                      <h4 className="font-normal dark:text-zinc-100">
                                          {study.title}
                                      </h4>
                                  </div>
                                  <p className="md:absolute my-auto right-5 text-zinc-600 dark:text-zinc-400">
                                      {study.start} - {study.end}
                                  </p>
                              </div>
                          </div>
                      ))}
                  </AnimatedBackground>
              </div>
          </motion.section>

          <motion.section
              variants={DEFAULT_SECTION_VARIANTS}
              transition={DEFAULT_SECTION_TRANSITION}
          >
              <h3 className="mb-5 text-lg font-medium">Connect</h3>
              <p className="mb-5 text-zinc-600 dark:text-zinc-400">
                  Feel free to contact me at{' '}
                  <a className="underline dark:text-zinc-300" href={`mailto:${EMAIL}`}>
                      {EMAIL}
                  </a>
              </p>
              <div className="flex items-center justify-start space-x-3">
                  {SOCIAL_LINKS.map((link) => (
                      <MagneticSocialLink key={link.label} link={link.link}>
                          {link.label}
                      </MagneticSocialLink>
                  ))}
              </div>
          </motion.section>
      </motion.main>
  );
}
