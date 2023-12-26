 



The mappings in a <ClLinks  term={"package"}><i>package</i></ClLinks> are divided into two classes, external and internal. The <ClLinks  term={"symbol"}><i>symbols</i></ClLinks> targeted by these different mappings are called <GlossaryTerm styled={true} term={"external symbol"}><i>external symbols</i></GlossaryTerm> and <GlossaryTerm styled={true} term={"internal symbol"}><i>internal symbols</i></GlossaryTerm> of the <ClLinks  term={"package"}><i>package</i></ClLinks>. Within a <ClLinks  term={"package"}><i>package</i></ClLinks>, a name refers to one <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> or to none; if it does refer to a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>, then it is either external or internal in that <ClLinks  term={"package"}><i>package</i></ClLinks>, but not both. <GlossaryTerm styled={true} term={"external symbol"}><i>External symbols</i></GlossaryTerm> are part of the package’s public interface to other <ClLinks  term={"package"}><i>packages</i></ClLinks>. <ClLinks  term={"symbol"}><i>Symbols</i></ClLinks> become <GlossaryTerm styled={true} term={"external symbol"}><i>external symbols</i></GlossaryTerm> of a given <ClLinks  term={"package"}><i>package</i></ClLinks> if they have been <ClLinks  term={"exported"}><i>exported</i></ClLinks> from that <ClLinks  term={"package"}><i>package</i></ClLinks>. 



A <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> has the same <ClLinks  term={"name"}><i>name</i></ClLinks> no matter what <ClLinks  term={"package"}><i>package</i></ClLinks> it is <ClLinks  term={"present"}><i>present</i></ClLinks> in, but it might be an <GlossaryTerm styled={true} term={"external symbol"}><i>external symbol</i></GlossaryTerm> of some <ClLinks  term={"package"}><i>packages</i></ClLinks> and an <GlossaryTerm styled={true} term={"internal symbol"}><i>internal symbol</i></GlossaryTerm> of others. 



