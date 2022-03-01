export const signInUser = async (props) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/auth/signin`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ...props, userType: 'CLIENT' }),
        })
        const data = await response.json()
        return data
    } catch (error) {
        throw new Error(error)
    }
}

export const signUpUser = async (props) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/auth/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ...props, userType: 'CLIENT' }),
        })
        const data = await response.json()
        return data
    } catch (error) {
        throw new Error(error)
    }
}

export const verifyToken = async (token) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/user`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        })
        const data = await response.json()
        return data
    } catch (error) {
        throw new Error(error)
    }
}
