 

#+ provides a read-time conditionalization facility; the syntax is #+*test expression*. If the *feature expression test* succeeds, then this textual notation represents an *object* whose printed representation is *expression*. If the *feature expression test* fails, then this textual notation is treated as *whitespace*&#60;sub&#62;2&#60;/sub&#62;; that is, it is as if the “#+ *test expression*” did not appear and only a *space* appeared in its place. 

For a detailed description of success and failure in *feature expressions*, see Section 24.1.2.1 (Feature Expressions). 

#+ operates by first reading the *feature expression* and then skipping over the *form* if the *feature expression* fails. While reading the *test*, the *current package* is the KEYWORD *package*. Skipping over the *form* is accomplished by *binding* **\*read-suppress\*** to *true* and then calling **read**. 

For examples, see Section 24.1.2.1.1 (Examples of Feature Expressions). 

