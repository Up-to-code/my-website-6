import React from 'react';
import { motion } from 'framer-motion';

function Loading() {
  return (
    <motion.div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        style={{
          width: '40px',
          height: '40px',
          border: '5px solid #ccc',
          borderTop: '5px solid #3498db',
          borderRadius: '50%',
          marginBottom: '1rem',
        }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1 }}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
      >
        Loading...
      </motion.div>
    </motion.div>
  );
}

export default Loading;
