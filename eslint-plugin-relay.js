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
        '@reverecre/relay/graphql-syntax': 'error',
        '@reverecre/relay/compat-uses-vars': 'warn',
        '@reverecre/relay/graphql-naming': 'error',
        '@reverecre/relay/generated-flow-types': 'warn',
        '@reverecre/relay/no-future-added-value': 'warn',
        '@reverecre/relay/unused-fields': 'warn',
        '@reverecre/relay/must-colocate-fragment-spreads': 'warn',
        '@reverecre/relay/function-required-argument': 'warn',
        '@reverecre/relay/hook-required-argument': 'warn'
      }
    },
    strict: {
      rules: {
        '@reverecre/relay/graphql-syntax': 'error',
        '@reverecre/relay/compat-uses-vars': 'error',
        '@reverecre/relay/graphql-naming': 'error',
        '@reverecre/relay/generated-flow-types': 'error',
        '@reverecre/relay/no-future-added-value': 'error',
        '@reverecre/relay/unused-fields': 'error',
        '@reverecre/relay/must-colocate-fragment-spreads': 'error',
        '@reverecre/relay/function-required-argument': 'error',
        '@reverecre/relay/hook-required-argument': 'error'
      }
    }
  }
};
