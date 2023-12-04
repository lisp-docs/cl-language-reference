 



An *interactive stream* is one on which it makes sense to perform interactive querying. 



The precise meaning of an *interactive stream* is *implementation-defined*, and may depend on the underlying operating system. Some examples of the things that an *implementation* might choose to use as identifying characteristics of an *interactive stream* include: 







 



 



*•* The *stream* is connected to a person (or equivalent) in such a way that the program can prompt for information and expect to receive different input depending on the prompt. 



*•* The program is expected to prompt for input and support “normal input editing”. 



*•* **read-char** might wait for the user to type something before returning instead of immediately returning a character or end-of-file. 



The general intent of having some *streams* be classified as *interactive streams* is to allow them to be distinguished from streams containing batch (or background or command-file) input. Output to batch streams is typically discarded or saved for later viewing, so interactive queries to such streams might not have the expected effect. 



*Terminal I/O* might or might not be an *interactive stream*. 



