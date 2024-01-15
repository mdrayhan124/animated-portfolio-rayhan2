"use client"

import { fadeIn, staggerChildren, textVariant2, zoomIn } from '@/utils/motion'
import css from './work.module.scss'
import { motion } from 'framer-motion'
import { workExp } from '@/utils/data'

export default function Work() {
    return (
        <motion.section
            variants={staggerChildren}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={`paddings ${css.wrapper}`}>
            <a className="anchor" id="work"></a>

            <div className={`innerWidth flexCenter ${css.container}`}>

                <span className='primaryText'>My Work Experiences</span>
                <div className={`flexCenter ${css.experiences}`}>
                    {
                        workExp.map((exp, i) => {
                            return <motion.div
                                variants={textVariant2}
                                className={`flexCenter ${css.exp}`} key={i}>
                                <div className={css.post}>
                                    <h1>{exp.place}</h1>
                                    <p>{exp.tenure}</p>
                                </div>
                                <div className={css.role}>
                                    <h1>{exp.role}</h1>
                                    <p>{exp.detail}</p>
                                </div>
                            </motion.div>
                        })
                    }
                    <motion.div
                        variants={zoomIn(1, 1)}
                        className={css.progressBar}>
                        <motion.div variants={fadeIn("down", "tween", 2, 1.5)} className={css.progressLine}></motion.div>
                        <div className={css.circle} style={{ background: "#286F6C" }} ></div>
                        <div className={css.circle} style={{ background: "#F2704E" }} ></div>
                        <div className={css.circle} style={{ background: "#EEC048" }} ></div>
                    </motion.div>
                </div>
            </div>


        </motion.section>
    )
}