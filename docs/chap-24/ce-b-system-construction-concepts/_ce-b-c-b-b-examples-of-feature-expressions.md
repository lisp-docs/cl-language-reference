 



For example, suppose that in <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm> A, the <GlossaryTerm styled={true} term={"feature"}><i>features</i></GlossaryTerm> spice and perq are <GlossaryTerm styled={true} term={"present"}><i>present</i></GlossaryTerm>, but the <GlossaryTerm styled={true} term={"feature"}><i>feature</i></GlossaryTerm> lispm is not <GlossaryTerm styled={true} term={"present"}><i>present</i></GlossaryTerm>; in <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm> B, the feature lispm is <GlossaryTerm styled={true} term={"present"}><i>present</i></GlossaryTerm>, but the <GlossaryTerm styled={true} term={"feature"}><i>features</i></GlossaryTerm> spice and perq are not <GlossaryTerm styled={true} term={"present"}><i>present</i></GlossaryTerm>; and in <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm> C, none of the features spice, *lispm*, or perq are <GlossaryTerm styled={true} term={"present"}><i>present</i></GlossaryTerm>. Figure 24–1 shows some sample <GlossaryTerm styled={true} term={"expression"}><i>expressions</i></GlossaryTerm>, and how they would be <GlossaryTerm styled={true} term={"read"}><i>read</i></GlossaryTerm> <sub>2</sub> in these <GlossaryTerm styled={true} term={"implementation"}><i>implementations</i></GlossaryTerm>. 




```lisp title="Figure 24–1. Features examples"
<p>(cons #+spice "Spice" #-spice "Lispm" x) </p><p>in *implementation* A *. . .* (CONS "Spice" X) </p><p>in *implementation* B *. . .* (CONS "Lispm" X) </p><p>in *implementation* C *. . .* (CONS "Lispm" X) </p><p>(cons #+spice "Spice" #+LispM "Lispm" x) </p><p>in *implementation* A *. . .* (CONS "Spice" X) </p><p>in *implementation* B *. . .* (CONS "Lispm" X) </p><p>in *implementation* C *. . .* (CONS X) </p><p>(setq a ’(1 2 #+perq 43 #+(not perq) 27)) </p><p>in *implementation* A *. . .* (SETQ A ’(1 2 43)) </p><p>in *implementation* B *. . .* (SETQ A ’(1 2 27)) </p><p>in *implementation* C *. . .* (SETQ A ’(1 2 27)) </p><p>(let ((a 3) #+(or spice lispm) (b 3)) (foo a)) </p><p>in *implementation* A *. . .* (LET ((A 3) (B 3)) (FOO A)) </p><p>in *implementation* B *. . .* (LET ((A 3) (B 3)) (FOO A)) </p><p>in *implementation* C *. . .* (LET ((A 3)) (FOO A)) </p><p>(cons #+Lispm "#+Spice" #+Spice "foo" #-(or Lispm Spice) 7 x) </p><p>in *implementation* A *. . .* (CONS "foo" X) </p><p>in *implementation* B *. . .* (CONS "#+Spice" X) </p><p>in *implementation* C *. . .* (CONS 7 X)</p>
```
 







 



 



