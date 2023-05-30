import { clsx } from "clsx";

import { ButtonHTMLAttributes, PropsWithChildren } from "react";

type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function IconButton( props: PropsWithChildren<IconButtonProps>, ref?: React.ForwardedRef<HTMLButtonElement> ) {
  const { 
    children,
    className,
    ...restProps
  } = props;

  return (
    <button ref={ref} className={clsx("icon-button", className)}
      {...restProps}>{children}</button>
  )
}