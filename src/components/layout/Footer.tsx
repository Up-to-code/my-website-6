import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import SubEmailFooter from "../components/SubEmailFooter";

export default function CreativeFooter() {
  return (
    <footer dir="rtl" className="bg-zinc-800 text-zinc-100 py-12 font-arabic">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-blue-600">احمد منصور</h3>
            <p className="text-zinc-400">مطور ويب شامل مبدع يحول الأفكار إلى واقع رقمي.</p>
            <div className="flex space-x-4 rtl:space-x-reverse">
              <Button variant="ghost" size="icon" className="hover:bg-blue-600 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-blue-600 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-blue-600 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-blue-600 hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="text-xl font-semibold">روابط سريعة</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-zinc-400 hover:text-blue-600 transition-colors">الرئيسية</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-blue-600 transition-colors">المشاريع</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-blue-600 transition-colors">المدونة</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-blue-600 transition-colors">اتصل بي</a></li>
            </ul>
          </div>


          <SubEmailFooter/>





        </div>
        <div className="mt-12 pt-8 border-t border-zinc-700 text-center">
          <p className="text-zinc-400">
            © {new Date().getFullYear()} جون دو. جميع الحقوق محفوظة.
          </p>
          <div className="mt-4 flex justify-center items-center space-x-2 rtl:space-x-reverse">
            <span className="text-zinc-400">مصنوع بـ</span>
            <Heart className="h-5 w-5 text-red-500 animate-pulse" />
            <span className="text-zinc-400">في نيويورك</span>
          </div>
        </div>
      </div>
     </footer>
  );
}
