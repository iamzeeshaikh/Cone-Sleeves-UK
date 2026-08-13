/**
 * Resolve hook so plain Node can import the project's extensionless
 * TypeScript imports the same way Astro's bundler does. Node strips the
 * types itself; it just will not guess the file extension.
 */
export async function resolve(specifier, context, nextResolve) {
  try {
    return await nextResolve(specifier, context);
  } catch (err) {
    if (specifier.startsWith('.') && !/\.[a-z]+$/i.test(specifier)) {
      for (const candidate of [`${specifier}.ts`, `${specifier}/index.ts`]) {
        try {
          return await nextResolve(candidate, context);
        } catch {
          /* try the next candidate */
        }
      }
    }
    throw err;
  }
}
