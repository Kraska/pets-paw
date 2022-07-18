import RighsideImg from 'assets/images/girl-and-pet 1.png'
import { Layout } from './Layout';


export const MainPage = () => {
    return (
        <Layout>
            <section className="w-[775px] h-[900px]">
                <div className='w-[680px] h-[840px] bg-[#FBE0DC] ml-[65px] mr-[30px] mt-[30px] rounded-lg absolute top-0 right-0'></div>
              <img className='w-[775px] h-[900px] absolute top-0 right-0' alt="Rightside" src={RighsideImg} />
          </section>
        </Layout>
    )
}