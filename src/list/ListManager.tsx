import { FC, useState } from 'react'
import Spell from '../Spell'

export const SpellFormatting: FC<{spell: Spell}> = ({spell}): JSX.Element => {
    const ritualSymbol = spell.ritual ? "(R)" : "" 
    const [visibliltyClass, setVisibliltyClass] = useState("show")
    const toggleVisible = () => {
        const updatedVisibilityClass:string = visibliltyClass === "show" ? "hide" : "show"
        setVisibliltyClass(updatedVisibilityClass)
    }
    return (
        <li className='displaySpell' key={spell.name} onClick={() => toggleVisible()}>
            <div className='header'>
                <h3 className='spellName'>{spell.name}</h3> <h5 className='spellLevel'>Level:{spell.level} Classes: {spell.class.join(", ")}</h5> <div className='smallText'>{ritualSymbol}</div>
            </div> 
            <div className={visibliltyClass} >
                Casting Time: {spell.castingTime} <br />
                Range: {spell.range} <br />
                Components: {spell.components}  <br />
                Duration: {spell.duration} <br />
                {spell.description} <br />
                Source: {spell.source} <br />
            </div>
        </li>
    )
}

export const ListManager: FC<{allSpells: Array<Spell>}> = ({allSpells}) => {
    
    return (
        <div id="ListManager">
            <ul id="List">
                {allSpells.map((spell): JSX.Element => {
                    return <SpellFormatting spell={spell} key={spell.name} />
                })}
            </ul>
        </div>
    )
}