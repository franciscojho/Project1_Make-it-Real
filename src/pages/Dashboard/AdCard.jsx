import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash, faEye } from '@fortawesome/free-solid-svg-icons'
import useForm from '../../hooks/useForm'
import { Button } from '../../components'
import useModal from '../../hooks/useModal'

const AdCard = ({ ad }) => {
    const { openModal } = useModal()
    const { handleDeleteAd } = useForm()

    const handleView = () => {
        openModal(ad, 'view')
    }

    const handleEdit = () => {
        openModal(ad, 'edit')
    }

    return (
        <div className="bg-tertiary flex flex-wrap h-20 items-center py-2 px-6 rounded-lg shadow">
            <p className="flex-1 font-bold min-w-fit">{ad.name}</p>
            <div className="flex flex-1 flex-wrap justify-between min-w-fit">
                <div className="text-xs">
                    <p className="hidden md:block">Creado en: {ad.createdAt}</p>
                    <p className="hidden md:block">Expira en: {ad.expirationDate}</p>
                </div>
                <div className="flex gap-4">
                    <p
                        className={`${
                            !ad.expired ? 'text-green-600' : 'text-red-500'
                        } font-semibold`}>
                        {!ad.expired ? 'Activo' : 'Expirado'}
                    </p>
                    <Button onClick={handleView}>
                        <FontAwesomeIcon
                            icon={faEye}
                            className="cursor-pointer text-red-gray hover:opacity-70"
                        />
                    </Button>
                    <Button disabled={ad.expired} onClick={handleEdit}>
                        <FontAwesomeIcon
                            icon={faEdit}
                            className={`${
                                !ad.expired
                                    ? 'cursor-pointer text-secondary hover:opacity-70'
                                    : 'cursor-not-allowed text-gray-400'
                            }`}
                        />
                    </Button>
                    <Button onClick={() => handleDeleteAd(ad.id)}>
                        <FontAwesomeIcon
                            icon={faTrash}
                            className="cursor-pointer text-red-500 hover:opacity-70"
                        />
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default AdCard
