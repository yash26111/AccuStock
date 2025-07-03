
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      inventory_items: {
        Row: {
          id: string
          name: string
          description: string | null
          category: string | null
          quantity: number
          unit_price: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          description?: string | null
          category?: string | null
          quantity?: number
          unit_price: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          description?: string | null
          category?: string | null
          quantity?: number
          unit_price?: number
          created_at?: string
          updated_at?: string
        }
      }
      sales: {
        Row: {
          id: string
          customer_name: string | null
          customer_email: string | null
          inventory_item_id: string | null
          quantity: number
          sale_price: number
          sale_date: string
          notes: string | null
        }
        Insert: {
          id?: string
          customer_name?: string | null
          customer_email?: string | null
          inventory_item_id?: string | null
          quantity: number
          sale_price: number
          sale_date?: string
          notes?: string | null
        }
        Update: {
          id?: string
          customer_name?: string | null
          customer_email?: string | null
          inventory_item_id?: string | null
          quantity?: number
          sale_price?: number
          sale_date?: string
          notes?: string | null
        }
      }
    }
  }
}
