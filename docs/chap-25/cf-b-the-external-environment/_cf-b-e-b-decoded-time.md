 



A <GlossaryTerm styled={true} term={"decoded time"}><i>decoded time</i></GlossaryTerm> is an ordered series of nine values that, taken together, represent a point in calendar time (ignoring <GlossaryTerm styled={true} term={"leap seconds"}><i>leap seconds</i></GlossaryTerm>): 



**Second** 



An *integer* between 0 and 59, inclusive. 



**Minute** 



An *integer* between 0 and 59, inclusive. 



**Hour** 



An *integer* between 0 and 23, inclusive. 







 



 



**Date** 



An *integer* between 1 and 31, inclusive (the upper limit actually depends on the month and year, of course). 



**Month** 



An *integer* between 1 and 12, inclusive; 1 means January, 2 means February, and so on; 12 means December. 



**Year** 



An *integer* indicating the year A.D. However, if this *integer* is between 0 and 99, the “obvious” year is used; more precisely, that year is assumed that is equal to the *integer* modulo 100 and within fifty years of the current year (inclusive backwards and exclusive forwards). Thus, in the year 1978, year 28 is 1928 but year 27 is 2027. (Functions that return time in this format always return a full year number.) 



**Day of week** 



An *integer* between 0 and 6, inclusive; 0 means Monday, 1 means Tuesday, and so on; 6 means Sunday. 



**Daylight saving time flag** 



A <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm> that, if <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm>, indicates that daylight saving time is in effect. 



**Time zone** 



A <GlossaryTerm styled={true} term={"time zone"}><i>time zone</i></GlossaryTerm>. 



Figure 25–5 shows <GlossaryTerm styled={true} term={"defined name"}><i>defined names</i></GlossaryTerm> relating to <GlossaryTerm styled={true} term={"decoded time"}><i>decoded time</i></GlossaryTerm>. 



|**decode-universal-time get-decoded-time**|

| :- |





**Figure 25–5. Defined names involving time in Decoded Time.** 



