'use client';
import { motion } from 'motion/react'
import { Spotlight } from '@/components/ui/spotlight'
import { AnimatedBackground } from "@/components/ui/animated-background";
import { Magnetic } from "@/components/ui/magnetic";
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
import { useState } from "react";
import { TransitionPanel } from '@/components/ui/transition-panel';
import { technologies, projects, studies, socialLinks, workExperiences } from './data';

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
    const DEFAULT_SECTION_VARIANTS = {
        hidden: {opacity: 0, y: 20, filter: 'blur(8px)'},
        visible: {opacity: 1, y: 0, filter: 'blur(0px)'},
    };

    const DEFAULT_SECTION_TRANSITION = {
        duration: 0.3,
    }

    const EMAIL = 'joris.andel@hotmail.com';

    const [activeTechStackIndex, setActiveTechStackIndex] = useState(0);

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
                        old <span>tech enthusiast</span> and <span>solopreneur</span> with
                      a passion for crafting <span>elegant solutions</span> for complex problems. I am based in
                      Amsterdam and currently working as a <span>full-stack developer</span> at <span>PAQT</span>.
                  </p>
              </div>
          </motion.section>

          <motion.section
              variants={DEFAULT_SECTION_VARIANTS}
              transition={DEFAULT_SECTION_TRANSITION}
          >
              <h3 className="mb-5 text-lg font-medium">Work Experience</h3>
              <div className="flex flex-col space-y-2">
                  {workExperiences.map((job, jobIdx) => (
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
              <div className="grid md:grid-cols-2 gap-4">
                  {projects.map((project, projectIdx) => (
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
                              <div className="h-36 w-full flex justify-center items-center bg-zinc-50 dark:bg-zinc-950">
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
                <h3 className="text-lg font-medium">Tech stack</h3>
                <p className="text-zinc-500 dark:text-zinc-400">These are the technologies I feel most confident with. However, I am not limited by them and am always on the lookout for new technologies.</p>
                <div className="mt-5">
                    <div className='mb-4 flex space-x-2'>
                        {technologies.map((item, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveTechStackIndex(index)}
                                className={`rounded-md px-3 py-1 text-sm font-medium border ${
                                    activeTechStackIndex === index
                                        ? 'bg-zinc-200 text-zinc-900 border-zinc-200 dark:bg-zinc-800 dark:border-zinc-600 dark:text-zinc-100'
                                        : 'bg-zinc-100 text-zinc-600 border-zinc-100 dark:bg-zinc-700 dark:border-zinc-700 dark:text-zinc-400'
                                }`}
                            >
                                {item.title}
                            </button>
                        ))}
                    </div>
                    <div className='overflow-hidden border-t border-zinc-200 dark:border-zinc-700'>
                        <TransitionPanel
                            activeIndex={activeTechStackIndex}
                            transition={{duration: 0.2, ease: 'easeInOut'}}
                            variants={{
                                enter: {opacity: 0, y: -50, filter: 'blur(4px)'},
                                center: {opacity: 1, y: 0, filter: 'blur(0px)'},
                                exit: {opacity: 0, y: 50, filter: 'blur(4px)'},
                            }}
                        >
                            {technologies.map((item, index) => (
                                <div key={index} className='py-2'>
                                    <p className='text-zinc-500 dark:text-zinc-400 [&_b]:font-medium [&_b]:text-zinc-700 dark:[&_b]:text-zinc-200' dangerouslySetInnerHTML={{ __html : item.content }}/>
                                </div>
                            ))}
                        </TransitionPanel>
                    </div>
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
                        {studies.map((study, studyIdx) => (
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
                  {socialLinks.map((link) => (
                      <MagneticSocialLink key={link.label} link={link.link}>
                          {link.label}
                      </MagneticSocialLink>
                  ))}
              </div>
          </motion.section>
      </motion.main>
  );
}
