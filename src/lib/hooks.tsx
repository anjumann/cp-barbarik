'use client'
import { usePathname } from 'next/navigation';

export const useActiveTab = (path: string): boolean => {
    const pathname = usePathname()
    if (pathname.includes(path)) {
        return true
    } else {
        return false
    }
}