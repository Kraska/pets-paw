type ErrorMsgProps = {
    error: string
}

export const ErrorMsg: React.FC<ErrorMsgProps> = ({ error }) => {
    return <div className="flex justify-center tiems-center text-text-light">
        Server error: {error}
    </div>
}