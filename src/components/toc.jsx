import { cn } from "@/lib/utils";
import Link from "next/link";
import slugify from "slugify";

export default function TOC({ headings, level = 0 }) {
  const outline = parseOutline(headings);
  return (
    <ol
      className={cn("m-0 p-0 text-sm list-inside", `px-${level}`, {
        "text-muted-foreground list-disc": level,
        "list-decimal": !level,
      })}
    >
      {outline.map((heading) => (
        <li key={heading._key} className="pl-5 m-0">
          <Link
            href={`#${slugify(getChildrenText(heading))}`}
            className="active:bg-violet-700"
          >
            {getChildrenText(heading)}
          </Link>
          {heading.subheadings.length > 0 && (
            <TOC headings={heading.subheadings} level={level + 4} />
          )}
        </li>
      ))}
    </ol>
  );
}

const getChildrenText = (props) =>
  props.children
    .map((node) => (typeof node === "string" ? node : node.text || ""))
    .join("");

const get = (object, path) => path.reduce((prev, curr) => prev[curr], object);
const getObjectPath = (path) =>
  path.length === 0
    ? path
    : ["subheadings"].concat(path.join(".subheadings.").split("."));

const parseOutline = (headings) => {
  const outline = { subheadings: [] };
  const path = [];
  let lastLevel = 0;

  // biome-ignore lint/complexity/noForEach: <explanation>
  headings.forEach((heading) => {
    const level = Number(heading.style.slice(1));
    heading.subheadings = [];

    if (level < lastLevel) for (let i = lastLevel; i >= level; i--) path.pop();
    else if (level === lastLevel) path.pop();

    const prop = get(outline, getObjectPath(path));
    prop.subheadings.push(heading);
    path.push(prop.subheadings.length - 1);
    lastLevel = level;
  });

  return outline.subheadings;
};
