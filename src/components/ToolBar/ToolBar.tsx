import { IconBtn } from "components/IconBtn/IconBtn"
import { SearchInput } from "components/SearchInput/SearchInput"

export const ToolBar = () => {
    return <div className="flex gap-2.5">
        <SearchInput className="grow" />
        <IconBtn type='smile' />
        <IconBtn type='heart' />
        <IconBtn type='sad' />
    </div>
}