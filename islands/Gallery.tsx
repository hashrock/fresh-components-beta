import CodeBlock from "../components/CodeBlock.tsx";
import Map from "../components/Map.tsx";

import { Head } from "$fresh/runtime.ts";
import IconSourceCode from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/source-code.tsx";
import { Switch } from "../components/Switch.tsx";
import { MyModal } from "../components/Dialog.tsx";
import { MyListbox } from "../components/MyListbox.tsx";
const codeExample = `import { useState } from "preact/hooks
console.log("Hello World!");
`;

function SourceLink(props: { href: string }) {
  return (
    <a
      href="https://github.com/hashrock/fresh-components-beta/blob/main/components/CodeBlock.tsx"
      class="inline-block text-gray-500 hover:text-gray-700 flex items-center"
    >
      <IconSourceCode class="inline-block w-5 h-5" />
      <div>
        Source
      </div>
    </a>
  );
}
interface GalleryProps {
  current: string;
}

export default function Gallery(props: GalleryProps) {
  return (
    <div class="space-y-8 py-8">
      <Head>
        <link
          rel="stylesheet"
          href="https://esm.sh/prismjs@1.27.0/themes/prism-dark.min.css"
        />
      </Head>
      <div class="space-y-4">
        <p>
          <a
            class="underline text-blue-500"
            href="https://fresh.deno.dev/components"
          >
            Upstream
          </a>
        </p>

        {
          /* <h2 class="text-2xl font-bold">Headless UI Listbox</h2>

        <div>
          <MyListbox />
        </div>

        <h2 class="text-2xl font-bold">Headless UI Modal</h2>

        <div>
          <MyModal />
        </div>

        <h2 class="text-2xl font-bold">Headless UI Switch</h2>

        <Switch /> */
        }

        <h2 class="text-2xl font-bold">Map</h2>

        <Map current={props.current} />

        <h2 class="text-2xl font-bold">Code Block</h2>

        <SourceLink href="https://github.com/hashrock/fresh-components-beta/blob/main/components/CodeBlock.tsx" />

        <CodeBlock
          code={codeExample}
        />
        <CodeBlock
          code={codeExample}
          copy
        />

        <h3>Note</h3>

        <p>To use this component, you have to include this code somewhere.</p>
        <pre class="whitespace-pre-wrap border rounded border-gray-500 p-3">
          &lt;Head&gt;&lt;link rel=&quot;stylesheet&quot; href=&quot;https://esm.sh/prismjs@1.27.0/themes/prism-dark.min.css&quot;/&gt;&lt;/Head&gt;
        </pre>
      </div>
    </div>
  );
}
