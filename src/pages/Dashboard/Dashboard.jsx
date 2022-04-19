import AdsList from './AdsList'
import CustomModal from './CustomModal'
import { Button, Layout, LoadingOverlay } from '../../components'
import { useAdContext } from '../../context/ad'
import DashFilter from './DashFilter'
import useModal from '../../hooks/useModal'

const Dashboard = () => {
    const { adState } = useAdContext()

    const { openModal } = useModal()

    return (
        <Layout className="flex flex-col p-6 bg-quaternary gap-6 overflow-scroll row-span-5 col-span-full md:row-span-full md:col-span-8">
            <h2 className="font-bold text-2xl">Configuración de anuncios de limpieza</h2>

            {adState.isLoading && <LoadingOverlay />}

            <DashFilter />

            <AdsList />

            <CustomModal />

            <Button
                className="bg-primary max-w-[200px] px-4 py-2 text-tertiary font-bold rounded"
                onClick={openModal}>
                Añadir Anuncio
            </Button>
        </Layout>
    )
}

export default Dashboard
