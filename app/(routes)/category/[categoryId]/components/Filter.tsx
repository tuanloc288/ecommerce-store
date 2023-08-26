'use client'

import { FC } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import qs from 'query-string'

import { Color, Size } from '@/types'
import Button from '@/app/components/ui/Button'
import { cn } from '@/lib/utils'

interface FilterProps {
    valueKey: string
    name: string
    data: (Size | Color)[]
}

const Filter: FC<FilterProps> = ({
    valueKey,
    name,
    data
}) => {
    const searchParams = useSearchParams()
    const router = useRouter()

    const selectedValue = searchParams.get(valueKey)

    const onClick = (id: string) => {
        
        const current = qs.parse(searchParams.toString())
        
        const query = {
            ...current,
            [valueKey]: id
        }

       if(current[valueKey] === id){
             query[valueKey] = null
        }

        const url = qs.stringifyUrl({
            url: window.location.href,
            query
        }, { skipNull: true })

        router.push(url)
    }

    return (
        <div className='mb-8'>
            <h3 className='text-lg font-semibold'>
                {name}
            </h3>
            <hr className='my-4'/>
            <div className='flex flex-wrap gap-2'>
                {data.map((filter) => (
                    <div className='flex items-center' key={filter.id}>
                        <Button
                            className={cn(`
                                rounded-md
                                text-sm
                                text-gray-800
                                p-2
                                bg-white
                                border 
                                border-gray-300
                            `, selectedValue === filter.id && "bg-black text-white")}
                            onClick={() => onClick(filter.id)}
                        >
                            {filter.name}
                        </Button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Filter