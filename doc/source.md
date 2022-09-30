# Source Command
The `source` commands loads a cvim configuration file. This can be used to split your configuration for cvim into multiple files or change the configuration programmatically.

## Split configuration

Use the `source` command to split up configuration:
```vim
source /path/to/additional/config.cvimrc
source /path/to/additional/config2.cvimrc
```

This allows users to share site specific mappings and [select mode] configurations with others, e.g.:
```vim
source ~/.config/cvim/sites/amazon.cvimrc
source ~/.config/cvim/sites/google.cvimrc
```
