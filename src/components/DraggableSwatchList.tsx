import * as React from 'react'
import DraggableSwatch from './DraggableSwatch'
import { Color } from './NewPaletteForm/NewPaletteForm'
import { SortableContainer } from 'react-sortable-hoc'

type deleteCompletionHandler = (colorName: string) => void
interface IProps {
  colors: Color[]
  handleDelete: deleteCompletionHandler
}
const SwatchList: React.FC<IProps> = ({ colors, handleDelete }) => {
  return (
    <ul className="DraggableSwatchList">
      {colors.map(({ hex, name }, index) => (
        <DraggableSwatch
          color={hex}
          handleDelete={handleDelete}
          index={index}
          name={name}
          key={name}
        />
      ))}
    </ul>
  )
}

const DraggableSwatchList = SortableContainer(SwatchList)

export default DraggableSwatchList
