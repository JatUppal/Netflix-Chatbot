import { readFile, writeFile } from 'fs/promises';
import { parse } from 'csv-parse/sync';

const csv = await readFile('netflix_titles.csv', 'utf8');

const records = parse(csv, {
  columns: true,
  skip_empty_lines: true,
});

const blocks = records.map((r) => {
  const lines = [];
  lines.push(`Title: ${r.title || 'N/A'}`);
  lines.push(`Type: ${r.type || 'N/A'}`);
  lines.push(`Release year: ${r.release_year || 'N/A'}`);
  if (r.rating) lines.push(`Rating: ${r.rating}`);
  if (r.duration) lines.push(`Duration: ${r.duration}`);
  if (r.listed_in) lines.push(`Genres: ${r.listed_in}`);
  if (r.country) lines.push(`Country: ${r.country}`);
  if (r.director) lines.push(`Director: ${r.director}`);
  if (r.cast) lines.push(`Cast: ${r.cast}`);
  if (r.date_added) lines.push(`Date added: ${r.date_added}`);
  if (r.description) lines.push(`Description: ${r.description}`);
  return lines.join('\n');
});

const out = blocks.join('\n\n---\n\n');
await writeFile('netflix-info.txt', out, 'utf8');
console.log(`✅ Wrote netflix-info.txt with ${records.length} items`);
