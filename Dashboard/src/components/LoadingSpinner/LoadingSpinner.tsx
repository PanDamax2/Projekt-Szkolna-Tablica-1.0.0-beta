import { motion } from 'framer-motion';

export function LoadingSpinner({ text }: { text?: boolean }) {
  return (
    <div className="flex items-center justify-center">
      <motion.div
        className="w-8 h-8 border-4 border-blue-500 border-t-transparent border-solid rounded-full dark:border-white dark:border-t-transparent"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
      />
      {text && <p className="ml-2 text-blue-500 dark:text-white">Ładowanie...</p>}
    </div>
  );
}
