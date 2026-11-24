import { BrandI } from "./brand.types"
import { CategoryI } from "./category.type"
import { SubcategoryI } from "./subcategories.types"

export interface productDetailsI {
  sold: number
  images: string[]
  subcategory: SubcategoryI[]
  ratingsQuantity: number
  _id: string
  title: string
  slug: string
  description: string
  quantity: number
  price: number
  imageCover: string
  category: CategoryI
  brand: BrandI
  ratingsAverage: number
  createdAt: string
  updatedAt: string
  __v: number
  reviews: Review[]
  id: string
}






export interface Review {
  _id: string
  rating: number
  review: string
  product: string
  user: User
  createdAt: string
  updatedAt: string
  __v: number
}

export interface User {
  _id: string
  name: string
}
