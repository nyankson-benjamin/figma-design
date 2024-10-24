import useRnDComponent from '../../hooks/useRnDComponent';
import { RnDItems } from '../../constants/RnDItems';
import Button from '../buttons/Button';

export default function ToolsBar() {
    const { addObjectToScreen } = useRnDComponent();
    return (
        <div className="flex gap-3">
        {RnDItems.map((item) => (
          <Button onClick={() => addObjectToScreen(item)} key={item} text={item} />
          
        ))}
        </div>
  )
}
