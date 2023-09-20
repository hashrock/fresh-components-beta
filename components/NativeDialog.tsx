import { JSX } from "preact";
import { useEffect, useRef } from "preact/hooks";

interface NativeDialogProps extends JSX.HTMLAttributes<HTMLDivElement> {
  // children: JSX.Element | JSX.Element[];
  open: boolean;
}

export function NativeDialog(props: NativeDialogProps) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (props.open) {
      ref.current?.showModal();
    } else {
      ref.current?.close();
    }
  }, [props.open]);

  return (
    <div {...props}>
      <dialog ref={ref}>
        {props.children}
      </dialog>
    </div>
  );
}
