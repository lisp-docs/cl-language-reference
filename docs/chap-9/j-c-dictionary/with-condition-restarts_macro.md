---
title: "with-condition-restarts"
---

# with-condition-restarts

import WithConditionRestartsMacro from './_with-condition-restarts_macro.md';

<WithConditionRestartsMacro />

## Expanded Reference: with-condition-restarts

### Associating Restarts with a Condition

`with-condition-restarts` explicitly associates a list of restart objects with a condition object. This affects the behavior of `find-restart` and `compute-restarts` when given a condition argument.

```lisp
(let ((c (make-condition 'simple-error :format-control "test")))
  (restart-case
      (with-condition-restarts c (list (find-restart 'fix))
        (length (compute-restarts c)))
    (fix () :report "Fix the issue." nil)))
```

This returns the number of restarts visible when filtered by the condition `c`.

### Implicit Use by restart-case

In practice, `with-condition-restarts` is rarely used directly. `restart-case` automatically associates restarts with conditions when the restartable form is a call to `signal`, `error`, `cerror`, or `warn`.

```lisp
;; restart-case implicitly does this:
;; (restart-case (error condition)
;;   (fix () ...))
;;
;; is approximately equivalent to:
;; (restart-case
;;     (with-condition-restarts condition
;;         (list (find-restart 'fix))
;;       (error condition))
;;   (fix () ...))
```

### When to Use Explicitly

Use `with-condition-restarts` when you need to associate restarts with conditions outside of the standard `restart-case` signaling pattern, such as when building custom signaling protocols.

```lisp
(let ((c (make-condition 'simple-error :format-control "problem")))
  (restart-case
      (handler-bind ((error (lambda (cond)
                              (declare (ignore cond))
                              (invoke-restart 'resolve))))
        (with-condition-restarts c (list (find-restart 'resolve))
          (error c)))
    (resolve ()
      :report "Resolve the problem."
      :resolved)))
```

```lisp
→ :RESOLVED
```
