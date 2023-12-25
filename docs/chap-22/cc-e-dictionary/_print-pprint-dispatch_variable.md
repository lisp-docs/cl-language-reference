*∗<DictionaryLink styled={true} term={"print-pprint-dispatch"}><b>*print-pprint-dispatch*</b></DictionaryLink>∗ Variable* 



**Value Type:** 



a *pprint dispatch table*. 



**Initial Value:** 



<GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm>, but the initial entries all use a special class of priorities that have the property that they are less than every priority that can be specified using <DictionaryLink styled={true} term={"set-pprint-dispatch"}><b>set-pprint-dispatch</b></DictionaryLink>, so that the initial contents of any entry can be overridden. 



**Description:** 



The *pprint dispatch table* which currently controls the *pretty printer* . 



**See Also:** 



<DictionaryLink styled={true} term={"print-pretty"}><b>\*print-pretty\*</b></DictionaryLink>, Section 22.2.1.4 (Pretty Print Dispatch Tables) 



**Notes:** 



The intent is that the initial <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of this <GlossaryTerm styled={true} term={"variable"}><i>variable</i></GlossaryTerm> should cause ‘traditional’ *pretty printing* of <GlossaryTerm styled={true} term={"code"}><i>code</i></GlossaryTerm>. In general, however, you can put a value in <DictionaryLink styled={true} term={"print-pprint-dispatch"}><b>\*print-pprint-dispatch\*</b></DictionaryLink> that makes pretty-printed output look exactly like non-pretty-printed output. Setting <DictionaryLink styled={true} term={"print-pretty"}><b>\*print-pretty\*</b></DictionaryLink> to <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm> just causes the functions contained in the *current pprint dispatch table* to have priority over normal <DictionaryLink styled={true} term={"print-object"}><b>print-object</b></DictionaryLink> methods; it has no magic way of enforcing that those functions actually produce pretty output. For details, see Section 22.2.1.4 (Pretty Print Dispatch Tables). 



