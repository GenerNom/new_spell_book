import { FC } from 'react'
import Spell from '../Spell'
import SpellFormatting from './SpellFormatting'

const ListManager: FC<{allSpells: Array<Spell>}> = ({allSpells}) => {
    const DisplaySpells: FC<{list: Array<Spell>}> = ({list}): JSX.Element[] => {
        return list.map((spell): JSX.Element => {
            return <SpellFormatting spell={spell} />
        })
    }
    return (
        <div id="ListManager">
            <ul>{<DisplaySpells list={allSpells} />}</ul>
        </div>
    )
}

export default ListManager