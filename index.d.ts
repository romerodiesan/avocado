type Url = string
type Json =
  | string
  | number
  | boolean
  | null
  | { [property: string]: Json }
  | Json[]

type TProductId = string

type TProductAttributes = {
  id: string
  name: string
  price: number
  description: string
  image: string | undefined
  shape: string
  hardiness: string
  taste: string
}

type TProduct = {
  id: TProductId
  description: string
  name: string
  sku: string
  price: number
  image: string
  shape: string
  hardiness: string
  taste: string
} | null

type TAPIAVODetailResponse = TProduct

type TAPIAvoResponse = {
  lenght: number
  data: TProduct[]
  error?: string
}