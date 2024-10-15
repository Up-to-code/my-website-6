import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

type Certification = {
  title: string
  issuer: string
  date: string
  skills: string[]
  image: string
}

const certifications: Certification[] = [
  {
    title: "The 13 Indisputable Laws of Leadership",
    issuer: "eMastery Academy",
    date: "2024",
    skills: ["Leadership", "Team Management", "Personal Growth"],
    image: "/images/c1.jpg"
  },
  {
    title: "Sales Mistakes",
    issuer: "eMastery Academy",
    date: "2024",
    skills: ["Sales Strategy", "Customer Relations", "Mistake Avoidance"],
    image: "/images/c.jpg"
  }
]

export default function Certifications() {
  return (
    <section className="py-16 bg-zinc-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-zinc-100">الشهادات</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <Card key={index} className="bg-zinc-800 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border-none">
              <div className="relative h-48 w-full flex justify-center items-center ">
                <Image
                  src={cert.image}
                  alt={`${cert.title} certificate`}
                  layout="fill"
 
                  className="transition-transform duration-300 hover:scale-105 h-full object-contain"
                  loading="lazy"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-zinc-100">{cert.title}</CardTitle>
                <CardDescription className="text-zinc-400">{cert.issuer}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-zinc-500 mb-4">{cert.date}</p>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="bg-blue-600 text-white hover:bg-blue-600/40">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
