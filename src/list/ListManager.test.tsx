import { render, screen } from '@testing-library/react'
import ListManager from './ListManager'

describe('test the list manager', () => {
    it('should have a test name in it', () => {
        render(<ListManager allSpells={[{"name": "name1","source": "Player's Handbook","school": "Conjuration", "level": "cantrip", "ritual":false,"castingTime": "1 action","range": "60 feet","components": "V, S","duration": "Instantaneous","description":"You hurl a bubble of acid. Choose one creature you can see within range or choose two creatures you can see within range that are within 5 feet of each other. A target must succeed on a Dexterity saving throw or take 1d6 acid damage. \n At Higher Levels. This spell’s damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6).","class": [ "Artificer", "Sorcerer", "Wizard"]}]}/>)
        const firstTaskName = screen.getByText("name1")
        expect(firstTaskName).toBeInTheDocument()
    })
    it('should take different name', () => {
        render(<ListManager allSpells={[{"name": "name2","source": "Player's Handbook","school": "Conjuration", "level": "cantrip", "ritual":false,"castingTime": "1 action","range": "60 feet","components": "V, S","duration": "Instantaneous","description":"You hurl a bubble of acid. Choose one creature you can see within range or choose two creatures you can see within range that are within 5 feet of each other. A target must succeed on a Dexterity saving throw or take 1d6 acid damage. \n At Higher Levels. This spell’s damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6).","class": [ "Artificer", "Sorcerer", "Wizard"]}]}/>)
        const firstTaskName = screen.getByText("name2")
        expect(firstTaskName).toBeInTheDocument()
    })
    it('should handel multiple spells', () => {
        render(<ListManager allSpells={[{"name": "name2","source": "Player's Handbook","school": "Conjuration", "level": "cantrip", "ritual":false,"castingTime": "1 action","range": "60 feet","components": "V, S","duration": "Instantaneous","description":"You hurl a bubble of acid. Choose one creature you can see within range or choose two creatures you can see within range that are within 5 feet of each other. A target must succeed on a Dexterity saving throw or take 1d6 acid damage. \n At Higher Levels. This spell’s damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6).","class": [ "Artificer", "Sorcerer", "Wizard"]}, {"name": "name1","source": "Player's Handbook","school": "Conjuration", "level": "cantrip", "ritual":false,"castingTime": "1 action","range": "60 feet","components": "V, S","duration": "Instantaneous","description":"You hurl a bubble of acid. Choose one creature you can see within range or choose two creatures you can see within range that are within 5 feet of each other. A target must succeed on a Dexterity saving throw or take 1d6 acid damage. \n At Higher Levels. This spell’s damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6).","class": [ "Artificer", "Sorcerer", "Wizard"]}]}/>)
        const firstTaskName = screen.getByText("name2")
        const secondTaskName = screen.getByText("name2")
        expect(firstTaskName).toBeInTheDocument()
        expect(secondTaskName).toBeInTheDocument()
    })
})