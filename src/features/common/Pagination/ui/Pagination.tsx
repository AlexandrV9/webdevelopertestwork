import { FC, KeyboardEvent, memo } from "react";
import classNames from "classnames";

import { ReactComponent as IconArrowLeftTypeOne } from "shared/assets/icons/arrow_left_1.svg";
import { ReactComponent as IconArrowRightTypeOne } from "shared/assets/icons/arrow_right_1.svg";
import { ReactComponent as IconArrowLeftTypeTwo } from "shared/assets/icons/arrow_left_2.svg";
import { ReactComponent as IconArrowRightTypeTwo } from "shared/assets/icons/arrow_right_2.svg";

import { Icon } from "shared/ui/Icon";
import { Input } from "shared/ui/Input";
import { Button } from "shared/ui/Button";

import useInput from "shared/lib/hooks/useInput";

import cls from "./Pagination.module.scss";

interface PaginationProps {
  className?: string;
  pageCount?: number;
  currentPage?: number;
  onChange?: (page: number) => void;
}

const Pagination: FC<PaginationProps> = memo((props) => {
  const { className, pageCount = 0, currentPage = 1, onChange } = props;

  const inpPage = useInput(currentPage.toString());

  const handleChangeInputPage = (value: string) => {
    if (value === "") return inpPage.onChange("");
    const isNumeric = /^[0-9]+$/.test(value);
    if (isNumeric) {
      let newPage = parseInt(value, 10);
      if (newPage > pageCount) newPage = pageCount;
      if (newPage < 1) newPage = 1;

      inpPage.onChange(newPage.toString());
    }
  };

  const handleBlurInputPage = () => {
    inpPage.onChange(currentPage.toString());
  };

  const handleEnterInputPage = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") onChange?.(parseInt(inpPage.value, 10));
  };

  const handleClickBtnNext = () => {
    const nextPage = currentPage + 1;
    if (nextPage > pageCount) return;
    onChange?.(nextPage);
  };

  const handleClickBtnPrev = () => {
    const prevPage = currentPage - 1;
    if (prevPage < 0) return;
    onChange?.(prevPage);
  };

  const isShowPrevButton = !(currentPage < 2);
  const isDisabledPrevButton = !isShowPrevButton;

  const isShowNextButton =
    (pageCount > 0 && currentPage < pageCount) || pageCount === 1;
  const isDisabledNextButton = currentPage > pageCount - 1;

  if (pageCount === 0) return null;

  return (
    <div className={classNames(cls.Pagination, {}, [className])}>
      <div className={cls.switchButtonsOne}>
        {isShowPrevButton && (
          <Button
            className={cls.btnPrev}
            onClick={handleClickBtnPrev}
            disabled={isDisabledPrevButton}
          >
            <Icon Svg={IconArrowLeftTypeOne} width={19} height={19} />
            <p>Предыдущая страница</p>
          </Button>
        )}

        {isShowNextButton && (
          <Button
            className={classNames(cls.btnNext, {
              [cls.disabled]: isDisabledNextButton,
            })}
            onClick={handleClickBtnNext}
            disabled={isDisabledNextButton}
          >
            <p>Следующая страница</p>
            <Icon Svg={IconArrowRightTypeOne} width={19} height={19} />
          </Button>
        )}
      </div>
      <div className={cls.switcherPage}>
        <Input
          type="text"
          value={inpPage.value}
          className={cls.inpPage}
          maxLength={pageCount.toString().length}
          onBlur={handleBlurInputPage}
          onKeyDown={handleEnterInputPage}
          onChange={handleChangeInputPage}
        />
        <p className={cls.countPage}>
          <span>из</span>
          <span>{pageCount}</span>
        </p>
        <div className={cls.switchButtonsTwo}>
          <Button
            className={cls.btnPrev}
            onClick={handleClickBtnPrev}
            disabled={isDisabledPrevButton}
          >
            <Icon Svg={IconArrowLeftTypeTwo} width={18} height={18} />
          </Button>
          <Button
            className={cls.btnNext}
            onClick={handleClickBtnNext}
            disabled={isDisabledNextButton}
          >
            <Icon Svg={IconArrowRightTypeTwo} width={18} height={18} />
          </Button>
        </div>
      </div>
    </div>
  );
});

export default Pagination;
