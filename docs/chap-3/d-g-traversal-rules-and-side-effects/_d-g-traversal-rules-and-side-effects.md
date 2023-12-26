 



The consequences are undefined when <GlossaryTerm  term={"code"}><i>code</i></GlossaryTerm> executed during an <GlossaryTerm  term={"object-traversing"}><i>object-traversing</i></GlossaryTerm> operation destructively modifies the <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> in a way that might affect the ongoing traversal operation. In particular, the following rules apply. 



**List traversal** 



For <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm> traversal operations, the <GlossaryTerm  term={"cdr"}><i>cdr</i></GlossaryTerm> chain of the <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm> is not allowed to be destructively modified. 



**Array traversal** 



For <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm> traversal operations, the <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm> is not allowed to be adjusted and its <GlossaryTerm styled={true} term={"fill pointer"}><i>fill pointer</i></GlossaryTerm> , if any, is not allowed to be changed. 



**Hash-table traversal** 



For <GlossaryTerm styled={true} term={"hash table"}><i>hash table</i></GlossaryTerm> traversal operations, new elements may not be added or deleted except that the element corresponding to the current hash key may be changed or removed. 



**Package traversal** 



For <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> traversal operations (*e.g.*, <DictionaryLink  term={"do-symbols"}><b>do-symbols</b></DictionaryLink>), new <GlossaryTerm  term={"symbol"}><i>symbols</i></GlossaryTerm> may not be <GlossaryTerm  term={"interned"}><i>interned</i></GlossaryTerm> in or <GlossaryTerm  term={"uninterned"}><i>uninterned</i></GlossaryTerm> from the <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> being traversed or any <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> that it uses except that the current <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> may be <GlossaryTerm  term={"uninterned"}><i>uninterned</i></GlossaryTerm> from the <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> being traversed.  







