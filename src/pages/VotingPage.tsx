import { NavBar } from 'components/NavBar/NavBar';
import { Layout, RightSideLayout } from './Layout';
import { Voting } from 'components/Voting/Voting';
import { Log } from 'components/Log/Log';



export const VotingPage = () => {
    return (
        <Layout>
            <RightSideLayout>
                <NavBar title='Voiting'/>
                <Voting className="m-5" />
                <Log className='mx-5 mt-20' />
            </RightSideLayout>
        </Layout>
    )
}