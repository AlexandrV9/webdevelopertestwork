import { FC, Fragment, memo } from "react";
import classNames from "classnames";
import { Listbox } from "@headlessui/react";

import cls from "./SelectList.module.scss";

interface SelectListItem {
  id: number;
  name: string;
  value?: string;
  disabled?: boolean;
}

interface SelectListProps {
  className?: string;
  value?: SelectListItem;
  onChange?: (value: SelectListItem) => void;
  list?: SelectListItem[];
}

export const SelectList: FC<SelectListProps> = memo((props) => {
  const { className, value, list, onChange } = props;

  return (
    <div className={classNames(cls.SelectList, {}, [className])}>
      <Listbox value={value} onChange={onChange}>
        <Listbox.Button className={cls.button}>{value?.name}</Listbox.Button>
        <Listbox.Options className={cls.options}>
          {list?.map((item) => (
            <Listbox.Option
              key={item.id}
              value={item}
              disabled={item.disabled}
              as={Fragment}
            >
              {({ active, selected }) => (
                <li
                  className={classNames(cls.option, {
                    [cls.active]: active,
                    [cls.selected]: selected,
                  })}
                >
                  {item.name}
                </li>
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </div>
  );
});
