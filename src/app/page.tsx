'use client';
import { motion } from 'motion/react'

export default function Home() {
  return (
      <motion.main
          className="space-y-24"
          variants={{
            hidden: { opacity: 0 },
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
            variants={{
              hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
              visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
            }}
            transition={{
              duration: 0.3,
            }}
        >
          <div className="flex-1">
            <p className="text-muted-foreground [&>span]:text-foreground">
                I'm Joris, a 26-year old <span>tech enthusiast</span> and <span>aspiring entrepreneur</span> based in <span>Amsterdam</span>. I am currently working as a <span>full-stack developer</span> at <span>PAQT</span>. I have a passion for crafting <span>elegant solutions</span> for complex problems.
            </p>
          </div>
        </motion.section>
      </motion.main>
  );
}
