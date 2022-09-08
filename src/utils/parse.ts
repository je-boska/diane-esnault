import { parse } from 'node-html-parser';

export function getSVG(name: string) {
  const filepath = `/src/svg/${name}.svg`;
  const files = import.meta.globEager<string>('/src/svg/**/*.svg', {
    as: 'raw',
  });

  if (!(filepath in files)) {
    throw new Error(`${filepath} not found`);
  }

  const root = parse(files[filepath] as string);

  const svg = root.querySelector('svg');
  const { attributes, innerHTML } = svg;

  return {
    attributes,
    innerHTML,
  };
}
