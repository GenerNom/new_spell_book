import { FC, useState } from "react";
import { ListManager } from "../list/ListManager";
import Spell from "../Spell";


export const applyNameFilters = (inputSpellList: Array<Spell>, toFilterFor: string): Array<Spell> => {
    return inputSpellList.filter(spell => spell.name.toLowerCase().includes(toFilterFor.toLowerCase()))
}
export const applyLevelFilters = (inputSpellList: Array<Spell>, toFilterFor: string): Array<Spell> => {
    return inputSpellList.filter(spell => spell.level.toLowerCase().includes(toFilterFor.toLowerCase()))
}
export const applyClassFilters = (inputSpellList: Array<Spell>, toFilterFor: string): Array<Spell> => {
    if(toFilterFor === "") return inputSpellList
    return inputSpellList.filter((spell) => {return spell.class.indexOf(toFilterFor) > -1 ? true : false})
}

export const applyRitualFilters = (inputSpellList: Array<Spell>, toFilterFor: Boolean) => {
    if(!toFilterFor) return inputSpellList
    return inputSpellList.filter((spell) => spell.ritual)
}

export const applyAllFilters = (inputSpellList: Array<Spell>, nameFilter: string, levelFilter: string, classFilter: string, ritualFilter: Boolean): Array<Spell> => {
    const applyedNameFilter = applyNameFilters(inputSpellList, nameFilter)
    const applyedLevelFilter = applyLevelFilters(applyedNameFilter, levelFilter)
    const applyedClassFilter = applyClassFilters(applyedLevelFilter, classFilter)
    const applyedRitualFilter = applyRitualFilters(applyedClassFilter, ritualFilter)
    return applyedRitualFilter
}

const SpellLevel:FC<{level: string}> = ({level}) => {
    return (<option value={level}>{level}</option>)
}
const SpellClass:FC<{className: string}> = ({className}) => {
    return (<option value={className}>{className}</option>)
}

export const FilterManager:FC<{allSpells:Array<Spell>}> = ({allSpells}) => {
    const [filteredSpells, setFilteredSpells] = useState(allSpells)
    const [nameFilter, setNameFilter] = useState("")
    const [levelFilter, setLevelFilter] = useState("")
    const [classFilter, setClassFilter] = useState("")
    const [ritualFilter, setRitualFilter] = useState(false)

    const applyFilterList = () => {
        const nameFilterApplied = applyAllFilters(allSpells, nameFilter, levelFilter, classFilter, ritualFilter)
        setFilteredSpells(nameFilterApplied)
    }
    
    const getAllSpellLevels = (): Array<string> => {
        const allSpellLevels: Array<string> = allSpells.map(spell => spell.level)
        allSpellLevels.unshift("")
        return [...new Set(allSpellLevels)]
    }
    
    const getAllSpellClasses = (): Array<string> => {
        const allSpellClasses: Array<string> = allSpells.flatMap((spell) => spell.class)
        allSpellClasses.unshift("")
        return [...new Set(allSpellClasses)]
    }

    // const translateCheckBox
    
    return(
        <div id="filterManager">
            <div className="filter">
                <div className="filterOptions">
                    Name: <input type="text" onChange={(e) => setNameFilter(e.target.value)}></input>
                    Level: <select onChange={(e) => setLevelFilter(e.target.value)}>
                        {getAllSpellLevels().map(level => <SpellLevel level={level} />)}
                    </select>
                    Class: <select onChange={(e) => setClassFilter(e.target.value)}>
                        {getAllSpellClasses().map(className => <SpellClass className={className} />)}
                    </select>
                    Only Rituals: <input type="checkbox" onChange={(e) => setRitualFilter(e.target.checked)} />
                   
                    
                </div>
                <button onClick={applyFilterList}>Fliter</button>
            </div>
            <ListManager spells={filteredSpells}/>
        </div>
    )
}