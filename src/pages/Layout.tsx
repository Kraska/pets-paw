import { MainMenu } from 'components/MainMenu/MainMenu';
import { Logo } from 'components/Logo/Logo';
import { ToolBar } from 'components/ToolBar/ToolBar';


type LayoutProps = {
    children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <section className="flex min-h-screen w-full bg-[#F8F8F7]">
          
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
          
          <section className="w-full lg:w-1/2 py-[30px] pr-[30px]">{children}</section>  
        </section>
    )
}


export const RightSideLayout: React.FC<LayoutProps> = ({ children }) => {
  return <>
      <ToolBar />
      <div className="bg-white rounded-lg w-full my-2.5 p-5">
        {children}
      </div>
    </>
}