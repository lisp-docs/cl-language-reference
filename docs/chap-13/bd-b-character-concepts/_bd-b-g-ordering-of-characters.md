
The total ordering on <ClLinks styled={true} term={"character"}><i>characters</i></ClLinks> is guaranteed to have the following properties:

*•* If two <ClLinks styled={true} term={"character"}><i>characters</i></ClLinks> have the same *implementation-defined attributes*, then their ordering by <ClLinks styled={true} term={"char"}><b>char</b></ClLinks>&lt; is consistent with the numerical ordering by the predicate &lt; on their code <ClLinks styled={true} term={"attribute"}><i>attributes</i></ClLinks>.

*•* If two <ClLinks styled={true} term={"character"}><i>characters</i></ClLinks> differ in any <ClLinks styled={true} term={"attribute"}><i>attribute</i></ClLinks>, then they are not <ClLinks styled={true} term={"char="}><b>char=</b></ClLinks>.

*•* The total ordering is not necessarily the same as the total ordering on the *integers* produced by applying <ClLinks styled={true} term={"char-int"}><b>char-int</b></ClLinks> to the <ClLinks styled={true} term={"character"}><i>characters</i></ClLinks>.

*•* While <ClLinks styled={true} term={"alphabetic"}><i>alphabetic</i></ClLinks><sub>1</sub> <GlossaryTerm styled={true} term={"standard character"}><i>standard characters</i></GlossaryTerm> of a given <ClLinks styled={true} term={"case"}><i>case</i></ClLinks> must obey a partial ordering, they need not be contiguous; it is permissible for <ClLinks styled={true} term={"uppercase"}><i>uppercase</i></ClLinks> and *lowercase characters* to be interleaved. Thus `(char<= #\a x #\z)` is not a valid way of determining whether or not x is a *lowercase character* .

Of the <GlossaryTerm styled={true} term={"standard character"}><i>standard characters</i></GlossaryTerm>, those which are <ClLinks styled={true} term={"alphanumeric"}><i>alphanumeric</i></ClLinks> obey the following partial ordering:

- ```A<B<C<D<E<F<G<H<I<J<K<L<M<N<O<P<Q<R<S<T<U<V<W<X<Y<Z```
- ```a<b<c<d<e<f<g<h<i<j<k<l<m<n<o<p<q<r<s<t<u<v<w<x<y<z```
- ```0<1<2<3<4<5<6<7<8<9```
- either `9<A` or `Z<0`
- either `9<a` or `z<0`

This implies that, for <GlossaryTerm styled={true} term={"standard character"}><i>standard characters</i></GlossaryTerm>, <GlossaryTerm styled={true} term={"alphabetic"}><i>alphabetic</i></GlossaryTerm>[^1] ordering holds within each <ClLinks styled={true} term={"case"}><i>case</i></ClLinks> (<ClLinks styled={true} term={"uppercase"}><i>uppercase</i></ClLinks> and <ClLinks styled={true} term={"lowercase"}><i>lowercase</i></ClLinks>), and that the *numeric characters* as a group are not interleaved with *alphabetic characters*. However, the ordering or possible interleaving of *uppercase characters* and *lowercase characters* is <ClLinks styled={true} term={"implementation-defined"}><i>implementation-defined</i></ClLinks>.

[^1]: Unclear where this footnote is in the specification

:::warning
We have a missing footnote "<ClLinks styled={true} term={"alphabetic"}><i>alphabetic</i></ClLinks>[^1]" from the specification. Please help us find it!
:::
