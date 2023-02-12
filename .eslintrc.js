module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
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
  ],
  rules: {
    // в airbnb табы отключены, выключаем ошибки эти
    'no-tabs': 0,
    // разрешаем jsx внутри tsx файлов
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    // отключение ворнинга на абсолютные пути
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'no-unused-vars': 'warn',
    'react/require-default-props': 'off',
    // обязательный импорт реакта отключаем, с 17 версии не нужно
    'react/react-in-jsx-scope': 'off',
    // spread заменили на warn, мы используем только на ui компонентах
    'react/jsx-props-no-spreading': 'warn',
    // просит использовать function declaration вместо () => {отключили}
    'react/function-component-definition': 'off',
    'no-shadow': 'off',
    // отключаем ошибки на неуказывание расширений (У нас настроен webpack на это)
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    // отключаем ошибки на нижние подчеркивания
    'no-underscore-dangle': 'off',
  },
  globals: {
    __IS_DEV__: true,
  },
};