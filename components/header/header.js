"use client"
import css from './header.module.scss'
import { LiaPhoneVolumeSolid } from "react-icons/lia";
import { BiMenuAltRight } from "react-icons/bi";
import { motion } from 'framer-motion';
import { headerVariants,getMenuStyles } from '@/utils/motion';
import { useState } from 'react';
import useHeaderShadow from '@/hooks/useHeaderShadow';

export default function Header(){

    const [openMenu,setOpenMenu]=useState(false);
    const HeaderShadow=useHeaderShadow()

    return(
        <motion.div
        initial="hidden"
        animate="show"
        variants={headerVariants}
        viewport={{once:false,amount:0.25}}
        className={`paddings ${css.wrapper}`}>
            <div className={`flexCenter innerWidth ${css.container}`}
            style={{boxShadow:HeaderShadow}}
            >
                <div className={css.name}>
                    Rayhan
                </div>
                <ul style={getMenuStyles(openMenu)} className={`flexCenter ${css.menu}`}>
                    <li><a href="#Experties">services</a></li>
                    <li><a href="#work">Experiences</a></li>
                    <li><a href="#portfolio">portfolio</a></li>
                    <li><a href="#people">Testimonial</a></li>
                    <li className={`flexCenter ${css.phone}`}>
                    <p>01704727494</p>
                   <LiaPhoneVolumeSolid size={"40px"}/>
                    </li>
                </ul>
                <div className={css.menuIcon}
                onClick={()=>setOpenMenu(!openMenu)}
                >
                <BiMenuAltRight size={30}/>
                </div>
            </div>
        </motion.div>
    )
}