**ignore, ignorable** <GlossaryTerm styled={true} term={"declaration"}><i>Declaration</i></GlossaryTerm> 



**Syntax:** 



(ignore *\{var* | (<DictionaryLink styled={true} term={"function"}><b>function</b></DictionaryLink> *fn*)*\}*\*) 



(ignorable *\{var* | (<DictionaryLink styled={true} term={"function"}><b>function</b></DictionaryLink> *fn*)*\}*\*) 



**Arguments:** 



*var*—a *variable name*. 



*fn*—a *function name*. 



**Valid Context:** 



<GlossaryTerm styled={true} term={"declaration"}><i>declaration</i></GlossaryTerm> 



**Binding Types Aected:** 



<GlossaryTerm styled={true} term={"variable"}><i>variable</i></GlossaryTerm>, <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> 



**Description:** 



The <DictionaryLink styled={true} term={"ignore"}><b>ignore</b></DictionaryLink> and <DictionaryLink styled={true} term={"ignorable"}><b>ignorable</b></DictionaryLink> declarations refer to *for-value references* to *variable bindings* for the *vars* and to *function bindings* for the *fns*. 



An <DictionaryLink styled={true} term={"ignore"}><b>ignore</b></DictionaryLink> <GlossaryTerm styled={true} term={"declaration"}><i>declaration</i></GlossaryTerm> specifies that *for-value references* to the indicated <GlossaryTerm styled={true} term={"binding"}><i>bindings</i></GlossaryTerm> will not occur within the scope of the <GlossaryTerm styled={true} term={"declaration"}><i>declaration</i></GlossaryTerm>. Within the <GlossaryTerm styled={true} term={"scope"}><i>scope</i></GlossaryTerm> of such a <GlossaryTerm styled={true} term={"declaration"}><i>declaration</i></GlossaryTerm>, it is desirable for a compiler to issue a warning about the presence of either a *for-value reference* to any *var* or *fn*, or a <DictionaryLink styled={true} term={"special"}><b>special</b></DictionaryLink> <GlossaryTerm styled={true} term={"declaration"}><i>declaration</i></GlossaryTerm> for any *var*. 







 



 



An <DictionaryLink styled={true} term={"ignorable"}><b>ignorable</b></DictionaryLink> <GlossaryTerm styled={true} term={"declaration"}><i>declaration</i></GlossaryTerm> specifies that *for-value references* to the indicated <GlossaryTerm styled={true} term={"binding"}><i>bindings</i></GlossaryTerm> might or might not occur within the scope of the <GlossaryTerm styled={true} term={"declaration"}><i>declaration</i></GlossaryTerm>. Within the <GlossaryTerm styled={true} term={"scope"}><i>scope</i></GlossaryTerm> of such a <GlossaryTerm styled={true} term={"declaration"}><i>declaration</i></GlossaryTerm>, it is not desirable for a compiler to issue a warning about the presence or absence of either a *for-value reference* to any *var* or *fn*, or a <DictionaryLink styled={true} term={"special"}><b>special</b></DictionaryLink> <GlossaryTerm styled={true} term={"declaration"}><i>declaration</i></GlossaryTerm> for any *var*. 



When not within the <GlossaryTerm styled={true} term={"scope"}><i>scope</i></GlossaryTerm> of a <DictionaryLink styled={true} term={"ignore"}><b>ignore</b></DictionaryLink> or <DictionaryLink styled={true} term={"ignorable"}><b>ignorable</b></DictionaryLink> <GlossaryTerm styled={true} term={"declaration"}><i>declaration</i></GlossaryTerm>, it is desirable for a compiler to issue a warning about any *var* for which there is neither a *for-value reference* nor a <DictionaryLink styled={true} term={"special"}><b>special</b></DictionaryLink> <GlossaryTerm styled={true} term={"declaration"}><i>declaration</i></GlossaryTerm>, or about any *fn* for which there is no *for-value reference*. 



Any warning about a “used” or “unused” <GlossaryTerm styled={true} term={"binding"}><i>binding</i></GlossaryTerm> must be of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"style-warning"}><b>style-warning</b></DictionaryLink>, and may not a↵ect program semantics. 



The *stream variables* established by <DictionaryLink styled={true} term={"with-open-file"}><b>with-open-file</b></DictionaryLink>, <DictionaryLink styled={true} term={"with-open-stream"}><b>with-open-stream</b></DictionaryLink>, <DictionaryLink styled={true} term={"with-input-from-string"}><b>with-input-from-string</b></DictionaryLink>, and <DictionaryLink styled={true} term={"with-output-to-string"}><b>with-output-to-string</b></DictionaryLink>, and all *iteration variables* are, by definition, always “used”. Using (declare (ignore *v*)), for such a *variable v* has unspecified consequences. 



**See Also:** 



<DictionaryLink styled={true} term={"declare"}><b>declare</b></DictionaryLink> 



