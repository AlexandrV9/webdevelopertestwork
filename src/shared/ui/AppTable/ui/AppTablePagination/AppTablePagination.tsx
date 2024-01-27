import { FC, memo } from 'react'
import classNames from 'classnames';

import cls from './AppTablePagination.module.scss';

interface AppTablePaginationProps {
  className?: string;
}

export const AppTablePagination: FC<AppTablePaginationProps> = memo((props) => {

  const {
    className
  } = props;

  return (
    <div className={classNames(cls.AppTablePagination, {}, [className])}>
      AppTablePagination
    </div>
  );
})
