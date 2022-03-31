import ReactLoading from 'react-loading'

const LoadingOverlay = () => {
    return (
        <div className="flex justify-center items-center bg-gray-500 opacity-50 h-full w-full fixed inset-0 z-50">
            <ReactLoading type="spokes" color="white" height="5%" width="5%" />
        </div>
    )
}

export default LoadingOverlay
