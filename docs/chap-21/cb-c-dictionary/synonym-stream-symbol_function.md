---
title: "synonym-stream-symbol"
---

# synonym-stream-symbol

import SynonymStreamSymbolFunction from './_synonym-stream-symbol_function.md';

<SynonymStreamSymbolFunction />

## Expanded Reference: synonym-stream-symbol

### Basic Usage

`synonym-stream-symbol` returns the symbol whose value the synonym stream uses as its target.

```lisp
(let ((syn (make-synonym-stream '*standard-output*)))
  (synonym-stream-symbol syn))
→ *STANDARD-OUTPUT*
```

### With a Custom Variable

```lisp
(defvar *my-custom-stream* (make-string-output-stream))

(let ((syn (make-synonym-stream '*my-custom-stream*)))
  (synonym-stream-symbol syn))
→ *MY-CUSTOM-STREAM*
```

### Practical Use

Knowing the symbol lets you understand which dynamic variable a synonym stream is tracking.

```lisp
(let ((syn (make-synonym-stream '*standard-input*)))
  (eq (synonym-stream-symbol syn) '*standard-input*))
→ T
```
