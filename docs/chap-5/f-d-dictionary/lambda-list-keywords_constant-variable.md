---
title: "lambda-list-keywords"
---

# lambda-list-keywords

import LambdaListKeywordsConstantVariable from './_lambda-list-keywords_constant-variable.md';

<LambdaListKeywordsConstantVariable />

## Expanded Reference: lambda-list-keywords

### Inspecting the Value

`lambda-list-keywords` is a list of all the lambda-list keywords recognized by the implementation. The standard requires at least the core keywords, but implementations may include additional ones.

```lisp
;; Display all lambda-list keywords (implementation-dependent)
lambda-list-keywords
;; => (&ALLOW-OTHER-KEYS &AUX &BODY &ENVIRONMENT &KEY &OPTIONAL &REST &WHOLE)
;; (exact contents are implementation-dependent)
```

### Required Keywords

The Common Lisp standard mandates that certain keywords appear in this list. You can verify their presence.

```lisp
;; Check for required keywords
(every (lambda (kw) (member kw lambda-list-keywords))
       '(&optional &rest &key &allow-other-keys &aux &body &whole &environment))
=> T
```

### Using the List Programmatically

`lambda-list-keywords` can be used by tools that parse or analyze lambda lists.

```lisp
;; A simple function to separate parameters from lambda-list keywords
(defun split-lambda-list (lambda-list)
  (let ((params nil) (keywords nil))
    (dolist (item lambda-list)
      (if (member item lambda-list-keywords)
          (push item keywords)
          (push item params)))
    (values (nreverse params) (nreverse keywords))))

(split-lambda-list '(x y &optional z &key verbose))
=> (X Y Z VERBOSE)
=> (&OPTIONAL &KEY)
```
