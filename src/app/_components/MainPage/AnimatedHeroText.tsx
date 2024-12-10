"use client";
import { motion } from "framer-motion";

export default function AnimatedHeroText() {
  return (
    <div className="relative flex-grow md:flex-grow-1">
      {/* <motion.div
				initial={{ y: -5 }}
				whileInView={{ y: 0 }}
				transition={{ duration: 0.5, ease: "easeInOut" }}> */}
      <h4 className="absolute bottom-0 right-0 md:right-[10vw] h-[200px] md:border-l border-t md:border-t-0 border-white-light pr-4 md:px-6 text-white-light text-sm md:text-lg">
        Entre las metas de tu empresa <br />y las expectativas de tus clientes.
      </h4>
      {/* </motion.div> */}
    </div>
  );
}
