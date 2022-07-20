import { IconBtn } from "components/IconBtn/IconBtn"

type NavBarProps = {
    title: string,
    className?: string,
}

export const NavBar: React.FC<NavBarProps> = ({ title, className }) => {
    return <div className={`${className} flex gap-2 p-5`}>
        <IconBtn type="back" color="pink-light" size='sm' />
        <div className="bg-pink rounded-md text-white text-lg uppercase px-[30px] py-[5px]">
            {title}
        </div>
    </div>
}