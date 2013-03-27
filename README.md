## jQuery Center Plugin

### What's it do?

Centers any element to the browser window.
This plugin will also center any element to it's relative or absolute positioned parent element.

### Demo

[camskene.com/plugins/jquery-center/](http://camskene.com/plugins/jquery-center/)


### Options

    fixed: true

By default, direct children of the body element are fixed. If you'd rather those elements scrolled with the window set `fixed` to `false`.


### Usage

#### HTML

    <div></div>

#### JS

    $("div").center()

or

    $("div").center({
        fixed: false
    })

The jQuery Center plugin was brought to you by the letter `j` and the number `5`.

[@camskene](twitter.com/camskene)
