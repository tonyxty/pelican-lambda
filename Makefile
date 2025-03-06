PNPM?=pnpm

build:
	"$(PNPM)" exec tailwindcss -i input.css -o static/style.css

release:
	mkdir -p release/pelican-lambda
	cd release/pelican-lambda; ln -sf ../../static ../../templates .
	cd release; zip -FSr pelican-lambda.zip pelican-lambda -x '**/.DS_Store'


.PHONY: build release
