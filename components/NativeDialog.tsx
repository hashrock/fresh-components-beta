import { IS_BROWSER } from "$fresh/runtime.ts";
import { JSX } from "preact";
import { useEffect, useRef } from "preact/hooks";

// reference: https://web.dev/building-a-dialog-component/#overview

interface NativeDialogProps extends JSX.HTMLAttributes<HTMLDivElement> {
  // children: JSX.Element | JSX.Element[];
  open: boolean;
  onDismiss?: () => void;
}

export function NativeDialog(props: NativeDialogProps) {
  const ref = useRef<HTMLDialogElement>(null);

  const onClick = () => {
    if (props.onDismiss) {
      props.onDismiss();
    }
  };

  useEffect(() => {
    if (props.open) {
      console.log("showing modal");
      ref.current?.showModal();
    } else {
      ref.current?.close();
    }
  }, [props.open]);

  return (
    <div {...props}>
      {props.open}
      <dialog
        ref={ref}
        class={"rounded-lg shadow-xl " + props.class}
        onClick={onClick}
      >
        <div
          onClick={(ev) => {
            ev.stopPropagation();
          }}
        >
          {props.children}

          <form
            class="mt-4 flex justify-end"
            method="dialog"
            onSubmit={() => {
              ref.current?.close();
              props.onDismiss?.();
            }}
          >
            <button class="
            bg-blue-500
            hover:bg-blue-700
            text-white
            font-bold
            py-2
            px-4
            rounded
          ">
              Close
            </button>
          </form>
        </div>
      </dialog>
    </div>
  );
}
