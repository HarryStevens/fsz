<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

### Table of Contents

-   [download](#download)
-   [getDirectories](#getdirectories)
-   [mkdirIf](#mkdirif)
-   [readJSON](#readjson)
-   [writeJSON](#writejson)

## download

[index.js:92-96](https://github.com/HarryStevens/fsz/blob/85f2bd754039c7d35dfac4cfe2eb7f93723ec773/index.js#L92-L96 "Source code on GitHub")

Downloads a file.

**Parameters**

-   `input` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** The input file path, often a URL.
-   `output` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** The name of the downloaded file. (optional, default `inputfilename`)

## getDirectories

[index.js:67-71](https://github.com/HarryStevens/fsz/blob/85f2bd754039c7d35dfac4cfe2eb7f93723ec773/index.js#L67-L71 "Source code on GitHub")

Returns a list of all directories in a parent directory

**Parameters**

-   `path` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** The path of the parent directory

Returns **[array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** An array with a list of directories

## mkdirIf

[index.js:80-83](https://github.com/HarryStevens/fsz/blob/85f2bd754039c7d35dfac4cfe2eb7f93723ec773/index.js#L80-L83 "Source code on GitHub")

Makes a directory if it doesn't already exist in a parent directory. Dependencies: getDirectories

**Parameters**

-   `dir` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** The name of the new directory
-   `parent` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** The name of the parent directory (optional, default `.`)

## readJSON

[index.js:38-40](https://github.com/HarryStevens/fsz/blob/85f2bd754039c7d35dfac4cfe2eb7f93723ec773/index.js#L38-L40 "Source code on GitHub")

Reads and parses a JSON file

**Parameters**

-   `file` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** The JSON file

Returns **[array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** An array with the data

## writeJSON

[index.js:49-58](https://github.com/HarryStevens/fsz/blob/85f2bd754039c7d35dfac4cfe2eb7f93723ec773/index.js#L49-L58 "Source code on GitHub")

Writes a JSON file

**Parameters**

-   `file` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** Name of the output file (.json extension will be added)
-   `json` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** The JSON variable
