**t** *Constant Variable* 



**Constant Value:** 



<ClLinks  term={"t"}><b>t</b></ClLinks>. 



**Description:** 



The <ClLinks  term={"boolean"}><i>boolean</i></ClLinks> representing true, and the canonical *generalized boolean* representing true. Although any <ClLinks  term={"object"}><i>object</i></ClLinks> other than <ClLinks  term={"nil"}><b>nil</b></ClLinks> is considered <ClLinks  term={"true"}><i>true</i></ClLinks>, <ClLinks  term={"t"}><b>t</b></ClLinks> is generally used when there is no special reason to prefer one such <ClLinks  term={"object"}><i>object</i></ClLinks> over another. 



Data and Control 











The <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> <ClLinks  term={"t"}><b>t</b></ClLinks> is also sometimes used for other purposes as well. For example, as the <ClLinks  term={"name"}><i>name</i></ClLinks> of a <ClLinks  term={"class"}><i>class</i></ClLinks>, as a <ClLinks  term={"designator"}><i>designator</i></ClLinks> (*e.g.*, a *stream designator* ) or as a special symbol for some syntactic reason (*e.g.*, in <ClLinks  term={"case"}><b>case</b></ClLinks> and <ClLinks  term={"typecase"}><b>typecase</b></ClLinks> to label the *otherwise-clause*). 



**Examples:**
```lisp
t → T 
(eq t ’t) → true 
(find-class ’t) → #<CLASS T 610703333> 
(case ’a (a 1) (t 2)) → 1 
(case ’b (a 1) (t 2)) → 2 
(prin1 ’hello t) 
▷ HELLO 
→ HELLO 
```
**See Also:** 



<ClLinks  term={"nil"}><b>nil</b></ClLinks> 



