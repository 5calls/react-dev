
.PHONY: default build deploy

default: build

build:
	yarn build

deploy:
	yarn build

	sleep 0.1

	git rev-parse HEAD > build/VERSION

	scp -r build/* fivecalls@5calls.org:/var/www/5calls/html/
	echo "Sent static site to server"