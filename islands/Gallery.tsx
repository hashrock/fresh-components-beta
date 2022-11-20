import { useState } from "preact/hooks";
import CodeBlock from "../components/CodeBlock.tsx";
import { Head } from "$fresh/runtime.ts";
import IconSourceCode from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/source-code.tsx";
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

export default function Counter() {
  return (
    <div class="space-y-8 py-8">
      <Head>
        <link
          rel="stylesheet"
          href="https://esm.sh/prismjs@1.27.0/themes/prism-dark.min.css"
        />
      </Head>
      <div class="space-y-4">
        <h2 class="text-2xl font-bold">Code Block</h2>

        <SourceLink href="https://github.com/hashrock/fresh-components-beta/blob/main/components/CodeBlock.tsx" />

        <CodeBlock
          code={codeExample}
        />
        <CodeBlock
          code={codeExample}
          copy
        />
      </div>
    </div>
  );
}
