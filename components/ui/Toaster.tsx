'use client'

import React from 'react'
import { Toaster, toast } from 'sonner'

export function ToastProvider() {
    return (
        <Toaster
            position="bottom-right"
            theme="dark"
            toastOptions={{
                style: {
                    background: '#1a1a1a',
                    border: '1px solid #333',
                    color: '#f3f3f3',
                }
            }}
        />
    )
}

export { toast }
