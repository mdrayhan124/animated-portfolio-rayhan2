"use client"
import { projectExperience, WhatDoIHelp } from '@/utils/data'
import css from './experties.module.scss'
import { motion } from 'framer-motion'
import { fadeIn, staggerContainer, textVariant } from '@/utils/motion'


export default function Experties() {
    return (
        <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={css.wrapper}>
            <div className={`paddings flexCenter innerWidth ${css.container}`}>
        <a className="anchor" id="Experties"></a>
                <div className={css.leftSide}>
                    {
                        projectExperience.map((exp, i) => {
                            return <motion.div
                            variants={fadeIn("right","tween",(i+1)*0.2 ,1)}
                            className={css.exp} key={i}>
                                <div className='flexCenter' style={{ background: exp.bg }}>
                                    <exp.icon size={24} color='white' />
                                </div>
                                <div>
                                    <span>{exp.name}</span>
                                    <span className='secondaryText'>{exp.projects}project</span>
                                </div>

                            </motion.div>
                        })
                    }
                </div>
                <motion.div
                variants={textVariant(0.5)} className={`flexCenter ${css.rightSide}`}>
                    <span className='primaryText'>what do i help</span>
                    {
                        WhatDoIHelp.map((pragraph, i) => {
                            return <span className='secondaryText' key={i}>{pragraph}</span>
                        })
                    }

                    <div className={`flexCenter ${css.stats}`}>
                        <div className={`flexCenter ${css.stst}`}>
                            <span className='primaryText'>285+</span>
                            <span className='secondaryText'>project complete</span>
                        </div>
                        <div className={`flexCenter ${css.stst}`}>
                            <span className='primaryText'>190+</span>
                            <span className='secondaryText'>happy client</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    )
}