'use client'
import Image from "next/image"

const Hero = () => {
  return (
    <div className="pt-10 px-4 lg:px-0">
      {/* Text Section */}
      <div className="text-center space-y-6 max-w-4xl mx-auto px-4 lg:px-0 lg:-mt-96 md:-mt-80 ">
        <h1 className="lg:text-4xl sm:text-xl md:text-2xl font-bold leading-tight text-white">
          Upgrade Your Tech Accessorize with <br className="hidden md:block" /> Gadget Heaven Accessories
        </h1>

        <p className="text-sm  text-white/90">
          Explore the latest gadgets that will take your experience to the next level.
          <br className="hidden sm:block" />
          From smart devices to the coolest accessories, we have it all!
        </p>

        <button className="btn btn-md sm:btn-lg bg-white text-[#9538E2] rounded-full px-6 sm:px-8 hover:bg-transparent hover:text-white border-2 border-white transition duration-300">
          Shop Now
        </button>
      </div>

      {/* Image Section */}
      <div className="flex justify-center mt-10 sm:-mt-16 px-2">
        <div className="bg-white p-2 sm:p-4 rounded-3xl shadow-xl max-w-md sm:max-w-3xl w-full">
          <Image
            src="/assets/banner.jpg"
            width={600}
            height={300}
            alt="Gadget Banner"
            className="rounded-2xl w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
