**t** <GlossaryTerm styled={true} term={"constant variable"}><i>Constant Variable</i></GlossaryTerm> 



**Constant Value:** 



<DictionaryLink  term={"t"}><b>t</b></DictionaryLink>. 



**Description:** 



The <GlossaryTerm  term={"boolean"}><i>boolean</i></GlossaryTerm> representing true, and the canonical <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm> representing true. Although any <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> other than <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink> is considered <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm>, <DictionaryLink  term={"t"}><b>t</b></DictionaryLink> is generally used when there is no special reason to prefer one such <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> over another. 



Data and Control 











The <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> <DictionaryLink  term={"t"}><b>t</b></DictionaryLink> is also sometimes used for other purposes as well. For example, as the <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> of a <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm>, as a <GlossaryTerm  term={"designator"}><i>designator</i></GlossaryTerm> (*e.g.*, a <GlossaryTerm styled={true} term={"stream designator"}><i>stream designator</i></GlossaryTerm> ) or as a special symbol for some syntactic reason (*e.g.*, in <DictionaryLink  term={"case"}><b>case</b></DictionaryLink> and <DictionaryLink  term={"typecase"}><b>typecase</b></DictionaryLink> to label the *otherwise-clause*). 



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



