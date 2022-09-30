### Tabs

  * Commands that open links (`:tabnew` and `:open`) have three different properties
  * `!` => Open in a new tab
  * `$` => Open in a new window
  * `|` => Open in an incognito window
  * `&` => Open in a new tab (inactive/unfocused)
  * `*` => Pin the tab
  * `?` => Treat the query as a search
  * `=` => Treat the query as a URL
 * The use of these properties are best explained with examples:

```vim
:open! google<CR> " This is the same as :tabnew google<CR>

:open google!<CR> " This is another way of writing the above
                  " (these flags can can be added to either
                  " the base command or the end of the final command)

:open& google<CR> " This will open Google in a new inactive tab

:open$ google<CR> " This will open Google in a new window

:open&* google<CR> " The will open Google in a new inactive, pinned tab

:tabnew google&*<CR> " Once again, this will do the same thing as the above command

:open google&*<CR> " Again, same as above

:open google!& " Here, the & flag will cancel out the ! flag,
               " opening Google in a new inactive tab

" More examples
:bookmarks my_bookmark.com&  " inactive,new tab
:bookmarks&* my_bookmark.com " inactive,pinned,new tab
:bookmarks! my_bookmark.com  " new tab
:bookmarks$ my_bookmark.com  " new window
:bookmarks my_bookmark.com   " same tab
```

