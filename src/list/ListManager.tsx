import { FC } from 'react'
import Spell from '../Spell'

const ListManager: FC<{spellList: Array<Spell>}> = ({spellList}) => {
    return (
        <div id="ListManager">
            {spellList[0].name}
        </div>
    )
}

export default ListManager