import { BrandI } from "./brand.types"
import { CategoryI } from "./category.type"
import { productI } from "./product.types"
import { SubcategoryI } from "./subcategories.types"

export interface CartDataI {
  status: string
  numOfCartItems: number
  cartId: string
  data: Data
}

export interface Data {
  _id: string
  cartOwner: string
  products: CartProductI[]
  createdAt: string
  updatedAt: string
  __v: number
  totalCartPrice: number
}

export interface CartProductI {
  count: number
  _id: string
  product: productI
  price: number
}


