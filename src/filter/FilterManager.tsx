import { FC, useState } from "react";
import { ListManager } from "../list/ListManager";
import Spell from "../Spell";


export const applyNameFilters = (inputSpellList: Array<Spell>, toFilterFor: string): Array<Spell> => {
    return inputSpellList.filter(spell => spell.name.toLowerCase().includes(toFilterFor.toLowerCase()))
}
export const applyLevelFilters = (inputSpellList: Array<Spell>, toFilterFor: string): Array<Spell> => {
    return inputSpellList.filter(spell => spell.level.toLowerCase().includes(toFilterFor.toLowerCase()))
}

export const applyAllFilters = (inputSpellList: Array<Spell>, nameFilter: string, levelFilter: string): Array<Spell> => {
    const applyedNameFilter = applyNameFilters(inputSpellList, nameFilter)
    const applyedLevelFilter = applyLevelFilters(applyedNameFilter, levelFilter)
    return applyedLevelFilter
}

const SpellLevel:FC<{level: string}> = ({level}) => {
    return (<option value={level}>{level}</option>)
} 

export const FilterManager:FC<{allSpells:Array<Spell>}> = ({allSpells}) => {
    const [filteredSpells, setFilteredSpells] = useState(allSpells)
    const [nameFilter, setNameFilter] = useState("")
    const [levelFilter, setLevelFilter] = useState("")
    const applyFilterList = () => {
        const nameFilterApplied = applyAllFilters(allSpells, nameFilter, levelFilter)
        setFilteredSpells(nameFilterApplied)
    }
    const getAllSpellLevels = (): Array<string> => {
        const allSpellLevels: Array<string> = allSpells.map(spell => spell.level)
        return [...new Set(allSpellLevels)]
    }
    
    return(
        <div id="filterManager">
            <div className="filter">
                <div className="filterOptions">
                    Name: <input type="text" onChange={(e) => setNameFilter(e.target.value)}></input>
                    Level: <select onChange={(e) => setLevelFilter(e.target.value)}>
                        {getAllSpellLevels().map(level => <SpellLevel level={level} />)}
                    </select>
                    
                </div>
                <button onClick={applyFilterList}>Fliter</button>
            </div>
            <ListManager spells={filteredSpells}/>
        </div>
    )
}