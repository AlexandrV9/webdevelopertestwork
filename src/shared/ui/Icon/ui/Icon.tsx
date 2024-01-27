import { FC, SVGProps, memo } from "react";

import classNames from "classnames";

import cls from "./Icon.module.scss";

interface IconProps extends SVGProps<SVGElement> {
  width?: number;
  height?: number;
  className?: string;
  Svg?: FC<SVGProps<SVGSVGElement>>;
  fill?: string;
  opacity?: number;
}

const Icon: FC<IconProps> = memo((props) => {
  const { Svg, className, width = 24, height = 24, opacity = 1 } = props;

  if(!Svg) return null;

  return (
    <Svg
      className={classNames(cls.Icon, [className])}
      width={width}
      height={height}
      opacity={opacity}
    />
  );
});

export default Icon;
