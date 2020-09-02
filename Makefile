install:
	npm install

start:
	npx babel-node bin/brain-games.js

publish:
	npm publish --dry-run

brain-games:
	node bin/brain-games.js

