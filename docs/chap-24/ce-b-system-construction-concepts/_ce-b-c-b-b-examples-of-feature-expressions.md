 



For example, suppose that in *implementation* A, the *features* spice and perq are *present*, but the *feature* lispm is not *present*; in *implementation* B, the feature lispm is *present*, but the *features* spice and perq are not *present*; and in *implementation* C, none of the features spice, *lispm*, or perq are *present*. Figure 24–1 shows some sample *expressions*, and how they would be *read* <sub>2</sub> in these *implementations*. 




```lisp title="Figure 24–1. Features examples"
<p>(cons #+spice "Spice" #-spice "Lispm" x) </p><p>in *implementation* A *. . .* (CONS "Spice" X) </p><p>in *implementation* B *. . .* (CONS "Lispm" X) </p><p>in *implementation* C *. . .* (CONS "Lispm" X) </p><p>(cons #+spice "Spice" #+LispM "Lispm" x) </p><p>in *implementation* A *. . .* (CONS "Spice" X) </p><p>in *implementation* B *. . .* (CONS "Lispm" X) </p><p>in *implementation* C *. . .* (CONS X) </p><p>(setq a ’(1 2 #+perq 43 #+(not perq) 27)) </p><p>in *implementation* A *. . .* (SETQ A ’(1 2 43)) </p><p>in *implementation* B *. . .* (SETQ A ’(1 2 27)) </p><p>in *implementation* C *. . .* (SETQ A ’(1 2 27)) </p><p>(let ((a 3) #+(or spice lispm) (b 3)) (foo a)) </p><p>in *implementation* A *. . .* (LET ((A 3) (B 3)) (FOO A)) </p><p>in *implementation* B *. . .* (LET ((A 3) (B 3)) (FOO A)) </p><p>in *implementation* C *. . .* (LET ((A 3)) (FOO A)) </p><p>(cons #+Lispm "#+Spice" #+Spice "foo" #-(or Lispm Spice) 7 x) </p><p>in *implementation* A *. . .* (CONS "foo" X) </p><p>in *implementation* B *. . .* (CONS "#+Spice" X) </p><p>in *implementation* C *. . .* (CONS 7 X)</p>
```
 







 



 



