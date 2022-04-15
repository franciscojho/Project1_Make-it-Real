/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from 'react'
import { createSearchParams, useNavigate, useSearchParams } from 'react-router-dom'
import { Formik } from 'formik'
import { useAlert } from 'react-alert'
import { Layout, LoadingOverlay } from '../../components'
import PaginatedAds from './PaginatedAds'
import FilterWrapper from './FilterWrapper'
import getAllAds from '../../services/public.service'
import fromPublicApi from '../../adapters/public.adapter'

const PublicPage = () => {
    const alert = useAlert()
    const navigate = useNavigate()
    const [ads, setAds] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [searchParams] = useSearchParams()

    const handleOnSubmit = ({ department, province, district, radioFilter }) => {
        const criteria = createSearchParams({
            ...(department && { department }),
            ...(province && { province }),
            ...(district && { district }),
            ...(radioFilter && { radioFilter }),
        }).toString()
        navigate({
            pathname: '/public',
            search: criteria,
        })
    }

    useEffect(() => {
        setIsLoading(true)
        getAllAds(searchParams)
            .then((data) => {
                setAds(fromPublicApi(data.ads))
            })
            .catch((error) => alert.error(error.message))
            .finally(() => setIsLoading(false))
    }, [searchParams])

    return (
        <Layout className="grid grid-flow-row grid-cols-10 grid-rows-[repeat(auto-fill,_minmax(15rem,_1fr))]">
            <Formik
                initialValues={{
                    department: '',
                    province: '',
                    district: '',
                    radioFilter: '',
                }}
                onSubmit={(values) => {
                    handleOnSubmit(values)
                }}>
                {() => <FilterWrapper />}
            </Formik>
            {isLoading ? <LoadingOverlay /> : <PaginatedAds ads={ads} itemsPerPage={6} />}
        </Layout>
    )
}

export default PublicPage
