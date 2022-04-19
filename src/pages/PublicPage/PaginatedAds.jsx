/* eslint-disable no-underscore-dangle */
import { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import PublicAdCard from './PublicAdCard'
import cleaningItems from '../../assets/cleaning_items.png'

const PaginatedAds = ({ ads, itemsPerPage }) => {
    const [currentItems, setCurrentItems] = useState([])
    const [pageCount, setPageCount] = useState(0)
    const [itemOffset, setItemOffset] = useState(0)

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage
        setCurrentItems(ads.slice(itemOffset, endOffset))
        setPageCount(Math.ceil(ads.length / itemsPerPage))
    }, [itemOffset, itemsPerPage, ads])

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % ads.length
        setItemOffset(newOffset)
    }

    return (
        <div className="flex flex-col gap-6 col-span-full p-8 md:col-span-7">
            {currentItems.length ? (
                currentItems.map((ad) => <PublicAdCard key={ad.id} ad={ad} />)
            ) : (
                <div className="border-[1px] p-4 shadow">
                    <h3 className="font-bold mb-4 text-center text-2xl">NO HAY ANUNCIOS</h3>
                    <img className="w-1/2 m-auto" src={cleaningItems} alt="" />
                </div>
            )}

            <ReactPaginate
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                marginPagesDisplayed={2}
                pageCount={pageCount}
                previousLabel="<"
                pageClassName="border-[1px] border-queaternary px-2"
                breakLabel="..."
                containerClassName="flex gap-2 justify-center"
                activeClassName="border-[1px] border-secondary text-secondary"
                renderOnZeroPageCount={null}
            />
        </div>
    )
}

export default PaginatedAds
