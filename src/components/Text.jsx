import { Fragment } from "react";

/**
 * Renders a string, turning any "\n" inside it into a real line break.
 * Usage: <Text>{someContentJsString}</Text>
 * If the string has no "\n", it renders exactly as before.
 */
export default function Text({ children }) {
  if (typeof children !== "string" || !children.includes("\n")) {
    return children;
  }
  const lines = children.split("\n");
  return lines.map((line, i) => (
    <Fragment key={i}>
      {line}
      {i < lines.length - 1 && <br />}
    </Fragment>
  ));
}
