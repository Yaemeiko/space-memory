import { motion } from "framer-motion";
import SpaceScene from "./SpaceScene";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950">
        <div className="absolute inset-0">
    <SpaceScene />
    <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-600/20 blur-[180px]" />
</div>
        
      <div className="absolute inset-0 bg-black/30" />
<div className="absolute w-[600px] h-[600px] rounded-full bg-indigo-500/20 blur-[150px]" />
      <div className="relative z-10 text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40, 
            scale: 0.8
          }}
          animate={{ opacity: 1, y: 0, scale: 1
           }}    
          transition={{ duration: 1, delay: 0.5 }}
          className="text-6xl md:text-8xl font-bold text-white"
        >
          To My Moon 🌙
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-6 max-w-xl text-lg text-slate-300 mx-auto"
        >
          Even if the universe ends,
          my heart still knows your name.
        </motion.p>

        <motion.button
  whileHover={{
    scale: 1.08,
    boxShadow: "0px 0px 40px rgb(99 102 241)"
  }}
  whileTap={{ scale: 0.96 }}
  onClick={() => {
    document
      .getElementById("letter")
      ?.scrollIntoView({ behavior: "smooth" });
  }}
  className="mt-10 rounded-full border border-indigo-400 bg-indigo-600/70 px-10 py-4 text-lg font-semibold backdrop-blur-md"
>
  Di Klik Nyak ✨
</motion.button>
      </div>
    </section>
  );
}