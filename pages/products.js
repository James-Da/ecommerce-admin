import Layout from '@/components/Layout'
import React from 'react'
import Link from 'next/link'
const Products = () => {
  return (
    <Layout>
        <Link href={"/products/new"} className='bg-blue-900 rounded-md text-white py-1 px-2'>Add new product</Link>
    </Layout>
  )
}

export default Products