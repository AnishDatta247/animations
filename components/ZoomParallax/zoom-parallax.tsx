import Image, { StaticImageData } from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import styles from "./styles.module.scss";

interface ZoomParallaxProps {
  data: {
    src: StaticImageData;
  }[];
  title: string;
  fontSize: string;
}

export const ZoomParallax = ({ data, title, fontSize }: ZoomParallaxProps) => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  console.log(title, fontSize, `text-[${fontSize}] ${styles.underlayText}`);

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);
  const borderRadius = useTransform(scrollYProgress, [0, 1], [10, 0]);

  const pictures = [
    {
      src: data[0].src,
      scale: scale4,
    },
    {
      src: data[1].src,
      scale: scale5,
    },
    {
      src: data[2].src,
      scale: scale6,
    },
    {
      src: data[3].src,
      scale: scale5,
    },
    {
      src: data[4].src,
      scale: scale6,
    },
    {
      src: data[5].src,
      scale: scale8,
    },
    {
      src: data[6].src,
      scale: scale9,
    },
  ];

  return (
    <div ref={container} className={styles.container}>
      <div className={styles.sticky}>
        {fontSize && (
          <span className={`text-[22vw] ${styles.underlayText}`}>{title}</span>
        )}
        {fontSize && (
          <span className={`text-[22vw] ${styles.overlayText}`}>{title}</span>
        )}
        {pictures.map(({ src, scale }, index) => {
          return (
            <motion.div key={index} style={{ scale }} className={styles.el}>
              <motion.div
                className={styles.imageContainer}
                style={{ borderRadius, overflow: "hidden" }}
              >
                <Image src={src} fill alt="image" placeholder="blur" />
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
