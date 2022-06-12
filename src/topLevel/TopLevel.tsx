import { FC } from "react"

const TopLevel:FC<{FilterManager: FC}> = ({FilterManager}):JSX.Element => {
    return(
        <div>
            <FilterManager />
        </div>
    )
}

export default TopLevel