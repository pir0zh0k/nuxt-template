// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt(
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.vue'],
		rules: {
			semi: 'error',
      '@typescript-eslint/no-explicit-any': 'off',
			'prefer-const': 'error',
      'arrow-body-style': 'error',
      'complexity': ['error', 30],
      'consistent-return': 'error',
      'curly': 'error',
      'default-case-last': 'error',
      'eqeqeq': 'error',
      'guard-for-in': 'error',
      'max-params': ['error', 5],
      'no-dupe-keys': 'error',
      'no-duplicate-imports': 'error',
      'no-else-return': 'error',
      'no-empty-function': 'error',
      'no-extra-boolean-cast': 'error',
      'no-implicit-coercion': 'error',
      'no-inner-declarations': 'error',
      'no-labels': 'error',
      'no-lone-blocks': 'error',
      'no-lonely-if': 'error',
      'no-negated-condition': 'error',
      'no-nested-ternary': 'error',
      'no-new': 'error',
      'no-new-wrappers': 'error',
      'no-return-assign': ['error', 'always'],
      'no-self-compare': 'error',
      'no-undef': 'error',
      'no-unneeded-ternary': 'error',
      'no-useless-catch': 'error',
      'no-useless-concat': 'error',
      'no-useless-rename': 'error',
      'no-useless-return': 'error',
      'object-shorthand': ['error', 'always', { avoidExplicitReturnArrows: true }],
      'one-var': ['error', 'never'],
      'prefer-destructuring': 'error',
      'prefer-rest-params': 'error',
      'prefer-spread': 'error',
      'prefer-template': 'error',
      'require-await': 'error',
      'sort-vars': 'error',
      'vars-on-top': 'error',
      'vue/block-order': ['error', { order: ['template', 'script', 'style'] }],
      'vue/component-name-in-template-casing': [
        'error',
        'kebab-case',
        { registeredComponentsOnly: false },
      ],
      'vue/custom-event-name-casing': ['error', 'kebab-case'],
      'vue/enforce-style-attribute': ['error', { allow: ['module'] }],
      'vue/html-button-has-type': [
        'error',
        { button: true, reset: true, submit: true },
      ],
      'vue/match-component-file-name': [
        'error',
        { extensions: ['vue'], shouldMatchCase: false },
      ],
      'vue/no-empty-component-block': 'error',
      'vue/no-multiple-objects-in-class': 'error',
      'vue/no-required-prop-with-default': 'error',
      'vue/no-static-inline-styles': 'error',
      'vue/no-template-shadow': 'error',
      'vue/no-unused-emit-declarations': 'error',
      'vue/no-unused-properties': [
        'error',
        {
          deepData: true,
          groups: ['props', 'data', 'computed', 'methods', 'setup'],
        },
      ],
      'vue/no-unused-refs': 'error',
      'vue/no-useless-mustaches': [
        'error',
        { ignoreIncludesComment: true, ignoreStringEscape: true },
      ],
      'vue/no-useless-v-bind': [
        'error',
        { ignoreIncludesComment: true, ignoreStringEscape: true },
      ],
      'vue/object-shorthand': 'error',
      'vue/order-in-components': 'off', // В options API конфликтует с нашей сортировкой
      'vue/padding-line-between-blocks': 'error',
      'vue/prefer-true-attribute-shorthand': 'error',
      'vue/require-direct-export': [
        'error',
        { disallowFunctionalComponentFunction: false },
      ],
      'vue/require-name-property': 'error',
      'vue/require-prop-types': 'error',
      'vue/v-bind-style': ['error', 'shorthand', { sameNameShorthand: 'never' }],
      'vue/v-for-delimiter-style': 'error',
      'vue/max-attributes-per-line': ['error', {
        'singleline': 1,
        'multiline': 1
      }],
      'vue/first-attribute-linebreak': ['error', {
        'singleline': 'ignore',
        'multiline': 'below'
      }],
      'vue/html-indent': ['error', 'tab', {
        'attribute': 1,
        'baseIndent': 1,
        'closeBracket': 0,
        'alignAttributesVertically': true
      }],
      'indent': ['error', 'tab', {
        'SwitchCase': 1,
        'ignoredNodes': ['TemplateLiteral']
      }],
      'vue/script-indent': ['error', 'tab', {
        'baseIndent': 0,
        'switchCase': 1
      }],
      'vue/no-multiple-template-root': 'off',
      'yoda': 'error',
		},
	},
);
