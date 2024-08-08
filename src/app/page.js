'use client'
import styles from './page.module.scss'
import FramerMotion from '../components/FramerMotion';
import Lenis from '@studio-freight/lenis'
import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect } from 'react';

import bgImage from "/public/background/bg.png"

import pg1 from "/public/medias/pg1.jpg"
import pg2 from "/public/medias/pg2.jpg"
import pg3 from "/public/medias/pg3.jpg"

import cg1 from "/public/medias/cg1.jpg"
import cg2 from "/public/medias/cg2.jpg"
import cg3 from "/public/medias/cg3.jpg"

import tg1 from "/public/medias/tg1.jpg"
import tg2 from "/public/medias/tg2.jpg"
import tg3 from "/public/medias/tg3.jpg"

import ag1 from "/public/medias/ag1.jpg"
import ag2 from "/public/medias/ag2.jpg"
import ag3 from "/public/medias/ag3.jpg"

import end from "/public/medias/end.jpg"

export default function Home() {

    const p1Images = [pg1, pg2, pg3]
    const p1Title = ["When I", "First Met You..."]
    const p1paragraph = "I didn't know what would happen. " 
    + "Truth be told, when I saw you at Shayal's Roka, I just saw you as a fun girl with a hot outfit (apparently I stared at those boots more than I thought)."
    + " Over time, as we hung out in the group, I found you incredibly vibrant and direct, and I became more and more interested in you."

    const p2Images = [cg1, cg2, cg3]
    const p2Title = ["But You Already", "Know How Afraid I Can Be"]
    const p2paragraph = "I hesitated for so long, that I basically never made a move you. " 
    + "Even my pitiful attempt to figure out when you go to REC failed miserably. "
    + "Eventually, I just decided to let things be"

    const p3Images = [tg1, tg2, tg3]
    const p3Title = ["But Then You", "Made Your Move"]
    const p3paragraph = "And I was left absolutely flabbergasted! " 
    + "I even had to ask you to repeat yourself (RIP Bozo moment)"
    + " Barbie night was insane."

    const p4Images = [ag1, ag2, ag3]
    const p4Title = ["We Spent More", "And More Time Together"]
    const p4paragraph = "As we got to know each other, I learned more and more about you. I already knew how smart and pretty you were, but I learned all about " 
    + "your passion for taking care of others and about how much you care for your family, especially your mom, your brothers, and Yue. At some point, I"
    + " started to hope to be a part of that group some day."

    const p5Images = [end, ag1, cg3]
    const p5Title = ["I Love You", "So So Much"]
    const p5paragraph = "I want to keep our lives intertwined forever, and I hope you do too." 
    + "Today marks our 1st year together, and I promise you there will be many more in store."
    + " started to hope to be a part of that group some day."

    useEffect( () => {
        const lenis = new Lenis()
        
        function raf(time) {
          lenis.raf(time)
          requestAnimationFrame(raf)
        }
        
        requestAnimationFrame(raf)
    }, [])

    const firststyle = {
        textAlign: "center",
        fontSize: "10vw",
        marginTop: "-80vh",
        paddingBottom: "10vh",
        color: "#eac3ea"
    }

    const secondstyle = {
        textAlign: "center",
        fontSize: "8vw",
        // marginTop: "-80vh",
        color: "white"
    }

    return (<div>
        <motion.h1 style={firststyle}>365 days have officially passed</motion.h1>
        <div style={{margin: "20%"}}></div>

        <main className={styles.main} style={{ 
            backgroundImage: `url(${bgImage})` 
          }}>
            <FramerMotion 
            imgs={p1Images}
            title={p1Title} 
            para={p1paragraph}/>
            <div style={{margin: "20%"}}></div>
            <FramerMotion 
            imgs={p2Images}
            title={p2Title}
            para={p2paragraph}/>
            <div style={{margin: "20%"}}></div>
            <FramerMotion 
            imgs={p3Images}
            title={p3Title}
            para={p3paragraph}/>
            <div style={{margin: "20%"}}></div>
            <FramerMotion 
            imgs={p4Images}
            title={p4Title}
            para={p4paragraph}/>
            <div style={{margin: "20%"}}></div>
            <FramerMotion 
            imgs={p5Images}
            title={p5Title}
            para={p5paragraph}/>
            <motion.h1 style={secondstyle}>HAPPY 1 YEAR ANNIVERSARY! \(^-^)/</motion.h1>
        </main>
        </div>
    )
}
