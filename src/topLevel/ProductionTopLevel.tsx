import { FC } from "react"
import TopLevel from "./TopLevel"

import * as allSpells from '../spellList.json'

const ListManager:FC = ():JSX.Element => <ListManager allSpeels={allSpells.spells} /> 
const ProductionTopLevel:FC = ():JSX.Element => <TopLevel ListManager={ListManager} />

export default ProductionTopLevel