# Artboard Tools (Sketch plugins)

Contains five plugins:

## Arrange Artboards ( cmd+ctrl+1 )

Selects all artboards and arranges them in a grid. Like so:

```
A A A A
A A A A
A A
```

If you know what you’re doing

- max number of columns and space between artboards is editable in the file `Artboard-Tools.sketchplugin/Contents/Sketch/arrange_artboards.cocoascript`.]

## Group Artboards ( ctrl+opt+1 )

Similar to “Arrange Artboards”, but more complicated. Instead of a predefined number of artboards per row, the plugin searches for artboards whose names match a pattern and includes them all on one row, starting a new row when the pattern is broken. Like so:

```
A A
A A A A A
A A A
```

Useful if you’re designing a bunch of screens and you wanted each section to be its own row.

The pattern searched for goes like this: ‘group name’ + ‘\-\-’ + ‘whatever’. For example, ‘headers\-\-version-A’, ‘headers\-\-version-B’, ‘sidebars\-\-version-A’, ‘footers\-\-version-A’, ‘footers\-\-version-B’. That would create three rows.

If you know what you’re doing:

- the separator can be changed from ‘--’ to ‘/’ by changing `var use_slashes = false;` to `var use_slashes = true;` in the file `Artboard-Tools.sketchplugin/Contents/Sketch/group_artboards.cocoascript`.
- space between artboards can be edited in the file `Artboard-Tools.sketchplugin/Contents/Sketch/group_artboards.cocoascript`.

## Zoom Artboard to Fit ( cmd+4 )

The equivalent of selecting an artboard and doing “Zoom Selection” (cmd+2), but this plugin always zooms out and centers the current artboard, even if you’ve selected a layer within the artboard.

## Select Prev Artboard ( cmd+shift+[ ), Select Next Artboard ( cmd+shift+] )

Selects the previous artboard in the layer list or selects the next artboard in the layer list, depending on which you invoke, and zooms that artboard to fit the screen. (Think of it like next/previous tab in your browser.)

If no artboard (or a layer within an artboard) is selected, Prev will select the last (top-most) artboard in the layer list, Next the first (bottom-most) artboard.

* * * * *

**Note that for all plugins, the artboard order is determined by the artboard’s position in the layer list _from bottom to top_. Current artboard position on the canvas is ignored.**

* * * * *

### Installation

1. **Easy way:** Install [Sketch Toolbox](http://sketchtoolbox.com/); find “Artboard Tools”; click the “Install” button
1. **Not-as-easy way:** Download the [plugin zip](https://github.com/frankko/Artboard-Tools/archive/master.zip); open Sketch, go to Plugins → Reveal Plugins Folder…; unzip the downloaded zip into that plugins directory

* * * * *

### Roadmap

- due to popular demand, the group delimiter will eventually change from ‘--’ to ‘/’. This can be previewed in the Group Artboards plugin by reviewing the instructions above. If you’re opposed to the change, now is your time to make more noise than the folks that want it switched to a slash. In the meantime, if you run Group Artboards on a page called “Symbols”, the plugin will group by ‘/’.

* * * 

### Who?

I’m Frank Kolodziej, a Wichita, KS-based freelance designer & developer. I am [available for hire](http://kolo.io/). I’m [@frankko](https://twitter.com/frankko) on Twitter.

#### Other Plugins

- [Place Linked Bitmap](https://github.com/frankko/Place-Linked-Bitmap): A plugin to place external bitmap files into Sketch and update Sketch layers after external bitmaps are updated
- [★ Utility Belt](https://github.com/frankko/UtilityBelt): An always-expanding collection of simple, focused plugins for Sketch.
