 



As examples, the <ClLinks  term={"token"}><i>tokens</i></ClLinks> in Figure 2–10 are *potential numbers*, but they are not actually numbers, and so are reserved <ClLinks  term={"token"}><i>tokens</i></ClLinks>; a *conforming implementation* is permitted, but not required, to define their meaning. 




```lisp title="Figure 2–10. Examples of reserved tokens"
1b5000 777777q 1.7J -3/4+6.7J 12/25/83 27<i><sup>∧</sup></i>19 3<i><sup>∧</sup></i>4/5 6//7 3.1.2.6 <i><sup>∧</sup></i>-43<i><sup>∧</sup></i> 3.141 592 653 589 793 238 4 -3.7+2.6i-6.17j+19.6k
```
 



The <ClLinks  term={"token"}><i>tokens</i></ClLinks> in Figure 2–11 are not *potential numbers*; they are always treated as <ClLinks  term={"symbol"}><i>symbols</i></ClLinks>: 




```lisp title="Figure 2–11. Examples of symbols"
/ /5 + 1+ 1- foo+ ab.cd <i><sup>∧ ∧</sup></i>/-
```
  







The <ClLinks  term={"token"}><i>tokens</i></ClLinks> in Figure 2–12 are *potential numbers* if the *current input base* is 16, but they are always treated as <ClLinks  term={"symbol"}><i>symbols</i></ClLinks> if the *current input base* is 10. 




```lisp title="Figure 2–12. Examples of symbols or potential numbers"
bad-face 25-dec-83 a/b fad cafe f<i><sup>∧</sup></i>
```
 



