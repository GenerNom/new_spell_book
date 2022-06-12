import { FC } from "react"
import TopLevel from "./TopLevel"
import Spell from "../Spell"
import getSpellList from "../spellListService"
import { FilterManager } from "../filter/FilterManager"

const importedSpells:Array<Spell> = getSpellList()

const ProductionFilterManager:FC = ():JSX.Element => <FilterManager allSpells={importedSpells} />
const ProductionTopLevel:FC = ():JSX.Element => <TopLevel FilterManager={ProductionFilterManager} />

export default ProductionTopLevel