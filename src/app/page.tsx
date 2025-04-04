'use client';
import { motion } from 'motion/react'
import { Spotlight } from '@/components/ui/spotlight'
import {AnimatedBackground} from "@/components/ui/animated-background";
import {Magnetic} from "@/components/ui/magnetic";

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
    description?: string;
}

type SocialLink = {
    label: string
    link: string
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
                      I&apos;m Joris, a 26-year old <span>tech enthusiast</span> and <span>aspiring entrepreneur</span> based
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
              <h3 className="mb-3 text-lg font-medium">Studies</h3>
              <div className="flex flex-col space-y-0">
                  <AnimatedBackground
                      enableHover
                      className="h-full w-full rounded-lg bg-zinc-100 dark:bg-zinc-900/80"
                      transition={{
                          type: 'spring',
                          bounce: 0,
                          duration: 0.2,
                      }}
                  >
                      {STUDIES.map((study, studyIdx) => (
                          <div key={studyIdx} data-id={studyIdx} className="-mx-3 rounded-xl px-3 py-3">
                              <div className="flex w-full flex-row justify-between">
                                  <div>
                                      <h4 className="font-normal dark:text-zinc-100">
                                          {study.title}
                                      </h4>
                                      <p className="text-zinc-500 dark:text-zinc-400">
                                          {study.description}
                                      </p>
                                  </div>
                                  <p className="absolute my-auto right-5 text-zinc-600 dark:text-zinc-400">
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
