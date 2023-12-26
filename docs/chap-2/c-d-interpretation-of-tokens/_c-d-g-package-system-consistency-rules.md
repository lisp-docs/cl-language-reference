 



The following rules apply to the package system as long as the <ClLinks  term={"value"}><i>value</i></ClLinks> of <DictionaryLink  term={"package"}><b>\*package\*</b></DictionaryLink> is not changed: 



**Read-read consistency** 



Reading the same *symbol name* always results in the *same symbol*. 



**Print-read consistency** 



An *interned symbol* always prints as a sequence of characters that, when read back in, yields the *same symbol*. 



For information about how the *Lisp printer* treats <ClLinks  term={"symbol"}><i>symbols</i></ClLinks>, see Section 22.1.3.3 (Printing Symbols). 



**Print-print consistency** 



If two interned <ClLinks  term={"symbol"}><i>symbols</i></ClLinks> are not the <ClLinks  term={"same"}><i>same</i></ClLinks>, then their printed representations will be different sequences of characters. 



These rules are true regardless of any implicit interning. As long as the <GlossaryTerm styled={true} term={"current package"}><i>current package</i></GlossaryTerm> is not changed, results are reproducible regardless of the order of *loading* files or the exact history of what <ClLinks  term={"symbol"}><i>symbols</i></ClLinks> were typed in when. If the <ClLinks  term={"value"}><i>value</i></ClLinks> of <DictionaryLink  term={"package"}><b>\*package\*</b></DictionaryLink> is changed and then changed back 



to the previous value, consistency is maintained. The rules can be violated by changing the <ClLinks  term={"value"}><i>value</i></ClLinks> of <DictionaryLink  term={"package"}><b>\*package\*</b></DictionaryLink>, forcing a change to <ClLinks  term={"symbol"}><i>symbols</i></ClLinks> or to <ClLinks  term={"package"}><i>packages</i></ClLinks> or to both by continuing from an error, or calling one of the following <ClLinks  term={"function"}><i>functions</i></ClLinks>: <DictionaryLink  term={"unintern"}><b>unintern</b></DictionaryLink>, <DictionaryLink  term={"unexport"}><b>unexport</b></DictionaryLink>, <DictionaryLink  term={"shadow"}><b>shadow</b></DictionaryLink>, <DictionaryLink  term={"shadowing-import"}><b>shadowing-import</b></DictionaryLink>, or <DictionaryLink  term={"unuse-package"}><b>unuse-package</b></DictionaryLink>. 



An inconsistency only applies if one of the restrictions is violated between two of the named <ClLinks  term={"symbol"}><i>symbols</i></ClLinks>. <DictionaryLink  term={"shadow"}><b>shadow</b></DictionaryLink>, <DictionaryLink  term={"unexport"}><b>unexport</b></DictionaryLink>, <DictionaryLink  term={"unintern"}><b>unintern</b></DictionaryLink>, and <DictionaryLink  term={"shadowing-import"}><b>shadowing-import</b></DictionaryLink> can only affect the consistency of <ClLinks  term={"symbol"}><i>symbols</i></ClLinks> with the same <ClLinks  term={"name"}><i>names</i></ClLinks> (under <ClLinks  term={"string"}><b>string=</b></ClLinks>) as the ones supplied as arguments.  







