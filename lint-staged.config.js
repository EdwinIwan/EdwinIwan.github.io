module.exports = {
  "src/**/*.ts": ["yarn lint:ts", "yarn format:ts --check"],
  "src/**/*.svelte": ["yarn lint:svelte", "yarn format:svelte --check"],
  "src/**/*.js": ["yarn lint:js", "yarn format:js --check"],
};
