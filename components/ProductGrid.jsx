import products from '../data/products'
import ProductCard from './ProductCard'

export default function ProductGrid() {
  return (
    <section className="py-12 container px-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold">Featured</h2>
        <a className="text-sm text-gray-300">View all</a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
    </section>
  )
}
