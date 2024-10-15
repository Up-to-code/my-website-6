 import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  return (
    
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-8 text-3xl font-bold">اتصل بنا</h2>
            <form className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="name">الاسم</label>
                <Input id="name" placeholder="أدخل اسمك" required />
              </div>
              <div className="space-y-2">
                <label htmlFor="email">البريد الإلكتروني</label>
                <Input id="email" placeholder="أدخل بريدك الإلكتروني" required type="email" />
              </div>
              <div className="space-y-2">
                <label htmlFor="message">الرسالة</label>
                <Textarea id="message" placeholder="أدخل رسالتك" required />
              </div>
              <Button type="submit">إرسال</Button>
            </form>
          </div>
        </div>
      </section>
    
  )
}