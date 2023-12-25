 



A <GlossaryTerm styled={true} term={"tree"}><i>tree</i></GlossaryTerm> is a binary recursive data structure made up of *conses* and <GlossaryTerm styled={true} term={"atom"}><i>atoms</i></GlossaryTerm>: the *conses* are themselves also <GlossaryTerm styled={true} term={"tree"}><i>trees</i></GlossaryTerm> (sometimes called “subtrees” or “branches”), and the <GlossaryTerm styled={true} term={"atom"}><i>atoms</i></GlossaryTerm> are terminal nodes (sometimes called *leaves*). Typically, the *leaves* represent data while the branches establish some relationship among that data. 



|<p>**caaaar caddar cdar nsubst** </p><p>**caaadr cadddr cddaar nsubst-if** </p><p>**caaar caddr cddadr nsubst-if-not caadar cadr cddar nthcdr** </p><p>**caaddr cdaaar cdddar sublis** </p><p>**caadr cdaadr cddddr subst** </p><p>**caar cdaar cdddr subst-if** </p><p>**cadaar cdadar cddr subst-if-not cadadr cdaddr copy-tree tree-equal cadar cdadr nsublis**</p>|

| :- |





**Figure 14–2. Some defined names relating to trees.** 



