import { FC } from 'react'
import Spell from '../Spell'

export const SpellFormatting: FC<{spell: Spell}> = ({spell}): JSX.Element => {
    return (
        <li className='displaySpell'>
            <div className='header'>
                <h3 className='spellName'>{spell.name}</h3> <h5 className='spellLevel'>Level:{spell.level}</h5>
            </div> 
            <div>
                Source: {spell.source}
            </div>
        </li>
    )
}

export const ListManager: FC<{allSpells: Array<Spell>}> = ({allSpells}) => {
    
    return (
        <div id="ListManager">
            <ul>
                {allSpells.map((spell): JSX.Element => {
                    return <SpellFormatting spell={spell} />
                })}
            </ul>
        </div>
    )
}