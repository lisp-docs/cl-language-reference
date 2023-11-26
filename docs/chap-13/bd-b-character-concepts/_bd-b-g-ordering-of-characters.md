 

The total ordering on *characters* is guaranteed to have the following properties: 

*•* If two *characters* have the same *implementation-defined attributes*, then their ordering by **char**\< is consistent with the numerical ordering by the predicate \< on their code *attributes*. 

*•* If two *characters* differ in any *attribute*, then they are not **char=**. 

*•* The total ordering is not necessarily the same as the total ordering on the *integers* produced by applying **char-int** to the *characters*. 

*•* While *alphabetic*\<sub\>1\</sub\> *standard characters* of a given *case* must obey a partial ordering, they need not be contiguous; it is permissible for *uppercase* and *lowercase characters* to be interleaved. Thus (char\<= #\a x #\z) is not a valid way of determining whether or not x is a *lowercase character* . 

Of the *standard characters*, those which are *alphanumeric* obey the following partial ordering: 

A\<B\<C\<D\<E\<F\<G\<H\<I\<J\<K\<L\<M\<N\<O\<P\<Q\<R\<S\<T\<U\<V\<W\<X\<Y\<Z 

a\<b\<c\<d\<e\<f\<g\<h\<i\<j\<k\<l\<m\<n\<o\<p\<q\<r\<s\<t\<u\<v\<w\<x\<y\<z 

0\<1\<2\<3\<4\<5\<6\<7\<8\<9 

either 9\<A or Z\<0 

either 9\<a or z\<0 

This implies that, for *standard characters*, *alphabetic*\<sub\>1\</sub\> ordering holds within each *case* (*uppercase* and *lowercase*), and that the *numeric characters* as a group are not interleaved with *alphabetic characters*. However, the ordering or possible interleaving of *uppercase characters* and *lowercase characters* is *implementation-defined*. 

Characters **13–5**

 

 

