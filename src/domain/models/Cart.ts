import { Product } from './Product'

export type CartId = string

export type Cart = {
  id: CartId
  items: Product[]
}