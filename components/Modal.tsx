import { createPortal } from "preact/compat";
import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";

interface ModalProps extends JSX.HTMLAttributes<HTMLDivElement> {
  open: boolean;
}

export function Modal(props: ModalProps) {
  return (
    <>
      {IS_BROWSER && props.open && (
        createPortal(
          <div class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div class="bg-white p-4 rounded-lg max-w-lg">
              <div {...props}>
                {props.children}
              </div>
            </div>
          </div>,
          document.body,
        )
      )}
    </>
  );
}
