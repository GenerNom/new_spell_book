import { FC } from 'react'
import Spell from '../Spell'

const SpellFormatting: FC<{spell: Spell}> = ({spell}): JSX.Element => {
    return (
        <li className='displaySpell'>
            <div className='spellName'>{spell.name}</div>
        </li>
    )
}

const ListManager: FC<{allSpells: Array<Spell>}> = ({allSpells}) => {
    
    return (
        <div id="ListManager">
            <ul>{allSpells.map((spell): JSX.Element => {
                return <SpellFormatting spell={spell} />
            })}</ul>
        </div>
    )
}

export default ListManager