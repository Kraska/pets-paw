import RandomImg from 'assets/images/tmp/image1.png';
import { IconBtn } from 'components/IconBtn/IconBtn';
import { IconBtnGroup } from 'components/IconBtnGroup/IconBtnGroup';


type VotingProps = {
    className?: string,
}

export const Voting: React.FC<VotingProps> = ({ className }) => {
    return <div className={`${className} relative mb-[40px]`}>
        <img 
            src={RandomImg} 
            alt="Random image" 
            className="w-full rounded-lg" 
            />
        <IconBtnGroup className='justify-center absolute -bottom-[40px] inset-x-0'>
            <IconBtn size='lg' type='smile' color='green' />
            <IconBtn size='lg' type='heart' color='pink' />
            <IconBtn size='lg' type='sad' color='yellow' />
        </IconBtnGroup>
    </div>
}