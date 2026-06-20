export const getProduct = async () => {
    try {
        
        const res = await fetch("http://localhost:8000/products")
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