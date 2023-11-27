 

A *character* is an *object* that represents a unitary token (*e.g.*, a letter, a special symbol, or a “control character”) in an aggregate quantity of text (*e.g.*, a *string* or a text *stream*). 

Common Lisp allows an implementation to provide support for international language *characters* as well as *characters* used in specialized arenas (*e.g.*, mathematics). 

The following figures contain lists of *defined names* applicable to *characters*. 

Figure 13–1 lists some *defined names* relating to *character attributes* and *character predicates*. 

|&#60;p&#62;**alpha-char-p char-not-equal char**&#62; &#60;/p&#62;&#60;p&#62;**alphanumericp char-not-greaterp char**&#62;**=** &#60;/p&#62;&#60;p&#62;**both-case-p char-not-lessp digit-char-p** &#60;/p&#62;&#60;p&#62;**char-code-limit char/= graphic-char-p char-equal char**&#60; **lower-case-p** &#60;/p&#62;&#60;p&#62;**char-greaterp char**&#60;**= standard-char-p char-lessp char= upper-case-p**&#60;/p&#62;|
| :- |


**Figure 13–1. Character defined names – 1** 

Figure 13–2 lists some *character* construction and conversion *defined names*. 

|&#60;p&#62;**char-code char-name code-char** &#60;/p&#62;&#60;p&#62;**char-downcase char-upcase digit-char** &#60;/p&#62;&#60;p&#62;**char-int character name-char**&#60;/p&#62;|
| :- |


**Figure 13–2. Character defined names – 2** 

