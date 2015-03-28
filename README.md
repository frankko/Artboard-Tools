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

Similar to “Arrange Artboards”, but more complicated. Instead of a predefined number of artboards per row, the plugin searches for artboards whose names match a pattern and includes them all on one row, starting a new row when the pattern is broken. Like so:

```
A A
A A A A A
A A A
```

Useful if you’re designing a bunch of screens and you wanted each section to be its own row.

The pattern searched for goes like this: 'group name' + '\-\-' + 'whatever'. For example, 'headers\-\-version-A', 'headers\-\-version-B', 'sidebars\-\-version-A', 'footers\-\-version-A', 'footers\-\-version-B'. That would create three rows.


* * * * *

**I am still very early in development on this, so use at your own risk.**

### Known Issues

- [all] little to no testing has been done yet concerning artboards of wildly varying sizes
- [all] let's be honest, little to no testing has been done in general
