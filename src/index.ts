import { Plugin } from "vite";
import { CreateFilter, createFilter } from "@rollup/pluginutils";
export function treatAsCommonjs(options?: {
  include: Parameters<CreateFilter>[0];
  exclude: Parameters<CreateFilter>[1];
}): Plugin {
  const { include, exclude } = options ?? {}
  const filter = createFilter(
    include || /node_modules\/.*\.[jt]sx?$/,
    exclude || []
  );

  return {
    name: "vite-plugin-treat-umd-as-commonjs",
    enforce: 'pre',
    apply: 'serve',
    transform(code, id) {
      if (!filter(id)) return null;
      const patterns = [
        `typeof define === 'function' && define.amd`,
        `typeof define === "function" && define.amd`,
        `"function"==typeof define&&define.amd`,
      ]
      patterns.forEach((pattern) => {
        code = code.replace(new RegExp(pattern, 'g'), ' false ')
      })

      return {
        code,
      }
    },
  };
}
