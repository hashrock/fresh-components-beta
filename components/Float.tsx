import { JSX } from "preact";
import { computePosition } from "https://esm.sh/@floating-ui/react-dom@2.0.2";
import { useEffect, useRef, useState } from "preact/hooks";
// import {computePosition} from 'https://cdn.jsdelivr.net/npm/@floating-ui/dom@1.5.3/+esm';

export function Float(props: JSX.HTMLAttributes<HTMLDivElement>) {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  const [position, setPosition] = useState({
    top: 0,
    left: 0,
    width: "max-content",
  });

  useEffect(() => {
    const button = buttonRef.current;
    const tooltip = tooltipRef.current;
    (async () => {
      if (button && tooltip) {
        console.log("button", button?.getBoundingClientRect());
        console.log("tooltip", tooltip?.getBoundingClientRect());
        const result = await computePosition(button, tooltip, {
          placement: "top",
        });
        setPosition(() => {
          return {
            top: result.y,
            left: result.x,
            width: "max-content",
          };
        });
      }
    })();
  }, [buttonRef, tooltipRef]);

  return (
    <div {...props}>
      <button
        id="button"
        ref={buttonRef}
        class="bg-blue-500 text-white px-4 py-2 rounded"
        onMouseEnter={() => {
          setOpen(true);
        }}
        onMouseLeave={() => {
          setOpen(false);
        }}
      >
        My reference element
      </button>

      <div
        id="tooltip"
        ref={tooltipRef}
        class={"absolute bg-gray-800 text-gray-50 rounded p-4 " +
          (open ? "" : "opacity-0")}
        style={position}
      >
        My floating element
      </div>
    </div>
  );
}
