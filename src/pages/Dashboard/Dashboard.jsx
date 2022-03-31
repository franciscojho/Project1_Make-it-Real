import AdsList from './AdsList'
import CustomModal from './CustomModal'
import { Button, Layout, LoadingOverlay } from '../../components'
import { useModalContext } from '../../context/modal'
import { useAdContext } from '../../context/ad'

const Dashboard = () => {
    const { adState } = useAdContext()
    const { handleModal } = useModalContext()

    return (
        <Layout className="flex flex-col p-6 bg-quaternary row-span-full col-span-8 gap-6">
            <h2 className="font-bold text-2xl">Configuración de anuncios de limpieza</h2>

            {adState.isLoading && <LoadingOverlay />}

            <AdsList />

            <CustomModal />

            <Button
                className="bg-primary w-full md:max-w-[200px] px-4 py-2 text-tertiary font-bold rounded"
                onClick={handleModal}>
                Añadir Anuncio
            </Button>
        </Layout>
    )
}

export default Dashboard
