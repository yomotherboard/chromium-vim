# Useful Configuration Patterns

It can be useful to pick a first letter as a prefix for a scope of mappings you will use across all websites. For example, I use `g` as a prefix for "go" commands. These commands scroll to specific points of a web page or navigate to related pages to the current page. The example from IMDB above, taken from my configs, shows this pattern. Another example is this configuration for amazon's home page:

```
site '*://www.amazon.com/*' {
	map gc :click #nav-cart<CR>
	map go :click #nav-orders<CR>
}
```

Note that some `g` commands are builtin such as `gi`.

The prefixes I use personally are:

| Prefix		| Meaning		|
| ------------- | ------------- |
| `f`			| filter		|
| `g`			| go to			|
| `p`			| paste			|
| `s`			| search		|
| `w`			| window		|
| `y`			| yank			|
| `z`			| toggle		|
