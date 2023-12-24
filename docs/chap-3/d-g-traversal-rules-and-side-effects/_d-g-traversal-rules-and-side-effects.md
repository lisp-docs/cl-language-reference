 



The consequences are undefined when <ClLinks styled={true} term={"code"}><i>code</i></ClLinks> executed during an <ClLinks styled={true} term={"object-traversing"}><i>object-traversing</i></ClLinks> operation destructively modifies the <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> in a way that might affect the ongoing traversal operation. In particular, the following rules apply. 



**List traversal** 



For <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> traversal operations, the <ClLinks styled={true} term={"cdr"}><i>cdr</i></ClLinks> chain of the <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> is not allowed to be destructively modified. 



**Array traversal** 



For <ClLinks styled={true} term={"array"}><i>array</i></ClLinks> traversal operations, the <ClLinks styled={true} term={"array"}><i>array</i></ClLinks> is not allowed to be adjusted and its *fill pointer* , if any, is not allowed to be changed. 



**Hash-table traversal** 



For *hash table* traversal operations, new elements may not be added or deleted except that the element corresponding to the current hash key may be changed or removed. 



**Package traversal** 



For <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> traversal operations (*e.g.*, <ClLinks styled={true} term={"do-symbols"}><b>do-symbols</b></ClLinks>), new <ClLinks styled={true} term={"symbol"}><i>symbols</i></ClLinks> may not be <ClLinks styled={true} term={"interned"}><i>interned</i></ClLinks> in or <ClLinks styled={true} term={"uninterned"}><i>uninterned</i></ClLinks> from the <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> being traversed or any <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> that it uses except that the current <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> may be <ClLinks styled={true} term={"uninterned"}><i>uninterned</i></ClLinks> from the <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> being traversed.  







