import pluginVue from 'eslint-plugin-vue';
import vueTsConfig from '@vue/eslint-config-typescript';
import pluginPrettier from 'eslint-plugin-prettier';
import configPrettier from 'eslint-config-prettier';

export default [
    {
        name: 'app/files-to-lint',
        files: ['**/*.{js,mjs,cjs,ts,vue,tsx,jsx}']
    },

    {
        name: 'app/files-to-ignore',
        ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**']
    },

    ...pluginVue.configs['flat/essential'],
    ...vueTsConfig(),

    {
        name: 'app/prettier',
        plugins: {
            prettier: pluginPrettier
        },
        rules: {
            ...configPrettier.rules,
            'prettier/prettier': ['error', { endOfLine: 'auto' }]
        }
    },

    {
        rules: {
            'comma-dangle': 'off',
            '@typescript-eslint/comma-dangle': 'off'
        }
    }
];
