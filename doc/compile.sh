#!/bin/sh

files=( *.md )
pandoc -s -c ../pages/markdown.css -H include/cvim.html -f markdown -t html select.md -o select.html
pandoc -s -c ../pages/markdown.css -H include/cvim.html -f markdown -t html site.md -o site.html
pandoc -s -c ../pages/markdown.css -H include/cvim.html -f markdown -t html keys.md -o keys.html
pandoc -s -c ../pages/markdown.css -H include/cvim.html -f markdown -t html recommendations.md -o recommendations.html
pandoc -s -c ../pages/markdown.css -H include/cvim.html -f markdown -t html navigate.md -o navigate.html
pandoc -s -c ../pages/markdown.css -H include/cvim.html -f markdown -t html tabs.md -o tabs.html
pandoc -s -c ../pages/markdown.css -H include/cvim.html -H include/sleep.html -f markdown -t html ../pages/sleep.md -o ../pages/sleep.html
