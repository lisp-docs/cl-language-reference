**with-condition-restarts** *Macro* 



**Syntax:** 



**with-condition-restarts** *condition-form restarts-form \&#123;form\&#125;*\* 



*→ \&#123;result\&#125;*\* 



**Arguments and Values:** 



*condition-form*—a *form*; *evaluated* to produce a *condition*. 



*condition*—a *condition object* resulting from the *evaluation* of *condition-form*. 



*restart-form*—a *form*; *evaluated* to produce a *restart-list*. 



*restart-list*—a *list* of *restart objects* resulting from the *evaluation* of *restart-form*. 



*forms*—an *implicit progn*; evaluated. 



*results*—the *values* returned by *forms*. 







 



 



**Description:** 



First, the *condition-form* and *restarts-form* are *evaluated* in normal left-to-right order; the *primary values* yielded by these *evaluations* are respectively called the *condition* and the *restart-list*. 



Next, the *forms* are *evaluated* in a *dynamic environment* in which each *restart* in *restart-list* is associated with the *condition*. See Section 9.1.4.2.4 (Associating a Restart with a Condition). 



**See Also:** 



**restart-case** 



**Notes:** 



Usually this *macro* is not used explicitly in code, since **restart-case** handles most of the common cases in a way that is syntactically more concise. 



