install:
	yarn install

publish:
	yarn publish

lint:
	yarn run eslint .

test:
	yarn run test

test.watch:
	yarn run test --watch

deploy:
	yarn run deploy

build:
	yarn run build

start:
	yarn run start

clear:
	rm -rf dist
	rm -rf node_modules
