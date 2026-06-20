export const getProduct = async () => {
    try {
        
        const res = await fetch("https://full-stack-e-commers.onrender.com/products")
        if (!res.ok) {
            throw new Error("Failed to fetch products")
        }
        const data = await res.json()
        return data.data

    } catch (error) {
        console.log(error);
        throw error
    }
}