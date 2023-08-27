'use client'

import PreviewModal from '@/app/components/PreviewModal'
import { useState, useEffect } from 'react'

const ModalProvider = () => {
    const [hasMounted, setHasMounted] = useState(false)

    useEffect(() => {
        setHasMounted(true)
    }, [])

    if (!hasMounted) return null

    return (
        <PreviewModal />
    )
}

export default ModalProvider