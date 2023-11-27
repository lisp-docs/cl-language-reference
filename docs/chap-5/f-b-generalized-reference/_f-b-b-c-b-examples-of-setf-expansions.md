 

Examples of the contents of the constituents of *setf expansions* follow. 

For a variable *x*: 

|&#60;p&#62;() ;list of temporary variables &#60;/p&#62;&#60;p&#62;() ;list of value forms &#60;/p&#62;&#60;p&#62;(g0001) ;list of store variables &#60;/p&#62;&#60;p&#62;(setq *x* g0001) ;storing form &#60;/p&#62;&#60;p&#62;*x* ;accessing form&#60;/p&#62;|
| :- |


**Figure 5–3. Sample Setf Expansion of a Variable** 

For (car *exp*): 

|&#60;p&#62;(g0002) ;list of temporary variables (*exp*) ;list of value forms &#60;/p&#62;&#60;p&#62;(g0003) ;list of store variables &#60;/p&#62;&#60;p&#62;(progn (rplaca g0002 g0003) g0003) ;storing form &#60;/p&#62;&#60;p&#62;(car g0002) ;accessing form&#60;/p&#62;|
| :- |


**Figure 5–4. Sample Setf Expansion of a CAR Form** 

For (subseq *seq s e*): 

|&#60;p&#62;(g0004 g0005 g0006) ;list of temporary variables &#60;/p&#62;&#60;p&#62;(*seq s e*) ;list of value forms &#60;/p&#62;&#60;p&#62;(g0007) ;list of store variables &#60;/p&#62;&#60;p&#62;(progn (replace g0004 g0007 :start1 g0005 :end1 g0006) g0007) &#60;/p&#62;&#60;p&#62;;storing form &#60;/p&#62;&#60;p&#62;(subseq g0004 g0005 g0006) ; accessing form&#60;/p&#62;|
| :- |


**Figure 5–5. Sample Setf Expansion of a SUBSEQ Form** 







In some cases, if a *subform* of a *place* is itself a *place*, it is necessary to expand the *subform* in order to compute some of the values in the expansion of the outer *place*. For (ldb *bs* (car *exp*)): 

|&#60;p&#62;(g0001 g0002) ;list of temporary variables &#60;/p&#62;&#60;p&#62;(*bs exp*) ;list of value forms &#60;/p&#62;&#60;p&#62;(g0003) ;list of store variables &#60;/p&#62;&#60;p&#62;(progn (rplaca g0002 (dpb g0003 g0001 (car g0002))) g0003) &#60;/p&#62;&#60;p&#62;;storing form &#60;/p&#62;&#60;p&#62;(ldb g0001 (car g0002)) ; accessing form&#60;/p&#62;|
| :- |


**Figure 5–6. Sample Setf Expansion of a LDB Form** 

