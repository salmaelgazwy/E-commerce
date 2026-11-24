
import { Search, ShoppingCart } from 'lucide-react'

export default function Logo() {
  return (
    <div className="flex items-center gap-8 w-full">

      {/* Logo */}
      <div className="flex shrink-0 items-center gap-1 text-xl font-bold">
        <ShoppingCart className="text-green-900" />
        <h1>FreshCart</h1>
      </div>

      {/* Search */}
      <div className="relative hidden md:block flex-1">
        <input
          className="w-full rounded-full border-none bg-muted px-4 py-3 pr-10 shadow-none outline-none"
          placeholder="Search for products, brands and more"
        />

        <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-white bg-green-900 rounded-full p-1" />
      </div>

    </div>
  )
}
