import { FC } from 'react'
import Spell from '../Spell'

const ListManager: FC<{allSpells: Array<Spell>}> = ({allSpells}) => {
    return (
        <div id="ListManager">
            {allSpells[0].name}
        </div>
    )
}

export default ListManager