---
title: "storage-condition"
---

# storage-condition

import StorageConditionConditionType from './_storage-condition_condition-type.md';

<StorageConditionConditionType />

## Expanded Reference: storage-condition

### The storage-condition Type

`storage-condition` is a condition type representing situations where storage (memory) resources are exhausted or unavailable. It is a subtype of `serious-condition` but not of `error`, reflecting that it may arise asynchronously and is often difficult to handle programmatically.

```lisp
(subtypep 'storage-condition 'serious-condition)

=> T
=> T
```

### Not a Subtype of error

```lisp
(subtypep 'storage-condition 'error)
=> NIL
=> T
```

### Handling Storage Conditions

Because `storage-condition` is not an `error`, it is not caught by `handler-case` clauses that match `error`. You must explicitly match `storage-condition` or `serious-condition`.

```lisp
;; This handler-case clause would catch a storage-condition:
;; (handler-case <form>
;;   (storage-condition () :out-of-memory))
;;
;; But this would NOT catch it:
;; (handler-case <form>
;;   (error () :this-misses-storage-condition))
```
