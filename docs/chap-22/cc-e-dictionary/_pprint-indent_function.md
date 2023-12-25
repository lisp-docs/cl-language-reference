**pprint-indent** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"pprint-indent"}><b>pprint-indent</b></DictionaryLink> *relative-to n* &amp;optional *stream →* <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> 



**Arguments and Values:** 



*relative-to*—either :block or :current. 



*n*—a *real*. 



<GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>—an *output stream designator* . The default is *standard output*. 







 



 



**Description:** 



<DictionaryLink styled={true} term={"pprint-indent"}><b>pprint-indent</b></DictionaryLink> specifies the indentation to use in a logical block on <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>. If <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm> is a *pretty printing stream* and the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of <DictionaryLink styled={true} term={"print-pretty"}><b>\*print-pretty\*</b></DictionaryLink> is <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm>, <DictionaryLink styled={true} term={"pprint-indent"}><b>pprint-indent</b></DictionaryLink> sets the indentation in the innermost dynamically enclosing logical block; otherwise, <DictionaryLink styled={true} term={"pprint-indent"}><b>pprint-indent</b></DictionaryLink> has no effect. 



*N* specifies the indentation in <GlossaryTerm styled={true} term={"em"}><i>ems</i></GlossaryTerm>. If *relative-to* is :block, the indentation is set to the horizontal position of the first character in the *dynamically current logical block* plus *n ems*. If *relative-to* is :current, the indentation is set to the current output position plus *n ems*. (For robustness in the face of variable-width fonts, it is advisable to use :current with an *n* of zero whenever possible.) 



*N* can be negative; however, the total indentation cannot be moved left of the beginning of the line or left of the end of the rightmost per-line prefix—an attempt to move beyond one of these limits is treated the same as an attempt to move to that limit. Changes in indentation caused by *pprint-indent* do not take effect until after the next line break. In addition, in miser mode all calls to <DictionaryLink styled={true} term={"pprint-indent"}><b>pprint-indent</b></DictionaryLink> are ignored, forcing the lines corresponding to the logical block to line up under the first character in the block. 



**Exceptional Situations:** 



An error is signaled if *relative-to* is any <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> other than :block or :current. 



**See Also:** 



Section 22.3.5.3 (Tilde I: Indent) 



