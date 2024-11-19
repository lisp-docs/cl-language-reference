---
title: "loop"
---

# loop

import LoopMacro from './_loop_macro.md';

<LoopMacro />

## Expanded Reference: loop

:::tip
TODO: Please contribute to this page by adding explanations and examples
:::

### Looping over a Hash Table
```lisp
CORE> (let ((given-ht (serapeum:dict "a" 1 "b" 2)))
  (loop for key being each hash-key of given-ht
        for value being each hash-value of given-ht
        do (format t "~A: ~A ~%" key value)))
a: 1 
b: 2 
NIL
```
