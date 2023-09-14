import hljs from "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/es/core.min.js";
import ts from "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/es/languages/typescript.min.js";

interface CodeBlockProps {
  code: string;
}

export default function CodeBlock(props: CodeBlockProps) {
  hljs.registerLanguage("ts", ts);
  const result = hljs.highlight(props.code, {
    language: "ts",
  });

  return (
    <div class="relative">
      <pre class="bg-gray-800 text-blue-300 p-2 text-sm rounded whitespace-pre-wrap">
          <code
            dangerouslySetInnerHTML={{ __html: result.value }}
          >
          </code>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/github-dark.min.css"></link>
      </pre>
    </div>
  );
}
