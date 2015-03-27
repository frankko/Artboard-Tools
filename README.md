# Arrange Artboards (Sketch plugins)

Contains two plugins:

## Arrange Artboards (cmd+ctrl+1)

Selects all artboards and arranges them in a grid. Like so:

```
A A A A
A A A A
A A
```

Max number of columns and space between artboards is editable in the .sketchplugin file.

## Group Artboards (ctrl+opt+1)

Similar to “Arrange Artboards”, but more complicated. Instead of a predefined number of artboards per row, the plugin searches for artboards whose names begin with a `#` and starts a new row with that artboard. Like so:

```
A A
A A A A A
A A A
```

Useful if you’re designing a bunch of screens and you wanted each section to be its own row.

[You should have at least two artboards whose name begin with a `#` otherwise you’ll just get one potentially really long row. But hey, maybe that’s something you’d be in to.]

* * * * *

**I am still very early in development on this, so use at your own risk.**

### Known Issues

- [all] little to no testing has been done yet concerning artboards of wildly varying sizes
- [all] let's be honest, little to no testing has been done in general
