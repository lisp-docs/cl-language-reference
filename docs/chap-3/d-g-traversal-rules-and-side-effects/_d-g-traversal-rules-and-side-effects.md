 



The consequences are undefined when <ClLinks  term={"code"}><i>code</i></ClLinks> executed during an <ClLinks  term={"object-traversing"}><i>object-traversing</i></ClLinks> operation destructively modifies the <ClLinks  term={"object"}><i>object</i></ClLinks> in a way that might affect the ongoing traversal operation. In particular, the following rules apply. 



**List traversal** 



For <ClLinks  term={"list"}><i>list</i></ClLinks> traversal operations, the <ClLinks  term={"cdr"}><i>cdr</i></ClLinks> chain of the <ClLinks  term={"list"}><i>list</i></ClLinks> is not allowed to be destructively modified. 



**Array traversal** 



For <ClLinks  term={"array"}><i>array</i></ClLinks> traversal operations, the <ClLinks  term={"array"}><i>array</i></ClLinks> is not allowed to be adjusted and its <GlossaryTerm styled={true} term={"fill pointer"}><i>fill pointer</i></GlossaryTerm> , if any, is not allowed to be changed. 



**Hash-table traversal** 



For <GlossaryTerm styled={true} term={"hash table"}><i>hash table</i></GlossaryTerm> traversal operations, new elements may not be added or deleted except that the element corresponding to the current hash key may be changed or removed. 



**Package traversal** 



For <ClLinks  term={"package"}><i>package</i></ClLinks> traversal operations (*e.g.*, <DictionaryLink  term={"do-symbols"}><b>do-symbols</b></DictionaryLink>), new <ClLinks  term={"symbol"}><i>symbols</i></ClLinks> may not be <ClLinks  term={"interned"}><i>interned</i></ClLinks> in or <ClLinks  term={"uninterned"}><i>uninterned</i></ClLinks> from the <ClLinks  term={"package"}><i>package</i></ClLinks> being traversed or any <ClLinks  term={"package"}><i>package</i></ClLinks> that it uses except that the current <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> may be <ClLinks  term={"uninterned"}><i>uninterned</i></ClLinks> from the <ClLinks  term={"package"}><i>package</i></ClLinks> being traversed.  







