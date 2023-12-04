 



*Universal time* is an *absolute time* represented as a single non-negative *integer*—the number of seconds since midnight, January 1, 1900 GMT (ignoring *leap seconds*). Thus the time 1 is 00:00:01 (that is, 12:00:01 a.m.) on January 1, 1900 GMT. Similarly, the time 2398291201 corresponds to 



time 00:00:01 on January 1, 1976 GMT. Recall that the year 1900 was not a leap year; for the purposes of Common Lisp, a year is a leap year if and only if its number is divisible by 4, except that years divisible by 100 are not leap years, except that years divisible by 400 are leap years. 







 



 



Therefore the year 2000 will be a leap year. Because *universal time* must be a non-negative *integer* , times before the base time of midnight, January 1, 1900 GMT cannot be processed by Common Lisp. 



|<p>**decode-universal-time get-universal-time** </p><p>**encode-universal-time**</p>|

| :- |





**Figure 25–6. Defined names involving time in Universal Time.** 



