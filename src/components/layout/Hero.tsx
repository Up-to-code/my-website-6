import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Hero() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 flex  justify-center items-center">
      {/* Background Image */}
      <Image
        src="/images/herobg.jpeg"
        alt="Background"
        fill
        className="object-cover object-center"
        priority
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-zinc-900/30 mix-blend-multiply" />
      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 flex flex-col-reverse md:flex-row items-center justify-between w-full h-full">
        {/* Text Section */}
        <div className="text-center md:text-right md:w-1/2 space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            مرحبًا، أنا
            <span className="block text-blue-600">أحمد منصور</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300">
            مطور ويب شامل
          </p>
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-blue-600/90 text-lg px-8 py-3 rounded-full transition-transform duration-300 ease-in-out transform hover:scale-105 bg-blue-600"
          >
            تعرف علي
          </Button>
        </div>

        {/* Image Section */}
        <div className="mt-12 md:mt-0 md:w-1/2 flex justify-center md:justify-end items-center px-6">
          <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-primary/20 shadow-2xl transform transition-transform duration-300 hover:scale-105">
            <Image
              src="/images/me.jpg"
              alt="Ahmed Mansour"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
