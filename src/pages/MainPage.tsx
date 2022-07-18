import { MainMenu } from 'components/MainMenu/MainMenu';
import RighsideImg from 'assets/images/girl-and-pet 1.png'
import { Logo } from 'components/Logo/Logo';


export const MainPage = () => {
    return (
        <section className="flex h-full w-full bg-[#F8F8F7]">
          
          <section className="w-full lg:w-1/2 flex justify-center">
            <div className='w-[500px] pt-9'>
              <Logo />
              <div className='mt-40'>
                <h1 className='text-4xl'>Hi intern!</h1>
                <p className='text-sm text-gray-400'>Welcome to MI 2022 Front-end test</p>
                <p className="text-sm mt-14 mb-5">Lets start using The Cat API</p>
                <MainMenu />
  
              </div>
            </div>
          </section>
          
          <section className="w-[775px] h-[900px]">
              <img className='w-[775px] h-[900px] absolute top-0 right-0' alt="Rightside" src={RighsideImg} />
              <div className='w-[680px] h-[840px] bg-[#FBE0DC] ml-[65px] mr-[30px] mt-[30px] rounded-lg'></div>
          </section>
  
        </section>
    )
}