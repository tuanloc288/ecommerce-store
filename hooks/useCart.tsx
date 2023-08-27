import { create } from "zustand";
import { persist, createJSONStorage } from 'zustand/middleware' 
import { toast } from 'react-hot-toast'

import { Product } from "@/types";

interface CartStore {
    items: Product[]
    addItem: (data: Product) => void
    removeItem: (id: string) => void
    removeAll: () => void
}

// use persist and localStorage to store user's cart 
// https://docs.pmnd.rs/zustand/integrations/persisting-store-data
const useCart = create(
    persist<CartStore>((set, get) => ({
        items: [],
        addItem: (data: Product) => {
            const currentItem = get().items
            const existingItem = currentItem.find((item) => item.id === data.id)

            if(existingItem){
                return toast("Item already appear in your cart.")
            }

            set({ items: [...get().items, data] })
            toast.success("Add item to your cart successfully.")
        },
        removeItem: (id: string) => {
            set({ items: [...get().items.filter((item) => item.id !== id)] })
            toast.success("Remove item successfully.")
        },
        removeAll: () => {
            set({ items: [] })
        }
    }), {
        name: 'cart-storage',
        storage: createJSONStorage(() => localStorage)
    })
)

export default useCart