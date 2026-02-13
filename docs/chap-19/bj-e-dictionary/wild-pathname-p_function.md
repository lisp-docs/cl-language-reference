---
title: "wild-pathname-p"
---

# wild-pathname-p

import WildPathnamePFunction from './_wild-pathname-p_function.md';

<WildPathnamePFunction />

## Expanded Reference: wild-pathname-p

### Testing for any wildcard component

`wild-pathname-p` with no field-key argument tests whether any component of the pathname contains a wildcard.

```lisp
(wild-pathname-p (make-pathname :name :wild))
→ T

(wild-pathname-p #P"/home/user/data.txt")
→ NIL
```

### Testing a specific component for wildcards

A field-key argument restricts the test to a specific pathname component.

```lisp
(wild-pathname-p (make-pathname :name :wild) :name)
→ T

(wild-pathname-p (make-pathname :name :wild) :type)
→ NIL
```

### Wildcard directory components

Wildcards can appear in the directory component as well.

```lisp
(wild-pathname-p (make-pathname :directory '(:absolute :wild-inferiors)
                                :name "test"
                                :type "lisp"))
→ T

(wild-pathname-p (make-pathname :directory '(:absolute :wild-inferiors)
                                :name "test"
                                :type "lisp")
                 :directory)
→ T

(wild-pathname-p (make-pathname :directory '(:absolute :wild-inferiors)
                                :name "test"
                                :type "lisp")
                 :name)
→ NIL
```

### Non-wild pathnames

Ordinary pathnames without wildcards return nil for all field tests.

```lisp
(let ((p (make-pathname :directory '(:absolute "home")
                        :name "file"
                        :type "txt")))
  (values (wild-pathname-p p)
          (wild-pathname-p p :name)
          (wild-pathname-p p :directory)))
→ NIL
→ NIL
→ NIL
```
