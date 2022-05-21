import { FC } from "react"
import TopLevel from "./TopLevel"
import Spell from "../Spell"
import getSpellList from "../spellListService"
import { ListManager } from "../list/ListManager"

const importedSpells:Array<Spell> = getSpellList()
console.log(importedSpells.length);

const ProductionListManager:FC = ():JSX.Element => <ListManager allSpells={importedSpells} /> 
const ProductionTopLevel:FC = ():JSX.Element => <TopLevel ListManager={ProductionListManager} />

export default ProductionTopLevel