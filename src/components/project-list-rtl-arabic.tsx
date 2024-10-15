"use client"

import { useState } from "react"
import { Github, ExternalLink, Code, Database, Smartphone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"

type Project = {
  id: number
  name: string
  status: string
  image: string
  skills: string[]
  githubUrl: string
  liveUrl: string
}

export function ProjectListRtlArabic() {
  const [projects, setProjects] = useState<Project[]>([
    {
      id: 1,
      name: "إعادة تصميم الموقع",
      status: "قيد التنفيذ",
      image: "/placeholder.svg?height=100&width=200",
      skills: ["React", "Tailwind CSS", "Next.js"],
      githubUrl: "https://github.com/username/website-redesign",
      liveUrl: "https://website-redesign.example.com"
    },
    {
      id: 2,
      name: "تطوير تطبيق الجوال",
      status: "التخطيط",
      image: "/placeholder.svg?height=100&width=200",
      skills: ["React Native", "TypeScript", "Firebase"],
      githubUrl: "https://github.com/username/mobile-app",
      liveUrl: "https://mobile-app.example.com"
    },
    {
      id: 3,
      name: "ترحيل قاعدة البيانات",
      status: "مكتمل",
      image: "/placeholder.svg?height=100&width=200",
      skills: ["PostgreSQL", "Python", "AWS"],
      githubUrl: "https://github.com/username/db-migration",
      liveUrl: "https://db-migration.example.com"
    },
  ])

  const getStatusClass = (status: string) => {
    if (status === "مكتمل") return "border-green-600 text-green-600"
    if (status === "قيد التنفيذ") return "border-yellow-600 text-yellow-600"
    return "border-red-600 text-red-600"
  }

  const getSkillIcon = (skill: string) => {
    switch (skill) {
      case "React":
      case "React Native":
        return <Code className="w-4 h-4" />
      case "PostgreSQL":
      case "AWS":
        return <Database className="w-4 h-4" />
      case "Firebase":
        return <Smartphone className="w-4 h-4" />
      default:
        return <Code className="w-4 h-4" />
    }
  }

  return (
    <div dir="rtl" className=" bg-zinc-900 text-zinc-100 p-8 font-arabic pt-50">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8  text-center">مشاريعي</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="bg-zinc-800 border-zinc-700 overflow-hidden  transition-transform duration-200"
            >
              <Link href={`/projects/${project.id}`} passHref>
                <CardHeader className="p-0">
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover transition-opacity duration-200"
                    placeholder="blur"
                    blurDataURL="/blur-placeholder.svg"
                  />
                </CardHeader>
                <CardContent className="p-4">
                  <CardTitle className="text-xl text-zinc-100 mb-2">{project.name}</CardTitle>
                  <Badge variant="outline" className={`mb-2 ${getStatusClass(project.status)}`}>
                    {project.status}
                  </Badge>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.skills.map((skill, index) => (
                      <Badge key={index} variant="secondary" className="bg-zinc-700 text-zinc-200 flex items-center gap-1">
                        {getSkillIcon(skill)} {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Link>
              <CardFooter className="bg-zinc-800 border-t border-zinc-700 p-4">
                <div className="flex justify-between w-full">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-none bg-zinc-700 text-zinc-200 hover:bg-zinc-600 transition-colors duration-200 hover:text-primary"
                    onClick={(e) => {
                      e.preventDefault()
                      window.open(project.githubUrl, '_blank')
                    }}
                  >
                    <Github className="ml-2 h-4 w-4" /> جيت هب
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-none bg-zinc-700 text-zinc-200 hover:bg-zinc-600 transition-colors duration-200 hover:text-primary"
                    onClick={(e) => {
                      e.preventDefault()
                      window.open(project.liveUrl, '_blank')
                    }}
                  >
                    <ExternalLink className="ml-2 h-4 w-4" /> عرض حي
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
 
      </div>
    </div>
  )
}
