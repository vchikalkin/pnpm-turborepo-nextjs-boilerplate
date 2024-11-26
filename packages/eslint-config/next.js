import { config as baseConfig } from './base.js';
import awesome from '@vchikalkin/eslint-config-awesome';

/**
 * A custom ESLint configuration for libraries that use Next.js.
 *
 * @type {import("eslint").Linter.Config}
 * */
export const nextJsConfig = [...baseConfig, ...awesome['react-typescript']];
