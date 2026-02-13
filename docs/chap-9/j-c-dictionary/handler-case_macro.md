---
title: "handler-case"
---

# handler-case

import HandlerCaseMacro from './_handler-case_macro.md';

<HandlerCaseMacro />

## Expanded Reference: handler-case

### Basic Error Handling

`handler-case` evaluates an expression and, if a condition of a matching type is signaled, transfers control to the corresponding clause. Unlike `handler-bind`, the stack is unwound before the clause body executes.

```lisp
(handler-case
    (error "Something went wrong")
  (error (c)
    (format nil "Caught: ~A" c)))
```

```lisp
→ "Caught: Something went wrong"
```

### Handling Different Condition Types

Multiple clauses can handle different condition types. Clauses are searched sequentially from top to bottom, so more specific types should come first.

```lisp
(handler-case
    (error "A simple error")
  (simple-error (c)
    (format nil "Simple error: ~A" c))
  (error (c)
    (format nil "General error: ~A" c)))
```

```lisp
→ "Simple error: A simple error"
```

### Ignoring the Condition Variable

If you do not need to reference the condition object, you can omit the variable by using an empty lambda list `()`.

```lisp
(handler-case
    (/ 1 0)
  (division-by-zero ()
    :infinity))
```

```lisp
→ :INFINITY
```

### Normal Return Values

When no condition is signaled, `handler-case` returns the values of the expression.

```lisp
(handler-case
    (values 1 2 3)
  (error () :oops))
```

```lisp
→ 1, 2, 3
```

### The :no-error Clause

A `:no-error` clause is executed when the expression returns normally. Its lambda list receives the values returned by the expression.

```lisp
(handler-case
    (values 10 20)
  (error (c) (format nil "Error: ~A" c))
  (:no-error (a b)
    (+ a b)))
```

```lisp
→ 30
```

### Practical Example: Safe Division

A function that catches division-by-zero and returns a default value.

```lisp
(defun safe-divide (a b &optional (default 0))
  (handler-case (/ a b)
    (division-by-zero () default)
    (type-error (c)
      (format nil "Type error: ~A" c))))

(safe-divide 10 3)
```

```lisp
→ 10/3
```

```lisp
(safe-divide 10 0)
```

```lisp
→ 0
```

```lisp
(safe-divide 10 0 :infinity)
```

```lisp
→ :INFINITY
```
