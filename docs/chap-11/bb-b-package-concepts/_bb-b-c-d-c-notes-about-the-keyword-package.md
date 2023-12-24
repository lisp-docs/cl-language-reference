 



It is generally best to confine the use of <ClLinks styled={true} term={"keyword"}><i>keywords</i></ClLinks> to situations in which there are a finitely enumerable set of names to be selected between. For example, if there were two states of a light switch, they might be called :on and :off. 



In situations where the set of names is not finitely enumerable (*i.e.*, where name conflicts might arise) it is frequently best to use <ClLinks styled={true} term={"symbol"}><i>symbols</i></ClLinks> in some <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> other than KEYWORD so that conflicts will be naturally avoided. For example, it is generally not wise for a <ClLinks styled={true} term={"program"}><i>program</i></ClLinks> to use a <ClLinks styled={true} term={"keyword"}><i>keyword</i></ClLinks> <sub>1</sub> as a *property indicator* , since if there were ever another <ClLinks styled={true} term={"program"}><i>program</i></ClLinks> that did the same thing, each would clobber the other’s data. 



