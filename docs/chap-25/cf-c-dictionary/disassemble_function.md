---
title: "disassemble"
---

# disassemble

import DisassembleFunction from './_disassemble_function.md';

<DisassembleFunction />

## Expanded Reference: disassemble

### Basic Usage

`disassemble` prints the disassembled machine code or intermediate representation for a compiled function. The exact format is implementation-dependent.

```lisp
(defun square (x) (* x x))

(disassemble #'square)
;; .. assembly output (implementation-dependent)
=> NIL
```

### Disassembling a Lambda Expression

You can pass a lambda expression directly, and the implementation will compile it first before disassembling.

```lisp
(disassemble '(lambda (x y) (+ x y)))
;; .. assembly output (implementation-dependent)
=> NIL
```

### Disassembling by Name

You can pass a function name as a symbol instead of a function object. The implementation looks up the current function binding.

```lisp
(defun add1 (n) (+ n 1))

(disassemble 'add1)
;; .. assembly output (implementation-dependent)
=> NIL
```

### Comparing Optimized vs. Unoptimized Code

Disassembly can reveal how declarations affect generated code. The exact output varies by implementation.

```lisp
(defun safe-add (x y)
  (declare (optimize (safety 3)))
  (+ x y))

(defun fast-add (x y)
  (declare (optimize (speed 3) (safety 0))
           (type fixnum x y))
  (the fixnum (+ x y)))

(disassemble 'safe-add)
;; .. assembly output (implementation-dependent)
=> NIL

(disassemble 'fast-add)
;; .. assembly output (implementation-dependent)
=> NIL
```

### Important Notes

The output of `disassemble` is entirely implementation-dependent. It always returns `NIL` and produces its output as a side effect to `*standard-output*`. Not all implementations produce native machine code -- some may show bytecode or other intermediate representations.
