import { motion } from "framer-motion";
import { div } from "framer-motion/client";
import { useState } from "react";

const PreguntasInner = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
        <div className="preguntas-container">
  <div className="preguntas-container-inner">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="preguntas-container__boton"
        >
          {question}
        </button>
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden "
        >
          <p className="preguntas-container__answer">{answer}</p>
        </motion.div>
        <hr className="preguntas-container__hr"/>

      </div>
        </div>
    
    );
  };
  export default PreguntasInner