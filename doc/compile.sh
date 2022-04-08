#!/bin/sh

files=( *.md )
pandoc -s -c ../pages/markdown.css -H include.html -f markdown -t html select.md -o select.html
