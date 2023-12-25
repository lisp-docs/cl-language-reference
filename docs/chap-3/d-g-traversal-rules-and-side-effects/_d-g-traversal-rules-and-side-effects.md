 



The consequences are undefined when <GlossaryTerm styled={true} term={"code"}><i>code</i></GlossaryTerm> executed during an <GlossaryTerm styled={true} term={"object-traversing"}><i>object-traversing</i></GlossaryTerm> operation destructively modifies the <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> in a way that might affect the ongoing traversal operation. In particular, the following rules apply. 



**List traversal** 



For <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> traversal operations, the <GlossaryTerm styled={true} term={"cdr"}><i>cdr</i></GlossaryTerm> chain of the <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> is not allowed to be destructively modified. 



**Array traversal** 



For <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm> traversal operations, the <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm> is not allowed to be adjusted and its *fill pointer* , if any, is not allowed to be changed. 



**Hash-table traversal** 



For *hash table* traversal operations, new elements may not be added or deleted except that the element corresponding to the current hash key may be changed or removed. 



**Package traversal** 



For <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> traversal operations (*e.g.*, <DictionaryLink styled={true} term={"do-symbols"}><b>do-symbols</b></DictionaryLink>), new <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm> may not be <GlossaryTerm styled={true} term={"interned"}><i>interned</i></GlossaryTerm> in or <GlossaryTerm styled={true} term={"uninterned"}><i>uninterned</i></GlossaryTerm> from the <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> being traversed or any <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> that it uses except that the current <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> may be <GlossaryTerm styled={true} term={"uninterned"}><i>uninterned</i></GlossaryTerm> from the <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> being traversed.  







