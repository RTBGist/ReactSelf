module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:i18next/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'i18next',
    'react-hooks',
  ],
  rules: {
    // в airbnb табы отключены, выключаем ошибки эти
    'no-tabs': 0,
    // разрешаем jsx внутри tsx файлов
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    // отключение ворнинга на абсолютные пути
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'react/require-default-props': 'off',
    // обязательный импорт реакта отключаем, с 17 версии не нужно
    'react/react-in-jsx-scope': 'off',
    // spread заменили на warn, мы используем только на ui компонентах
    'react/jsx-props-no-spreading': 'warn',
    // просит использовать function declaration вместо () => {отключили}
    'react/function-component-definition': 'off',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    // отключаем ошибки на неуказывание расширений (У нас настроен webpack на это)
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    // отключаем ошибки на нижние подчеркивания
    'no-underscore-dangle': 'off',
    // будет ругаться только внутри jsx при отсутствии перевода
    'i18next/no-literal-string': ['error', {
      markupOnly: true,
      ignoreAttribute: ['data-testid', 'to'],
    }],
    'max-len': ['error', { ignoreComments: true, code: 120 }],
    'linebreak-style': ['error', 'unix'],
    'jsx-a11y/no-static-element-interactions': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'no-param-reassign': 'off',
    'no-undef': 'off',
  },
  globals: {
    __IS_DEV__: true,
    __API__: true,
    __PROJECT__: true,
  },
  overrides: [
    // отключил в тестовых файлах переводчик (ворнинг линта)
    {
      files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
      rules: {
        'i18next/no-literal-string': 'off',
        'max-len': 'off',
      },
    },
  ],
};
