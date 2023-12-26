 



A <GlossaryTerm styled={true} term={"potential number"}><i>potential number</i></GlossaryTerm> cannot contain any *escape characters*. An *escape character* robs the following <ClLinks  term={"character"}><i>character</i></ClLinks> of all syntactic qualities, forcing it to be strictly <ClLinks  term={"alphabetic"}><i>alphabetic</i></ClLinks><sub>2</sub> and therefore unsuitable for use in a <GlossaryTerm styled={true} term={"potential number"}><i>potential number</i></GlossaryTerm> . For example, all of the following representations are interpreted as <ClLinks  term={"symbol"}><i>symbols</i></ClLinks>, not <ClLinks  term={"number"}><i>numbers</i></ClLinks>: 



\256 25\64 1.0\E6 |100| 3\.14159 |3/4| 3\/4 5|| 



In each case, removing the *escape character* (or <ClLinks  term={"character"}><i>characters</i></ClLinks>) would cause the token to be a <GlossaryTerm styled={true} term={"potential number"}><i>potential number</i></GlossaryTerm> . 



