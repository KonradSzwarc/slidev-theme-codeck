---
theme: ./
layout: intro
---

# Codeck Slidev Theme

Custom theme for creating code-related presentations

---
layout: two-cols-header
---

# Code display modes

Slidev provides two ways of showing code in your presentations.

::left::

Static code blocks using [Shiki](https://shiki.matsu.io/)

```ts
enum LogLevel { Error, Warning, Info, Debug }

/**
 * Equivalent to: 
 * 'Error' | 'Warning' | 'Info' | 'Debug'
 */
type LogLevelName = keyof typeof LogLevel;

function print(key: LogLevelName, message: string) {
  const importance = LogLevel[key];

  if (importance >= LogLevel.Warning) {
    console.log(`${key}:`, message);
  }
}

print("Error", "This is a message");
```

::right::

Interactive code blocks using [Monaco](https://microsoft.github.io/monaco-editor/)

```ts {monaco}
enum LogLevel { Error, Warning, Info, Debug }

/**
 * Equivalent to: 
 * 'Error' | 'Warning' | 'Info' | 'Debug'
 */
type LogLevelName = keyof typeof LogLevel;

function print(key: LogLevelName, message: string) {
  const importance = LogLevel[key];

  if (importance >= LogLevel.Warning) {
    console.log(`${key}:`, message);
  }
}

print("Error", "This is a message");
```

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

|                                                      |                             |
| ---------------------------------------------------- | --------------------------- |
| <kbd>space</kbd> / <kbd>tab</kbd> / <kbd>right</kbd> | next animation or slide     |
| <kbd>left</kbd>  / <kbd>shift</kbd><kbd>space</kbd>  | previous animation or slide |
| <kbd>up</kbd>                                        | previous slide              |
| <kbd>down</kbd>                                      | next slide                  |

---
layout: image-right
image: https://cover.sli.dev
---

# Code

Use code snippets and get the `highlighting` directly!

```ts
interface User {
  id: number
  firstName: string
  lastName: string
  role: string
}

function updateUser(id: number, update: Partial<User>) {
  const user = getUser(id)
  const newUser = { ...user, ...update }
  saveUser(id, newUser)
}
```

```ts {monaco}
interface User {
  id: number
  firstName: string
  lastName: string
  role: string
}

function updateUser(id: number, update: Partial<User>) {
  const user = getUser(id)
  const newUser = { ...user, ...update }
  saveUser(id, newUser)
}
```

---
layout: center
class: "text-center"
---

# Learn More

[Documentation](https://sli.dev) / [GitHub Repo](https://github.com/slidevjs/slidev)
