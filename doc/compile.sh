#!/bin/sh

files=( *.md )
pandoc -s -c ../pages/markdown.css -H include.html -f markdown -t html select.md -o select.html
pandoc -s -c ../pages/markdown.css -H include.html -f markdown -t html site.md -o site.html
pandoc -s -c ../pages/markdown.css -H include.html -f markdown -t html recommendations.md -o recommendations.html
pandoc -s -c ../pages/markdown.css -H include.html -f markdown -t html navigate.md -o navigate.html
