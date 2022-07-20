import { IconBtnGroup } from 'components/IconBtnGroup/IconBtnGroup';
import { IconBtn } from 'components/IconBtn/IconBtn';
import { NavBar } from 'components/NavBar/NavBar';
import { ToolBar } from 'components/ToolBar/ToolBar';
import { Layout } from './Layout';
import { Voting } from 'components/Voting/Voting';
import { Log } from 'components/Log/Log';



export const VotingPage = () => {
    return (
        <Layout>
            <ToolBar />
            <div className="bg-white rounded-lg h-full w-full mt-2.5">
                <NavBar className='my-5' title='Voiting'/>
                <Voting className="m-5" />
                <Log className='mx-5 mt-20' />
            </div>
        </Layout>
    )
}