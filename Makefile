
.PHONY: default build deploy stage

default: build

build:
	yarn build

deploy:
	yarn build

	sleep 0.1

	git rev-parse HEAD > build/VERSION

	scp -r build/* fivecalls@5calls.org:/var/www/5calls/html/
	echo "Sent static site to server"

stage:
	PUBLIC_URL=https://test.5calls.org yarn build

	sleep 0.1

	git rev-parse HEAD > build/VERSION

	scp -r build/* nickoneill@test.5calls.org:/var/www/test.5calls.org/
	echo "deployed to stage server"