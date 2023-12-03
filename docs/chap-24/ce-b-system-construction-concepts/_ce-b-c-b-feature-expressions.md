 

Boolean combinations of *features*, called *feature expressions*, are used by the #+ and #- *reader macros* in order to direct conditional *reading* of *expressions* by the *Lisp reader* . 

The rules for interpreting a *feature expression* are as follows: 

*feature* 

If a *symbol* naming a *feature* is used as a *feature expression*, the *feature expression* succeeds if that *feature* is *present*; otherwise it fails. 

(not *feature-conditional*) 

A **not** *feature expression* succeeds if its argument *feature-conditional* fails; otherwise, it succeeds. 

(and *&#123;feature-conditional&#125;*\*) 

An **and** *feature expression* succeeds if all of its argument *feature-conditionals* succeed; otherwise, it fails. 

System 

 

 

(or *&#123;feature-conditional&#125;*\*) 

An **or** *feature expression* succeeds if any of its argument *feature-conditionals* succeed; otherwise, it fails. 

