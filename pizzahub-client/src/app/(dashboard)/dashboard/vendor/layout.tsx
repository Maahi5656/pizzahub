import React from 'react'
import { requireRole } from '@/lib/core/server'

const VendorDashboardLayout = async({children}:{children: React.ReactNode}) => {
    
    requireRole("vendor");

    return children;
}

export default VendorDashboardLayout