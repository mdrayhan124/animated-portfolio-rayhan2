"use client"

import Image from 'next/image'
import css from './hero.module.scss'
import certficateImg from '@/public/certificate.png'
import person from '@/public/person.png'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { fadeIn, staggerChildren } from '@/utils/motion'

export default function Hero() {
    return (
        <section className={`paddings ${css.wrapper}`}>
            <motion.div
                variants={staggerChildren}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className={`innerWidth ${css.container}`}>
                <div className={css.upperElemwnts}>
                    <motion.span
                        variants={fadeIn("right", "tween",0.2,1)}
                        className='primaryText'>hey there<br />I`m Rayhan</motion.span>
                    <motion.span
                    variants={fadeIn("left", "tween",0.4,1)}
                    className='secondaryText'>i design beautiful simple<br />thinks,and i love it</motion.span>
                </div>

                <motion.div 
                variants={fadeIn("up", "tween",0.3,1)}
                className={css.person}>
                    <Image src={person} />
                </motion.div>


                <Link href={"mailto:ranjerrayhan124@gmail.com"}>
                    <div className={css.mail}>
                        ranjerrayhan124@gmail.com
                    </div>
                </Link>


                <div className={css.lowerElemwnts}>
                    <motion.div 
                    variants={fadeIn("right", "tween",0.2,1)}
                    className={css.experiences}>
                        <div className="primaryText">
                            10
                        </div>
                        <div className={css.seconderyText}>
                            <div>years</div>
                            <div>experiences</div>
                        </div>
                    </motion.div>
                    <motion.div
                    variants={fadeIn("left", "tween",0.4,1)}
                    className={css.certificate}>
                        <Image className={css.img} src={certficateImg} />
                        <span>CERTIFIED PROFESSIONAL</span>
                        <span>FRONT-END DEVELOPER</span>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
}