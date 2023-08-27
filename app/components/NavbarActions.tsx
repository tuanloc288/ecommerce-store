'use client'

import { ShoppingCart } from "lucide-react"
import { useState, useEffect } from 'react'

import Button from "./ui/Button"
import useCart from "@/hooks/useCart"
import { useRouter } from "next/navigation"


const NavbarActions = () => {
    const [hasMounted, setHasMounted] = useState(false)
    const cart = useCart()
    const router = useRouter()

    useEffect(() => {
        setHasMounted(true)
    }, [])

    if (!hasMounted) return null

    return (
        <div className="ml-auto flex items-center gap-x-4">
            <Button onClick={() => router.push('/cart')} className="flex items-center rounded-full bg-black px-4 py-2">
                <ShoppingCart
                    size={20}
                    color="white"
                />
                <span className="ml-2 text-sm font-medium text-white">
                    {cart.items.length}
                </span>
            </Button>
        </div>
    )
}

export default NavbarActions