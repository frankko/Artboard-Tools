# Artboard Tools (Sketch plugins)

Contains seven items:

## Arrange Artboards ( cmd+ctrl+1 )

Selects all artboards and arranges them in a grid. Like so:

```
A B C D
E F G H
I J
```

## Group Artboards (Rows) ( ctrl+opt+1 )

Similar to `Arrange Artboards`, but more complicated. Instead of a predefined number of artboards per row, the plugin searches for artboards whose names match a pattern and includes them all on one row, starting a new row when the pattern is broken. Like so:

```
A A
B B B B B
C C C
```

Useful if you’re designing a bunch of screens and you wanted each section to be its own row.

The pattern searched for goes like this: ‘group name’ + ‘\-\-’ + ‘whatever’. For example, ‘headers\-\-version-A’, ‘headers\-\-version-B’, ‘sidebars\-\-version-A’, ‘footers\-\-version-A’, ‘footers\-\-version-B’. That would create three rows.

## Group Artboards (Columns) ( ctrl+opt+2 )

Just like `Group Artboards (Rows)` but goes vertically instead of horizontally, like so:

```
A B C
A B C
  B C
  B
  B
```

## Zoom Artboard to Fit ( cmd+4 )

The equivalent of selecting an artboard and doing “Zoom Selection” (cmd+2), but this plugin always zooms out and centers the current artboard, even if you’ve selected a layer within the artboard.

## Select Prev Artboard ( ctrl+shift+[ ), Select Next Artboard ( ctrl+shift+] )

Selects the previous artboard in the layer list or selects the next artboard in the layer list, depending on which you invoke, and zooms that artboard to fit the screen. (Think of it like next/previous tab in your browser.)

If no artboard (or a layer within an artboard) is selected, Prev will select the last (top-most) artboard in the layer list, Next the first (bottom-most) artboard.

**Note:** As of about Sketch 100, the old shortcuts, cmd+shift+[ and cmd+shift+], no longer work, so I changed them to ctrl+shift+[ and ctrl+shift+].

## Reverse Artboards Order

Reverses the artboards in the layer list. If your layer list looks like this:

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

It doesn't sort the layers by name first. It doesn't move any artboard's position on the canvas. It just moves the top-most artboard to the bottom of the list, the bottom-most to the top, and so on. (Useful if you use a third-party service that sorts artboards the opposite way than you prefer.)

* * * * *

**Note that for all plugins, the artboard order is determined by the artboard’s position in the layer list _from top to bottom_. Current artboard position on the canvas is ignored.**

* * * * *

### Installation

Download the [plugin zip](https://github.com/frankko/Artboard-Tools/archive/master.zip); unzip the downloaded zip file; double-click the `Artboard-Tools.sketchplugin` file

* * * * *

### User Prefs

Persistent preference overrides for certain items are now available. See instructions in [this Gist](https://gist.github.com/frankko/5db4d671156815755fab89b4611afaba).

* * * 

### Who?

I’m Frank Kolodziej, a Wichita, KS-based freelance designer & developer. I am [available for hire](http://kolo.io/). I’m on [BlueSky](https://bsky.app/profile/frankko.bsky.social) and [Mastodon](https://mastodon.social/@frankko).

#### Other Plugins

- [Place Linked Bitmap](https://github.com/frankko/Place-Linked-Bitmap): A plugin to place external bitmap files into Sketch and update Sketch layers after external bitmaps are updated
- [★ Utility Belt](https://github.com/frankko/UtilityBelt): An always-expanding collection of simple, focused plugins for Sketch.
