'use client'

import { FC, useState, useEffect } from 'react'
import { Plus, X } from 'lucide-react'
import { Dialog } from '@headlessui/react'

import { Color, Size } from "@/types"
import Button from '@/app/components/ui/Button'
import IconButton from '@/app/components/ui/IconButton'
import Filter from './Filter'

interface MobileFilterProps {
    sizes: Size[]
    colors: Color[]
}

const MobileFilter: FC<MobileFilterProps> = ({
    sizes,
    colors
}) => {
    const [open, setOpen] = useState(false)

    const onClose = () => setOpen(false)
    const onOpen = () => setOpen(true)

    return (
        <>
            <Button onClick={onOpen} className='flex items-center gap-x-2 lg:hidden'>
                Filters
                <Plus size={20} />
            </Button>
            <Dialog open={open} as='div' className="relative z-10 lg:hidden" onClose={onClose}>
                {/*  background overlay  */}
                <div className='fixed inset-0 bg-black bg-opacity-25' />
                {/* Dialog position */}
                <div className='fixed inset-0 z-10 flex items-center justify-center'>
                    <Dialog.Panel
                        className='
                            relative
                            flex
                            flex-col
                            w-[90%] first-letter:
                            md:max-w-[500px]
                            h-[400px]
                            max-h-fit
                            overflow-y-auto 
                            bg-white
                            py-3 
                            shadow-xl
                            rounded-lg
                        '
                    >
                        <div className='flex items-center justify-end px-4'>
                            <IconButton icon={<X size={15} />} onClick={onClose} />
                        </div>
                        <div className='p-4'>
                            <Filter
                                valueKey="sizeId"
                                name="Sizes"
                                data={sizes}
                            />
                            <Filter
                                valueKey="colorId"
                                name="Colors"
                                data={colors}
                            />
                        </div>
                    </Dialog.Panel>
                </div>
            </Dialog>
        </>
    )
}

export default MobileFilter