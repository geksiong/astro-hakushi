---
title: "Remark plugins"
description: ""
pubDate: 2023-12-26
tags:
  - markdown
  - demo
---

## Expressive Code

The following code block will be highlighted as JavaScript,
wrapped in a code editor frame with the file name "example.js",
and the line range 2-4 will be marked:

```js title="example.js" {2-4}
// Example function
function add(a, b) {
  return a + b;
}

console.log(add(1, 2));
```

The following will be wrapped in a terminal window

```sh
#!/bin/sh
echo "This is a script file, not a terminal!"
```