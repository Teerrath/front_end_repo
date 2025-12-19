import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface SlideInSectionProps {
  direction?: "left" | "right" | "top" | "bottom";
  children: React.ReactNode;
}

export default function SlideInSection({ direction = "left", children }: SlideInSectionProps) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  // Determine initial x/y position
  let initial = { x: 0, y: 0, opacity: 0 };
  switch (direction) {
    case "left":
      initial.x = -500;
      break;
    case "right":
      initial.x = 500;
      break;
    case "top":
      initial.y = -500;
      break;
    case "bottom":
      initial.y = 500;
      break;
  }

  useEffect(() => {
    if (inView) {
      controls.start({ x: 0, y: 0, opacity: 1 });
    }
  }, [controls, inView]);

  return (
    <motion.section
      ref={ref}
      initial={initial}
      animate={controls}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
}
