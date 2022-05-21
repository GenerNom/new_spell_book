import { render, screen } from '@testing-library/react'
import { ListManager } from './ListManager'

const testSpell1 = {"name": "name1","source": "source","school": "school", "level": "spellLevel1", "ritual":false,"castingTime": "castingTime","range": "Range","components": "ComponentsText","duration": "DurationText","description":"DescriptionText","class": [ "ClassName"]}
const testSpell2 = {"name": "name2","source": "source","school": "school", "level": "spellLevel2", "ritual":true,"castingTime": "castingTime","range": "Range","components": "ComponentsText","duration": "DurationText","description":"DescriptionText","class": [ "ClassName"]}

describe('test the list manager', () => {
    it('should have a test name in it', () => {
        render(<ListManager allSpells={[testSpell1]} />)
        const firstTaskName = screen.getByText("name1")
        expect(firstTaskName).toBeInTheDocument()
    })
    it('should take different name', () => {
        render(<ListManager allSpells={[testSpell2]}/>)
        const firstTaskName = screen.getByText("name2")
        expect(firstTaskName).toBeInTheDocument()
    })
    it('should handel multiple spells', () => {
        render(<ListManager allSpells={[testSpell1, testSpell2]}/>)
        const firstTaskName = screen.getByText("name2")
        const secondTaskName = screen.getByText("name2")
        expect(firstTaskName).toBeInTheDocument()
        expect(secondTaskName).toBeInTheDocument()
    })
    it('should display the spell level for every spell', () => {
        const {container} = render(<ListManager allSpells={[testSpell1, testSpell2]} />)
        const firstLevel = screen.getByText("spellLevel1", {exact:false})
        const secondLevel = screen.getByText("spellLevel2", {exact:false})
        expect(firstLevel).toBeInTheDocument()
        expect(secondLevel).toBeInTheDocument()
    })
})