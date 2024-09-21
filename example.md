---
theme: ./
addons:
  - ./slidev-theme-codeck/local-addon
---

::title::

Codeck

::subtitle::

Highly customizable [Slidev](https://sli.dev) theme for developers

::author::

Konrad Szwarc

::footer::

<div class="pb-6 ml-4">
  <span @click="$slidev.nav.next" class="px-3 py-1.5 rounded text-tertiary cursor-pointer hover:text-primary">
    Press <kbd>space</kbd> or click for next page <lucide:arrow-right />
  </span>
</div>

---

::header::

# What is Slidev?

Slidev is a slide maker and presentation tool designed for developers.

::content::

Slidev includes the following features:{class="pb-3 font-black"}

- 📝 **Text-based** - focus on your content with Markdown, then style it later
- 🎨 **Themable** - themes can be shared and reused as npm packages
- 🧑‍💻 **Developer Friendly** - code highlighting, live coding with autocompletion
- 🤹 **Interactive** - embed Vue components to enhance your expressions
- 🎥 **Recording** - built-in recording and camera view
- 📤 **Portable** - export to PDF, PPTX, PNGs, or even a hostable SPA
- 🛠 **Hackable** - virtually anything that's possible on a webpage is possible in Slidev

::footer::

Read more about [Why Slidev?](https://sli.dev/guide/why)

---

::header::

# Navigation

You can hover on the bottom-left corner to see the navigation's controls panel.

::content::

For quick slide navigation use the following shortcuts:{class="pt-2"}

|                                                        |                             |
| ------------------------------------------------------ | --------------------------- |
| <kbd>space</kbd> / <kbd>tab</kbd> / <kbd>right</kbd>   | next animation or slide     |
| <kbd>left</kbd>  / <kbd>shift</kbd> + <kbd>space</kbd> | previous animation or slide |
| <kbd>up</kbd>                                          | previous slide              |
| <kbd>down</kbd>                                        | next slide                  |

---
layout: section
---

::title::

Features

::subtitle::

A showcase of what you can do  
using Slidev and this theme

---
layout: columns
---

::header::

# Code Display Modes

There are two ways of showing code in your presentations.

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

::header::

# Shiki TwoSlash

In Shiki code blocks you can use [TwoSlash](https://twoslash.netlify.app) to show type information for JaveScript/TypeScript.

::content::

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

::header::

# Shiki Line Highlighting

You can highlight certain lines in Shiki code blocks. Use `|` to update highlights when clicking.

::content::

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

::header::

# Shiki Magic Move

You can create transitions between Shiki code blocks using the Magic Move feature.

::content::

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

::header::

# Monaco Diff

In Monaco code blocks you can highlight differences between two code snippets.

::content::

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

::header::

# Monaco Runner

You can use Monaco Runner to execute code snippets in Monaco code blocks.

::content::

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
layout: cells
classes:
  content: 'cols-5'
---

::header::

# Rich Text

When writing slides you can access many rich text features provided by Slidev.

::content::

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

==custom highlight=={class="color-scheme-blue-light"}

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

---
classes:
  content: 'pt-12'
---

::header::

# Dynamic Highlighting

Slidev integrates [Rough Notation](https://roughnotation.com) to allow dynamic highlights in your slides.

::content::

<span v-mark.blue.circle="1">This text</span> contains <span v-mark.red.box="2">multiple highlights</span> that will be <span v-mark.yellow.underline="3">animated</span> when you <span v-mark.green.bracket="4"> press the <span v-mark.orange.cross="4">left or</span> right arrow</span>.

---
layout: section
---

::title::

Layouts

::subtitle::

A showcase of predefined layouts  
you can use for your slides

---
layout: cover
---

::title::

Cover Layout

::subtitle::

Use it as the first slide of your presentation

::author::

The Author

::side-badge
cover
::

---
layout: section
---

::title::

Section Layout

::subtitle::

Use it to separate sections in your presentation

::side-badge
section
::

---
layout: quote
classes:
  bracket: 'border-yellow'
---

::content::

„Use this layout to highlight some important quote and provide”

::author::

The Author

::side-badge
quote
::

---
layout: default
classes:
  header: 'bg-indigo/20'
  content: 'bg-emerald/20'
  footer: 'bg-rose/20'
---

::header::

# header

::content::

content

::footer::

footer

::side-badge
default
::

---
layout: center
classes:
  header: 'bg-indigo/20'
  content: 'bg-emerald/20'
  footer: 'bg-rose/20'
---

::header::

# header

::content::

content

::footer::

footer

::side-badge
center
::

---
layout: columns
classes:
  header: 'bg-indigo/20'
  content: '[&_*]:bg-emerald/20'
  footer: 'bg-rose/20'
---

::header::

# header

::content::

col1

col2

col3

::footer::

footer

::side-badge
columns
::

---
layout: columns
classes:
  header: 'bg-indigo/20'
  column: 'bg-emerald/20'
  col2: 'grow-2'
  footer: 'bg-rose/20'
---

::header::

# header

::col1::

col1

::col2::

col2

::footer::

footer

::side-badge
columns (customized)
::

---
layout: cells
classes:
  header: 'bg-indigo/20'
  content: 'cols-3 [&_*]:bg-emerald/20'
  footer: 'bg-rose/20'
---

::header::

# header

::content::

cell1

cell2

cell3

cell4

cell5

cell6

::footer::

footer

::side-badge
cells
::

---
layout: cells
classes:
  header: 'bg-indigo/20'
  content: 'cols-3'
  cell: 'bg-emerald/20'
  cell2: 'col-span-2'
  cell3: 'col-span-2'
  footer: 'bg-rose/20'
---

::header::

# header

::cell1::

cell1

::cell2::

cell2

::cell3::

cell3

::cell4::

cell4

::footer::

footer

::side-badge
cells (customized)
::

---
layout: cells
classes:
  header: 'bg-indigo/20'
  cell: 'bg-emerald/20'
  footer: 'bg-rose/20'
areas: [
  "cell1 cell1 cell2",
  "cell3 cell4 cell4"
]
---

::header::

# header

::cell1::

cell1

::cell2::

cell2

::cell3::

cell3

::cell4::

cell4

::footer::

footer

::side-badge
cells (areas)
::

---
layout: side-title
---

::title::

# title

Some little longer subtitle.

::content::

The rest of the content for this slide.

::side-badge
side-title
::

---
layout: section
---

::title::

Components

---

::header::

# StickyNote

::content::

<StickyNote v-drag="[80,120,180,180,-12]" color="cyan" scheme="outline">

A **cyan** sticky note using the `outline` accent scheme.

</StickyNote>

<StickyNote v-drag="[290,300,180,180,8]" color="rose" scheme="light">

A **rose** sticky note using the `light` accent scheme.

</StickyNote>

<StickyNote  v-drag="[470,100,180,180,-6]" color="yellow" scheme="filled">

A **yellow** sticky note using the `filled` accent scheme.

</StickyNote>

<StickyNote  v-drag="[680,280,180,180,10]" color="emerald" scheme="glass">

A **emerald** sticky note using the `glass` accent scheme.

</StickyNote>

---
layout: cells
classes:
  content: 'cols-3 gap-3 flex-none'
---

::header::

# Callout

::content::

<Callout title="Note" kind="note" >

Some example text content of the `note` callout.

</Callout>

<Callout title="Abstract" kind="abstract" >

Some example text content of the `abstract` callout.

</Callout>

<Callout title="Info" kind="info" >

Some example text content of the `info` callout.

</Callout>

<Callout title="Todo" kind="todo" >

Some example text content of the `todo` callout.

</Callout>

<Callout title="Tip" kind="tip" >

Some example text content of the `tip` callout.

</Callout>

<Callout title="Success" kind="success" >

Some example text content of the `success` callout.

</Callout>

<Callout title="Question" kind="question" >

Some example text content of the `question` callout.

</Callout>

<Callout title="Warning" kind="warning" >

Some example text content of the `warning` callout.

</Callout>

<Callout title="Failure" kind="failure" >

Some example text content of the `failure` callout.

</Callout>

<Callout title="Danger" kind="danger" >

Some example text content of the `danger` callout.

</Callout>

<Callout title="Example" kind="example" >

Some example text content of the `example` callout.

</Callout>

<Callout title="Quote" kind="quote" >

Some example text content of the `quote` callout.

</Callout>

---
layout: columns
classes:
  column: 'centered-col-3'
---

::header::

# Image

::col1::

<Image src="https://placehold.co/300x200" />

Image with one source.

::col2::

<Image :src="{ light: 'https://placehold.co/300x200/000/FFF', dark: 'https://placehold.co/300x200/FFF/000' }" />

Separate image for light and dark mode.
