import CodeBlock from "../components/CodeBlock.tsx";
import Map from "../components/Map.tsx";

import { Head } from "$fresh/runtime.ts";
import IconSourceCode from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/source-code.tsx";
import { Switch } from "../components/Switch.tsx";
import { MyModal } from "../components/Dialog.tsx";
import { MyListbox } from "../components/MyListbox.tsx";
import CodeBlockHljs from "../components/CodeBlockHljs.tsx";
import { Button } from "../components/Button.tsx";
import { Modal } from "../components/Modal.tsx";
import { useState } from "preact/hooks";
import { NativeDialog } from "../components/NativeDialog.tsx";
const codeExample = `import { useState } from "preact/hooks"

// Comment here
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
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);

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

        <h2 class="text-2xl font-bold">Dialog</h2>

        <div class="bg-gray-200 flex justify-center items-center min-h-[20rem]">
          <Button
            onClick={() => {
              setOpen(true);
            }}
          >
            Open Modal
          </Button>

          <Modal
            open={open}
            onDismiss={() => {
              setOpen(false);
            }}
          >
            <h1 class="text-2xl">Modal</h1>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptatum, voluptate, quae ipsa, quas voluptatibus quia
              voluptates accusantium doloribus quibusdam nemo? Quos, quod
              voluptas. Quaerat, voluptatem? Quisquam, voluptatum voluptate.
            </p>
            <Button
              onClick={() => {
                setOpen(false);
              }}
            >
              Close
            </Button>
          </Modal>
        </div>

        <div>
          <h2 class="text-2xl font-bold">Native Dialog</h2>
          <Button
            onClick={() => {
              setOpen2(false);
            }}
          >
            Open
          </Button>
          <NativeDialog open={open2}>
            <h1>Hello</h1>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptatum, voluptate, quae ipsa, quas voluptatibus quia
              voluptates accusantium doloribus quibusdam nemo? Quos, quod
              voluptas. Quaerat, voluptatem? Quisquam, voluptatum voluptate.
            </p>
          </NativeDialog>
        </div>

        <h2 class="text-2xl font-bold">Map</h2>

        <Map current={props.current} />

        <h2 class="text-2xl font-bold">Code Block - Prismjs</h2>

        <SourceLink href="https://github.com/hashrock/fresh-components-beta/blob/main/components/CodeBlock.tsx" />

        <CodeBlock
          code={codeExample}
        />
        <CodeBlock
          code={codeExample}
          copy
        />
        <h2 class="text-2xl font-bold">Code Block - Highlight.js</h2>
        <CodeBlockHljs code={codeExample} />

        <h3>Note</h3>

        <p>To use this component, you have to include this code somewhere.</p>
        <pre class="whitespace-pre-wrap border rounded border-gray-500 p-3">
          &lt;Head&gt;&lt;link rel=&quot;stylesheet&quot; href=&quot;https://esm.sh/prismjs@1.27.0/themes/prism-dark.min.css&quot;/&gt;&lt;/Head&gt;
        </pre>
      </div>
    </div>
  );
}
