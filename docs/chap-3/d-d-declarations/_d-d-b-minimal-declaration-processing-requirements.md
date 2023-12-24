
 



In general, an <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks> is free to ignore *declaration specifiers* except for the <ClLinks styled={true} term={"declaration"}><b>declaration</b></ClLinks>, <ClLinks styled={true} term={"notinline"}><b>notinline</b></ClLinks>, **safety**, and <ClLinks styled={true} term={"special"}><b>special</b></ClLinks> *declaration specifiers*. 



A <ClLinks styled={true} term={"declaration"}><b>declaration</b></ClLinks> <ClLinks styled={true} term={"declaration"}><i>declaration</i></ClLinks> must suppress warnings about unrecognized <ClLinks styled={true} term={"declaration"}><i>declarations</i></ClLinks> of the kind that it declares. If an <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks> does not produce warnings about unrecognized declarations, it may safely ignore this <ClLinks styled={true} term={"declaration"}><i>declaration</i></ClLinks>. 



A <ClLinks styled={true} term={"notinline"}><b>notinline</b></ClLinks> <ClLinks styled={true} term={"declaration"}><i>declaration</i></ClLinks> must be recognized by any <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks> that supports inline functions or *compiler macros* in order to disable those facilities. An <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks> that does not use inline functions or *compiler macros* may safely ignore this <ClLinks styled={true} term={"declaration"}><i>declaration</i></ClLinks>. 



A **safety** <ClLinks styled={true} term={"declaration"}><i>declaration</i></ClLinks> that increases the current safety level must always be recognized. An <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks> that always processes code as if safety were high may safely ignore this <ClLinks styled={true} term={"declaration"}><i>declaration</i></ClLinks>. 



A <ClLinks styled={true} term={"special"}><b>special</b></ClLinks> <ClLinks styled={true} term={"declaration"}><i>declaration</i></ClLinks> must be processed by all <ClLinks styled={true} term={"implementation"}><i>implementations</i></ClLinks>. 



