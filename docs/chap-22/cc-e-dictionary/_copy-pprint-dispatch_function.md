**copy-pprint-dispatch** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"copy-pprint-dispatch"}><b>copy-pprint-dispatch</b></ClLinks> &amp;optional *table → new-table* 



**Arguments and Values:** 



*table*—a *pprint dispatch table*, or <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 



*new-table*—a *fresh pprint dispatch table*. 



**Description:** 



Creates and returns a copy of the specified *table*, or of the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of <ClLinks styled={true} term={"print-pprint-dispatch"}><b>\*print-pprint-dispatch\*</b></ClLinks> if no *table* is specified, or of the initial <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of <ClLinks styled={true} term={"print-pprint-dispatch"}><b>\*print-pprint-dispatch\*</b></ClLinks> if <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> is specified. 



**Exceptional Situations:** 



Should signal an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"type-error"}><b>type-error</b></ClLinks> if *table* is not a *pprint dispatch table*. 



