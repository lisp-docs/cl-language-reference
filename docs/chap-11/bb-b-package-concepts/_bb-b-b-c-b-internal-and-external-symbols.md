 



The mappings in a <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> are divided into two classes, external and internal. The <ClLinks styled={true} term={"symbol"}><i>symbols</i></ClLinks> targeted by these different mappings are called *external symbols* and *internal symbols* of the <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>. Within a <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>, a name refers to one <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> or to none; if it does refer to a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>, then it is either external or internal in that <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>, but not both. *External symbols* are part of the package’s public interface to other <ClLinks styled={true} term={"package"}><i>packages</i></ClLinks>. <ClLinks styled={true} term={"symbol"}><i>Symbols</i></ClLinks> become *external symbols* of a given <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> if they have been <ClLinks styled={true} term={"exported"}><i>exported</i></ClLinks> from that <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>. 



A <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> has the same <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> no matter what <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> it is <ClLinks styled={true} term={"present"}><i>present</i></ClLinks> in, but it might be an *external symbol* of some <ClLinks styled={true} term={"package"}><i>packages</i></ClLinks> and an *internal symbol* of others. 



