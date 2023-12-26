**t** <GlossaryTerm styled={true} term={"constant variable"}><i>Constant Variable</i></GlossaryTerm> 



**Constant Value:** 



<DictionaryLink  term={"t"}><b>t</b></DictionaryLink>. 



**Description:** 



The <ClLinks  term={"boolean"}><i>boolean</i></ClLinks> representing true, and the canonical <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm> representing true. Although any <ClLinks  term={"object"}><i>object</i></ClLinks> other than <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink> is considered <ClLinks  term={"true"}><i>true</i></ClLinks>, <DictionaryLink  term={"t"}><b>t</b></DictionaryLink> is generally used when there is no special reason to prefer one such <ClLinks  term={"object"}><i>object</i></ClLinks> over another. 



Data and Control 











The <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> <DictionaryLink  term={"t"}><b>t</b></DictionaryLink> is also sometimes used for other purposes as well. For example, as the <ClLinks  term={"name"}><i>name</i></ClLinks> of a <ClLinks  term={"class"}><i>class</i></ClLinks>, as a <ClLinks  term={"designator"}><i>designator</i></ClLinks> (*e.g.*, a <GlossaryTerm styled={true} term={"stream designator"}><i>stream designator</i></GlossaryTerm> ) or as a special symbol for some syntactic reason (*e.g.*, in <DictionaryLink  term={"case"}><b>case</b></DictionaryLink> and <DictionaryLink  term={"typecase"}><b>typecase</b></DictionaryLink> to label the *otherwise-clause*). 



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



<DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink> 



