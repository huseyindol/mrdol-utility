module.exports = {
  'src/**/*.{js,jsx,ts,tsx}': (filenames) => [
    `eslint --fix ${filenames.join(' ')}`,
    `prettier --write ${filenames.join(' ')}`,
  ],
  'src/**/*.(ts|tsx)': () => 'tsc -p tsconfig.json --noEmit',
  'src/**/*.(md|json)': (filenames) => `prettier --write ${filenames.join(' ')}`,
};
