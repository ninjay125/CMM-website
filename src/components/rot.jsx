'use client';

import { motion } from "framer-motion";

export default function Rot() { 
  return (
    <motion.div
      animate={{
        scale: 5,
        
        transition: { duration: 100 },
        rotate: 360
        
      }}
      className="w-20 h-30 bg-red-500 Center mx-auto mt-10 flex items-center  text-white text-2xl font-bold rounded-full border-5 border-blue-500">
        <h2 className=""> MAKE A WIN!!! </h2>
        
        </motion.div>
  );
}
