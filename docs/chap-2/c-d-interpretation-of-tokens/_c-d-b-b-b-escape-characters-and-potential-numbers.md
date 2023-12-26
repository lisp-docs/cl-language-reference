 



A <GlossaryTerm styled={true} term={"potential number"}><i>potential number</i></GlossaryTerm> cannot contain any *escape characters*. An *escape character* robs the following <GlossaryTerm  term={"character"}><i>character</i></GlossaryTerm> of all syntactic qualities, forcing it to be strictly <GlossaryTerm  term={"alphabetic"}><i>alphabetic</i></GlossaryTerm><sub>2</sub> and therefore unsuitable for use in a <GlossaryTerm styled={true} term={"potential number"}><i>potential number</i></GlossaryTerm> . For example, all of the following representations are interpreted as <GlossaryTerm  term={"symbol"}><i>symbols</i></GlossaryTerm>, not <GlossaryTerm  term={"number"}><i>numbers</i></GlossaryTerm>: 



\256 25\64 1.0\E6 |100| 3\.14159 |3/4| 3\/4 5|| 



In each case, removing the *escape character* (or <GlossaryTerm  term={"character"}><i>characters</i></GlossaryTerm>) would cause the token to be a <GlossaryTerm styled={true} term={"potential number"}><i>potential number</i></GlossaryTerm> . 



