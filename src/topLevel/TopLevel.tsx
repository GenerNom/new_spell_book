import { FC } from "react"

const TopLevel:FC<{ListManager: FC}> = ({ListManager}):JSX.Element => {
    return(
        <div>
            <ListManager />
        </div>
    )
}

export default TopLevel