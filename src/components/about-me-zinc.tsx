'use client'

import { Github, Linkedin, Mail, MapPin, Briefcase, GraduationCap, Code } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"

export function AboutMe() {
  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-100 p-4 sm:p-8 rtl">
      <div className="max-w-5xl mx-auto">
        <Card className="bg-zinc-800 border-zinc-700 rounded-lg shadow-lg transition-transform hover:scale-105">
          <CardHeader className="pb-0">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="صورة الملف الشخصي"
                width={200}
                height={200}
                className="rounded-full w-40 h-40 object-cover border-4 border-blue-600"
              />
              <div className="text-center sm:text-right">
                <CardTitle className="text-3xl font-bold mb-2">جون دو</CardTitle>
                <p className="text-zinc-400 text-lg mb-4">مطور كامل الحزمة</p>
                <div className="flex justify-center sm:justify-start gap-3">
                  <Button variant="outline" size="icon" className="bg-zinc-700 hover:bg-zinc-600">
                    <Github className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="icon" className="bg-zinc-700 hover:bg-zinc-600">
                    <Linkedin className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="icon" className="bg-zinc-700 hover:bg-zinc-600">
                    <Mail className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent className="mt-6">
            <Separator className="my-6 bg-zinc-700" />
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h2 className="text-2xl font-semibold mb-4 flex items-center">
                  <Code className="mr-2 text-blue-600" /> عني
                </h2>
                <p className="text-zinc-300 mb-6">
                  مرحبًا! أنا جون، مطور كامل الحزمة بشغف، لدي 5 سنوات من الخبرة في إنشاء تطبيقات الويب. أحب تحويل المشكلات المعقدة إلى تصاميم بسيطة وجميلة وبديهية. عندما لا أكون مشغولًا بالبرمجة، يمكنك أن تجدني أستكشف تقنيات جديدة أو أساهم في مشاريع مفتوحة المصدر.
                </p>
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <Code className="mr-2 text-blue-600" /> المهارات
                </h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="secondary" className="bg-zinc-700 hover:bg-zinc-600">JavaScript</Badge>
                  <Badge variant="secondary" className="bg-zinc-700 hover:bg-zinc-600">React</Badge>
                  <Badge variant="secondary" className="bg-zinc-700 hover:bg-zinc-600">Node.js</Badge>
                  <Badge variant="secondary" className="bg-zinc-700 hover:bg-zinc-600">Python</Badge>
                  <Badge variant="secondary" className="bg-zinc-700 hover:bg-zinc-600">SQL</Badge>
                  <Badge variant="secondary" className="bg-zinc-700 hover:bg-zinc-600">Git</Badge>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <Briefcase className="mr-2 text-blue-600" /> الخبرة
                </h3>
                <ul className="space-y-4 mb-6">
                  <li>
                    <h4 className="font-medium">مطور أول</h4>
                    <p className="text-zinc-400">شركة حلول التكنولوجيا (2020-الآن)</p>
                  </li>
                  <li>
                    <h4 className="font-medium">مطور ويب</h4>
                    <p className="text-zinc-400">شركة الابتكارات الرقمية (2018-2020)</p>
                  </li>
                  <li>
                    <h4 className="font-medium">مطور مبتدئ</h4>
                    <p className="text-zinc-400">شركة ستارت أب (2016-2018)</p>
                  </li>
                </ul>
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <GraduationCap className="mr-2 text-blue-600" /> التعليم
                </h3>
                <p className="text-zinc-300">
                  بكاليوس في علوم الحاسب<br />
                  <span className="text-zinc-400">جامعة التكنولوجيا (2012-2016)</span>
                </p>
              </div>
            </div>
            <Separator className="my-6 bg-zinc-700" />
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="flex items-center text-zinc-400">
                <MapPin className="mr-2 h-5 w-5 text-blue-600" /> مقيم في نيويورك، الولايات المتحدة
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                <Mail className="mr-2 h-5 w-5" /> اتصل بي
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
