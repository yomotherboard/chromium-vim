# Select Feature

The select feature is highly customizable and extensible. It is similar to the quickfix list of vim/neovim. The most basic example of its use is as follows:

## Basic Usage

1. Populate the selection list with a set of DOM elements that match a given css query:
```
:selectset h2

" this populates the selection list with all `h2` header elements from the page.
```


2. Navigate back and forth through these selections with `<C-j>` and `<C-k>`
3. Use the return/enter key or `<C-l>` to click on the given object. By default it will search within the element for the first link (`<a> tag`) and navigate to that link.

## Commands

All commands for configuring this feature are:

| command						| description															| abbreviation	|
|-------------------------------|-----------------------------------------------------------------------|---------------|
| :selectset `<query>`          | set the query used to populate the selection list                     | sset 			|
| :selectstyle `<css>`          | set the css used to style the focused selection                       | ssty			|
| :selecttag `<index>`          | tag the focused selection, a specific index, or a list of indices     | stag			|

## Configuration

Settings for this feature can automatically be loaded on web pages using your config files. This is particularly useful for site specific configurations.

For example, I created a file `amazon.cvim` in `~/.config/cvim/sites/amazon.cvim` with the contents:
```
site '*://*.amazon.com/s*' {
    call :sset '[data-component-type="s-search-result"]'
	call :ssty 'border: 4px solid darkslateblue;'

	map j :selectnextCR>
	map k :selectprev<CR>
}
```
