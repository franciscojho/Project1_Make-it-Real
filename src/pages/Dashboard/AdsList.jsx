import { useEffect } from 'react'
import { deleteAd, getAds } from '../../api'
import { useAdContext } from '../../context/ad'
import { useAuthContext } from '../../context/auth'
import {
    DELETE_AD_REQUEST,
    DELETE_AD_SUCCESS,
    GET_ADS_REQUEST,
    GET_ADS_SUCCESS,
} from '../../reducer/ad'
import AdCard from './AdCard'

const AdsList = ({ setOpen, setSelectedAd }) => {
    const { adState, adDispatch } = useAdContext()
    const { state: auth } = useAuthContext()

    const { ads } = adState

    useEffect(() => {
        adDispatch({ type: GET_ADS_REQUEST })
        getAds(auth.token).then((res) => adDispatch({ type: GET_ADS_SUCCESS, payload: res }))
    }, [adDispatch, auth.token])

    const handleUpdate = (id) => {
        ads.filter((ad) => ad.id === id).map((ad) => setSelectedAd(ad))
        setOpen(true)
    }

    const handleDelete = (id) => {
        adDispatch({ type: DELETE_AD_REQUEST })
        deleteAd(auth.token, id).then((ad) =>
            adDispatch({ type: DELETE_AD_SUCCESS, payload: { id: ad.id } })
        )
    }

    return (
        <div className="flex flex-col gap-2">
            {!!ads.length &&
                ads.map((ad) => (
                    <AdCard
                        key={ad.id}
                        ad={ad}
                        handleUpdate={handleUpdate}
                        handleDelete={handleDelete}
                    />
                ))}
            {!ads.length && <p>No hay anuncios</p>}
        </div>
    )
}

export default AdsList
