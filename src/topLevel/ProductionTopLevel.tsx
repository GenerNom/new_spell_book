import { FC } from "react"
import TopLevel from "./TopLevel"
import Spell from "../Spell"
import getSpellList from "../spellListService"

const allSpells:Array<Spell> = getSpellList()

const ListManager:FC = ():JSX.Element => <ListManager allSpells={{...allSpells}} /> 
const ProductionTopLevel:FC = ():JSX.Element => <TopLevel ListManager={ListManager} />

export default ProductionTopLevel