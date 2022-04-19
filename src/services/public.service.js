const getAllAds = async (queryString) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/public?${queryString}`)
        const data = await response.json()
        return data
    } catch (error) {
        return { error: error.message }
    }
}

export default getAllAds
