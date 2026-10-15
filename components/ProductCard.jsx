import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function ProductCard({ product }) {
  return (
    <motion.div whileHover={{ y: -8 }} className="card p-5">
      <Link href={`/products/${product.id}`}>
        <a className="block">
          <div className="relative w-full h-64">
            <Image src={product.images[0]} alt={product.name} layout="fill" objectFit="contain"/>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <div>
              <h3 className="font-medium">{product.name}</h3>
              <p className="text-sm text-gray-300">${product.price}</p>
            </div>
            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">+</div>
          </div>
        </a>
      </Link>
    </motion.div>
  )
}
