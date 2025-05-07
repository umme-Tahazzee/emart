'use client'
import Image from "next/image"


const page = () => {
  return (
    <div>
      <div className="text-center -mt-96 space-y-6 px-4">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories
          </h1>
          <p className="text-base md:text-lg text-white/90">
            Explore the latest gadgets that will take your experience to the next level.<br />
            From smart devices to the coolest accessories, we have it all!
          </p>
          <button className="btn btn-lg bg-white text-[#9538E2] rounded-full px-8 hover:bg-transparent hover:text-white border-2 border-white transition duration-300">
            Shop Now
          </button>
        </div>
      <div className="flex justify-center -mt-16 px-4">
        <div className="bg-white p-4 rounded-3xl shadow-xl max-w-3xl">
          <Image
            src="/assets/banner.jpg"
            width={600}
            height={300}
            alt="Gadget Banner"
            className="rounded-2xl"
          />
        </div>
      </div>
    </div>
  )
}

export default page