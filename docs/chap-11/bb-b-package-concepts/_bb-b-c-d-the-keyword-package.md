 



The KEYWORD <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> contains <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm>, called <GlossaryTerm styled={true} term={"keyword"}><i>keywords</i></GlossaryTerm><sub>1</sub>, that are typically used as special markers in <GlossaryTerm styled={true} term={"program"}><i>programs</i></GlossaryTerm> and their associated data <GlossaryTerm styled={true} term={"expression"}><i>expressions</i></GlossaryTerm><sub>1</sub>. 



*Symbol tokens* that start with a *package marker* are parsed by the *Lisp reader* as <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm> in the KEYWORD <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>; see Section 2.3.4 (Symbols as Tokens). This makes it notationally convenient to use <GlossaryTerm styled={true} term={"keyword"}><i>keywords</i></GlossaryTerm> when communicating between programs in different <GlossaryTerm styled={true} term={"package"}><i>packages</i></GlossaryTerm>. For example, the mechanism for passing *keyword parameters* in a <GlossaryTerm styled={true} term={"call"}><i>call</i></GlossaryTerm> uses <GlossaryTerm styled={true} term={"keyword"}><i>keywords</i></GlossaryTerm><sub>1</sub> to name the corresponding <GlossaryTerm styled={true} term={"argument"}><i>arguments</i></GlossaryTerm>; see Section 3.4.1 (Ordinary Lambda Lists). 



<GlossaryTerm styled={true} term={"symbol"}><i>Symbols</i></GlossaryTerm> in the KEYWORD <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> are, by definition, of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"keyword"}><b>keyword</b></DictionaryLink>. 



