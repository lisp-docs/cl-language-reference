 



The KEYWORD <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> contains <GlossaryTerm  term={"symbol"}><i>symbols</i></GlossaryTerm>, called <GlossaryTerm  term={"keyword"}><i>keywords</i></GlossaryTerm><sub>1</sub>, that are typically used as special markers in <GlossaryTerm  term={"program"}><i>programs</i></GlossaryTerm> and their associated data <GlossaryTerm  term={"expression"}><i>expressions</i></GlossaryTerm><sub>1</sub>. 



*Symbol tokens* that start with a <GlossaryTerm styled={true} term={"package marker"}><i>package marker</i></GlossaryTerm> are parsed by the *Lisp reader* as <GlossaryTerm  term={"symbol"}><i>symbols</i></GlossaryTerm> in the KEYWORD <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm>; see Section 2.3.4 (Symbols as Tokens). This makes it notationally convenient to use <GlossaryTerm  term={"keyword"}><i>keywords</i></GlossaryTerm> when communicating between programs in different <GlossaryTerm  term={"package"}><i>packages</i></GlossaryTerm>. For example, the mechanism for passing <GlossaryTerm styled={true} term={"keyword parameter"}><i>keyword parameters</i></GlossaryTerm> in a <GlossaryTerm  term={"call"}><i>call</i></GlossaryTerm> uses <GlossaryTerm  term={"keyword"}><i>keywords</i></GlossaryTerm><sub>1</sub> to name the corresponding <GlossaryTerm  term={"argument"}><i>arguments</i></GlossaryTerm>; see Section 3.4.1 (Ordinary Lambda Lists). 



<GlossaryTerm  term={"symbol"}><i>Symbols</i></GlossaryTerm> in the KEYWORD <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> are, by definition, of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"keyword"}><b>keyword</b></DictionaryLink>. 



