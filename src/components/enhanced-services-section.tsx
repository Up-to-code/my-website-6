'use client'

import { Code, Server, Smartphone, Palette, Zap, Users } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import Image from "next/image"

const services = [
  {
    icon: <Code className="h-8 w-8 text-blue-600" />,
    title: "تطوير الواجهة الأمامية",
    description: "إنشاء واجهات مستخدم تفاعلية وجذابة باستخدام أحدث التقنيات مثل React و Vue.",
    image: "/placeholder.svg?height=200&width=300"
  },
  {
    icon: <Server className="h-8 w-8 text-blue-600" />,
    title: "تطوير الخلفية",
    description: "بناء خدمات قوية وقابلة للتطوير باستخدام Node.js و Python و قواعد البيانات المتقدمة.",
    image: "/placeholder.svg?height=200&width=300"
  },
  {
    icon: <Smartphone className="h-8 w-8 text-blue-600" />,
    title: "تطوير تطبيقات الجوال",
    description: "إنشاء تطبيقات جوال سلسة لنظامي iOS و Android باستخدام React Native.",
    image: "/placeholder.svg?height=200&width=300"
  },
  {
    icon: <Palette className="h-8 w-8 text-blue-600" />,
    title: "تصميم واجهة المستخدم/تجربة المستخدم",
    description: "تصميم واجهات مستخدم جميلة وسهلة الاستخدام تركز على تجربة المستخدم.",
    image: "/placeholder.svg?height=200&width=300"
  },
  {
    icon: <Zap className="h-8 w-8 text-blue-600" />,
    title: "تحسين الأداء",
    description: "تحسين سرعة وأداء تطبيقات الويب والجوال لتجربة مستخدم أفضل.",
    image: "/placeholder.svg?height=200&width=300"
  },
  {
    icon: <Users className="h-8 w-8 text-blue-600" />,
    title: "استشارات تقنية",
    description: "تقديم رؤى خبيرة حول أفضل الممارسات والتقنيات الحديثة في تطوير البرمجيات.",
    image: "/placeholder.svg?height=200&width=300"
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const cardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12
    }
  }
}

export function EnhancedServicesSectionComponent() {
  return (
    <section dir="rtl" className="bg-zinc-900 text-zinc-100 py-16 font-arabic overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-center mb-4">خدماتي</h2>
          <p className="text-zinc-400 text-center mb-12 max-w-2xl mx-auto">
            أقدم مجموعة شاملة من خدمات تطوير البرمجيات لمساعدتك في بناء وتحسين حضورك الرقمي.
          </p>
        </motion.div>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card className="bg-zinc-800 border-zinc-700 hover:border-blue-600 transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader className="p-0">
                  <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                    <Image
                      src={service.image}
                      alt={service.title}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-300 transform hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent opacity-70"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full bg-blue-600 bg-opacity-20 flex items-center justify-center mr-4">
                          {service.icon}
                        </div>
                        <CardTitle className="text-xl font-semibold text-white">{service.title}</CardTitle>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-zinc-300">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <a 
            href="#contact" 
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full transition-colors duration-300 transform hover:scale-105"
          >
            احصل على استشارة مجانية
          </a>
        </motion.div>
      </div>
    </section>
  )
}