/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

module.exports = {
  rules: {
    'graphql-syntax': require('./src/rule-graphql-syntax'),
    'compat-uses-vars': require('./src/rule-compat-uses-vars'),
    'graphql-naming': require('./src/rule-graphql-naming'),
    'generated-flow-types': require('./src/rule-generated-flow-types'),
    'no-future-added-value': require('./src/rule-no-future-added-value'),
    'unused-fields': require('./src/rule-unused-fields'),
    'must-colocate-fragment-spreads': require('./src/rule-must-colocate-fragment-spreads'),
    'function-required-argument': require('./src/rule-function-required-argument'),
    'hook-required-argument': require('./src/rule-hook-required-argument')
  },
  configs: {
    recommended: {
      rules: {
        '@reverecre/eslint-plugin-relay/graphql-syntax': 'error',
        '@reverecre/eslint-plugin-relay/compat-uses-vars': 'warn',
        '@reverecre/eslint-plugin-relay/graphql-naming': 'error',
        '@reverecre/eslint-plugin-relay/generated-flow-types': 'warn',
        '@reverecre/eslint-plugin-relay/no-future-added-value': 'warn',
        '@reverecre/eslint-plugin-relay/unused-fields': 'warn',
        '@reverecre/eslint-plugin-relay/must-colocate-fragment-spreads': 'warn',
        '@reverecre/eslint-plugin-relay/function-required-argument': 'warn',
        '@reverecre/eslint-plugin-relay/hook-required-argument': 'warn'
      }
    },
    strict: {
      rules: {
        '@reverecre/eslint-plugin-relay/graphql-syntax': 'error',
        '@reverecre/eslint-plugin-relay/compat-uses-vars': 'error',
        '@reverecre/eslint-plugin-relay/graphql-naming': 'error',
        '@reverecre/eslint-plugin-relay/generated-flow-types': 'error',
        '@reverecre/eslint-plugin-relay/no-future-added-value': 'error',
        '@reverecre/eslint-plugin-relay/unused-fields': 'error',
        '@reverecre/eslint-plugin-relay/must-colocate-fragment-spreads':
          'error',
        '@reverecre/eslint-plugin-relay/function-required-argument': 'error',
        '@reverecre/eslint-plugin-relay/hook-required-argument': 'error'
      }
    }
  }
};
