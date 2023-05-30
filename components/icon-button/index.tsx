import { clsx } from "clsx";

import { ButtonHTMLAttributes, PropsWithChildren } from "react";

type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function IconButton( props: PropsWithChildren<IconButtonProps>) {
  const { 
    children,
    className,
    ...restProps
  } = props;

  return (
    <button className={clsx("icon-button", className)}
      {...restProps}>{children}</button>
  )
}