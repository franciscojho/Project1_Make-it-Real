import { useAlert } from 'react-alert'
import { createAd, deleteAd, updateAd } from '../api'
import { useAdContext } from '../context/ad'
import { useModalContext } from '../context/modal'
import {
    CREATE_AD_SUCCESS,
    DELETE_AD_SUCCESS,
    REQUEST_AD_API,
    REQUEST_AD_ERROR,
    UPDATE_AD_SUCCESS,
} from '../reducer/ad'

const useForm = () => {
    const token = localStorage.getItem('token') || ''
    const alert = useAlert()
    const { handleModal } = useModalContext()
    const { adState, adDispatch } = useAdContext()

    const { isLoading } = adState

    const handleCreateAd = (ad) => {
        adDispatch({ type: REQUEST_AD_API })
        createAd(token, ad)
            .then((res) => {
                adDispatch({ type: CREATE_AD_SUCCESS, payload: res })
                alert.success('Anuncio creado con éxito')
            })
            .catch(() => {
                adDispatch({ type: REQUEST_AD_ERROR })
                alert.error('Error al crear el anuncio')
            })
            .finally(() => {
                handleModal()
            })
    }

    const handleUpdateAd = (ad, id) => {
        adDispatch({ type: REQUEST_AD_API })
        updateAd(token, { ...ad, id })
            .then((res) => {
                adDispatch({ type: UPDATE_AD_SUCCESS, payload: { id, ad: res } })
                alert.success('Anuncio actualizado con éxito')
            })
            .catch(() => {
                adDispatch({ type: REQUEST_AD_ERROR })
                alert.error('Error al actualizar el anuncio')
            })
            .finally(() => {
                handleModal()
            })
    }

    const handleDeleteAd = (id) => {
        adDispatch({ type: REQUEST_AD_API })
        deleteAd(token, id)
            .then((res) => {
                adDispatch({ type: DELETE_AD_SUCCESS, payload: { id: res.id } })
                alert.success('Anuncio eliminado con éxito')
            })
            .catch(() => {
                adDispatch({ type: REQUEST_AD_ERROR })
                alert.error('Error al borrar el anuncio')
            })
    }

    return { handleCreateAd, handleUpdateAd, handleDeleteAd, isLoading }
}

export default useForm
