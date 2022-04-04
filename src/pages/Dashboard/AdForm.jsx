import { useState, useEffect } from 'react'
import { Form, useFormikContext } from 'formik'
import { ubigeo } from 'peruuse'
import {
    Button,
    CheckboxField,
    DateField,
    NumberField,
    SelectField,
    TextareaField,
    TextField,
} from '../../components'

const regions = ubigeo.getDepartments()

const AdForm = () => {
    const { values } = useFormikContext()
    const [provinces, setProvinces] = useState([])
    const [cities, setCities] = useState([])

    useEffect(() => {
        setProvinces(ubigeo.getProvince(values.region))
    }, [values, values.region])

    useEffect(() => {
        setCities(ubigeo.getDistrict(values.province))
    }, [values, values.province])

    return (
        <Form className="flex flex-col gap-4">
            <div className="flex flex-col lg:flex-row lg:justify-between gap-4">
                <TextField
                    className="py-1 px-2 border-gray-400 border-[1px] rounded-md"
                    label="Nombre de anuncio"
                    name="name"
                    placeholder="Nombre de anuncio"
                />
                <DateField
                    className="py-1 px-2 border-gray-400 border-[1px] rounded-md"
                    label="Fecha de expiración"
                    name="expirationDate"
                />
            </div>
            <div className="flex flex-col lg:flex-row lg:justify-between gap-4">
                <NumberField
                    className="py-1 px-2 border-gray-400 border-[1px] rounded-md"
                    currencySymbol="S/."
                    label="Tarifa"
                    name="rate"
                    type="number"
                />
                <SelectField
                    className="py-1 px-2 border-gray-400 border-[1px] rounded-md"
                    label="Frecuencia de limpieza"
                    name="frequency">
                    <option value="">Selecciona una opción</option>
                    <option value="once">Única vez</option>
                    <option value="daily">Diario</option>
                    <option value="weekly">Semanal</option>
                    <option value="monthly">Mensual</option>
                    <option value="tbd">A discutir</option>
                </SelectField>
            </div>
            <div className="flex flex-col lg:flex-row lg:justify-between gap-4">
                <CheckboxField
                    label="¿Almuerzo incluído?"
                    name="lunchIncluded"
                    checked={values.lunchIncluded}
                />
                <CheckboxField
                    label="¿Pasaje incluído?"
                    name="fareIncluded"
                    checked={values.fareIncluded}
                />
            </div>
            <div className="flex flex-col lg:flex-row lg:justify-between gap-4">
                <TextareaField
                    className="py-1 px-2 border-gray-400 border-[1px] h-20 rounded-md"
                    label="Descripción"
                    name="description"
                />
            </div>
            <div className="flex flex-col lg:flex-row lg:justify-between flex-wrap gap-4">
                <SelectField
                    className="py-1 px-2 border-gray-400 border-[1px] rounded-md"
                    label="Departamento"
                    name="region">
                    <option value="">Selecciona una opción</option>
                    {regions.map(({ code, name }) => (
                        <option key={code} value={code}>
                            {name}
                        </option>
                    ))}
                </SelectField>
                <SelectField
                    className="py-1 px-2 border-gray-400 border-[1px] rounded-md"
                    label="Provincia"
                    name="province">
                    <option value="">Selecciona una opción</option>
                    {provinces.map(({ code, name }) => (
                        <option key={code} value={code}>
                            {name}
                        </option>
                    ))}
                </SelectField>
                <SelectField
                    className="py-1 px-2 border-gray-400 border-[1px] rounded-md"
                    label="Distrito"
                    name="city">
                    <option value="">Selecciona una opción</option>
                    {cities.map(({ code, name }) => (
                        <option key={code} value={code}>
                            {name}
                        </option>
                    ))}
                </SelectField>
            </div>
            <div className="flex flex-col lg:flex-row lg:justify-between gap-4">
                <TextareaField
                    className="py-1 px-2 border-gray-400 border-[1px] h-20 rounded-md"
                    label="Dirección referencial"
                    name="addressReference"
                />
            </div>
            <Button
                className="bg-primary w-full lg:max-w-[200px] px-4 py-2 text-tertiary font-bold rounded"
                type="submit">
                Guardar
            </Button>
        </Form>
    )
}

export default AdForm
