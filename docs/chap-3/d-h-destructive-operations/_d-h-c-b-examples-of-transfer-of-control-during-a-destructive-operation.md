The following examples illustrate some of the many ways in which the <GlossaryTerm  term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm> nature of the modification can manifest itself.

```lisp
(let ((a (list 2 1 4 3 7 6 'five)))
  (ignore-errors (sort a #'<))
  a)
;; → (1 2 3 4 6 7 FIVE)
;; or→ (2 1 4 3 7 6 FIVE)
;; or→ (2)
```

```lisp
(prog foo ((a (list 1 2 3 4 5 6 7 8 9 10)))
  (sort a #'(lambda (x y) (if (zerop (random 5)) (return-from foo a) (> x y)))))
;; → (1 2 3 4 5 6 7 8 9 10)
;; or→ (3 4 5 6 2 7 8 9 10 1)
;; or→ (1 2 4 3)
```







