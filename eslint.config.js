// eslint.config.js
import antfu from '@antfu/eslint-config'

export default antfu(
  {
    // Configures for antfu's config
  },
  {
    rules: {
      'semi': ['error', 'never'],
      'vue/no-mutating-props': ['error', {
        shallowOnly: true,
      }],
      'arrow-parens': 0,
      'generator-star-spacing': 0,
      'comma-dangle': [2, 'always-multiline'],
      'space-before-function-paren': 0,
      'object-curly-spacing': 1,
      'prefer-const': 0,
      'no-unneeded-ternary': ['error', { defaultAssignment: true }],
      'vue/max-attributes-per-line': 0,
      'vue/attributes-order': 0,
      'vue/require-default-prop': 0,
      'no-control-regex': 0,
      'vue/multi-word-component-names': 0,
      'vue/html-self-closing': 0,
      'vue/script-setup-uses-vars': 1,
    },
  },
)
