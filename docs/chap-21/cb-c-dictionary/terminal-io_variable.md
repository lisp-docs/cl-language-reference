---
title: "terminal-io"
---

# \*terminal-io\*

import TerminalIoVariable from './_terminal-io_variable.md';

<TerminalIoVariable />

## Expanded Reference: \*terminal-io\*

### Overview

`*terminal-io*` is a special variable whose value is a bidirectional stream connected to the user's console. Output to this stream typically appears on the display, and input is accepted from the keyboard.

### It Is a Stream

```lisp
(streamp *terminal-io*)
=> T
```

### It Is Bidirectional

```lisp
(list (input-stream-p *terminal-io*)
      (output-stream-p *terminal-io*))
=> (NIL T)
```

### Direct Output Bypasses Redirection

Even when `*standard-output*` is redirected, writing directly to `*terminal-io*` still goes to the terminal.

```lisp
(with-output-to-string (*standard-output*)
  (prin1 'foo)                     ; goes to the string
  (prin1 'bar *terminal-io*))     ; goes to the terminal
; "bar" is printed to the terminal
=> "FOO"
```

### Relationship to Standard I/O Variables

The standard I/O customization variables (`*standard-input*`, `*standard-output*`, etc.) are often initially synonym streams to `*terminal-io*`. Rebinding those variables redirects I/O, while `*terminal-io*` remains connected to the console.
