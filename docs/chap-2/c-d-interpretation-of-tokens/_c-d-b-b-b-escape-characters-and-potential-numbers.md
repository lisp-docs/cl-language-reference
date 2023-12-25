 



A *potential number* cannot contain any *escape characters*. An *escape character* robs the following <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> of all syntactic qualities, forcing it to be strictly <GlossaryTerm styled={true} term={"alphabetic"}><i>alphabetic</i></GlossaryTerm><sub>2</sub> and therefore unsuitable for use in a *potential number* . For example, all of the following representations are interpreted as <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm>, not <GlossaryTerm styled={true} term={"number"}><i>numbers</i></GlossaryTerm>: 



\256 25\64 1.0\E6 |100| 3\.14159 |3/4| 3\/4 5|| 



In each case, removing the *escape character* (or <GlossaryTerm styled={true} term={"character"}><i>characters</i></GlossaryTerm>) would cause the token to be a *potential number* . 



