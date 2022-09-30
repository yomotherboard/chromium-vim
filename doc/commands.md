# Command Mode

| Command                                     | Description                                                                            |
| ------------------------------------------- | -------------------------------------------------------------------------------------- |
| :tabnew (autocomplete)                      | open a new tab with the typed/completed search                                         |
| :new (autocomplete)                         | open a new window with the typed/completed search                                      |
| :open (autocomplete)                        | open the typed/completed URL/google search                                             |
| :history (autocomplete)                     | search through browser history                                                         |
| :bookmarks (autocomplete)                   | search through bookmarks                                                               |
| :bookmarks /&lt;folder&gt; (autocomplete)   | browse bookmarks by folder/open all bookmarks from folder                              |
| :set (autocomplete)                         | temporarily change a cVim setting                                                      |
| :chrome:// (autocomplete)                   | open a chrome:// URL                                                                   |
| :tabhistory (autocomplete)                  | browse the different history states of the current tab                                 |
| :command `<NAME>` `<ACTION>`                | aliases :`<NAME>` to :`<ACTION>`                                                       |
| :quit                                       | close the current tab                                                                  |
| :qall                                       | close the current window                                                               |
| :restore (autocomplete)                     | restore a previously closed tab (newer versions of Chrome only)                        |
| :tabattach (autocomplete)                   | move the current tab to another open window                                            |
| :tabdetach                                  | move the current tab to a new window                                                   |
| :file (autocomplete)                        | open a local file                                                                      |
| :source (autocomplete)                      | load a cVimrc file into memory (this will overwrite the settings in the options page if the `localconfig` setting had been set previously |
| :duplicate                                  | duplicate the current tab                                                              |
| :settings                                   | open the settings page                                                                 |
| :nohlsearch                                 | clear the highlighted text from the last search                                        |
| :execute                                    | execute a sequence of keys (Useful for mappings. For example, "map j :execute 2j<CR>") |
| :buffer (autocomplete)                      | change to a different tab                                                              |
| :mksession                                  | create a new session from the current tabs in the active window                        |
| :delsession (autocomplete)                  | delete a saved session                                                                 |
| :session (autocomplete)                     | open the tabs from a saved session in a new window                                     |
| :script                                     | run JavaScript on the current page                                                     |
| :togglepin                                  | toggle the pin state of the current tab                                                |
| :pintab                                     | pin the current tab                                                                    |
| :unpintab                                   | unpin the current tab                                                                  |
| :click &lt;query&gt;                        | click on element returned from css query                                               |
| :scroll &lt;query&gt;                       | scroll to element returned from css query                                              |
| :selectset &lt;query&gt;                    | set selection list to elements returned from css query                                 |
