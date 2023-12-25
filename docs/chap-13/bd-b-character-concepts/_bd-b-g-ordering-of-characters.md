 



The total ordering on <GlossaryTerm styled={true} term={"character"}><i>characters</i></GlossaryTerm> is guaranteed to have the following properties: 



*•* If two <GlossaryTerm styled={true} term={"character"}><i>characters</i></GlossaryTerm> have the same *implementation-defined attributes*, then their ordering by <DictionaryLink styled={true} term={"char"}><b>char</b></DictionaryLink>&lt; is consistent with the numerical ordering by the predicate &lt; on their code <GlossaryTerm styled={true} term={"attribute"}><i>attributes</i></GlossaryTerm>. 



*•* If two <GlossaryTerm styled={true} term={"character"}><i>characters</i></GlossaryTerm> differ in any <GlossaryTerm styled={true} term={"attribute"}><i>attribute</i></GlossaryTerm>, then they are not <DictionaryLink styled={true} term={"char="}><b>char=</b></DictionaryLink>. 



*•* The total ordering is not necessarily the same as the total ordering on the *integers* produced by applying <DictionaryLink styled={true} term={"char-int"}><b>char-int</b></DictionaryLink> to the <GlossaryTerm styled={true} term={"character"}><i>characters</i></GlossaryTerm>. 



*•* While <GlossaryTerm styled={true} term={"alphabetic"}><i>alphabetic</i></GlossaryTerm><sub>1</sub> *standard characters* of a given <GlossaryTerm styled={true} term={"case"}><i>case</i></GlossaryTerm> must obey a partial ordering, they need not be contiguous; it is permissible for <GlossaryTerm styled={true} term={"uppercase"}><i>uppercase</i></GlossaryTerm> and *lowercase characters* to be interleaved. Thus (char&lt;= #\a x #\z) is not a valid way of determining whether or not x is a *lowercase character* . 



Of the *standard characters*, those which are <GlossaryTerm styled={true} term={"alphanumeric"}><i>alphanumeric</i></GlossaryTerm> obey the following partial ordering: 



A<b<c<d<e<f<g<h<i<j<k<l<m<n<o<p<q<r<s<t<u<v<w<x<y<z <GlossaryTerm styled={true} term={"alphabetic"}><i>alphabetic</i></GlossaryTerm><sub="" *standard="" 0<1<2<3<4<5<6<7<8<9="" 9<a="" a<b<c<d<e<f<g<h<i<j<k<l<m<n<o<p<q<r<s<t<u<v<w<x<y<z="" characters*,="" either="" for="" implies="" or="" that,="" this="" z<0="">1 ordering holds within each <GlossaryTerm styled={true} term={"case"}><i>case</i></GlossaryTerm> (<GlossaryTerm styled={true} term={"uppercase"}><i>uppercase</i></GlossaryTerm> and <GlossaryTerm styled={true} term={"lowercase"}><i>lowercase</i></GlossaryTerm>), and that the *numeric characters* as a group are not interleaved with *alphabetic characters*. However, the ordering or possible interleaving of *uppercase characters* and *lowercase characters* is <GlossaryTerm styled={true} term={"implementation-defined"}><i>implementation-defined</i></GlossaryTerm>. 







 



 



</b<c<d<e<f<g<h<i<j<k<l<m<n<o<p<q<r<s<t<u<v<w<x<y<z>