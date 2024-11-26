import { reactConfig } from '@repo/eslint-config/react-internal';
import { tailwindConfig } from '@repo/eslint-config/tailwind';

/** @type {import("eslint").Linter.Config} */
export default [...reactConfig, ...tailwindConfig];
