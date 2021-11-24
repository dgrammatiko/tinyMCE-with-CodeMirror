# tinyMCE-with-CodeMirror
A Joomla 4 TinyMCE plugin that will highlight the source code on tinyMCE

# This is part of Joomla since https://github.com/joomla/joomla-cms/pull/35647

## Installation
- Upload the ttc.zip file into you server under `media/vendor`
- Extract the zip file and then delete it
- If you should have a folder named `ttc` under `media/vendor` then the installation was successful

## Changes for the tinyMCE plugin
- Go to `administrator/index.php?option=com_plugins&view=plugins&filter[search]=tinymce` and click on the `Editor - TinyMCE` link

- Select the active configuration (that's the last on the right, named `Set 0`:

![Screenshot 2021-09-18 at 12 25 03](https://user-images.githubusercontent.com/3889375/133887014-9226a5fa-e34b-4cc9-b1aa-27a05edcb6c9.png)

- At the bottom of the page add a new `External Plugin` with `Plugin Name` as `highlightPlus` and a `Path` as `/media/vendor/ttc/tiny-hightlighter/plugin.min.js`:

![Screenshot 2021-09-18 at 13 09 05](https://user-images.githubusercontent.com/3889375/133887077-c09ebe8f-f6f8-4b98-8df7-1a5c5b4661a7.png) 

Enjoy!


## Commands
- `npx terser --compress --mangle -- src/plugin.js` will minify the plugin.js
- `npx terser --compress --mangle -- src/source.js` will minify the iframe js
- `npx css-minify -f src/source.css` will minify the iframe css
