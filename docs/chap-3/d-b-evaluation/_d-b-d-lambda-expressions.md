 



In a *lambda expression*, the body is evaluated in a lexical *environment* that is formed by adding the *binding* of each *parameter* in the *lambda list* with the corresponding *value* from the *arguments* to the current lexical *environment*. 



For further discussion of how *bindings* are *established* based on the *lambda list*, see Section 3.4 (Lambda Lists). 



The body of a *lambda expression* is an *implicit progn*; the *values* it returns are returned by the *lambda expression*. 



