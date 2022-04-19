/* eslint-disable react-hooks/exhaustive-deps */
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
import useModal from '../../hooks/useModal'

const regions = ubigeo.getDepartments()

const AdForm = () => {
    const { selected, action } = useModal()
    const { values, setValues } = useFormikContext()
    const [provinces, setProvinces] = useState([])
    const [cities, setCities] = useState([])
    const [disabled, setDisabled] = useState(false)

    useEffect(() => {
        if (action === 'view') {
            setDisabled(true)
        }
    }, [])

    useEffect(() => {
        setValues({ ...values, ...selected })
    }, [selected])

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
                    disabled={disabled}
                    className="py-1 px-2 border-gray-400 border-[1px] rounded-md"
                    label="Nombre de anuncio"
                    name="name"
                    placeholder="Nombre de anuncio"
                />
                <DateField
                    disabled={disabled}
                    className="py-1 px-2 border-gray-400 border-[1px] rounded-md"
                    label="Fecha de expiración"
                    name="expirationDate"
                />
            </div>
            <div className="flex flex-col lg:flex-row lg:justify-between gap-4">
                <NumberField
                    disabled={disabled}
                    className="py-1 px-2 border-gray-400 border-[1px] rounded-md"
                    currencySymbol="S/."
                    label="Tarifa"
                    name="rate"
                    type="number"
                />
                <SelectField
                    disabled={disabled}
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
                    disabled={disabled}
                    label="¿Almuerzo incluído?"
                    name="lunchIncluded"
                    checked={values.lunchIncluded}
                />
                <CheckboxField
                    disabled={disabled}
                    label="¿Pasaje incluído?"
                    name="fareIncluded"
                    checked={values.fareIncluded}
                />
            </div>
            <div className="flex flex-col lg:flex-row lg:justify-between gap-4">
                <TextareaField
                    disabled={disabled}
                    className="py-1 px-2 border-gray-400 border-[1px] h-20 rounded-md"
                    label="Descripción"
                    name="description"
                />
            </div>
            <div className="flex flex-col lg:flex-row lg:justify-between flex-wrap gap-4">
                <SelectField
                    disabled={disabled}
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
                    disabled={disabled}
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
                    disabled={disabled}
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
                    disabled={disabled}
                    className="py-1 px-2 border-gray-400 border-[1px] h-20 rounded-md"
                    label="Dirección referencial"
                    name="addressReference"
                />
            </div>
            {!disabled && (
                <Button
                    className="bg-primary w-full lg:max-w-[200px] px-4 py-2 text-tertiary font-bold rounded"
                    type="submit">
                    Guardar
                </Button>
            )}
        </Form>
    )
}

export default AdForm
