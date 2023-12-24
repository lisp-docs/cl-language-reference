**t** *Constant Variable* 



**Constant Value:** 



<ClLinks styled={true} term={"t"}><b>t</b></ClLinks>. 



**Description:** 



The <ClLinks styled={true} term={"boolean"}><i>boolean</i></ClLinks> representing true, and the canonical *generalized boolean* representing true. Although any <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> other than <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> is considered <ClLinks styled={true} term={"true"}><i>true</i></ClLinks>, <ClLinks styled={true} term={"t"}><b>t</b></ClLinks> is generally used when there is no special reason to prefer one such <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> over another. 



Data and Control 











The <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> <ClLinks styled={true} term={"t"}><b>t</b></ClLinks> is also sometimes used for other purposes as well. For example, as the <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> of a <ClLinks styled={true} term={"class"}><i>class</i></ClLinks>, as a <ClLinks styled={true} term={"designator"}><i>designator</i></ClLinks> (*e.g.*, a *stream designator* ) or as a special symbol for some syntactic reason (*e.g.*, in <ClLinks styled={true} term={"case"}><b>case</b></ClLinks> and <ClLinks styled={true} term={"typecase"}><b>typecase</b></ClLinks> to label the *otherwise-clause*). 



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



<ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> 



