 



The *compound type specifier* form of the numeric *type specifiers* permit the user to specify an interval on the real number line which describe a <ClLinks  term={"subtype"}><i>subtype</i></ClLinks> of the <ClLinks  term={"type"}><i>type</i></ClLinks> which would be described by the corresponding *atomic type specifier* . A <ClLinks  term={"subtype"}><i>subtype</i></ClLinks> of some *type T* is specified using an ordered pair of <ClLinks  term={"object"}><i>objects</i></ClLinks> called *interval designators* for *type T*. 







 



 



The first of the two *interval designators* for *type T* can be any of the following: 



a number *N* of *type T* 



This denotes a lower inclusive bound of *N*. That is, <ClLinks  term={"element"}><i>elements</i></ClLinks> of the <ClLinks  term={"subtype"}><i>subtype</i></ClLinks> of <ClLinks  term={"t"}><i>T</i></ClLinks> will be greater than or equal to *N*. 



a *singleton list* whose <ClLinks  term={"element"}><i>element</i></ClLinks> is a number *M* of *type T* 



This denotes a lower exclusive bound of *M*. That is, <ClLinks  term={"element"}><i>elements</i></ClLinks> of the <ClLinks  term={"subtype"}><i>subtype</i></ClLinks> of <ClLinks  term={"t"}><i>T</i></ClLinks> will be greater than *M*. 



the symbol **\*** 



This denotes the absence of a lower bound on the interval. 



The second of the two *interval designators* for *type T* can be any of the following: 



a number *N* of *type T* 



This denotes an upper inclusive bound of *N*. That is, <ClLinks  term={"element"}><i>elements</i></ClLinks> of the <ClLinks  term={"subtype"}><i>subtype</i></ClLinks> of <ClLinks  term={"t"}><i>T</i></ClLinks> will be less than or equal to *N*. 



a *singleton list* whose <ClLinks  term={"element"}><i>element</i></ClLinks> is a number *M* of *type T* 



This denotes an upper exclusive bound of *M*. That is, <ClLinks  term={"element"}><i>elements</i></ClLinks> of the <ClLinks  term={"subtype"}><i>subtype</i></ClLinks> of <ClLinks  term={"t"}><i>T</i></ClLinks> will be less than *M*. 



the symbol **\*** 



This denotes the absence of an upper bound on the interval. 



