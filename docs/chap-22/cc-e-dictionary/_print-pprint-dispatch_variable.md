*∗<ClLinks styled={true} term={"print-pprint-dispatch"}><b>*print-pprint-dispatch*</b></ClLinks>∗ Variable* 



**Value Type:** 



a *pprint dispatch table*. 



**Initial Value:** 



<ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks>, but the initial entries all use a special class of priorities that have the property that they are less than every priority that can be specified using <ClLinks styled={true} term={"set-pprint-dispatch"}><b>set-pprint-dispatch</b></ClLinks>, so that the initial contents of any entry can be overridden. 



**Description:** 



The *pprint dispatch table* which currently controls the *pretty printer* . 



**See Also:** 



<ClLinks styled={true} term={"print-pretty"}><b>\*print-pretty\*</b></ClLinks>, Section 22.2.1.4 (Pretty Print Dispatch Tables) 



**Notes:** 



The intent is that the initial <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of this <ClLinks styled={true} term={"variable"}><i>variable</i></ClLinks> should cause ‘traditional’ *pretty printing* of <ClLinks styled={true} term={"code"}><i>code</i></ClLinks>. In general, however, you can put a value in <ClLinks styled={true} term={"print-pprint-dispatch"}><b>\*print-pprint-dispatch\*</b></ClLinks> that makes pretty-printed output look exactly like non-pretty-printed output. Setting <ClLinks styled={true} term={"print-pretty"}><b>\*print-pretty\*</b></ClLinks> to <ClLinks styled={true} term={"true"}><i>true</i></ClLinks> just causes the functions contained in the *current pprint dispatch table* to have priority over normal <ClLinks styled={true} term={"print-object"}><b>print-object</b></ClLinks> methods; it has no magic way of enforcing that those functions actually produce pretty output. For details, see Section 22.2.1.4 (Pretty Print Dispatch Tables). 



