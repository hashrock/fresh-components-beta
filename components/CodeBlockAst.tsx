import { useState } from "preact/hooks";
import { all, common, createLowlight } from "https://esm.sh/lowlight@3?bundle";
import { Element, Root } from "https://esm.sh/v132/lowlight@3.0.0/lib/index.js";

interface CodeBlockProps {
  code: string;
}

function treeToDom(tree: Element | Root) {
  return (
    <>
      {tree.children.map((node, i) => {
        if (node.type === "text") {
          return node.value;
        }
        if (node.type === "comment") {
          return (
            <span key={i} class="text-gray-500">
              {node.value}
            </span>
          );
        }
        if (node.type === "doctype") {
          return (
            <span key={i} class="text-gray-500">
              {node.data}
            </span>
          );
        }

        const className = node.properties.className as string[];
        let textColor = "hoge";
        console.log(className);
        if (className.includes("hljs-keyword")) {
          textColor = "text-yellow-300";
        }
        if (className.includes("hljs-string")) {
          textColor = "text-green-300";
        }

        if (node.type === "element") {
          return (
            <span key={i} class={textColor}>
              {treeToDom(node)}
            </span>
          );
        }
        return (
          <span key={i} class="text-red-500">
            Unknown node type {node}
          </span>
        );
      })}
    </>
  );
}

export default function CodeBlock(props: CodeBlockProps) {
  const lowlight = createLowlight(common);

  const tree = lowlight.highlight("ts", props.code);

  return (
    <div class="">
      <div class="relative">
        <pre class="bg-gray-800 text-blue-300 p-2 text-sm rounded whitespace-pre-wrap">
          <code
          >
            {treeToDom(tree)}
          </code>
          <code>
            {JSON.stringify(tree, null, 2)}
          </code>
        </pre>
      </div>
    </div>
  );
}
