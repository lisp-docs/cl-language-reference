 



An <GlossaryTerm styled={true} term={"interactive stream"}><i>interactive stream</i></GlossaryTerm> is one on which it makes sense to perform interactive querying. 



The precise meaning of an <GlossaryTerm styled={true} term={"interactive stream"}><i>interactive stream</i></GlossaryTerm> is <ClLinks  term={"implementation-defined"}><i>implementation-defined</i></ClLinks>, and may depend on the underlying operating system. Some examples of the things that an <ClLinks  term={"implementation"}><i>implementation</i></ClLinks> might choose to use as identifying characteristics of an <GlossaryTerm styled={true} term={"interactive stream"}><i>interactive stream</i></GlossaryTerm> include: 







 



 



*•* The <ClLinks  term={"stream"}><i>stream</i></ClLinks> is connected to a person (or equivalent) in such a way that the program can prompt for information and expect to receive different input depending on the prompt. 



*•* The program is expected to prompt for input and support “normal input editing”. 



*•* <DictionaryLink  term={"read-char"}><b>read-char</b></DictionaryLink> might wait for the user to type something before returning instead of immediately returning a character or end-of-file. 



The general intent of having some <ClLinks  term={"stream"}><i>streams</i></ClLinks> be classified as <GlossaryTerm styled={true} term={"interactive stream"}><i>interactive streams</i></GlossaryTerm> is to allow them to be distinguished from streams containing batch (or background or command-file) input. Output to batch streams is typically discarded or saved for later viewing, so interactive queries to such streams might not have the expected effect. 



*Terminal I/O* might or might not be an <GlossaryTerm styled={true} term={"interactive stream"}><i>interactive stream</i></GlossaryTerm>. 



