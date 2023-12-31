'use client'

import { FC, MouseEventHandler } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Expand, ShoppingCart } from 'lucide-react'

import { Product } from "@/types"
import IconButton from './IconButton'
import Currency from './Currency'
import usePreviewModal from '@/hooks/usePreviewModal'
import useCart from '@/hooks/useCart'

interface ProductCardProps {
    data: Product
}

const ProductCard: FC<ProductCardProps> = ({
    data
}) => {
    const router = useRouter()
    const previewModal = usePreviewModal()
    const cart = useCart()


    const handleClick = () => {
        router.push(`/product/${data?.id}`)
    }

    // bc parent ele also has an onClick event (handleClick)
    // so we have to stop propagation to parent onClick event like this
    const onPreview: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.stopPropagation()

        previewModal.onOpen(data)
    }

    const onAddToCart: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.stopPropagation()

        cart.addItem(data)
    }

    return (
        <div onClick={handleClick} className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4">
            <div className='aspect-square rounded-xl bg-gray-100 relative'>
                <Image
                    alt='product image'
                    src={data?.images[0]?.url}
                    fill
                    className='aspect-square object-cover rounded-md'
                />
                <div className='opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5'>
                    <div className='flex gap-x-6 justify-center'>
                        <IconButton
                            className=''
                            onClick={onPreview}
                            icon={<Expand size={20} className='text-gray-600' />}
                        />
                        <IconButton
                            className=''
                            onClick={onAddToCart}
                            icon={<ShoppingCart size={20} className='text-gray-600' />}
                        />
                    </div>
                </div>
            </div>
            <div>
                <p className='font-semibold text-lg'>
                    {data?.name}
                </p>
                <p className='text-sm text-gray-500'>
                    {data?.category?.name}
                </p>
            </div>
            <div className='flex items-center justify-between'>
                <Currency value={data?.price} />
            </div>
        </div>
    )
}

export default ProductCard