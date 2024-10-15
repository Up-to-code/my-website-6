"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";

type Skill = {
  name: string;
  level: number;
  category: string;
};

const skills: Skill[] = [
  { name: "React.js", level: 90, category: "Frontend" },
  { name: "Next.js", level: 85, category: "Frontend" },
  { name: "TypeScript", level: 80, category: "Languages" },
  { name: "JavaScript", level: 80, category: "Languages" },
  { name: "c++", level: 20, category: "Languages" },
  { name: "java", level: 50, category: "Languages" },

  { name: "Node.js", level: 75, category: "Backend" },
  { name: "Tailwind CSS", level: 90, category: "Frontend" },
  { name: "Firebase", level: 80, category: "Backend" },
  { name: "MongoDB", level: 70, category: "Backend" },
  { name: "Docker", level: 65, category: "DevOps" },
  { name: "Zustand", level: 75, category: "State Management" },
  { name: "Framer Motion", level: 50, category: "UI/UX" },
  { name: "Figma", level: 85, category: "UI/UX" },

  { name: "Expo", level: 80, category: "Mobile" },
  { name: "NativeWind", level: 80, category: "Mobile" },
  { name: "Lucide-React", level: 70, category: "UI/Icons" },
  { name: "Puppeteer", level: 65, category: "Web Scraping" },
  { name: "Selenium", level: 65, category: "Automation" },
  { name: "Ad Tech", level: 70, category: "Advertising" },
];

const colors = [
  "#EE4E4E", // Red
  "#FFC700", // Yellow
  "#FFF455", // Light Yellow
  "#219C90", // Teal
  "#FF5733", // Orange
  "#3B82F6", // Blue
  "#8B5CF6", // Purple
  "#34D399", // Green
];

export default function MySkills() {
  const categories = Array.from(new Set(skills.map((skill) => skill.category)));
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("skills-section");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section id="skills-section" className="py-16 bg-zinc-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12 text-zinc-100"
        >
          مهاراتي
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-zinc-800 rounded-lg shadow-md p-6"
            >
              <h3 className="text-xl font-semibold mb-4 text-zinc-100">
                {category}
              </h3>
              <div className="space-y-4">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-zinc-300">
                          {skill.name}
                        </span>
                        <span className="text-sm font-medium text-zinc-400">
                          {skill.level}%
                        </span>
                      </div>
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isVisible ? { width: `${skill.level}%` } : {}}
                        transition={{
                          duration: 1,
                          delay: index * 0.1 + skillIndex * 0.1,
                        }}
                      >
                        {/* Apply dynamic color using inline styles */}
                        <Progress
                          value={skill.level}
                          className="h-2"
                          style={{
                            backgroundColor:
                              colors[(skillIndex + index) % colors.length],
                          }}
                        />
                      </motion.div>
                    </div>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
