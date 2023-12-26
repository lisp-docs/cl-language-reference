 



The syntactic parts of an extended <ClLinks styled={true} term={"loop"}><b>loop</b></ClLinks> <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> are called clauses; the rules for parsing are determined by that clause’s keyword. The following example shows a <ClLinks styled={true} term={"loop"}><b>loop</b></ClLinks> <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> with six clauses: 



(loop for i from 1 to (compute-top-value) ; first clause 



while (not (unacceptable i)) ; second clause 



collect (square i) ; third clause 



do (format t "Working on &#126;D now" i) ; fourth clause 



when (evenp i) ; fifth clause 



do (format t "&#126;D is a non-odd number" i) 



finally (format t "About to exit!")) ; sixth clause 



Each <GlossaryTerm styled={true} term={"loop keyword"}><i>loop keyword</i></GlossaryTerm> introduces either a compound loop clause or a simple loop clause that can consist of a <GlossaryTerm styled={true} term={"loop keyword"}><i>loop keyword</i></GlossaryTerm> followed by a single <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>. The number of <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks> in a clause is determined by the <GlossaryTerm styled={true} term={"loop keyword"}><i>loop keyword</i></GlossaryTerm> that begins the clause and by the auxiliary keywords in the clause. The keywords do, doing, initially, and finally are the only loop keywords that can take any number of <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks> and group them as an <GlossaryTerm styled={true} term={"implicit progn"}><i>implicit progn</i></GlossaryTerm>. 



Loop clauses can contain auxiliary keywords, which are sometimes called prepositions. For example, the first clause in the code above includes the prepositions from and to, which mark the value from which stepping begins and the value at which stepping ends. 



For detailed information about <ClLinks styled={true} term={"loop"}><b>loop</b></ClLinks> syntax, see the <ClLinks styled={true} term={"macro"}><i>macro</i></ClLinks> <ClLinks styled={true} term={"loop"}><b>loop</b></ClLinks>. 



