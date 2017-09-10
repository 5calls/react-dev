
.PHONY: default build deploy deploy-test

default: build

build:
	yarn build

deploy:
	yarn build

	sleep 0.1

	git rev-parse HEAD > build/VERSION

	scp -r build/* fivecalls@5calls.org:/var/www/5calls/html/
	echo "Sent static site to server"

deploy-test:
	yarn build

	sleep 0.1

	git rev-parse HEAD > build/VERSION

	scp -r build/* nickoneill@test.5calls.org:/var/www/test.5calls.org/
	echo "Sent static site to test server"