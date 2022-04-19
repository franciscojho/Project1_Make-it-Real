/* eslint-disable no-underscore-dangle */

const fromPublicApi = (data) => {
    const formattedData = data.map((item) => ({
        id: item._id,
        expirationDate: item.expirationDate,
        title: item.name,
        rate: item.rate,
        description: item.description,
        status: item.status,
        frequency: item.frequency,
        fareIncluded: item.fareIncluded,
        lunchIncluded: item.lunchIncluded,
        locationReference: item.addressReference,
        department: item.region,
        province: item.province,
        district: item.city,
        user: item.user,
        createdAt: item.createdAt,
        updatedAt: item.updatedAt,
    }))
    return formattedData
}

export default fromPublicApi
