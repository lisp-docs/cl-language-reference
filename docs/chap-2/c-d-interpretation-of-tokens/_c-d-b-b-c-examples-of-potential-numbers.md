 



As examples, the <ClLinks  term={"token"}><i>tokens</i></ClLinks> in Figure 2–10 are <GlossaryTerm styled={true} term={"potential number"}><i>potential numbers</i></GlossaryTerm>, but they are not actually numbers, and so are reserved <ClLinks  term={"token"}><i>tokens</i></ClLinks>; a <GlossaryTerm styled={true} term={"conforming implementation"}><i>conforming implementation</i></GlossaryTerm> is permitted, but not required, to define their meaning. 




```lisp title="Figure 2–10. Examples of reserved tokens"
1b5000 777777q 1.7J -3/4+6.7J 12/25/83 27<i><sup>∧</sup></i>19 3<i><sup>∧</sup></i>4/5 6//7 3.1.2.6 <i><sup>∧</sup></i>-43<i><sup>∧</sup></i> 3.141 592 653 589 793 238 4 -3.7+2.6i-6.17j+19.6k
```
 



The <ClLinks  term={"token"}><i>tokens</i></ClLinks> in Figure 2–11 are not <GlossaryTerm styled={true} term={"potential number"}><i>potential numbers</i></GlossaryTerm>; they are always treated as <ClLinks  term={"symbol"}><i>symbols</i></ClLinks>: 




```lisp title="Figure 2–11. Examples of symbols"
/ /5 + 1+ 1- foo+ ab.cd <i><sup>∧ ∧</sup></i>/-
```
  







The <ClLinks  term={"token"}><i>tokens</i></ClLinks> in Figure 2–12 are <GlossaryTerm styled={true} term={"potential number"}><i>potential numbers</i></GlossaryTerm> if the <GlossaryTerm styled={true} term={"current input base"}><i>current input base</i></GlossaryTerm> is 16, but they are always treated as <ClLinks  term={"symbol"}><i>symbols</i></ClLinks> if the <GlossaryTerm styled={true} term={"current input base"}><i>current input base</i></GlossaryTerm> is 10. 




```lisp title="Figure 2–12. Examples of symbols or potential numbers"
bad-face 25-dec-83 a/b fad cafe f<i><sup>∧</sup></i>
```
 



