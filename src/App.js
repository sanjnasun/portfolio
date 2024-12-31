import React from "react";
import Header from "./components/header";
import Projects from "./components/projects";
import About from "./components/about";
import Contact from "./components/contact";
import Experience from "./components/experience";
import { Box } from "@mui/material";
import { motion } from "framer-motion"; 
import "./components/styling/app.css";

function App() {
  return (
    <Box className="backgroundIMG">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }} 
      >
        <Header />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
      >
        <Box id="projects">
          <Projects />
        </Box>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
      >
        <Box id="experience">
          <Experience />
        </Box>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
      >
        <Box id="about">
          <About />
        </Box>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
      >
        <Box id="contact">
          <Contact />
        </Box>
      </motion.div>
    </Box>
  );
}

export default App;
