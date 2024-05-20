import nodeGlobals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    files: ["*.js", "*.mjs"],
    languageOptions: {
      globals: nodeGlobals.node,
      ecmaVersion: 2021, // или любой другой желаемый ES стандарт
      sourceType: "module", // или 'script' для CommonJS
    },
    ...pluginJs.configs.recommended,
    rules: {
      "no-console": "off",
      strict: "error",
      // добавьте любые другие правила, которые вам нужны
    },
  },
  pluginJs.configs.recommended,
];
