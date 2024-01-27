import {
  ChangeEvent,
  InputHTMLAttributes,
  KeyboardEvent,
  memo,
  useEffect,
  useRef,
  useState,
} from "react";
import classNames from "classnames";

import cls from "./Input.module.scss";

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "value" | "onChange" | "readOnly"
>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string | number;
  onChange?: (value: string) => void;
  autofocus?: boolean;
  readonly?: boolean;
  onKeyPress?: (event: KeyboardEvent<HTMLInputElement>) => void;
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    type = "text",
    placeholder,
    autofocus = false,
    readonly = false,
    onKeyPress,
    ...otherProps
  } = props;

  const [isFocused, setIsFocused] = useState<boolean>(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  useEffect(() => {
    if (autofocus) {
      setIsFocused(true);
      inputRef?.current?.focus();
    }
  }, [autofocus]);

  useEffect(() => {
    if (isFocused) {
      inputRef?.current?.focus();
    }
  }, [isFocused]);

  return (
    <div
      className={classNames(cls.InputWrapper, { [cls.focused]: isFocused }, [
        className,
      ])}
    >
      {placeholder && (
        <p className={cls.placeholder} onClick={handleFocus}>
          {placeholder}
        </p>
      )}
      <input
        ref={inputRef}
        type={type}
        value={value}
        className={cls.input}
        onBlur={handleBlur}
        onFocus={handleFocus}
        onChange={handleChange}
        readOnly={readonly}
        onKeyDown={onKeyPress}
        {...otherProps}
      />
    </div>
  );
});
