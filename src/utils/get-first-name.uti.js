const getFirstName = (userName) => {
    const splitName = userName.split(' ')
    return splitName[0]
}

export default getFirstName
