 

A *tree* is a binary recursive data structure made up of *conses* and *atoms*: the *conses* are themselves also *trees* (sometimes called “subtrees” or “branches”), and the *atoms* are terminal nodes (sometimes called *leaves*). Typically, the *leaves* represent data while the branches establish some relationship among that data. 

|&#60;p&#62;**caaaar caddar cdar nsubst** &#60;/p&#62;&#60;p&#62;**caaadr cadddr cddaar nsubst-if** &#60;/p&#62;&#60;p&#62;**caaar caddr cddadr nsubst-if-not caadar cadr cddar nthcdr** &#60;/p&#62;&#60;p&#62;**caaddr cdaaar cdddar sublis** &#60;/p&#62;&#60;p&#62;**caadr cdaadr cddddr subst** &#60;/p&#62;&#60;p&#62;**caar cdaar cdddr subst-if** &#60;/p&#62;&#60;p&#62;**cadaar cdadar cddr subst-if-not cadadr cdaddr copy-tree tree-equal cadar cdadr nsublis**&#60;/p&#62;|
| :- |


**Figure 14–2. Some defined names relating to trees.** 

