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

export const applySchoolFilters = (inputSpellList: Array<Spell>, schoolToShow: string) => {
    if (schoolToShow == "") return inputSpellList
    return inputSpellList.filter((spell) => spell.school === schoolToShow)
}

export const applyAllFilters = (inputSpellList: Array<Spell>, nameFilter: string, levelFilter: string, classFilter: string, ritualFilter: Boolean, schoolFilter: string): Array<Spell> => {
    const applyedNameFilter = applyNameFilters(inputSpellList, nameFilter)
    const applyedLevelFilter = applyLevelFilters(applyedNameFilter, levelFilter)
    const applyedClassFilter = applyClassFilters(applyedLevelFilter, classFilter)
    const applyedRitualFilter = applyRitualFilters(applyedClassFilter, ritualFilter)
    const applyedSchoolFilter = applySchoolFilters(applyedRitualFilter, schoolFilter)
    return applyedSchoolFilter
}

const SpellLevel:FC<{level: string}> = ({level}) => {
    return (<option value={level}>{level}</option>)
}
const SpellClass:FC<{className: string}> = ({className}) => {
    return (<option value={className}>{className}</option>)
}
const SpellSchool:FC<{school: string}> = ({school}) => {
    return (<option value={school}>{school}</option>)
}

export const FilterManager:FC<{allSpells:Array<Spell>}> = ({allSpells}) => {
    const [filteredSpells, setFilteredSpells] = useState(allSpells)
    const [nameFilter, setNameFilter] = useState("")
    const [levelFilter, setLevelFilter] = useState("")
    const [classFilter, setClassFilter] = useState("")
    const [ritualFilter, setRitualFilter] = useState(false)
    const [schoolFilter, setSchoolFilter] = useState("")

    const applyFilterList = () => {
        const nameFilterApplied = applyAllFilters(allSpells, nameFilter, levelFilter, classFilter, ritualFilter, schoolFilter)
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

    const getAllSpellSchools = (): Array<string> => {
        const allSpellSchools: Array<string> = allSpells.flatMap((spell) => spell.school)
        allSpellSchools.unshift("")
        return [...new Set(allSpellSchools)]
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
                    School: <select onChange={(e) => setSchoolFilter(e.target.value)}>
                        {getAllSpellSchools().map(school => <SpellSchool school={school} />)}
                    </select>
                    Only Rituals: <input type="checkbox" onChange={(e) => setRitualFilter(e.target.checked)} />
                </div>
                <button onClick={applyFilterList}>Fliter</button>
            </div>
            <ListManager spells={filteredSpells}/>
        </div>
    )
}