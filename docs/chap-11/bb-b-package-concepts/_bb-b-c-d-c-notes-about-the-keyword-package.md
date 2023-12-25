 



It is generally best to confine the use of <GlossaryTerm styled={true} term={"keyword"}><i>keywords</i></GlossaryTerm> to situations in which there are a finitely enumerable set of names to be selected between. For example, if there were two states of a light switch, they might be called :on and :off. 



In situations where the set of names is not finitely enumerable (*i.e.*, where name conflicts might arise) it is frequently best to use <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm> in some <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> other than KEYWORD so that conflicts will be naturally avoided. For example, it is generally not wise for a <GlossaryTerm styled={true} term={"program"}><i>program</i></GlossaryTerm> to use a <GlossaryTerm styled={true} term={"keyword"}><i>keyword</i></GlossaryTerm> <sub>1</sub> as a *property indicator* , since if there were ever another <GlossaryTerm styled={true} term={"program"}><i>program</i></GlossaryTerm> that did the same thing, each would clobber the other’s data. 



