import { fireEvent, getByText, render, screen } from '@testing-library/react'
import { ListManager } from './ListManager'

const testSpell1 = {"name": "name1","source": "source1","school": "school1", "level": "spellLevel1", "ritual":false,"castingTime": "castingTime1","range": "Range1","components": "Components1","duration": "Duration1","description":"Description1","class": [ "Class1"]}
const testSpell2 = {"name": "name2","source": "source2","school": "school2", "level": "spellLevel2", "ritual":true,"castingTime": "castingTime2","range": "Range2","components": "Components2","duration": "Duration2","description":"Description2","class": [ "Class2", "Class3"]}

describe('test the list manager', () => {
    it('should have a test name in it', () => {
        render(<ListManager spells={[testSpell1]} />)
        const firstTaskName = screen.getByText("name1")
        expect(firstTaskName).toBeInTheDocument()
    })
    it('should take different name', () => {
        render(<ListManager spells={[testSpell2]}/>)
        const firstTaskName = screen.getByText("name2")
        expect(firstTaskName).toBeInTheDocument()
    })
    it('should handel multiple spells', () => {
        render(<ListManager spells={[testSpell1, testSpell2]}/>)
        const firstTaskName = screen.getByText("name2")
        const secondTaskName = screen.getByText("name2")
        expect(firstTaskName).toBeInTheDocument()
        expect(secondTaskName).toBeInTheDocument()
    })
    it('should display the spell level for every spell', () => {
        render(<ListManager spells={[testSpell1, testSpell2]} />)
        const firstLevel = screen.getByText("spellLevel1", {exact:false})
        const secondLevel = screen.getByText("spellLevel2", {exact:false})
        expect(firstLevel).toBeInTheDocument()
        expect(secondLevel).toBeInTheDocument()
    })
    it('should display the spell source for every spell', () => {
        render(<ListManager spells={[testSpell1, testSpell2]} />)
        const firstSource = screen.getByText("source1", {exact:false})
        const secondSource = screen.getByText("source2", {exact:false})
        expect(firstSource).toBeInTheDocument()
        expect(secondSource).toBeInTheDocument()
    })
    it('should display the classes that are avalible for each spell', () => {
        render(<ListManager spells={[testSpell1, testSpell2]} />)
        const firstClass = screen.getByText("Class1", {exact:false})
        const secondClass = screen.getByText("Class2, Class3", {exact:false})
        expect(firstClass).toBeInTheDocument()
        expect(secondClass).toBeInTheDocument()
    })
    it('should display the casting time', () => {
        render(<ListManager spells={[testSpell1, testSpell2]} />)
        const firstCastingTime = screen.getByText("castingTime1", {exact:false})
        const secondCastingTime = screen.getByText("castingTime2", {exact:false})
        expect(firstCastingTime).toBeInTheDocument()
        expect(secondCastingTime).toBeInTheDocument()
    })
    it('should display the range', () => {
        render(<ListManager spells={[testSpell1, testSpell2]} />)
        const firstRange = screen.getByText("Range1", {exact:false})
        const secondRange = screen.getByText("Range2", {exact:false})
        expect(firstRange).toBeInTheDocument()
        expect(secondRange).toBeInTheDocument()
    })
    it('should display the components', () => {
        render(<ListManager spells={[testSpell1, testSpell2]} />)
        const firstComponent = screen.getByText("Components1", {exact:false})
        const secondComponent = screen.getByText("Components2", {exact:false})
        expect(firstComponent).toBeInTheDocument()
        expect(secondComponent).toBeInTheDocument()
    })
    it('should display the duration', () => {
        render(<ListManager spells={[testSpell1, testSpell2]} />)
        const firstDuration = screen.getByText("Duration1", {exact:false})
        const secondDuration = screen.getByText("Duration2", {exact:false})
        expect(firstDuration).toBeInTheDocument()
        expect(secondDuration).toBeInTheDocument()
    })
    it('should display the description', () => {
        render(<ListManager spells={[testSpell1, testSpell2]} />)
        const firstDescription = screen.getByText("Description1", {exact:false})
        const secondDescription = screen.getByText("Description2", {exact:false})
        expect(firstDescription).toBeInTheDocument()
        expect(secondDescription).toBeInTheDocument()
    })
    it('should display the symbol for ritual spells when appropriate', () => {
        render(<ListManager spells={[testSpell1, testSpell2]} />)
        const ritualList = screen.getAllByText("(R)", {exact:false})
        expect(ritualList.length).toBe(1)
    })
    it('should hide the body by default', () => {
        // const {container} = 
        render(<ListManager spells={[testSpell1]} />)
        const getHiddenText =  screen.getByText("Casting Time:", {exact:false}).closest("div")
        expect(getHiddenText).toHaveClass("show")
    })
    it('should show the body on first click and hide on the second', () => {
        const {container} = render(<ListManager spells={[testSpell1]} />)
        const getHiddenText =  screen.getByText("Casting Time:", {exact:false}).closest("div")
        expect(getHiddenText).toHaveClass("show")
        fireEvent(
            getByText(container, testSpell1.name),
            new MouseEvent('click', {
              bubbles: true,
              cancelable: true,
            }),
        )
        expect(getHiddenText).toHaveClass("hide")
        fireEvent(
            getByText(container, testSpell1.name),
            new MouseEvent('click', {
              bubbles: true,
              cancelable: true,
            }),
        )
        expect(getHiddenText).toHaveClass("show")
    })
})