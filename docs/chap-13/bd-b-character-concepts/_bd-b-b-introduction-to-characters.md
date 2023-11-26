**13.1.1 Introduction to Characters** 

A *character* is an *object* that represents a unitary token (*e.g.*, a letter, a special symbol, or a “control character”) in an aggregate quantity of text (*e.g.*, a *string* or a text *stream*). 

Common Lisp allows an implementation to provide support for international language *characters* as well as *characters* used in specialized arenas (*e.g.*, mathematics). 

The following figures contain lists of *defined names* applicable to *characters*. 

Figure 13–1 lists some *defined names* relating to *character attributes* and *character predicates*. 

|\<p\>**alpha-char-p char-not-equal char**\> \</p\>\<p\>**alphanumericp char-not-greaterp char**\>**=** \</p\>\<p\>**both-case-p char-not-lessp digit-char-p** \</p\>\<p\>**char-code-limit char/= graphic-char-p char-equal char**\< **lower-case-p** \</p\>\<p\>**char-greaterp char**\<**= standard-char-p char-lessp char= upper-case-p**\</p\>|
| :- |


**Figure 13–1. Character defined names – 1** 

Figure 13–2 lists some *character* construction and conversion *defined names*. 

|\<p\>**char-code char-name code-char** \</p\>\<p\>**char-downcase char-upcase digit-char** \</p\>\<p\>**char-int character name-char**\</p\>|
| :- |


**Figure 13–2. Character defined names – 2** 

