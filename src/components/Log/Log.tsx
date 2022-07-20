import { ReactComponent as Smile } from 'assets/icons/smile.svg';
import { ReactComponent as Sad } from 'assets/icons/sad.svg';
import { ReactComponent as Heart } from 'assets/icons/heart.svg';


type ActionType = 'like' | 'dislike' | 'favorite' | 
    'remove-like' | 'remove-dislike' | 'remove-favorite';

type ActionEntity = {
    time: Date,
    img_id: string,
    action_type: ActionType,
}

const stubLogs: ActionEntity[] = [
    { time: new Date(), img_id: 'fQSunHvl8', action_type: 'favorite' },
    { time: new Date(), img_id: 'HJd0XecNX', action_type: 'like' },
    { time: new Date(), img_id: 'BbMFS3bU', action_type: 'dislike' },
    { time: new Date(), img_id: 'fQSunHvl8', action_type: 'remove-favorite' },
]


type LogProps = {
    className?: string,
}


export const Log: React.FC<LogProps> = ({ className }) => {
    return <div className={`${className} flex flex-col gap-4`}>
        {stubLogs.map(action => (<LogItem action={action} />))}
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

const LogItem: React.FC<LogItemProps> = ({ action, className }) => {
    const { time, img_id, action_type } = action;
    return <div className={`${className} flex items-center rounded-md bg-background h-[60px] p-4`}>
        <div className="bg-white h-[30px] w-[61px] rounded-sm flex items-center justify-center mr-4">
            {time.getHours()}:{time.getMinutes()}
        </div>
        <div className='grow'> 
            <span className="text-text-light">Image ID: </span>
            <span className="text-text">{img_id}</span>
            <span className="text-text-light"> {actionTextMap[action_type]}</span>
        </div>
        <div>{actionIconMap[action_type]}</div>
    </div>
}