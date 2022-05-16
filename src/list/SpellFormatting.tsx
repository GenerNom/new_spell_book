import Spell from "../Spell"
import { FC } from 'react'

const SpellFormatting: FC<{spell: Spell}> = ({spell}): JSX.Element => {
    return (
        <li>
            {spell.name}
        </li>
    )
}
export default SpellFormatting