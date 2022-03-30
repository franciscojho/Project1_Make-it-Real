import formatDateYYYYMMDD from '../utils/format-date-yyyymmdd.util'

/* eslint-disable no-underscore-dangle */

export const toApiAd = (outAd) => {
    return {
        name: outAd.name,
        expirationDate: new Date(`${outAd.expirationDate}Z`),
        rate: outAd.rate,
        frequency: outAd.frequency,
        lunchIncluded: outAd.lunchIncluded,
        fareIncluded: outAd.fareIncluded,
        description: outAd.description,
        region: outAd.region,
        province: outAd.province,
        city: outAd.city,
        addressReference: outAd.addressReference,
    }
}

export const fromApiAd = (inAd) => {
    const { ad } = inAd
    return {
        name: ad.name,
        expirationDate: formatDateYYYYMMDD(ad.expirationDate),
        rate: ad.rate,
        frequency: ad.frequency,
        lunchIncluded: ad.lunchIncluded,
        fareIncluded: ad.fareIncluded,
        description: ad.description,
        region: ad.region,
        province: ad.province,
        city: ad.city,
        addressReference: ad.addressReference,
        userId: ad.user,
        id: ad._id,
        status: ad.status,
        createdAt: ad.createdAt,
        updatedAt: ad.updatedAt,
    }
}

export const fromApiAdMap = (inAds) => {
    const { ads } = inAds
    return ads.map((ad) => fromApiAd({ ad }))
}
