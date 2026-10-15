import { motion, useMotionValue, useTransform } from 'framer-motion'
import Image from 'next/image'
import dynamic from 'next/dynamic'

// Lottie is dynamically imported to avoid SSR issues
const Lottie = dynamic(() => import('lottie-react'), { ssr: false })

export default function Hero() {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateY = useTransform(x, [-200, 200], [30, -30])
  const rotateX = useTransform(y, [-200, 200], [-18, 18])

  return (
    <section className="relative overflow-hidden py-20">
      <div className="container px-6 flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2">
          <h1 className="text-5xl font-bold leading-tight">AVENOR — Motion. Craft. Legacy.</h1>
          <p className="mt-6 text-gray-300 max-w-md">Ultra-premium footwear experiences with cinematic motion, 3D previews, and refined UI micro-interactions. Shop elite performance and iconic streetwear.</p>
          <div className="mt-8 flex gap-4">
            <a className="px-6 py-3 bg-white text-black rounded-lg shadow">Shop Mens</a>
            <a className="px-6 py-3 border border-white/10 rounded-lg">Explore</a>
          </div>

          <div className="mt-8 flex gap-4">
            <div className="text-xs text-gray-400">Trusted by:</div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-6 bg-white/10 rounded flex items-center justify-center text-xs">NIKE</div>
              <div className="w-10 h-6 bg-white/10 rounded flex items-center justify-center text-xs">CONV</div>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 relative">
          <motion.div
            className="card relative w-full h-96 flex items-center justify-center"
            style={{ perspective: 1400 }}
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect()
              const mx = e.clientX - rect.left - rect.width / 2
              const my = e.clientY - rect.top - rect.height / 2
              x.set(mx)
              y.set(my)
            }}
          >
            <motion.div
              style={{ rotateY, rotateX }}
              transition={{ type: 'spring', stiffness: 90, damping: 14 }}
              className="relative w-80 h-80"
            >
              <Image src="/images/placeholder-shoe.png" alt="Shoe" layout="fill" objectFit="contain"/>
            </motion.div>

            <motion.div className="absolute -left-8 -top-8 w-40 h-40 rounded-full bg-gradient-to-br from-pink-500 to-indigo-500 opacity-30 animate-float" />
          </motion.div>

          <div className="mt-4 flex gap-4">
            {/* Lottie placeholder - replace /animations/hero.json with actual Lottie */}
            <div className="w-24 h-24 card p-2 flex items-center justify-center">
              <div className="text-xs text-gray-300">Motion</div>
            </div>

            <div className="w-24 h-24 card p-2 flex items-center justify-center">
              <div className="text-xs text-gray-300">3D</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
