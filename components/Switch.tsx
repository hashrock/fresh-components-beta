
import { useState } from "preact/hooks";
import { Switch as HeadlessSwitch } from "https://esm.sh/@headlessui/react@1.7.15?alias=react:preact/compat,react-dom:preact/compat,@types/react:preact/compatt&external=preact/compat";

export function Switch() {
  const [enabled, setEnabled] = useState(false);

  return (
    <HeadlessSwitch
      checked={enabled}
      onChange={setEnabled}
      className={`${
        enabled ? "bg-blue-600" : "bg-gray-200"
      } relative inline-flex h-6 w-11 items-center rounded-full`}
    >
      <span className="sr-only">Enable notifications</span>
      <span
        className={`${
          enabled ? "translate-x-6" : "translate-x-1"
        } inline-block h-4 w-4 transform rounded-full bg-white transition`}
      />
    </HeadlessSwitch>
  );
}