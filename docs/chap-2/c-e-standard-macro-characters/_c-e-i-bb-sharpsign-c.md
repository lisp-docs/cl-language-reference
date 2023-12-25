 



#C reads a following *object*, which must be a *list* of length two whose *elements* are both *reals*. These *reals* denote, respectively, the real and imaginary parts of a *complex* number. If the two parts as notated are not of the same data type, then they are converted according to the rules of floating-point *contagion* described in Section 12.1.1.2 (Contagion in Numeric Operations).  







#C(*real imag*) is equivalent to #.(complex (quote *real*) (quote *imag*)), except that #C is not affected by **\*read-eval\***. See the *function* **complex**. 



Figure 2–21 contains examples of the use of #C. 



|<p>#C(3.0s1 2.0s-1) ;A <GlossaryTerm styled={true} term={"complex"}><i>complex</i></GlossaryTerm> with *small float* parts. </p><p>#C(5 -3) ;A “Gaussian integer” </p><p>#C(5/3 7.0) ;Will be converted internally to #C(1.66666 7.0) #C(0 1) ;The imaginary unit; that is, i.</p>|

| :- |





**Figure 2–21. Complex Number Example** 



For further information, see Section 22.1.3.1.4 (Printing Complexes) and Section 2.3.2.3 (Syntax of a Complex). 



