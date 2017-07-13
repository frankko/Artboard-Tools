# Artboard Tools (Sketch plugins)

Contains six plugins:

## Arrange Artboards ( cmd+ctrl+1 )

Selects all artboards and arranges them in a grid. Like so:

```
A A A A
A A A A
A A
```

## Group Artboards ( ctrl+opt+1 )

Similar to “Arrange Artboards”, but more complicated. Instead of a predefined number of artboards per row, the plugin searches for artboards whose names match a pattern and includes them all on one row, starting a new row when the pattern is broken. Like so:

```
A A
A A A A A
A A A
```

Useful if you’re designing a bunch of screens and you wanted each section to be its own row.

The pattern searched for goes like this: ‘group name’ + ‘\-\-’ + ‘whatever’. For example, ‘headers\-\-version-A’, ‘headers\-\-version-B’, ‘sidebars\-\-version-A’, ‘footers\-\-version-A’, ‘footers\-\-version-B’. That would create three rows.

## Zoom Artboard to Fit ( cmd+4 )

The equivalent of selecting an artboard and doing “Zoom Selection” (cmd+2), but this plugin always zooms out and centers the current artboard, even if you’ve selected a layer within the artboard.

## Select Prev Artboard ( cmd+shift+[ ), Select Next Artboard ( cmd+shift+] )

Selects the previous artboard in the layer list or selects the next artboard in the layer list, depending on which you invoke, and zooms that artboard to fit the screen. (Think of it like next/previous tab in your browser.)

If no artboard (or a layer within an artboard) is selected, Prev will select the last (top-most) artboard in the layer list, Next the first (bottom-most) artboard.

## Reverse Artboards Order

**[New]** Reverses the artboards in the layer list. If your layer list looks like this:

```
frog
pig
chicken
lizard
```

it will change to

```
lizard
chicken
pig
frog
```

It doesn't sort the layers by name first. It doesn't move any artboard's position on the canvas. It just moves the top-most artboard to the bottom of the list, the bottom-most to the top, and so on. (Useful if you use a third-party service that sorts artboards the opposite way that you do.)

* * * * *

**Note that for all plugins, the artboard order is determined by the artboard’s position in the layer list _from bottom to top_. Current artboard position on the canvas is ignored. See the Roadmap section below on how to change the order to _top to bottom_.**

* * * * *

### Installation

1. **Easy way:** Install [Sketch Toolbox](http://sketchtoolbox.com/); find “Artboard Tools”; click the “Install” button
1. **Less-easy way:** Download the [plugin zip](https://github.com/frankko/Artboard-Tools/archive/master.zip); unzip the downloaded zip file; double-click the `Artboard-Tools.sketchplugin` file

* * * * *

### Roadmap

- due to popular demand, the group delimiter will eventually change from ‘\-\-’ to ‘/’. This can be previewed in the Group Artboards plugin by changing `"use_slashes": false,` to `"use_slashes": true,` at the top of the file `Artboard-Tools.sketchplugin/Contents/Sketch/ArtboardTools.js`. If you’re opposed to the change, now is your time to make more noise than the folks that want it switched to a slash. In the meantime, if you run Group Artboards on a page called “Symbols”, the plugin will always group by ‘/’.
- added an option to sort layers from top to bottom instead of the default bottom to top. This might become the new default. This can be done by changing `"sort_top_to_bottom": false,` to `"sort_top_to_bottom": true,` at the top of the file `Artboard-Tools.sketchplugin/Contents/Sketch/ArtboardTools.js`. This will apply to all plugins across the board, including Select Next/Prev Artboard.

* * * 

### Who?

I’m Frank Kolodziej, a Wichita, KS-based freelance designer & developer. I am [available for hire](http://kolo.io/). I’m [@frankko](https://twitter.com/frankko) on Twitter.

#### Other Plugins

- [Place Linked Bitmap](https://github.com/frankko/Place-Linked-Bitmap): A plugin to place external bitmap files into Sketch and update Sketch layers after external bitmaps are updated
- [★ Utility Belt](https://github.com/frankko/UtilityBelt): An always-expanding collection of simple, focused plugins for Sketch.
