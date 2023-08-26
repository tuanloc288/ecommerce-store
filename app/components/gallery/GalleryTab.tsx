import { FC } from 'react'
import { Tab } from '@headlessui/react'

import { Image as ImageType} from "@/types"
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface GalleryTabProps {
    image: ImageType
}

const GalleryTab: FC<GalleryTabProps> = ({
    image
}) => {
  return (
    <Tab className="relative flex aspect-square cursor-pointer items-center justify-center rounded-md bg-white">
        {({ selected }) => (
            <div>
                <span className='absolute h-full w-full aspect-square inset-0 overflow-hidden rounded-md'>
                    <Image
                        fill
                        src={image.url}
                        alt="gallery image"
                        className='object-cover object-center'
                    />
                </span>
                <span className={cn(`
                    absolute
                    inset-0
                    rounded-md
                    ring-2
                    ring-offset-2
                `,  selected ? "ring-black" : "ring-transparent"
                )}/>
            </div>
        )}
    </Tab>
  )
}

export default GalleryTab