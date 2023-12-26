 



The mappings in a <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> are divided into two classes, external and internal. The <GlossaryTerm  term={"symbol"}><i>symbols</i></GlossaryTerm> targeted by these different mappings are called <GlossaryTerm styled={true} term={"external symbol"}><i>external symbols</i></GlossaryTerm> and <GlossaryTerm styled={true} term={"internal symbol"}><i>internal symbols</i></GlossaryTerm> of the <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm>. Within a <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm>, a name refers to one <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> or to none; if it does refer to a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>, then it is either external or internal in that <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm>, but not both. <GlossaryTerm styled={true} term={"external symbol"}><i>External symbols</i></GlossaryTerm> are part of the package’s public interface to other <GlossaryTerm  term={"package"}><i>packages</i></GlossaryTerm>. <GlossaryTerm  term={"symbol"}><i>Symbols</i></GlossaryTerm> become <GlossaryTerm styled={true} term={"external symbol"}><i>external symbols</i></GlossaryTerm> of a given <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> if they have been <GlossaryTerm  term={"exported"}><i>exported</i></GlossaryTerm> from that <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm>. 



A <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> has the same <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> no matter what <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> it is <GlossaryTerm  term={"present"}><i>present</i></GlossaryTerm> in, but it might be an <GlossaryTerm styled={true} term={"external symbol"}><i>external symbol</i></GlossaryTerm> of some <GlossaryTerm  term={"package"}><i>packages</i></GlossaryTerm> and an <GlossaryTerm styled={true} term={"internal symbol"}><i>internal symbol</i></GlossaryTerm> of others. 



