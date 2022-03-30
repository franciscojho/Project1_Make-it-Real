import { useState } from 'react'
import AdsList from './AdsList'
import CustomModal from './CustomModal'
import { Button, Layout } from '../../components'
import { createAd, updateAd } from '../../api'
import { useAuthContext } from '../../context/auth'
import { useAdContext } from '../../context/ad'
import {
    CREATE_AD_REQUEST,
    CREATE_AD_SUCCESS,
    UPDATE_AD_REQUEST,
    UPDATE_AD_SUCCESS,
} from '../../reducer/ad'

const Dashboard = () => {
    const { state: auth } = useAuthContext()
    const { adDispatch } = useAdContext()

    const [open, setOpen] = useState(false)
    const [selectedAd, setSelectedAd] = useState({})

    const handleSave = (values) => {
        if (values && !selectedAd.id) {
            adDispatch({ type: CREATE_AD_REQUEST })
            createAd(auth.token, values).then((ad) =>
                adDispatch({ type: CREATE_AD_SUCCESS, payload: ad })
            )
        }

        if (values && selectedAd.id) {
            adDispatch({ type: UPDATE_AD_REQUEST })
            updateAd(auth.token, { ...values, id: selectedAd.id }).then((ad) =>
                adDispatch({ type: UPDATE_AD_SUCCESS, payload: { selectedAd, ad } })
            )
        }
        setOpen(false)
        setSelectedAd({})
    }

    return (
        <Layout className="flex flex-col p-6 bg-quaternary row-span-full col-span-8 gap-6">
            <h2 className="font-bold text-2xl">Configuración de anuncios de limpieza</h2>

            <AdsList setOpen={setOpen} setSelectedAd={setSelectedAd} />

            <CustomModal
                handleSave={handleSave}
                selectedAd={selectedAd}
                setOpen={setOpen}
                open={open}
                setSelectedAd={setSelectedAd}
            />

            <Button
                className="bg-primary w-full md:max-w-[200px] px-4 py-2 text-tertiary font-bold rounded"
                onClick={() => setOpen(true)}>
                Añadir Anuncio
            </Button>
        </Layout>
    )
}

export default Dashboard
