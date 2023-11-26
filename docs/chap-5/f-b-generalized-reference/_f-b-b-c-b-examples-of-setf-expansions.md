**5.1.1.2.1 Examples of Setf Expansions** 

Examples of the contents of the constituents of *setf expansions* follow. 

For a variable *x*: 

|\<p\>() ;list of temporary variables \</p\>\<p\>() ;list of value forms \</p\>\<p\>(g0001) ;list of store variables \</p\>\<p\>(setq *x* g0001) ;storing form \</p\>\<p\>*x* ;accessing form\</p\>|
| :- |


**Figure 5–3. Sample Setf Expansion of a Variable** 

For (car *exp*): 

|\<p\>(g0002) ;list of temporary variables (*exp*) ;list of value forms \</p\>\<p\>(g0003) ;list of store variables \</p\>\<p\>(progn (rplaca g0002 g0003) g0003) ;storing form \</p\>\<p\>(car g0002) ;accessing form\</p\>|
| :- |


**Figure 5–4. Sample Setf Expansion of a CAR Form** 

For (subseq *seq s e*): 

|\<p\>(g0004 g0005 g0006) ;list of temporary variables \</p\>\<p\>(*seq s e*) ;list of value forms \</p\>\<p\>(g0007) ;list of store variables \</p\>\<p\>(progn (replace g0004 g0007 :start1 g0005 :end1 g0006) g0007) \</p\>\<p\>;storing form \</p\>\<p\>(subseq g0004 g0005 g0006) ; accessing form\</p\>|
| :- |


**Figure 5–5. Sample Setf Expansion of a SUBSEQ Form** 







In some cases, if a *subform* of a *place* is itself a *place*, it is necessary to expand the *subform* in order to compute some of the values in the expansion of the outer *place*. For (ldb *bs* (car *exp*)): 

|\<p\>(g0001 g0002) ;list of temporary variables \</p\>\<p\>(*bs exp*) ;list of value forms \</p\>\<p\>(g0003) ;list of store variables \</p\>\<p\>(progn (rplaca g0002 (dpb g0003 g0001 (car g0002))) g0003) \</p\>\<p\>;storing form \</p\>\<p\>(ldb g0001 (car g0002)) ; accessing form\</p\>|
| :- |


**Figure 5–6. Sample Setf Expansion of a LDB Form** 

