import { motion } from "framer-motion";

export default function ProgressBar({ percentage }) {
  return (
    <div className="progress" style={{ height: "8px" }}>
      <motion.div
        className="progress-bar bg-primary"
        role="progressbar"
        initial={{ width: 0 }}
        animate={{ width: `${percentage}%` }}
        transition={{ duration: 1, delay: 0.5 }}
        aria-valuenow={percentage}
        aria-valuemin="0"
        aria-valuemax="100"
      />
    </div>
  );
}