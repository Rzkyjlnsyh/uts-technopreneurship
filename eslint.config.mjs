import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypeScript from "eslint-config-next/typescript";

/** Flat config native dari eslint-config-next 16 (tidak butuh @eslint/eslintrc). */
const eslintConfig = [
  {
    ignores: [".work/**", "out/**", ".next/**", "node_modules/**"],
  },
  ...nextCoreWebVitals,
  ...nextTypeScript,
];

export default eslintConfig;
