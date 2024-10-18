"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const testimonials = [
  {
    name: "سارة أحمد",
    position: "مديرة التسويق",
    company: "شركة الابتكار التقني",
    avatar: "/placeholder.svg?height=80&width=80",
    quote: "جون مطور استثنائي! لقد قام بتحويل موقعنا الإلكتروني إلى منصة حديثة وسهلة الاستخدام. نحن سعداء جدًا بالنتائج."
  },
  {
    name: "محمد الخالدي",
    position: "الرئيس التنفيذي",
    company: "تطبيقات المستقبل",
    avatar: "/placeholder.svg?height=80&width=80",
    quote: "العمل مع جون كان تجربة رائعة. لقد فهم احتياجاتنا بسرعة وقدم حلولًا مبتكرة تجاوزت توقعاتنا."
  },
  {
    name: "ليلى المنصور",
    position: "مديرة المشاريع",
    company: "شركة الحلول الرقمية",
    avatar: "/placeholder.svg?height=80&width=80",
    quote: "جون ليس مجرد مطور، بل شريك حقيقي في النجاح. مهاراته التقنية وفهمه لاحتياجات العمل جعلا مشروعنا ناجحًا بشكل كبير."
  }
];

export default function CustomerTestimonials() {
  return (
    <section dir="rtl" className="bg-zinc-900 text-zinc-100 py-16 font-arabic">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">ماذا يقول عملاؤنا عني</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            أنا فخور بالعمل مع عملاء رائعين من مختلف الصناعات. إليك ما يقولونه عن تجربتهم في العمل معي.
          </p>
        </div>

        <Swiper
          spaceBetween={20} // Space between slides for smaller screens
          slidesPerView={1} // Default number of slides to show
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          className="mySwiper"
          autoplay={{
           delay: 2500,
           disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2, // 2 slides for small screens
              spaceBetween: 30, // More space between slides
            },
            1024: {
              slidesPerView: 3, // 3 slides for large screens
              spaceBetween: 30, // Default space
            },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <Card className="bg-zinc-800 border-zinc-700 hover:border-blue-600 transition-all duration-300">
                <CardContent className="p-6">
                  <Quote className="h-8 w-8 text-blue-600 mb-4" aria-hidden="true" />
                  <p className="text-zinc-300 mb-6">{testimonial.quote}</p>
                  <div className="flex items-center">
                    <Avatar className="h-12 w-12 border-2 border-blue-600">
                      <AvatarImage src={testimonial.avatar} alt={`${testimonial.name} avatar`} />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="mr-4">
                      <p className="font-semibold text-primary">{testimonial.name}</p>
                      <p className="text-sm text-zinc-400">{testimonial.position}, {testimonial.company}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="text-center mt-12">
          <a 
            href="#contact" 
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300 transform hover:scale-105"
            aria-label="Start your project with me"
          >
            ابدأ مشروعك معي
          </a>
        </div>
      </div>
    </section>
  );
}
