import { fireEvent, render, screen } from '@testing-library/react'
import { applyAllFilters, applyLevelFilters, applyNameFilters } from './FilterManager'

const testSpell1 = {"name": "name1","source": "source1","school": "school1", "level": "spellLevel1", "ritual":false,"castingTime": "castingTime1","range": "Range1","components": "Components1","duration": "Duration1","description":"Description1","class": [ "Class1"]}
const testSpell2 = {"name": "name2","source": "source2","school": "school2", "level": "spellLevel2", "ritual":true,"castingTime": "castingTime2","range": "Range2","components": "Components2","duration": "Duration2","description":"Description2","class": [ "Class2", "Class3"]}
const testSpell3 = {"name": "name2","source": "source2","school": "school2", "level": "spellLevel3", "ritual":true,"castingTime": "castingTime2","range": "Range2","components": "Components2","duration": "Duration2","description":"Description2","class": [ "Class2", "Class3"]}

describe('test filtering', () => {
    it('should filter the spells by name', () => {
        const results = applyNameFilters([testSpell1, testSpell2],testSpell1.name)
        expect(results.length).toBe(1)
        expect(results[0].name).toBe(testSpell1.name)
    })
    it('should filter the spells by level', () => {
        const results = applyLevelFilters([testSpell1, testSpell2],testSpell1.level)
        expect(results.length).toBe(1)
        expect(results[0].level).toBe(testSpell1.level)
    })
    
    it('should apply all filters together', () => {
        const results = applyAllFilters([testSpell1, testSpell2, testSpell3], testSpell2.name, testSpell2.level)
        expect(results.length).toBe(1)
        expect(results[0].name).toBe(testSpell2.name)
    })

})