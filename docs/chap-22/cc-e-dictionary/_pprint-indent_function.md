**pprint-indent** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"pprint-indent"}><b>pprint-indent</b></ClLinks> *relative-to n* &amp;optional *stream →* <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> 



**Arguments and Values:** 



*relative-to*—either :block or :current. 



*n*—a *real*. 



<ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>—an *output stream designator* . The default is <GlossaryTerm styled={true} term={"standard output"}><i>standard output</i></GlossaryTerm>. 







 



 



**Description:** 



<ClLinks styled={true} term={"pprint-indent"}><b>pprint-indent</b></ClLinks> specifies the indentation to use in a logical block on <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>. If <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks> is a <GlossaryTerm styled={true} term={"pretty printing stream"}><i>pretty printing stream</i></GlossaryTerm> and the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of <ClLinks styled={true} term={"print-pretty"}><b>\*print-pretty\*</b></ClLinks> is <ClLinks styled={true} term={"true"}><i>true</i></ClLinks>, <ClLinks styled={true} term={"pprint-indent"}><b>pprint-indent</b></ClLinks> sets the indentation in the innermost dynamically enclosing logical block; otherwise, <ClLinks styled={true} term={"pprint-indent"}><b>pprint-indent</b></ClLinks> has no effect. 



*N* specifies the indentation in <ClLinks styled={true} term={"em"}><i>ems</i></ClLinks>. If *relative-to* is :block, the indentation is set to the horizontal position of the first character in the *dynamically current logical block* plus *n ems*. If *relative-to* is :current, the indentation is set to the current output position plus *n ems*. (For robustness in the face of variable-width fonts, it is advisable to use :current with an *n* of zero whenever possible.) 



*N* can be negative; however, the total indentation cannot be moved left of the beginning of the line or left of the end of the rightmost per-line prefix—an attempt to move beyond one of these limits is treated the same as an attempt to move to that limit. Changes in indentation caused by *pprint-indent* do not take effect until after the next line break. In addition, in miser mode all calls to <ClLinks styled={true} term={"pprint-indent"}><b>pprint-indent</b></ClLinks> are ignored, forcing the lines corresponding to the logical block to line up under the first character in the block. 



**Exceptional Situations:** 



An error is signaled if *relative-to* is any <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> other than :block or :current. 



**See Also:** 



Section 22.3.5.3 (Tilde I: Indent) 



