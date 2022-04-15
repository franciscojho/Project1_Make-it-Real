/* eslint-disable react-hooks/exhaustive-deps */
import { useFormikContext } from 'formik'
import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import Filter from './Filter'
import Header from './Header'

const FilterWrapper = () => {
    const { values, setValues } = useFormikContext()
    const [searchParams] = useSearchParams()

    useEffect(() => {
        setValues({
            ...values,
            department: searchParams.get('department') || '',
            province: searchParams.get('province') || '',
            district: searchParams.get('district') || '',
            radioFilter: searchParams.get('radioFilter') || '',
        })
    }, [])

    return (
        <>
            <Header />
            <Filter />
        </>
    )
}

export default FilterWrapper
