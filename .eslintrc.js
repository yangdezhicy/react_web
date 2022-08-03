module.exports = {
	'env': {
		'browser': true,
		'commonjs': true,
		'es2021': true
	},
	'extends': [
		'plugin:react/recommended',
		'standard'
	],
	'parser': '@typescript-eslint/parser',
	'parserOptions': {
		'ecmaFeatures': {
			'jsx': true
		},
		'ecmaVersion': 'latest'
	},
	'plugins': [
		'react',
		'@typescript-eslint'
	],
	'settings': {
		'react': {
			'version': 'detect'
		}
	},
	'rules': {
		'indent': [2, 'tab'],
		'no-tabs': 'off'
	}
}
