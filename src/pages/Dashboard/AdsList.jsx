import { useEffect } from 'react'
import { useAlert } from 'react-alert'
import { getAds } from '../../api'
import { useAdContext } from '../../context/ad'
import { GET_ADS_SUCCESS, REQUEST_AD_API } from '../../reducer/ad'
import AdCard from './AdCard'

const token = localStorage.getItem('token') || ''

const AdsList = () => {
    const alert = useAlert()
    const {
        adState: { ads },
        adDispatch,
    } = useAdContext()

    useEffect(() => {
        adDispatch({ type: REQUEST_AD_API })
        getAds(token)
            .then((res) => adDispatch({ type: GET_ADS_SUCCESS, payload: res }))
            .catch(() => alert('Error al obtener los anuncios'))
    }, [adDispatch, alert])

    return (
        <div className="flex flex-col gap-2">
            {!!ads.length && ads.map((ad) => <AdCard key={ad.id} ad={ad} />)}
            {!ads.length && <p>No hay anuncios</p>}
        </div>
    )
}

export default AdsList
