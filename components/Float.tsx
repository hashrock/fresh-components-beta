import { JSX } from "preact";
import { computePosition } from "https://esm.sh/@floating-ui/react-dom@2.0.2";
import { useEffect, useRef, useState } from "preact/hooks";
// import {computePosition} from 'https://cdn.jsdelivr.net/npm/@floating-ui/dom@1.5.3/+esm';

export function Float(props: JSX.HTMLAttributes<HTMLDivElement>) {
  // const button = document.querySelector("#button");
  // const tooltip = document.querySelector("#tooltip");

  // useEffect(await () => {
  //   const result = async computePosition(button, tooltip)

  // }
  const buttonRef = useRef(null);
  const tooltipRef = useRef(null);

  const [position, setPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    const button = buttonRef.current;
    const tooltip = tooltipRef.current;
    (async () => {
      if (button && tooltip) {
        const result = await computePosition(button, tooltip);
        console.log(result);
        setPosition(() => {
          return {
            top: result.x,
            left: result.y,
          };
        });
      }
    })();
  }, [buttonRef, tooltipRef]);

  return (
    <div {...props} class="relative">
      <button
        id="button"
        ref={buttonRef}
        class="bg-blue-500 text-white px-4 py-2 rounded"
      >
        My reference element
      </button>
      <div
        id="tooltip"
        ref={tooltipRef}
        class="absolute bg-gray-800 text-gray-50 rounded p-4"
        style={position}
      >
        My floating element
      </div>
    </div>
  );
}
