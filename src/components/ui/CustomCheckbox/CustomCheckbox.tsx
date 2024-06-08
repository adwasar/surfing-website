import { KeyboardEvent, useState } from 'react';
import s from './CustomCheckbox.module.scss';

interface CustomCheckboxProps {
  item: string;
  handleChecked: (value: boolean, item: string) => void;
}

const CustomCheckbox = ({ item, handleChecked }: CustomCheckboxProps) => {
  const [selected, setSelected] = useState(false);

  const handleKeyPress = (event: KeyboardEvent) =>
    event.key === 'Enter' ? toggleSelected() : null;

  const toggleSelected = () => {
    const updatedSelected = !selected;
    setSelected(updatedSelected);
    handleChecked(updatedSelected, item);
  };

  return (
    <label
      htmlFor={item}
      className={selected ? `${s.inputLabel} ${s.selected}` : s.inputLabel}
      tabIndex={0}
      onKeyPress={handleKeyPress}
    >
      {item}
      <input
        tabIndex={-1}
        id={item}
        type="checkbox"
        className={s.defaultCheckbox}
        checked={selected}
        onChange={toggleSelected}
      />
    </label>
  );
};

export default CustomCheckbox;
