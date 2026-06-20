import React, { useEffect, useState } from 'react'
import { motion } from "motion/react"
import { getProduct } from './api/productApi'

const Product = () => {

    const [product, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const data = await getProduct()
                setProducts(data)
                setIsLoading(false)
            } catch (error) {
                console.log(error);
            }
        }
        fetchProduct()
    }, [])

    if (isLoading) {
        return <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 2 }} className='flex items-center justify-center mx-auto h-screen'>
            <h1 className='font-extrabold text-4xl font-mono bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent'>Loading...</h1>
        </motion.div>
    }

    return (
        <div className='max-w-7xl mx-auto p-5'>
            <h1 className='text-3xl font-bold mb-6'>Products</h1>

            <motion.div
                className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                {product.map((product) => {
                    return (
                        <motion.div key={product.product_id} className='border rounded-lg shadow-md p-4 hover:scale-110 ease-in-out duration-150'>
                            <img src={product.image} alt={product.title} className='w-full h-48 object-cover rounded' />

                            <h2 className='font-bold text-lg mt-3'>{product.title}</h2>

                            <p className='text-green-600 font-semibold'>₹{product.price}</p>

                            <p className='text-sm text-gray-500'>Brand: {product.brand}</p>

                            <button className='mt-3 w-full bg-blue-500 text-white py-2 rounded'>View Product</button>
                        </motion.div>
                    )
                })}
            </motion.div>
        </div>
    )
}

export default Product



// initial = {{ opacity: 0, y: 100 }}
// whileInView = {{ opacity: 1, y: 0 }}
// viewport = {{ once: true }}
// transition = {{ duration: 0.6 }}