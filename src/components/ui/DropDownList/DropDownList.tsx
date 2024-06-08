import { useState, useRef, FC } from 'react';

import { useClickOutside } from 'src/utils/useClickOutside';

import s from './DropdownList.module.scss';
import { useTranslation } from 'react-i18next';

interface DropdownListPropsData {
  name: string;
  id: number;
}
interface DropdownListProps {
  text: string;
  placeholder: string;
  data: DropdownListPropsData[];
  action: (id: number) => void;
  mods?: string[];
}

const DropdownList: FC<DropdownListProps> = ({ text, placeholder, data, action, mods = [] }) => {
  const dropdownListRef = useRef<HTMLDivElement>(null);
  const [showList, setShowList] = useState(false);
  const [placeholderText, setPlaceholderText] = useState(placeholder);

  const { t } = useTranslation();

  const classNamesButton = [
    s.dropdownList__trigger,
    ...mods.map(mod => s[`dropdownList__trigger--${mod}`]),
  ].join(' ');

  const classNamesText = [s.trigger__text, ...mods.map(mod => s[`trigger__text--${mod}`])].join(
    ' '
  );

  const classNamesPlaceholder = [
    s.trigger__placeholder,
    ...mods.map(mod => s[`trigger__placeholder--${mod}`]),
  ].join(' ');

  useClickOutside(showList, dropdownListRef, () => {
    setShowList(false);
  });

  const handleClickAction = (id: number, name: string) => {
    action(id);
    setPlaceholderText(name);
    setShowList(false);
  };
  return (
    <div
      onMouseEnter={() => {
        setShowList(true);
      }}
      onMouseLeave={() => {
        setShowList(false);
      }}
      className={s.dropdownList}
      ref={dropdownListRef}
    >
      <button className={classNamesButton} type="button">
        <span className={classNamesText}>{text}</span>
        <span className={classNamesPlaceholder}>{placeholderText}</span>
      </button>
      {data && Array.isArray(data) && data.length > 0 && (
        <div className={`${s.dropdownList__list} ${showList ? s.active : ''}`}>
          <ul>
            {data.map(item => (
              <li
                className={s.item}
                onClick={() => {
                  handleClickAction(item.id, item.name);
                }}
                key={item.id}
              >
                {t('DropDownList.' + item.name)}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
export default DropdownList;
