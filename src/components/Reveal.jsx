import { motion } from 'framer-motion';
export default function Reveal({ children, delay = 0, className = '' }) {
  return (
    <motion.div className={className} initial={{ opacity: 0, y: 34 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.9, delay, ease: 'easeOut' }}>
      {children}
    </motion.div>
  );
}
