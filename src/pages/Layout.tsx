import { MainMenu } from 'components/MainMenu/MainMenu';
import { Logo } from 'components/Logo/Logo';


type LayoutProps = {
    children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
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
          
          <section className="w-full lg:w-1/2">{children}</section>  
        </section>
    )
}