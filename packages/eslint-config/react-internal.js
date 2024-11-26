import { config as baseConfig } from './base.js';
import awesome from '@vchikalkin/eslint-config-awesome';

/**
 * A custom ESLint configuration for libraries that use React.
 *
 * @type {import("eslint").Linter.Config} */
export const reactConfig = [...baseConfig, ...awesome['react-typescript']];
