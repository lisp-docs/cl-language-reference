 

For example, suppose that in *implementation* A, the *features* spice and perq are *present*, but the *feature* lispm is not *present*; in *implementation* B, the feature lispm is *present*, but the *features* spice and perq are not *present*; and in *implementation* C, none of the features spice, *lispm*, or perq are *present*. Figure 24–1 shows some sample *expressions*, and how they would be *read* &#60;sub&#62;2&#60;/sub&#62; in these *implementations*. 

|&#60;p&#62;(cons #+spice "Spice" #-spice "Lispm" x) &#60;/p&#62;&#60;p&#62;in *implementation* A *. . .* (CONS "Spice" X) &#60;/p&#62;&#60;p&#62;in *implementation* B *. . .* (CONS "Lispm" X) &#60;/p&#62;&#60;p&#62;in *implementation* C *. . .* (CONS "Lispm" X) &#60;/p&#62;&#60;p&#62;(cons #+spice "Spice" #+LispM "Lispm" x) &#60;/p&#62;&#60;p&#62;in *implementation* A *. . .* (CONS "Spice" X) &#60;/p&#62;&#60;p&#62;in *implementation* B *. . .* (CONS "Lispm" X) &#60;/p&#62;&#60;p&#62;in *implementation* C *. . .* (CONS X) &#60;/p&#62;&#60;p&#62;(setq a ’(1 2 #+perq 43 #+(not perq) 27)) &#60;/p&#62;&#60;p&#62;in *implementation* A *. . .* (SETQ A ’(1 2 43)) &#60;/p&#62;&#60;p&#62;in *implementation* B *. . .* (SETQ A ’(1 2 27)) &#60;/p&#62;&#60;p&#62;in *implementation* C *. . .* (SETQ A ’(1 2 27)) &#60;/p&#62;&#60;p&#62;(let ((a 3) #+(or spice lispm) (b 3)) (foo a)) &#60;/p&#62;&#60;p&#62;in *implementation* A *. . .* (LET ((A 3) (B 3)) (FOO A)) &#60;/p&#62;&#60;p&#62;in *implementation* B *. . .* (LET ((A 3) (B 3)) (FOO A)) &#60;/p&#62;&#60;p&#62;in *implementation* C *. . .* (LET ((A 3)) (FOO A)) &#60;/p&#62;&#60;p&#62;(cons #+Lispm "#+Spice" #+Spice "foo" #-(or Lispm Spice) 7 x) &#60;/p&#62;&#60;p&#62;in *implementation* A *. . .* (CONS "foo" X) &#60;/p&#62;&#60;p&#62;in *implementation* B *. . .* (CONS "#+Spice" X) &#60;/p&#62;&#60;p&#62;in *implementation* C *. . .* (CONS 7 X)&#60;/p&#62;|
| :- |


**Figure 24–1. Features examples** 



 

 

