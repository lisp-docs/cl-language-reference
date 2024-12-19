---
title: "gethash"
---

# gethash

import GethashAccessor from './_gethash_accessor.md';

<GethashAccessor />

## Expanded Reference: gethash

:::tip
TODO: Please contribute to this page by adding explanations and examples
:::

```lisp
(let ((ht (make-hash-table :test #'equal)))
  (setf (gethash :foo ht) 1)
  (gethash :foo ht))
;; => 1, T
```
