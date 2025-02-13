PNPM?=pnpm

build:
	"$(PNPM)" exec tailwindcss -i input.css -o static/style.css


.PHONY: build