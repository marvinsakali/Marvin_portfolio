import { marked } from "marked";

const modules = import.meta.glob("../contents/**/*.mdx", {
  query: "?raw",
  import: "default",
  eager: true,
});

const cache = new Map();

// Extract frontmatter from the markdown file
const parseFrontmatter = (raw) => {
  const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/.exec(raw);

  if (!match) {
    return {
      frontmatter: {},
      body: raw,
    };
  }

  const frontmatter = {};

  for (const line of (match[1] || "").split(/\r?\n/)) {
    const idx = line.indexOf(":");

    if (idx === -1) continue;

    frontmatter[line.slice(0, idx).trim()] = line
      .slice(idx + 1)
      .trim()
      .replace(/^["']|["']$/g, "");
  }

  return {
    frontmatter,
    body: raw.slice(match[0].length),
  };
};

// bodyPath looks like "notes/my-post"
// which maps to src/content/notes/my-post.mdx
export const loadContent = (bodyPath) => {
  if (!bodyPath) return null;

  const cached = cache.get(bodyPath);

  if (cached) {
    return cached;
  }

  const key = `../contents/${bodyPath}.mdx`;

  const raw = modules[key];
  
  

  if (!raw) {
    return null;
  }

  const { frontmatter, body } = parseFrontmatter(raw);

  const doc = {
    frontmatter,
    html: marked.parse(body),
    readingMinutes: Math.max(
      1,
      Math.round(body.split(/\s+/).length / 220)
    ),
  };

  cache.set(bodyPath, doc);

  return doc;
};