 



A *potential number* cannot contain any *escape characters*. An *escape character* robs the following <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> of all syntactic qualities, forcing it to be strictly <ClLinks styled={true} term={"alphabetic"}><i>alphabetic</i></ClLinks><sub>2</sub> and therefore unsuitable for use in a *potential number* . For example, all of the following representations are interpreted as <ClLinks styled={true} term={"symbol"}><i>symbols</i></ClLinks>, not <ClLinks styled={true} term={"number"}><i>numbers</i></ClLinks>: 



\256 25\64 1.0\E6 |100| 3\.14159 |3/4| 3\/4 5|| 



In each case, removing the *escape character* (or <ClLinks styled={true} term={"character"}><i>characters</i></ClLinks>) would cause the token to be a *potential number* . 



