import { useState } from "preact/hooks";
import CodeBlock from "../components/CodeBlock.tsx";
import { Head } from "$fresh/runtime.ts";
const codeExample = `import { useState } from "preact/hooks
console.log("Hello World!");
`;

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
