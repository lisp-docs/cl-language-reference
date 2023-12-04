 



The syntactic parts of an extended **loop** *form* are called clauses; the rules for parsing are determined by that clause’s keyword. The following example shows a **loop** *form* with six clauses: 



(loop for i from 1 to (compute-top-value) ; first clause 



while (not (unacceptable i)) ; second clause 



collect (square i) ; third clause 



do (format t "Working on ~D now" i) ; fourth clause 



when (evenp i) ; fifth clause 



do (format t "~D is a non-odd number" i) 



finally (format t "About to exit!")) ; sixth clause 



Each *loop keyword* introduces either a compound loop clause or a simple loop clause that can consist of a *loop keyword* followed by a single *form*. The number of *forms* in a clause is determined by the *loop keyword* that begins the clause and by the auxiliary keywords in the clause. The keywords do, doing, initially, and finally are the only loop keywords that can take any number of *forms* and group them as an *implicit progn*. 



Loop clauses can contain auxiliary keywords, which are sometimes called prepositions. For example, the first clause in the code above includes the prepositions from and to, which mark the value from which stepping begins and the value at which stepping ends. 



For detailed information about **loop** syntax, see the *macro* **loop**. 



