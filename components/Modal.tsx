import { createPortal } from "preact/compat";
import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";

interface ModalProps extends JSX.HTMLAttributes<HTMLDivElement> {
  open: boolean;
  onDismiss?: () => void;
}

export function Modal(props: ModalProps) {
  const onClick = () => {
    if (props.onDismiss) {
      props.onDismiss();
    }
  };

  return (
    <>
      {IS_BROWSER && props.open && (
        createPortal(
          <div
            class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
            onClick={onClick}
          >
            <div
              class="bg-white p-4 rounded-lg max-w-lg"
              onClick={(ev) => {
                ev.stopPropagation();
              }}
            >
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
