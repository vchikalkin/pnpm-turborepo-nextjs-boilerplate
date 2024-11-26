import { nextJsConfig } from '@repo/eslint-config/next-js';
import { tailwindConfig } from '@repo/eslint-config/tailwind';

/** @type {import("eslint").Linter.Config} */
export default [...nextJsConfig, ...tailwindConfig];
