# Site Specific Configuration

Site specific configuration is critical to creating a mouse-free browsing experience. The design of this extension is such that you will need to configure your experience for each web site in order to permit keyboard only browsing. Here we will cover how to set up site specific configurations. Afterward, you may want to consider my [recommendations](./recommendations.html) on how to configure cvim to provide a easy to use and consistent experience across all websites.


# Site Blocks

Site specific configuration allows settings, mappings, and functions to be implemented on a site specific basis. A site block contains two parts:

1. A body containing configuration commands
2. A glob pattern that a URL must match in order for these configuration commands to be applied.

Here is a simple example for IMDB:

```
site "*://www.imdb.com/title/*" {
	map gc :nav ./fullcredits<CR>
	map ge :nav ./episodes<CR>
	map gp :nav ./mediaindex<CR>
	map gr :scroll [data-testid="MoreLikeThis"]<CR>
	map gs :scroll [data-testid="Storyline"]<CR>
	map gv :nav ./reviews<CR>
}
```

More examples can be found [here](./examples/main.html).
