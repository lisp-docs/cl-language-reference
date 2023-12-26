**ignore, ignorable** <GlossaryTerm  term={"declaration"}><i>Declaration</i></GlossaryTerm> 



**Syntax:** 



(ignore *\{var* | (<DictionaryLink  term={"function"}><b>function</b></DictionaryLink> *fn*)*\}*\*) 



(ignorable *\{var* | (<DictionaryLink  term={"function"}><b>function</b></DictionaryLink> *fn*)*\}*\*) 



**Arguments:** 



*var*—a *variable name*. 



*fn*—a <GlossaryTerm styled={true} term={"function name"}><i>function name</i></GlossaryTerm>. 



**Valid Context:** 



<GlossaryTerm  term={"declaration"}><i>declaration</i></GlossaryTerm> 



**Binding Types Aected:** 



<GlossaryTerm  term={"variable"}><i>variable</i></GlossaryTerm>, <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> 



**Description:** 



The <DictionaryLink  term={"ignore"}><b>ignore</b></DictionaryLink> and <DictionaryLink  term={"ignorable"}><b>ignorable</b></DictionaryLink> declarations refer to *for-value references* to *variable bindings* for the *vars* and to *function bindings* for the *fns*. 



An <DictionaryLink  term={"ignore"}><b>ignore</b></DictionaryLink> <GlossaryTerm  term={"declaration"}><i>declaration</i></GlossaryTerm> specifies that *for-value references* to the indicated <GlossaryTerm  term={"binding"}><i>bindings</i></GlossaryTerm> will not occur within the scope of the <GlossaryTerm  term={"declaration"}><i>declaration</i></GlossaryTerm>. Within the <GlossaryTerm  term={"scope"}><i>scope</i></GlossaryTerm> of such a <GlossaryTerm  term={"declaration"}><i>declaration</i></GlossaryTerm>, it is desirable for a compiler to issue a warning about the presence of either a *for-value reference* to any *var* or *fn*, or a <DictionaryLink  term={"special"}><b>special</b></DictionaryLink> <GlossaryTerm  term={"declaration"}><i>declaration</i></GlossaryTerm> for any *var*. 







 



 



An <DictionaryLink  term={"ignorable"}><b>ignorable</b></DictionaryLink> <GlossaryTerm  term={"declaration"}><i>declaration</i></GlossaryTerm> specifies that *for-value references* to the indicated <GlossaryTerm  term={"binding"}><i>bindings</i></GlossaryTerm> might or might not occur within the scope of the <GlossaryTerm  term={"declaration"}><i>declaration</i></GlossaryTerm>. Within the <GlossaryTerm  term={"scope"}><i>scope</i></GlossaryTerm> of such a <GlossaryTerm  term={"declaration"}><i>declaration</i></GlossaryTerm>, it is not desirable for a compiler to issue a warning about the presence or absence of either a *for-value reference* to any *var* or *fn*, or a <DictionaryLink  term={"special"}><b>special</b></DictionaryLink> <GlossaryTerm  term={"declaration"}><i>declaration</i></GlossaryTerm> for any *var*. 



When not within the <GlossaryTerm  term={"scope"}><i>scope</i></GlossaryTerm> of a <DictionaryLink  term={"ignore"}><b>ignore</b></DictionaryLink> or <DictionaryLink  term={"ignorable"}><b>ignorable</b></DictionaryLink> <GlossaryTerm  term={"declaration"}><i>declaration</i></GlossaryTerm>, it is desirable for a compiler to issue a warning about any *var* for which there is neither a *for-value reference* nor a <DictionaryLink  term={"special"}><b>special</b></DictionaryLink> <GlossaryTerm  term={"declaration"}><i>declaration</i></GlossaryTerm>, or about any *fn* for which there is no *for-value reference*. 



Any warning about a “used” or “unused” <GlossaryTerm  term={"binding"}><i>binding</i></GlossaryTerm> must be of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"style-warning"}><b>style-warning</b></DictionaryLink>, and may not a↵ect program semantics. 



The <GlossaryTerm styled={true} term={"stream variable"}><i>stream variables</i></GlossaryTerm> established by <DictionaryLink  term={"with-open-file"}><b>with-open-file</b></DictionaryLink>, <DictionaryLink  term={"with-open-stream"}><b>with-open-stream</b></DictionaryLink>, <DictionaryLink  term={"with-input-from-string"}><b>with-input-from-string</b></DictionaryLink>, and <DictionaryLink  term={"with-output-to-string"}><b>with-output-to-string</b></DictionaryLink>, and all <GlossaryTerm styled={true} term={"iteration variable"}><i>iteration variables</i></GlossaryTerm> are, by definition, always “used”. Using (declare (ignore *v*)), for such a *variable v* has unspecified consequences. 



**See Also:** 



<DictionaryLink  term={"declare"}><b>declare</b></DictionaryLink> 



