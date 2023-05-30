import { clsx } from "clsx";

interface TypingTitleProps {
  text: string;
  keywords: string[];
  classNames?: string;
}

export function TypingTitle( props: TypingTitleProps ) {
  return (
    <h1 className={clsx("typing-title")}>
      <span className="typing-title__text">{props.text}</span>
      <span className="typing-title__keyword">Test</span>
    </h1>
  )
}