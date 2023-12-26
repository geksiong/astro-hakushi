---
title: "Remark plugins"
description: ""
pubDate: 2023-12-26
tags:
  - markdown
  - demo
  - remarkjs
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

You can specify collapsible sections. Here's the same example with the same lines collapsed:

```js collapse={2-4}
// Example function
function add(a, b) {
  return a + b;
}

console.log(add(1, 2));
```

You can highlight certain terms, instead of entire lines:

```js "Individual terms" /Even.*supported/
// Individual terms can be highlighted, too
function demo() {
  return "Even regular expressions are supported";
}
```

Mark inserted and deleted text:

```js "return true;" ins="inserted" del="deleted"
function demo() {
  console.log("These are inserted and deleted marker types");
  // The return statement uses the default marker type
  return true;
}
```

Diff-like syntax:

```diff lang="js"
  function thisIsJavaScript() {
    // This entire block gets highlighted as JavaScript,
    // and we can still add diff markers to it!
-   console.log('Old code to be removed')
+   console.log('New and shiny code!')
  }
```

The following will be wrapped in a terminal window:

```sh
#!/bin/sh
echo "This is a script file, not a terminal!"
```

Terminal window with title (note that you cannot start with a comment):

```sh title="Quick start"
npm install
npm run dev
```

## Math

Support for math is provided by `remark-math` and `rehype-katex`:

Entering the following:

```js
$$
L = \frac{1}{2} \rho v^2 S C_L
$$
```

will generate:

$$
L = \frac{1}{2} \rho v^2 S C_L
$$

_Note: Unfortunately we can't use fenced code blocks for math, as Expressive Code will process it first._

## Directives

### What are directives?

Read more here: https://talk.commonmark.org/t/generic-directives-plugins-syntax/444

#### Inlne / Text Directive

```
:name[content]{key=val}
```

#### Leaf Directive

```
::name[content]{key=val}
```

#### Container Directive

```
:::name[inline-content]{key=val}
contents, which are sometimes further block elements
:::
```

### Examples

These callouts are provided by `@microflash/remark-callout-directives` and uses container directives.

:::note
Some **content** with _Markdown_ `syntax`.
:::

:::commend
Some **content** with _Markdown_ `syntax`.
:::

:::warn{title="Hold on there"}
Some **content** with _Markdown_ `syntax`.
:::

:::deter
Some **content** with _Markdown_ `syntax`.
:::

:::assert
Some **content** with _Markdown_ `syntax`.
:::
