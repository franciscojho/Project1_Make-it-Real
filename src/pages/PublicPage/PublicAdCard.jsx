import { ubigeo } from 'peruuse'
import { useEffect, useState } from 'react'
import { Button } from '../../components'

const PublicAdCard = ({ ad }) => {
    const { user } = ad

    const [department, setDepartment] = useState('')
    const [province, setProvince] = useState('')
    const [district, setDistrict] = useState('')

    useEffect(() => {
        setDepartment(ubigeo.getDepartments().filter((item) => item.code === ad.department)[0].name)
        setProvince(
            ubigeo.getProvince(ad.department).filter((item) => item.code === ad.province)[0].name
        )
        setDistrict(
            ubigeo.getDistrict(ad.province).filter((item) => item.code === ad.district)[0].name
        )
    }, [ad.department, ad.province, ad.district])

    const handleOpenWhatsApp = () => {
        const url = `https://api.whatsapp.com/send?phone=51${user.mobile}&text=Hola,%20me%20interesa%20el%20anuncio%20${ad.title}`
        window.open(url, '_blank')
    }

    return (
        <section className="flex flex-col gap-2 p-8 shadow-md rounded w-full">
            <h3 className="font-bold text-2xl">{`${ad.title} (${user.name})`}</h3>
            <div className="flex gap-8 text-sm">
                <p>
                    <span className="font-bold">Precio: </span>
                    {`S/.${ad.rate}`}
                </p>
                <p>
                    <span className="font-bold">Frecuencia: </span>
                    {ad.frequency}
                </p>
            </div>
            <div className="flex gap-8 text-sm">
                <p>
                    <span className="font-bold">Pasaje: </span>
                    {ad.fareIncluded ? 'Incluido' : 'No incluido'}
                </p>
                <p>
                    <span className="font-bold">Almuerzo: </span>
                    {ad.lunchIncluded ? 'Incluido' : 'No incluido'}
                </p>
            </div>
            <p className="text-sm">
                <span className="font-bold">Descripción: </span>
                {ad.description}
            </p>
            <p className="text-sm">
                <span className="font-bold">Ubicación: </span>
                {`${department}, ${province}, ${district}`}
            </p>
            <p className="text-sm">
                <span className="font-bold">Referencia: </span>
                {ad.locationReference}
            </p>
            <p className="text-sm">
                <span className="font-bold">Contacto: </span>
                {user.mobile}
            </p>
            <Button
                className="bg-green-600 max-w-[200px] px-4 py-2 text-tertiary font-bold rounded"
                onClick={handleOpenWhatsApp}>
                Contactar
            </Button>
        </section>
    )
}

export default PublicAdCard
