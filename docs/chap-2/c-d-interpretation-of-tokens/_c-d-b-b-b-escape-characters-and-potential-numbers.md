 

A *potential number* cannot contain any *escape characters*. An *escape character* robs the following *character* of all syntactic qualities, forcing it to be strictly *alphabetic*\<sub\>2\</sub\> and therefore unsuitable for use in a *potential number* . For example, all of the following representations are interpreted as *symbols*, not *numbers*: 

\256 25\64 1.0\E6 |100| 3\.14159 |3/4| 3\/4 5|| 

In each case, removing the *escape character* (or *characters*) would cause the token to be a *potential number* . 

