import { ReactComponent as Smile } from 'assets/icons/smile.svg';
import { ReactComponent as Sad } from 'assets/icons/sad.svg';
import { ReactComponent as Heart } from 'assets/icons/heart.svg';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { useEffect } from 'react';
import { fetchVotes } from 'store/reducers/voting/ActionCreators';
import { fetchFavourites } from 'store/reducers/favourites/ActionCreators';


type ActionType = 'like' | 'dislike' | 'favorite' | 
    'remove-like' | 'remove-dislike' | 'remove-favorite';

type ActionEntity = {
    time: Date,
    img_id: string,
    action_type: ActionType,
}


type LogProps = {
    className?: string,
}


export const Log: React.FC<LogProps> = ({ className }) => {

    const { votes, isLoading, error } = useAppSelector(state => state.votingReducer);

    const { favourites, isLoading: fIsLoading, error: fError } = 
        useAppSelector(state => state.favouritesReducer);

    const dispatch = useAppDispatch();
    useEffect(() => {
        votes === null && !isLoading && dispatch(fetchVotes());
        favourites === null && !fIsLoading && dispatch(fetchFavourites());
    }, []);

    const fLogs:ActionEntity[] = !favourites ? [] :
        favourites.map(({ image_id, created_at }) => ({ 
            time: new Date(Date.parse(created_at)), 
            img_id: image_id, 
            action_type: 'favorite'
        }));

    const vLogs:ActionEntity[] = !votes ? [] :
        votes.map(({ image_id, created_at, value }) => ({ 
            time: new Date(Date.parse(created_at)), 
            img_id: image_id, 
            action_type: value ? 'like' : 'dislike'
        }));

    const logs:ActionEntity[] = fLogs.concat(vLogs)    
        .sort((a, b) => b.time.getTime() - a.time.getTime());

    // console.log('logs', logs);

    return <div className={`${className} flex flex-col gap-4`}>
        {logs.map(action => (
            <LogItem 
                key={`${action.img_id}_${action.time.getTime()}`} 
                action={action} />
        ))}
    </div>
}


type LogItemProps = {
    action: ActionEntity,
    className?: string,
}

const actionTextMap: Record<ActionType, string> = {
    like: 'was added to Likes',
    dislike: 'was added to Dislikes',
    favorite: 'was added to Favorites',
    'remove-like': 'was removed from Likes',
    'remove-dislike': 'was removed from Dislikes',
    'remove-favorite': 'was removed from Favorites',
}

const actionIconMap: Record<ActionType, React.ReactNode | ''> = {
    like: <Smile className='fill-green h-[20px]' />,
    dislike: <Sad className='fill-yellow h-[20px]' />,
    favorite: <Heart className='fill-pink h-[20px]' />,
    'remove-like': '',
    'remove-dislike': '',
    'remove-favorite': '',
}

const df = new Intl.DateTimeFormat(
    'en-AU', 
    {hour: 'numeric', minute: 'numeric', hour12: false }
)

const LogItem: React.FC<LogItemProps> = ({ action, className }) => {
    const { time, img_id, action_type } = action;
    return <div className={`${className} flex items-center rounded-md bg-background h-[60px] p-4`}>
        <div className="bg-white h-[30px] w-[61px] rounded-sm flex items-center justify-center mr-4">
            {df.format(time)}
        </div>
        <div className='grow'> 
            <span className="text-text-light">Image ID: </span>
            <span className="text-text">{img_id}</span>
            <span className="text-text-light"> {actionTextMap[action_type]}</span>
        </div>
        <div>{actionIconMap[action_type]}</div>
    </div>
}