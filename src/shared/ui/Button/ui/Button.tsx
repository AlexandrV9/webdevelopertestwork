import { ButtonHTMLAttributes, FC, ReactNode, memo } from "react";
import classNames from "classnames";

import cls from "./Button.module.scss";

export enum ButtonTheme {
  RED = "red",
  CLEAR = "clear",
  GREEN = "green",
  DARK = "dark"
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: ReactNode;
  theme?: ButtonTheme;
  disabled?: boolean;
  fullWidth?: boolean;
}

export const Button: FC<ButtonProps> = memo((props) => {
  const {
    className,
    children,
    theme = ButtonTheme.CLEAR,
    fullWidth,
    ...otherProps
  } = props;

  const mods = {
    [cls[theme]]: true,
    [cls.fullWidth]: fullWidth
  };

  return (
    <button
      type="button"
      className={classNames(cls.Button, mods, [className])}
      {...otherProps}
    >
      {children}
    </button>
  );
});
