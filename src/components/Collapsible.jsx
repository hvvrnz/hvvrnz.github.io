import { useState } from "react";

/**
 * Generic collapsible section, styled like Troubleshooting's accordion items.
 * Usage: <Collapsible title="..." tag="..." defaultOpen>{children}</Collapsible>
 */
export default function Collapsible({ title, tag, defaultOpen = false, children }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className={`collapse-item ${open ? "open" : ""}`}>
      <button
        className="collapse-summary"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span className="collapse-summary-left">
          {title}
          {tag && <span className="tag">{tag}</span>}
        </span>
        <span className="collapse-chevron">+</span>
      </button>
      {open && <div className="collapse-body">{children}</div>}
    </div>
  );
}
