module.exports = {
  root: true,
  extends: '@massproject/eslint-config-vue',
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      {
        optionalDependencies: false,
      },
    ],
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
  },
};
