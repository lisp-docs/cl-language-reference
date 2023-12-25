 



The for and as constructs provide a termination test that is determined by the iteration control clause. 



The repeat construct causes termination after a specified number of iterations. (It uses an internal variable to keep track of the number of iterations.) 



The while construct takes one <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>, a *test*, and terminates the iteration if the *test* evaluates to <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>. A while clause is equivalent to the expression (if (not *test*) (loop-finish)). 



The until construct is the inverse of while; it terminates the iteration if the *test* evaluates to any <GlossaryTerm styled={true} term={"non-nil"}><i>non-nil</i></GlossaryTerm> value. An until clause is equivalent to the expression (if *test* (loop-finish)). 



The always construct takes one <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> and terminates the <DictionaryLink styled={true} term={"loop"}><b>loop</b></DictionaryLink> if the <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> ever evaluates to <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>; in this case, the <DictionaryLink styled={true} term={"loop"}><b>loop</b></DictionaryLink> <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> returns <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. Otherwise, it provides a default return value of <DictionaryLink styled={true} term={"t"}><b>t</b></DictionaryLink>. 



The never construct takes one <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> and terminates the <DictionaryLink styled={true} term={"loop"}><b>loop</b></DictionaryLink> if the <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> ever evaluates to <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm>; in this case, the <DictionaryLink styled={true} term={"loop"}><b>loop</b></DictionaryLink> <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> returns <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. Otherwise, it provides a default return value of <DictionaryLink styled={true} term={"t"}><b>t</b></DictionaryLink>. 



The thereis construct takes one <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> and terminates the <DictionaryLink styled={true} term={"loop"}><b>loop</b></DictionaryLink> if the <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> ever evaluates to a *non-nil object*; in this case, the <DictionaryLink styled={true} term={"loop"}><b>loop</b></DictionaryLink> <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> returns that <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. Otherwise, it provides a default return value of <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



If multiple termination test clauses are specified, the <DictionaryLink styled={true} term={"loop"}><b>loop</b></DictionaryLink> <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> terminates if any are satisfied. For more information, see Section 6.1.4 (Termination Test Clauses). 







 



 



