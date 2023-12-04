**\*debug-io\***, **\*error-output\***, **\*query-io\***, **\*standard-input\***, **\*standard-output\***, **\*trace-output\* stream-error** *Condition Type* 



**Class Precedence List:** 



**stream-error**, **error**, **serious-condition**, **condition**, **t** 



**Description:** 



The *type* **stream-error** consists of error conditions that are related to receiving input from or sending output to a *stream*. The “offending stream” is initialized by the :stream initialization argument to **make-condition**, and is *accessed* by the *function* **stream-error-stream**. 



**See Also:** 



**stream-error-stream** 



