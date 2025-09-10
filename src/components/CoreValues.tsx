'use client';

import { motion } from 'framer-motion';
import {
  Users,
  HeartHandshake,
  ShieldCheck,
  Handshake,
  Flame
} from 'lucide-react';

const values = [
  { title: 'Inclusivity', icon: <Users size={28} /> },
  { title: 'Empowerment', icon: <HeartHandshake size={28} /> },
  { title: 'Integrity', icon: <ShieldCheck size={28} /> },
  { title: 'Collaboration', icon: <Handshake size={28} /> },
  { title: 'Resilience', icon: <Flame size={28} /> },
];

export default function CoreValues() {
  return (
    <section className="bg-[#004d43] py-16 px-4 font-body text-white">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#FFD700]">
          Our Core Values
        </h2>
      </div>

      <div className="flex flex-wrap justify-center gap-10">
        {values.map((value, index) => (
          <motion.div
            key={value.title}
            className="flex flex-col items-center space-y-3"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-20 h-20 flex items-center justify-center rounded-full bg-[#FFD700] text-[#004d43] shadow-lg"
            >
              {value.icon}
            </motion.div>
            <p className="text-lg font-semibold">{value.title}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
