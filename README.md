# Arrange Artboards (Sketch plugins)

Contains two plugins:

## Arrange Artboards

Selects all artboards and arranges them in a grid. Max number of columns and space between artboards is editable in the .sketchplugin file

## Group Artboards

Similar to “Arrange Artboards”, but more complicated. Instead of a predefined number of artboards per row, the plugin searches for artboards whose names begin with a `#` and starts a new row with that artboard, regardless of the number of columns. Useful if you’re designing a bunch of screens and you wanted each section to be its own row.

**I am still very early in development on this, use at your own risk.**

## Known Issues

- [all] little to no testing has been done yet concerning artboards of wildly varying sizes
- [all] let's be honest, little to no testing has been done in general
- [GA] should probably make sure there is at least one artboard whose name begins with a `#` 

## History

### 0.1 – 2015-03-27

Initial commit.