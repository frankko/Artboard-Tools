var KOLOArtboardTools = {
  "use_slashes": false,
  "sort_top_to_bottom": false,
  "arrangeArtboards": function (context) {
    // User-adjustable:

    var group_related = false;
    var zoom_to_fit = true;

    var start_x = 0;
    var start_y = 0;

    var spacing_x = 128;
    var spacing_y = 256;
    var spacing_group = Math.round(spacing_x / 2);

    var max_cols = 11;

    // Main junk, don't tread on me

    var doc = context.document;
    var selection = context.selection;
    var page = [doc currentPage];
    if (MSApplicationMetadata.metadata().appVersion < 48) {
      var view = [doc currentView];
    } else {
      var view = [doc contentDrawView];
    }

    var sort_top_to_bottom = KOLOArtboardTools.sort_top_to_bottom;

    var curr_x = start_x;
    var curr_y = start_y;
    var curr_cols = 0;

    var max_right = 0;
    var max_bottom = 0;

    var prev_group_item = null;
    var curr_row_height = 0;

    var sorted_artboards = KOLOArtboardTools.util.get_all_artboards(context);

    for (var i = 0; i < sorted_artboards.length; i++) {
      var new_x, new_y;
      var up_counts = true;

      var ab = sorted_artboards[i];
      var artboard_name = [ab name];

      var m = artboard_name.match(/^(.+)--([0-9]+)$/i);

      if ((m != null) && (group_related == true)) {
        var this_group = m[1];

        if (prev_group_item == null) {
          new_x = curr_x;
          new_y = curr_y;
        } else {
          new_x = [[prev_group_item absoluteRect] x];
          new_y = [[prev_group_item absoluteRect] y] + [[prev_group_item absoluteRect] height] + spacing_group;
        }

        prev_group_item = ab;

        if ((i + 1) < sorted_artboards.length) {
          artboard_next_name = sorted_artboards[i+1].name();
          var m_next = artboard_next_name.match(/^(.+)--([0-9]+)$/i);
          if (m_next != null) {
            if (m_next[1] == this_group) {
              up_counts = false;
            } else {
              prev_group_item = null;
            }
          } else {
            prev_group_item = null;
          }
        }
      } else {
        prev_group_item = null;
        new_x = curr_x;
        new_y = curr_y;
      }

      [[ab frame] setX:new_x];
      [[ab frame] setY:new_y];

      var artboard_right = [[ab absoluteRect] x] + [[ab absoluteRect] width];
      var artboard_bottom = [[ab absoluteRect] y] + [[ab absoluteRect] height];

      max_right = (artboard_right > max_right) ? artboard_right : max_right;
      max_bottom = (artboard_bottom > max_bottom) ? artboard_bottom : max_bottom;
      curr_row_height = (artboard_bottom > curr_row_height) ? artboard_bottom : curr_row_height;

      if (up_counts == true) {
        curr_x += [[ab absoluteRect] width] + spacing_x;
        curr_cols++;

        if (curr_cols >= max_cols) {
          curr_x = start_x;
          curr_y = curr_row_height + spacing_y;
          curr_cols = 0;
          curr_row_height = 0;
        }
      }
    }

    if (zoom_to_fit == true) {
      [view centerLayersInCanvas];
    }

    [doc showMessage:"Artboards arranged."];
  },
  "groupArtboards": function (context) {
    // User-adjustable:

    var zoom_to_fit = true;

    var start_x = 0;
    var start_y = 0;

    var spacing_x = 128;
    var spacing_y = 128;
    var spacing_group = Math.round(spacing_x / 2);

    // Main junk, don't tread on me

    var sort_top_to_bottom = KOLOArtboardTools.sort_top_to_bottom;
    var use_slashes = KOLOArtboardTools.use_slashes;

    if (use_slashes) {
      var regexp_patt = /^(.+)\/.+/i;
    } else {
      var regexp_patt = /^(.+)--.+/i;
    }

    var doc = context.document;
    var selection = context.selection;
    var page = [doc currentPage];
    if (MSApplicationMetadata.metadata().appVersion < 48) {
      var view = [doc currentView];
    } else {
      var view = [doc contentDrawView];
    }

    var curr_x = start_x;
    var curr_y = start_y;

    var max_right = 0;
    var max_bottom = 0;

    var prev_group_item = null;
    var curr_row_height = 0;
    var found_headers = false;

    var page_name = [page name];
    if (page_name == "Symbols") {
      var regexp_patt = /^(.+)\/.+/i;
    }

    var sorted_artboards = KOLOArtboardTools.util.get_all_artboards(context);

    for (var j = 0; j < sorted_artboards.length; j++) {
      var ab = sorted_artboards[j];
      var artboard_name = [ab name];
      var m = artboard_name.match(regexp_patt);
      if (m != null) {
        found_headers = true;
      }
    }

    if (found_headers == true) {
      for (var i = 0; i < sorted_artboards.length; i++) {
        var new_x, new_y;

        var ab = sorted_artboards[i];
        var artboard_name = [ab name];

  //      var m = artboard_name.match(/^(.+)--.+/i);
        var m = artboard_name.match(regexp_patt);

        if (m != null) {
          var this_group = m[1];

          if (this_group != prev_group_item) {
            curr_x = start_x;
            curr_y = curr_row_height + spacing_y;
            curr_row_height = 0;
          }

          prev_group_item = m[1];
        } else {
          curr_x = start_x;
          curr_y = curr_row_height + spacing_y;
          curr_row_height = 0;
        }

        if (i == 0) {
          curr_x = start_x;
          curr_y = start_y;
        }

        new_x = curr_x;
        new_y = curr_y;

        [[ab frame] setX:new_x];
        [[ab frame] setY:new_y];

        var artboard_right = [[ab absoluteRect] x] + [[ab absoluteRect] width];
        var artboard_bottom = [[ab absoluteRect] y] + [[ab absoluteRect] height];

        max_right = (artboard_right > max_right) ? artboard_right : max_right;
        max_bottom = (artboard_bottom > max_bottom) ? artboard_bottom : max_bottom;
        curr_row_height = (artboard_bottom > curr_row_height) ? artboard_bottom : curr_row_height;

        curr_x += [[ab absoluteRect] width] + spacing_x;
      }

      if (zoom_to_fit == true) {
        [view centerLayersInCanvas];
      }
      [doc showMessage:"Artboards grouped."];
    } else {
      var app = [NSApplication sharedApplication];
      if (use_slashes) {
        [app displayDialog:"Canceling. No artboard names contain “/”" withTitle:"Group Artboards"];
      } else {
        [app displayDialog:"Canceling. No artboard names contain “--”" withTitle:"Group Artboards"];
      }
    }
  },
  "groupArtboardsColumns": function (context) {
    // User-adjustable:

    var zoom_to_fit = true;

    var start_x = 0;
    var start_y = 0;

    var spacing_x = 128;
    var spacing_y = 128;
    var spacing_group = Math.round(spacing_x / 2);

    // Main junk, don't tread on me

    var sort_top_to_bottom = KOLOArtboardTools.sort_top_to_bottom;
    var use_slashes = KOLOArtboardTools.use_slashes;

    if (use_slashes) {
      var regexp_patt = /^(.+)\/.+/i;
    } else {
      var regexp_patt = /^(.+)--.+/i;
    }

    var doc = context.document;
    var selection = context.selection;
    var page = [doc currentPage];
    if (MSApplicationMetadata.metadata().appVersion < 48) {
      var view = [doc currentView];
    } else {
      var view = [doc contentDrawView];
    }

    var curr_x = start_x;
    var curr_y = start_y;

    var max_right = 0;
    var max_bottom = 0;

    var prev_group_item = null;
    var curr_row_width = 0;
    var found_headers = false;

    var page_name = [page name];
    if (page_name == "Symbols") {
      var regexp_patt = /^(.+)\/.+/i;
    }

    var sorted_artboards = KOLOArtboardTools.util.get_all_artboards(context);

    for (var j = 0; j < sorted_artboards.length; j++) {
      var ab = sorted_artboards[j];
      var artboard_name = [ab name];
      var m = artboard_name.match(regexp_patt);
      if (m != null) {
        found_headers = true;
      }
    }

    if (found_headers == true) {
      for (var i = 0; i < sorted_artboards.length; i++) {
        var new_x, new_y;

        var ab = sorted_artboards[i];
        var artboard_name = [ab name];

  //      var m = artboard_name.match(/^(.+)--.+/i);
        var m = artboard_name.match(regexp_patt);

        if (m != null) {
          var this_group = m[1];

          if (this_group != prev_group_item) {
            curr_x = curr_row_width + spacing_x;
            curr_y = start_y;
            curr_row_width = 0;
          }

          prev_group_item = m[1];
        } else {
          curr_x = curr_row_width + spacing_x;
          curr_y = start_y;
          curr_row_width = 0;
        }

        if (i == 0) {
          curr_x = start_x;
          curr_y = start_y;
        }

        new_x = curr_x;
        new_y = curr_y;

        [[ab frame] setX:new_x];
        [[ab frame] setY:new_y];

        var artboard_right = [[ab absoluteRect] x] + [[ab absoluteRect] width];
        var artboard_bottom = [[ab absoluteRect] y] + [[ab absoluteRect] height];

        max_right = (artboard_right > max_right) ? artboard_right : max_right;
        max_bottom = (artboard_bottom > max_bottom) ? artboard_bottom : max_bottom;
        curr_row_width = (artboard_right > curr_row_width) ? artboard_right : curr_row_width;

        curr_y += [[ab absoluteRect] height] + spacing_y;
      }

      if (zoom_to_fit == true) {
        [view centerLayersInCanvas];
      }
      [doc showMessage:"Artboards grouped."];
    } else {
      var app = [NSApplication sharedApplication];
      if (use_slashes) {
        [app displayDialog:"Canceling. No artboard names contain “/”" withTitle:"Group Artboards"];
      } else {
        [app displayDialog:"Canceling. No artboard names contain “--”" withTitle:"Group Artboards"];
      }
    }
  },
  "fitArtboard": function (context) {
    var doc = context.document;
    var selection = context.selection;
    var page = [doc currentPage];
    if (MSApplicationMetadata.metadata().appVersion < 48) {
      var view = [doc currentView];
    } else {
      var view = [doc contentDrawView];
    }

    var target_artboard;

    if ([selection count] > 0) {
      var selected_artboard = [selection objectAtIndex:0];

      while ([selected_artboard parentGroup] != page) {
        selected_artboard = [selected_artboard parentGroup];
      }

      [selected_artboard select:true byExpandingSelection:false];
      doc.actionsController().actionForID("MSZoomToSelectionAction").zoomToSelection(nil);
  //    doc.actionsController().actionForID("MSZoomToActualSizeAction").actualSize(nil);
  //    doc.actionsController().actionForID("MSCenterSelectionInVisibleAreaAction").centerSelectionInVisibleArea(nil);
    }
  },
  "reverseArtboardsOrder": function (context) {
    var all_artboards = context.document.currentPage().artboards();
    var sorted_artboards = [];

    for (var j = 0; j < [all_artboards count]; j++) {
      var ab = [all_artboards objectAtIndex:j];
      sorted_artboards.push(ab);
    }

    for (var i = 0; i < sorted_artboards.length; i++) {
      var ab = sorted_artboards[i];
      [MSLayerMovement moveToBack:[ab]];
    }
  },
  "selectPreviousArtboard": function (context) {
    var doc = context.document;
    var selection = context.selection;
    var page = [doc currentPage];
    if (MSApplicationMetadata.metadata().appVersion < 48) {
      var view = [doc currentView];
    } else {
      var view = [doc contentDrawView];
    }

    var current_zoom = [doc zoomValue];
  //  log(current_zoom);

    var target_artboard;
    var sorted_artboards = KOLOArtboardTools.util.get_all_artboards(context);

    if ([selection count] > 0) {
      var selected_artboard = [selection objectAtIndex:0];

      while ([selected_artboard parentGroup] != page) {
        selected_artboard = [selected_artboard parentGroup];
      }
  
      var selected_artboard_name = [selected_artboard name];

      var selected_index = -1;

      for (var i = 0; i < sorted_artboards.length; i++) {
        var ab = sorted_artboards[i];

        if ([ab name] == selected_artboard_name) {
          selected_index = i;
          break;
        }
      }
      if (selected_index >= 0) {
        var prev_index = selected_index - 1;
        if (prev_index < 0) {
          prev_index = sorted_artboards.length - 1;
        }
        target_artboard = sorted_artboards[prev_index];
      } else {
        target_artboard = false;
      }
    } else {
      target_artboard = sorted_artboards[sorted_artboards.length - 1];
    }

    if (target_artboard != false) {
      [target_artboard select:true byExpandingSelection:false];
      doc.actionsController().actionForID("MSZoomToSelectionAction").zoomToSelection(nil);
    }
  },
  "selectNextArtboard": function (context) {
    var doc = context.document;
    var selection = context.selection;
    var page = [doc currentPage];
    if (MSApplicationMetadata.metadata().appVersion < 48) {
      var view = [doc currentView];
    } else {
      var view = [doc contentDrawView];
    }

    var current_zoom = [doc zoomValue];
  //  log(current_zoom);

    var target_artboard;
    var sorted_artboards = KOLOArtboardTools.util.get_all_artboards(context);

    if ([selection count] > 0) {
      var selected_artboard = [selection objectAtIndex:0];

      while ([selected_artboard parentGroup] != page) {
        selected_artboard = [selected_artboard parentGroup];
      }
  
      var selected_artboard_name = [selected_artboard name];
      var selected_index = -1;

      for (var i = 0; i < sorted_artboards.length; i++) {
        var ab = sorted_artboards[i];

        if ([ab name] == selected_artboard_name) {
          selected_index = i;
          break;
        }
      }
      if (selected_index >= 0) {
        var next_index = selected_index + 1;
        if (next_index >= sorted_artboards.length) {
          next_index = 0;
        }
        target_artboard = sorted_artboards[next_index];
      } else {
        target_artboard = false;
      }
    } else {
      target_artboard = sorted_artboards[0];
    }

    if (target_artboard != false) {
      [target_artboard select:true byExpandingSelection:false];
      doc.actionsController().actionForID("MSZoomToSelectionAction").zoomToSelection(nil);
    }
  },
  "util": {
    "get_all_artboards": function(context) {
        var all_artboards = context.document.currentPage().artboards();
        var sorted_artboards = [];

        if (KOLOArtboardTools.sort_top_to_bottom) {
          var artboards_count = [all_artboards count];
          for (var i = (artboards_count - 1); i >= 0; i--) {
            var ab = [all_artboards objectAtIndex:i];
            sorted_artboards.push(ab);
          }
        } else {
          for (var i = 0; i < [all_artboards count]; i++) {
            var ab = [all_artboards objectAtIndex:i];
            sorted_artboards.push(ab);
          }
        }
        return sorted_artboards;
    }
  }
};