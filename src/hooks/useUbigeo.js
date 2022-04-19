/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import { useFormikContext } from 'formik'
import { ubigeo } from 'peruuse'
import { useSearchParams } from 'react-router-dom'

const initialDepartments = []
const initialProvinces = []
const initialDistricts = []

const useUbigeo = () => {
    const { values, setValues } = useFormikContext()
    const [departments, setDepartments] = useState(initialDepartments)
    const [provinces, setProvinces] = useState(initialProvinces)
    const [districts, setDistricts] = useState(initialDistricts)
    const { department, province } = values

    const [searchParams] = useSearchParams()

    useEffect(() => {
        setDepartments(ubigeo.getDepartments())
    }, [])

    useEffect(() => {
        setProvinces(ubigeo.getProvince(department))
        if (searchParams.get('department') !== values.department) {
            setValues({ ...values, province: '', district: '' })
            setDistricts(initialDistricts)
        }
    }, [department])

    useEffect(() => {
        setDistricts(ubigeo.getDistrict(province))
        if (searchParams.get('province') !== values.province) {
            setValues({ ...values, district: '' })
        }
    }, [province])

    return {
        departments,
        provinces,
        districts,
    }
}

export default useUbigeo
