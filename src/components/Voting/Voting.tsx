import axios from 'axios';
import { IconBtn } from 'components/IconBtn/IconBtn';
import { IconBtnGroup } from 'components/IconBtnGroup/IconBtnGroup';
import { AppConfig } from 'config';
import { useEffect, useState } from 'react';
import { Loader } from 'components/Loader/Loader';
import { useAppDispatch } from 'hooks/redux';
import { addVote } from 'store/reducers/voting/ActionCreators';


type VotingProps = {
    className?: string,
}

type Img = {
    id: string,
    url: string,
}

export const Voting: React.FC<VotingProps> = ({ className }) => {

    const dispatch = useAppDispatch();

    const [randomImg, setRandomImg] = useState<Img|null>(null);
    const [toogle, setToogle] = useState(false);

    const fetchRandomImg = () => {
        axios.get<Img[]>(
            "https://api.thecatapi.com/v1/images/search", 
            {
                headers: { 
                    "Content-Type": "application/json",
                    "x-api-key": AppConfig.CAT_API_KEY
                },
                params: { limit: 1 } 
            }
        ).then(({data}) => setRandomImg(data[0]));
    }

    useEffect(fetchRandomImg, [toogle]);

    const sendVote = (value: 1|0) => {
        dispatch(addVote(randomImg!.id, value));
        setToogle(!toogle);
    }

    return <div className={`${className} relative mb-[40px]`}>
        {randomImg ? 
            <>
                <img 
                    src={randomImg.url} 
                    alt="Random image" 
                    className="w-full rounded-lg" 
                    />
                    <IconBtnGroup className='justify-center absolute -bottom-[40px] inset-x-0'>
                    <IconBtn size='lg' type='smile' color='green' onClick={() => sendVote(1)} />
                    <IconBtn size='lg' type='heart' color='pink' />
                    <IconBtn size='lg' type='sad' color='yellow' onClick={() => sendVote(0)} />
                </IconBtnGroup>
            </>
            : <Loader />
        }

        
    </div>
}