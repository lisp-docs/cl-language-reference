 



The mappings in a <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> are divided into two classes, external and internal. The <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm> targeted by these different mappings are called *external symbols* and *internal symbols* of the <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>. Within a <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>, a name refers to one <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> or to none; if it does refer to a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>, then it is either external or internal in that <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>, but not both. *External symbols* are part of the package’s public interface to other <GlossaryTerm styled={true} term={"package"}><i>packages</i></GlossaryTerm>. <GlossaryTerm styled={true} term={"symbol"}><i>Symbols</i></GlossaryTerm> become *external symbols* of a given <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> if they have been <GlossaryTerm styled={true} term={"exported"}><i>exported</i></GlossaryTerm> from that <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>. 



A <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> has the same <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> no matter what <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> it is <GlossaryTerm styled={true} term={"present"}><i>present</i></GlossaryTerm> in, but it might be an *external symbol* of some <GlossaryTerm styled={true} term={"package"}><i>packages</i></GlossaryTerm> and an *internal symbol* of others. 



