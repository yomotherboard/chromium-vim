# Navigate Command

## Basic Use

Here is a basic use of the `navigate` command. I will use `nav` as this abbreviation for the command can be used instead.

`:nav '<relative_path>'` navigates to the URL given by the relative path given as an argument.

For example, on an IMDB page for a movie `:nav './fullcredits'` will navigate to the full credits page for the movie. It does this by adding "fullcredits" to the URL. The path should always be quoted as in this example and the examples to follow. This makes it easier to define a flag syntax to allow other kinds of modifications of the URL.


## Flags

`:nav <flag>'<argument>'` alters the URL according to the operation specified by the flag.

The available flags and their corresponding operations are:

| Flag		| Operation 							| Argument type		|
| --------- | ------------------------------------- | ----------------- |
| `+`		| Append the argument to the URL		| string			|
| `-`		| Remove the argument from the URL		| regex				|


## Advanced Usage

Beginning the argument of the function with `+` will append the argument to the current URL instead of changing the path. For example, the following command navigates to the images tab of google by appending `&tbm=isch` to the URL.

```
nav +'&tbm=isch'
```

However, this URL parameter may already be set in the URL if you are on a google search tab other than 'All'. Also, if we want to navigate back to the 'All' tab from another tab then we will need to do this by removing the `tbm` parameter from the URL. We can remove this parameter with the `-` flag, which take a regular expression argument. So a mapping to move to the 'All' tab of google search would be:

```
map fa :nav -'\&tbm=[^&]*'<CR>
```

If we want to navigate to another tab we can append the URL parameter to achieve that after we remove the old one. The `nav` command can take multiple navigation statements. This improved command to navigate to the 'Images' tab of google search demonstrates this:

```
nav -'\&tbm=[^&]*' +'&tbm=nws'
```

See [the example page for google](./examples/sites/google.html) for more examples and a more complete set of mappings for navigating the site.

