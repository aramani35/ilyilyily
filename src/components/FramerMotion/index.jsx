'use client';
import { useRef } from "react";
import styles from '../../app/page.module.scss';

import Image from "next/image";
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Index({ imgs, title, para }) {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end start']
    })
    const sm = useTransform(scrollYProgress, [0, 1], [0, -50]);
    const md = useTransform(scrollYProgress, [0, 1], [0, -150]);
    const lg = useTransform(scrollYProgress, [0, 1], [0, -250]);

    const isImgsValid = imgs && Array.isArray(imgs) && imgs.length > 2;
    const isTitleValid = title && Array.isArray(title) && title.length > 1;

    const images = isImgsValid ? [
        {
            src: imgs[0]["src"],
            blurDataUrl: imgs[0]["blurDataURL"],
            y: 0
        },
        {
            src: imgs[1]["src"],
            blurDataUrl: imgs[1]["blurDataURL"],
            y: lg
        },
        {
            src: imgs[2]["src"],
            blurDataUrl: imgs[2]["blurDataURL"],
            y: md
        }
    ] : [];

    return (
        <div ref={container} className={styles.container}>
            <div className={styles.body}>
                <motion.h1 style={{y: sm}}>{isTitleValid ? title[0] : "placeholder" }</motion.h1>
                <h1>{isTitleValid ? title[1] : "placeholder" }</h1>
                <div className={styles.word}>
                    <p style={{paddingRight: "10%"}}>{para}</p>
                </div>
            </div>
            <div className={styles.images}>
                {
                    images.map( ({src, blurDataUrl, y}, i) => {
                        return <motion.div style={{y}} key={`i_${i}`} className={styles.imageContainer}>
                            <Image 
                                src={src}
                                placeholder="blur"
                                blurDataURL={blurDataUrl}
                                alt="image"
                                fill
                            />
                        </motion.div>
                    })
                }
            </div>
        </div>
    )
}
