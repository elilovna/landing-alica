import { Fragment } from "react";

const TOKEN = /(\*\*[^*]+\*\*|==[^=]+==)/g;

type Props = {
  text: string;
  /** Клас для ==акцентів==: "hl" — кольоровий текст, "hl-bg" — плашка. */
  mark?: "hl" | "hl-bg";
};

/** Рендерить рядок з контенту, де **жирний** і ==акцент== позначені маркерами. */
export function Rich({ text, mark = "hl" }: Props) {
  return (
    <>
      {text.split(TOKEN).map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return <b key={i}>{part.slice(2, -2)}</b>;
        }
        if (part.startsWith("==") && part.endsWith("==")) {
          return (
            <mark key={i} className={mark}>
              {part.slice(2, -2)}
            </mark>
          );
        }
        return <Fragment key={i}>{part}</Fragment>;
      })}
    </>
  );
}
