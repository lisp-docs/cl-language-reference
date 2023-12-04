 



As examples, the *tokens* in Figure 2–10 are *potential numbers*, but they are not actually numbers, and so are reserved *tokens*; a *conforming implementation* is permitted, but not required, to define their meaning. 



|1b5000 777777q 1.7J -3/4+6.7J 12/25/83 27<i><sup>∧</sup></i>19 3<i><sup>∧</sup></i>4/5 6//7 3.1.2.6 <i><sup>∧</sup></i>-43<i><sup>∧</sup></i> 3.141 592 653 589 793 238 4 -3.7+2.6i-6.17j+19.6k|

| :- |





**Figure 2–10. Examples of reserved tokens** 



The *tokens* in Figure 2–11 are not *potential numbers*; they are always treated as *symbols*: 



|/ /5 + 1+ 1- foo+ ab.cd <i><sup>∧ ∧</sup></i>/-|

| :- |





**Figure 2–11. Examples of symbols**  







The *tokens* in Figure 2–12 are *potential numbers* if the *current input base* is 16, but they are always treated as *symbols* if the *current input base* is 10. 



|bad-face 25-dec-83 a/b fad cafe f<i><sup>∧</sup></i>|

| :- |





**Figure 2–12. Examples of symbols or potential numbers** 



