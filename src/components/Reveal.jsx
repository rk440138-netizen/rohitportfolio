import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

export default function Reveal({ children, width = "fit-content" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Animates only once when seen
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{
  hidden: { opacity: 0, y: -75 }, // Starts from TOP (Negative Y)
  visible: { opacity: 1, y: 0 },  // Drops down to position
}}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }} // Animation speed
      >
        {children}
      </motion.div>
    </div>
  );
}