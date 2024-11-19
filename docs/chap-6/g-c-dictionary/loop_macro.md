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
> (let ((given-ht (serapeum:dict "a" 1 "b" 2)))
  (loop for key being each hash-key of given-ht
          using (hash-value value)
        do (format t "~A: ~A ~%" key value)))
a: 1 
b: 2 
NIL
```
