import { Layout } from '../../components'
import workInProgress from '../../assets/work-in-progress.png'

const Dashboard = () => {
    return (
        <Layout className="flex flex-col items-center justify-center bg-quaternary row-span-full col-span-8">
            <h1 className="p-4 text-center font-bold text-3xl">WORK IN PROGRESS</h1>
            <img className="w-1/2" src={workInProgress} alt="Work in progress" />
        </Layout>
    )
}

export default Dashboard
