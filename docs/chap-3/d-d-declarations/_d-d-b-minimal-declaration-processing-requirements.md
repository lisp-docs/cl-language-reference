
 



In general, an <ClLinks  term={"implementation"}><i>implementation</i></ClLinks> is free to ignore *declaration specifiers* except for the <ClLinks  term={"declaration"}><b>declaration</b></ClLinks>, <ClLinks  term={"notinline"}><b>notinline</b></ClLinks>, **safety**, and <ClLinks  term={"special"}><b>special</b></ClLinks> *declaration specifiers*. 



A <ClLinks  term={"declaration"}><b>declaration</b></ClLinks> <ClLinks  term={"declaration"}><i>declaration</i></ClLinks> must suppress warnings about unrecognized <ClLinks  term={"declaration"}><i>declarations</i></ClLinks> of the kind that it declares. If an <ClLinks  term={"implementation"}><i>implementation</i></ClLinks> does not produce warnings about unrecognized declarations, it may safely ignore this <ClLinks  term={"declaration"}><i>declaration</i></ClLinks>. 



A <ClLinks  term={"notinline"}><b>notinline</b></ClLinks> <ClLinks  term={"declaration"}><i>declaration</i></ClLinks> must be recognized by any <ClLinks  term={"implementation"}><i>implementation</i></ClLinks> that supports inline functions or *compiler macros* in order to disable those facilities. An <ClLinks  term={"implementation"}><i>implementation</i></ClLinks> that does not use inline functions or *compiler macros* may safely ignore this <ClLinks  term={"declaration"}><i>declaration</i></ClLinks>. 



A **safety** <ClLinks  term={"declaration"}><i>declaration</i></ClLinks> that increases the current safety level must always be recognized. An <ClLinks  term={"implementation"}><i>implementation</i></ClLinks> that always processes code as if safety were high may safely ignore this <ClLinks  term={"declaration"}><i>declaration</i></ClLinks>. 



A <ClLinks  term={"special"}><b>special</b></ClLinks> <ClLinks  term={"declaration"}><i>declaration</i></ClLinks> must be processed by all <ClLinks  term={"implementation"}><i>implementations</i></ClLinks>. 



