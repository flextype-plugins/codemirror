<h1 align="center">Codemirror Plugin for <a href="https://flextype.org/">Flextype</a></h1>

<p align="center">
<a href="https://github.com/flextype-plugins/codemirror/releases"><img alt="Version" src="https://img.shields.io/github/release/flextype-plugins/codemirror.svg?label=version&color=black"></a> <a href="https://github.com/flextype-plugins/codemirror"><img src="https://img.shields.io/badge/license-MIT-blue.svg?color=black" alt="License"></a> <a href="https://github.com/flextype-plugins/codemirror"><img src="https://img.shields.io/github/downloads/flextype-plugins/codemirror/total.svg?color=black" alt="Total downloads"></a> <a href="https://github.com/flextype/flextype"><img src="https://img.shields.io/badge/Flextype-0.9.16-green.svg?color=black" alt="Flextype"></a> <a href=""><img src="https://img.shields.io/discord/423097982498635778.svg?logo=discord&color=black&label=Discord%20Chat" alt="Discord"></a>
</p>

Lightweight and powerful codemirror editor plugin for Flextype.

## Dependencies

The following dependencies need to be downloaded and installed for Codemirror Plugin.

| Item | Version | Download |
|---|---|---|
| [flextype](https://github.com/flextype/flextype) | 0.9.16 | [download](https://github.com/flextype/flextype/releases) |
| [twig](https://github.com/flextype-plugins/twig) | >=2.0.0 | [download](https://github.com/flextype-plugins/twig/releases) |
| [blueprints](https://github.com/flextype-plugins/blueprints) | >=1.0.0 | [download](https://github.com/flextype-plugins/blueprints/releases) |

## Installation

1. Download & Install all required dependencies.
2. Create new folder `/project/plugins/codemirror`
3. Download Codemirror Plugin and unzip plugin content to the folder `/project/plugins/codemirror`

## Documentation

### Settings

```yaml
# enabled: true or false to disable the plugin
enabled: true

# Plugin priority
priority: 41

# Place to load
assetsLoadOnAdmin: true
assetsLoadOnSite: false

# Blocks
blocks:
  Codemirror:
    type: Codemirror
    properties:
      name: codemirror
      
      # Codemirror options
      options: 
        
        # The mode to use.
        # https://codemirror.net/mode/
        # variants: yaml, yaml-frontmatter, htmlmixed, xml, php, javascript, markdown, css, twig
        mode: "yaml-frontmatter"

        # Explicitly set the line separator for the editor. 
        # By default is null)
        lineSeparator: null

        # Whether to show line numbers to the left of the editor.
        lineNumbers: true

        # Whether CodeMirror should scroll or wrap for long lines.
        # Defaults to false (scroll).
        lineWrapping: false

        # At which number to start counting lines.
        firstLineNumber: 1

        # Determines whether the gutter scrolls along with the content horizontally (false) 
        # or whether it stays fixed during horizontal scrolling.
        fixedGutter: true

        # Chooses a scrollbar implementation. 
        scrollbarStyle: "native"

        # When fixedGutter is on, and there is a horizontal scrollbar, by default the gutter will be visible to the left of this scrollbar. 
        # If this option is set to true, it will be covered by an element with class CodeMirror-gutter-filler.
        coverGutterNextToScrollbar: true

        # This disables editing of the editor content by the user. 
        # If the special value "nocursor" is given (instead of simply true), 
        # focusing of the editor is also disallowed.
        readOnly: false

        # This label is read by the screenreaders when CodeMirror text area is focused. 
        # This is helpful for accessibility.
        screenReaderLabel: ""

        # Whether the cursor should be drawn when a selection is active.
        showCursorWhenSelecting: false

        # The theme to style the editor with. only "elegant" available 
        theme: elegant

        # The width of a tab character. 
        # Defaults to 2.
        tabSize: 2

        # How many spaces a block (whatever that means in the edited language) should be indented. 
        # The default is 2.
        indentUnit: 2
        
        # Whether, when indenting, the first N*tabSize spaces should be replaced by N tabs. 
        # Default is false.
        indentWithTabs: false

        # Whether to use the context-sensitive indentation that the mode provides (or just indent the same as the line before).
        # Defaults to true.
        smartIndent: true

        # Flips overall layout and selects base paragraph direction to be left-to-right or right-to-left. 
        # Default is "ltr".
        direction: ltr

        # Determines whether horizontal cursor movement through right-to-left (Arabic, Hebrew) text is visual
        # (pressing the left arrow moves the cursor left) or logical (pressing the left arrow moves to the next lower index in the string, which is visually right in right-to-left text). 
        # The default is false on Windows, and true on other platforms.
        rtlMoveVisually: false

        # Configures whether the editor should re-indent the current line when a character is typed that might change its proper indentation (only works if the mode supports indentation). 
        # Default is true.
        electricChars: true

        # Configures the key map to use.
        # https://codemirror.net/doc/manual.html#keymaps
        keyMap: "default"

        # When enabled, which is the default, doing copy or cut when there is no selection will copy or cut the whole lines that have cursors on them.
        lineWiseCopyCut: true

        # When pasting something from an external source (not from the editor itself), if the number of lines matches the number of selection, 
        # CodeMirror will by default insert one line per selection. You can set this to false to disable that behavior.
        pasteLinesPerSelection: true
        
        # Determines whether multiple selections are joined as soon as they touch (the default) or only when they overlap (true).
        selectionsMayTouch: true
        
        # The maximum number of undo levels that the editor stores. 
        # Note that this includes selection change events.
        undoDepth: 200

        # The period of inactivity (in milliseconds) that will cause a new history event to be started when typing or deleting.
        historyEventDelay: 1250

        # Can be used to make CodeMirror focus itself on initialization. 
        #
        # When fromTextArea is used, and no explicit value is given for this option, 
        # it will be set to true when either the source textarea is focused, 
        # or it has an autofocus attribute and no other element is focused.
        autofocus: false

        # Controls whether drag-and-drop is enabled.
        dragDrop: true

        # Half-period in milliseconds used for cursor blinking.
        # By setting this to zero, blinking can be disabled. A negative value hides the cursor entirely.
        cursorBlinkRate: 530

        # How much extra space to always keep above and below the cursor when approaching the top or bottom of the visible view in a scrollable document.
        cursorScrollMargin: 0

        # Determines the height of the cursor. 
        # Default is 1, meaning it spans the whole height of the line.
        # For some fonts (and by some tastes) a smaller height (for example 0.85), 
        # which causes the cursor to not reach all the way to the bottom of the line, looks better
        cursorHeight: 1 

        # If set to true, will keep the cursor height constant for an entire line (or wrapped part of a line). 
        # When false, the cursor's height is based on the height of the adjacent reference character.
        singleCursorHeightPerLine: true

        # Controls whether, when the context menu is opened with a click outside of the current selection, the cursor is moved to the point of the click.
        resetSelectionOnContextMenu: true

        # Highlighting is done by a pseudo background-thread that will work for workTime milliseconds
        workTime: 200

        # and then use timeout to sleep for workDelay milliseconds.
        workDelay: 300 

        # Indicates how quickly CodeMirror should poll its input textarea for changes (when focused). 
        # Most input is captured by events, but some things, like IME input on some browsers, don't generate events that allow CodeMirror to properly detect it.
        pollInterval: 100

        # By default, CodeMirror will combine adjacent tokens into a single span if they have the same class. 
        # This will result in a simpler DOM tree, and thus perform better. With some kinds of styling (such as rounded corners), this will change the way the document looks. You can set this option to false to disable this behavior.
        flattenSpans: true

        # When enabled (off by default), an extra CSS class will be added to each token, indicating the (inner) mode that produced it, prefixed with "cm-m-". 
        # For example, tokens from the XML mode will get the cm-m-xml class.
        # https://codemirror.net/doc/manual.html#innerMode
        addModeClass: false

        # When highlighting long lines, in order to stay responsive,
        # the editor will give up and simply style the rest of the line as plain text when it reaches a certain position. 
        maxHighlightLength:  10000 

        # Specifies the amount of lines that are rendered above and below the part of the document that's currently scrolled into view. 
        # This affects the amount of updates needed when scrolling, and the amount of work that such an update does. 
        # You should usually leave it at its default, 10. Can be set to Infinity to make sure the whole document is always rendered, and thus the browser's text search works on it. This will have bad effects on performance of big documents.
        viewportMargin: 10

        # Specifies whether or not spellcheck will be enabled on the input.
        spellcheck: false

        # Specifies whether or not autocorrect will be enabled on the input.
        autocorrect: false

        # Specifies whether or not autocapitalization will be enabled on the input.
        autocapitalize: false

    template: plugins/codemirror/blocks/Codemirror/block.html
```

## LICENSE
[The MIT License (MIT)](https://github.com/flextype-plugins/codemirror/blob/master/LICENSE.txt)
Copyright (c) 2021 [Sergey Romanenko](https://github.com/Awilum)
