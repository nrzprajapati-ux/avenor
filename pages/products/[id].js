import { useRouter } from 'next/router'
import products from '../../data/products'
import Image from 'next/image'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

// Dynamic import for 3D viewer (no SSR)
const Shoe3D = dynamic(() => import('../../components/Shoe3D'), { ssr: false })

export default function ProductPage() {
  const router = useRouter()
  const { id } = router.query
  const product = products.find(p => p.id === id)

  if (!product) return <div className="p-8">Loading...</div>

  return (
    <>
      <Header />
      <main className="container px-6 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="card p-6">
              <div className="relative w-full h-96">
                <Image src={product.images[0]} layout="fill" objectFit="cover" alt={product.name} />
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-sm text-gray-400">Interactive Preview</h3>
              <div className="card p-4 mt-2 h-64 flex items-center justify-center">
                <Suspense fallback={<div>Loading 3D...</div>}>
                  <Shoe3D />
                </Suspense>
              </div>
            </div>
          </div>

          <div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="text-2xl mt-4">${product.price}</p>
            <p className="mt-6 text-gray-300">{product.description}</p>

            <div className="mt-8 flex gap-4">
              <motion.button whileTap={{ scale: 0.98 }} className="px-6 py-3 bg-white text-black rounded-lg">Add to cart</motion.button>
              <button className="px-6 py-3 border border-white/10 rounded-lg">Save</button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
