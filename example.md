---
theme: ./
layout: intro
---

# Welcome to Slidev

Presentation slides for developers

<div class="pt-12">
  <span @click="next" class="px-2 p-1 rounded cursor-pointer hover:bg-white hover:bg-opacity-10">
    Press Space for next page <carbon:arrow-right class="inline"/>
  </span>
</div>

---

# What is Slidev?

Slidev is a slide maker and presentation tool designed for developers. It includes the following features:

- 📝 **Text-based** - focus on your content with Markdown, then style it later
- 🎨 **Themable** - themes can be shared and reused as npm packages
- 🧑‍💻 **Developer Friendly** - code highlighting, live coding with autocompletion
- 🤹 **Interactive** - embed Vue components to enhance your expressions
- 🎥 **Recording** - built-in recording and camera view
- 📤 **Portable** - export to PDF, PPTX, PNGs, or even a hostable SPA
- 🛠 **Hackable** - virtually anything that's possible on a webpage is possible in Slidev

<br>
<br>

Read more about [Why Slidev?](https://sli.dev/guide/why)

---

# Navigation

Hover on the bottom-left corner to see the navigation's controls panel

## Keyboard Shortcuts

|                                                        |                             |
| ------------------------------------------------------ | --------------------------- |
| <kbd>space</kbd> / <kbd>tab</kbd> / <kbd>right</kbd>   | next animation or slide     |
| <kbd>left</kbd>  / <kbd>shift</kbd> + <kbd>space</kbd> | previous animation or slide |
| <kbd>up</kbd>                                          | previous slide              |
| <kbd>down</kbd>                                        | next slide                  |

---
layout: section
---

# Features

A showcase of what you can do  
using Slidev and this theme

---
layout: two-cols-header
---

# Code Display Modes

Slidev provides two ways of showing code in your presentations.

::left::

Static code blocks using [Shiki](https://shiki.matsu.io)

```ts
enum LogLevel { Error, Warning, Info, Debug }

type LogLevelName = keyof typeof LogLevel;

/** Print message if it's important enough */
function print(key: LogLevelName, message: string) {
  const importance = LogLevel[key];

  if (importance >= LogLevel.Warning) {
    console.log(`${key}:`, message);
  }
}

print("Error", "This is a message");
```

::right::

Interactive code blocks using [Monaco](https://microsoft.github.io/monaco-editor)

```ts {monaco}
enum LogLevel { Error, Warning, Info, Debug }

type LogLevelName = keyof typeof LogLevel;

/** Print message if it's important enough */
function print(key: LogLevelName, message: string) {
  const importance = LogLevel[key];

  if (importance >= LogLevel.Warning) {
    console.log(`${key}:`, message);
  }
}

print("Error", "This is a message");
```

---

# Shiki TwoSlash

In Shiki code blocks you can use [TwoSlash](https://twoslash.netlify.app) to show type information for JaveScript/TypeScript.

```ts twoslash
enum LogLevel { Error, Warning, Info, Debug }

type LogLevelName = keyof typeof LogLevel;

/** Print message if it's important enough */
function print(key: LogLevelName, message: string) {
  const importance = LogLevel[key];

  if (importance >= LogLevel.Warning) {
    console.log(`${key}:`, message);
  }
}

print("Error", "This is a message");
print("Oops", "This key is not supported");
```

---

# Shiki Line Highlighting

You can highlight certain lines in Shiki code blocks. Use `|` to update highlights when clicking.

```ts {1,3|5-12|14-15|all}
enum LogLevel { Error, Warning, Info, Debug }

type LogLevelName = keyof typeof LogLevel;

/** Print message if it's important enough */
function print(key: LogLevelName, message: string) {
  const importance = LogLevel[key];

  if (importance >= LogLevel.Warning) {
    console.log(`${key}:`, message);
  }
}

print("Error", "This is a message");
print("Oops", "This key is not supported");
```

---

# Shiki Magic Move

You can create transitions between Shiki code blocks using the Magic Move feature.

````md magic-move
```js
function greet(name: string) {
  console.log(`Hello, ${name}!`);
}

greet("World");
```
```js
function greet(name: string, language: string) {
  if (language === "es") {
    console.log(`Hola, ${name}!`);
  } else {
    console.log(`Hello, ${name}!`);
  }
}

greet("World");
greet("Mundo", "es");
```
```ts
function greet(name: string, language: string) {
  if (language === "es") {
    console.log(`Hola, ${name}!`);
  } else if (language = "fr") {
    console.log(`Bonjour, ${name}!`);
  } else {
    console.log(`Hello, ${name}!`);
  }
}

greet("World");
greet("Mundo", "es");
greet("Monde", "fr");
```
```ts
const greetings = {
  en: "Hello",
  es: "Hola",
  fr: "Bonjour",
};

type Language = keyof typeof greetings;

function greet(name: string, language: Language) {
  console.log(`${greetings[language]}, ${name}!`);
}
```
````

---

# Monaco Diff

In Monaco code blocks you can highlight differences between two code snippets.

```ts {monaco-diff} {height: '364px'}
class Calculator {
  constructor(public value: number) {}

  add(n: number) {
    this.value += n;
    return this;
  }

  subtract(n: number) {
    this.value -= n;
    return this;
  }
}
~~~
class Calculator {
  constructor(private value: number) {}

  add(n: number) {
    this.value += n;
    return this;
  }

  subtract(n: number) {
    this.value -= n;
    return this;
  }

  getValue() {
    return this.value;
  }
}
```

---

# Monaco Runner

You can use Monaco Runner to execute code snippets in Monaco code blocks.

```ts {monaco-run} {autorun:false}
class Calculator {
  constructor(private value: number) {}

  add(n: number) {
    this.value += n;
    return this;
  }

  subtract(n: number) {
    this.value -= n;
    return this;
  }

  getValue() {
    return this.value;
  }
}

console.log(new Calculator(10).add(5).subtract(3).getValue());
```

---

# Rich Text

When writing slides you can access many rich text features provided by Slidev.

<div class="rich-text-examples grid grid-cols-5 gap-8 mt-8">

# Heading 1

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6

paragraph

**bold text**

*italic text*

~~strikethrough~~

~sub~script

^super^script

==highlight==

==custom highlight=={class="bg-blue"}

++underline++

++custom underline++{class="decoration-blue decoration-wavy decoration-2 underline-offset-2"}

`monospace`

<kbd>keyboard</kbd>

[link](https://example.com)

![Image alt text](https://img.shields.io/badge/image-40a02b?style=for-the-badge){class="inline"}

- [ ] task list

1. ordered list

- unordered list

> Blockquote

</div>

<style>
.rich-text-examples * {
  @apply my-0;
}
</style>

---

# Dynamic Highlighting

Slidev integrates [Rough Notation](https://roughnotation.com) to allow dynamic highlights in your slides.

<span v-mark.blue.circle="0">This text</span> contains <span v-mark.red.box="1">multiple highlights</span> that will be <span v-mark.yellow.underline="2">animated</span> when you <span v-mark.green.bracket="3"> press the <span v-mark.orange.cross="3">left or</span> right arrow</span>.

<style>
p:last-of-type {
  @apply mt-8;
}
</style>

---
layout: section
---

# Layouts

A showcase of predefined layouts  
you can use for your slides

---
layout: intro
---

::side-badge
intro
::

# Intro Layout

Use it as the first slide of your presentation

---
layout: section
---

::side-badge
section
::

# Section Layout

Use it to separate sections in your presentation

---
layout: quote
bracketClass: 'border-rose'
---

::side-badge
quote
::

„Use this layout to highlight some important quote and provide”

::author::

The Author
