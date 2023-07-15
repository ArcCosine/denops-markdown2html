# denops-markdown2html

This plugin converts markdown files to HTML and yanks them to the clipboard.
It uses denops.vim.

## install && usage.

### requirements

-   [denops.vim](https://github.com/vim-denops/denops.vim)
-   [Deno](https://deno.land/)

### Install with vim-plug

    Plug 'vim-denops/denops.vim'
    Plug 'ArcCosine/denops-markdown2html'

### Install with dein.vim

    call dein#add('vim-denops/denops.vim')
    call dein#add('ArcCosine/denops-markdown2html')

### Clipboad

    set clipboard+=unnamed

### Commands

    :DenopsMarkdown2Html

## License

MIT

## Author

[ArcCosine](https://social.vivaldi.net/@ArcCosine)
