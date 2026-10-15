import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Header() {
  return (
    <header className="py-6 px-6 flex items-center justify-between container">
      <Link href="/">
        <a className="text-2xl font-extrabold tracking-tight">AVENOR</a>
      </Link>

      <nav className="flex items-center gap-6 text-sm">
        <a className="hover:underline">Men</a>
        <a className="hover:underline">Women</a>
        <a className="hover:underline">Collections</a>
        <motion.button whileHover={{ scale: 1.03 }} className="ml-2 bg-white text-black px-4 py-2 rounded-md">Cart</motion.button>
      </nav>
    </header>
  )
}
