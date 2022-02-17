const signInUser = async ({ email, password }) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/auth/signin`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password, userType: 'CLIENT' }),
        })
        const data = await response.json()
        return data
    } catch (error) {
        throw new Error(error)
    }
}

export default signInUser
