"use client"

import {motion} from 'framer-motion'
import css from "./people.module.scss";
import Slider from "react-slick";
import { footerVariants, staggerChildren ,textVariant, textVariant2 } from '@/utils/motion';
import { comments, sliderSettings } from '@/utils/data';


export default function People(){
    return(
        <motion.section
        variants={staggerChildren}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        section className={`paddings ${css.wrapper}`}>
    
          <a className="anchor" id="people"></a>
    
          <motion.div
          variants={footerVariants}
          className={`yPaddings innerWidth ${css.container}`}>
    
    
            <div className={`flexCenter ${css.heading}`}>
              <span className="primaryText">People talk about us</span>
              <p style={{ marginTop: "2rem" }}>
                I got a job that was in accordance with the salary and field of work
              </p>
              <p>The process of submitting an appilication was quite cosy</p>
            </div>
    
    
    
            <div className={`yPaddings ${css.comments}`}>
              <Slider {...sliderSettings} className={css.slider}>
                {comments.map((comment, i) => {
                  return (
                    <div className={`flexCenter ${css.comment}`}>
                      <img src={comment.img} alt="" />
                      <p>{comment.comment}</p>
                      <div className={css.line}></div>
                      <div className={css.bio}>
                        <span>{comment.name}</span>
                        <span>{comment.post}</span>
                      </div>
                    </div>
                  );
                })}
              </Slider>
            </div>
    
    
          </motion.div>
    
        </motion.section>

    )
}