 



For example, suppose that in <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks> A, the <ClLinks styled={true} term={"feature"}><i>features</i></ClLinks> spice and perq are <ClLinks styled={true} term={"present"}><i>present</i></ClLinks>, but the <ClLinks styled={true} term={"feature"}><i>feature</i></ClLinks> lispm is not <ClLinks styled={true} term={"present"}><i>present</i></ClLinks>; in <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks> B, the feature lispm is <ClLinks styled={true} term={"present"}><i>present</i></ClLinks>, but the <ClLinks styled={true} term={"feature"}><i>features</i></ClLinks> spice and perq are not <ClLinks styled={true} term={"present"}><i>present</i></ClLinks>; and in <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks> C, none of the features spice, *lispm*, or perq are <ClLinks styled={true} term={"present"}><i>present</i></ClLinks>. Figure 24–1 shows some sample <ClLinks styled={true} term={"expression"}><i>expressions</i></ClLinks>, and how they would be <ClLinks styled={true} term={"read"}><i>read</i></ClLinks> <sub>2</sub> in these <ClLinks styled={true} term={"implementation"}><i>implementations</i></ClLinks>. 




```lisp title="Figure 24–1. Features examples"
<p>(cons #+spice "Spice" #-spice "Lispm" x) </p><p>in *implementation* A *. . .* (CONS "Spice" X) </p><p>in *implementation* B *. . .* (CONS "Lispm" X) </p><p>in *implementation* C *. . .* (CONS "Lispm" X) </p><p>(cons #+spice "Spice" #+LispM "Lispm" x) </p><p>in *implementation* A *. . .* (CONS "Spice" X) </p><p>in *implementation* B *. . .* (CONS "Lispm" X) </p><p>in *implementation* C *. . .* (CONS X) </p><p>(setq a ’(1 2 #+perq 43 #+(not perq) 27)) </p><p>in *implementation* A *. . .* (SETQ A ’(1 2 43)) </p><p>in *implementation* B *. . .* (SETQ A ’(1 2 27)) </p><p>in *implementation* C *. . .* (SETQ A ’(1 2 27)) </p><p>(let ((a 3) #+(or spice lispm) (b 3)) (foo a)) </p><p>in *implementation* A *. . .* (LET ((A 3) (B 3)) (FOO A)) </p><p>in *implementation* B *. . .* (LET ((A 3) (B 3)) (FOO A)) </p><p>in *implementation* C *. . .* (LET ((A 3)) (FOO A)) </p><p>(cons #+Lispm "#+Spice" #+Spice "foo" #-(or Lispm Spice) 7 x) </p><p>in *implementation* A *. . .* (CONS "foo" X) </p><p>in *implementation* B *. . .* (CONS "#+Spice" X) </p><p>in *implementation* C *. . .* (CONS 7 X)</p>
```
 







 



 



