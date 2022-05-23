import { FC } from 'react'
import Spell from '../Spell'

export const SpellFormatting: FC<{spell: Spell}> = ({spell}): JSX.Element => {
    return (
        <li className='displaySpell'>
            <div className='header'>
                <h3 className='spellName'>{spell.name}</h3> <h5 className='spellLevel'>Level:{spell.level} Classes: {spell.class.join(", ")}</h5>
            </div> 
            <div>
                Casting Time: {spell.castingTime} <br />
                Range: {spell.range} <br />
                Components: {spell.components}  <br />
                Duration: {spell.duration} <br />
                Source: {spell.source} <br />
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