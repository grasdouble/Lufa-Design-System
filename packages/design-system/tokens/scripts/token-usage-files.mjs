import fs from 'node:fs';
import path from 'node:path';

export function collectFiles(directory, extensions, excludedDirectories = new Set()) {
  const results = [];

  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    if (entry.isDirectory() && excludedDirectories.has(entry.name)) {
      continue;
    }

    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      results.push(...collectFiles(fullPath, extensions, excludedDirectories));
    } else if (extensions.some((extension) => entry.name.endsWith(extension))) {
      results.push(fullPath);
    }
  }

  return results;
}
