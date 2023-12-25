**t** *Constant Variable* 



**Constant Value:** 



<DictionaryLink styled={true} term={"t"}><b>t</b></DictionaryLink>. 



**Description:** 



The <GlossaryTerm styled={true} term={"boolean"}><i>boolean</i></GlossaryTerm> representing true, and the canonical *generalized boolean* representing true. Although any <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> other than <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> is considered <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm>, <DictionaryLink styled={true} term={"t"}><b>t</b></DictionaryLink> is generally used when there is no special reason to prefer one such <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> over another. 



Data and Control 











The <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> <DictionaryLink styled={true} term={"t"}><b>t</b></DictionaryLink> is also sometimes used for other purposes as well. For example, as the <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> of a <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm>, as a <GlossaryTerm styled={true} term={"designator"}><i>designator</i></GlossaryTerm> (*e.g.*, a *stream designator* ) or as a special symbol for some syntactic reason (*e.g.*, in <DictionaryLink styled={true} term={"case"}><b>case</b></DictionaryLink> and <DictionaryLink styled={true} term={"typecase"}><b>typecase</b></DictionaryLink> to label the *otherwise-clause*). 



**Examples:**
```lisp

t *→* T 
(eq t ’t) *→ true* 
(find-class ’t) *→* #<CLASS T 610703333> 
(case ’a (a 1) (t 2)) *→* 1 
(case ’b (a 1) (t 2)) *→* 2 
(prin1 ’hello t) 
▷ HELLO 
*→* HELLO 

```
**See Also:** 



<DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> 



