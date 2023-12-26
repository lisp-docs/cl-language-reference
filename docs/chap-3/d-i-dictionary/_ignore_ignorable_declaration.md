**ignore, ignorable** <ClLinks  term={"declaration"}><i>Declaration</i></ClLinks> 



**Syntax:** 



(ignore *\{var* | (<DictionaryLink  term={"function"}><b>function</b></DictionaryLink> *fn*)*\}*\*) 



(ignorable *\{var* | (<DictionaryLink  term={"function"}><b>function</b></DictionaryLink> *fn*)*\}*\*) 



**Arguments:** 



*var*—a *variable name*. 



*fn*—a <GlossaryTerm styled={true} term={"function name"}><i>function name</i></GlossaryTerm>. 



**Valid Context:** 



<ClLinks  term={"declaration"}><i>declaration</i></ClLinks> 



**Binding Types Aected:** 



<ClLinks  term={"variable"}><i>variable</i></ClLinks>, <ClLinks  term={"function"}><i>function</i></ClLinks> 



**Description:** 



The <DictionaryLink  term={"ignore"}><b>ignore</b></DictionaryLink> and <DictionaryLink  term={"ignorable"}><b>ignorable</b></DictionaryLink> declarations refer to *for-value references* to *variable bindings* for the *vars* and to *function bindings* for the *fns*. 



An <DictionaryLink  term={"ignore"}><b>ignore</b></DictionaryLink> <ClLinks  term={"declaration"}><i>declaration</i></ClLinks> specifies that *for-value references* to the indicated <ClLinks  term={"binding"}><i>bindings</i></ClLinks> will not occur within the scope of the <ClLinks  term={"declaration"}><i>declaration</i></ClLinks>. Within the <ClLinks  term={"scope"}><i>scope</i></ClLinks> of such a <ClLinks  term={"declaration"}><i>declaration</i></ClLinks>, it is desirable for a compiler to issue a warning about the presence of either a *for-value reference* to any *var* or *fn*, or a <DictionaryLink  term={"special"}><b>special</b></DictionaryLink> <ClLinks  term={"declaration"}><i>declaration</i></ClLinks> for any *var*. 







 



 



An <DictionaryLink  term={"ignorable"}><b>ignorable</b></DictionaryLink> <ClLinks  term={"declaration"}><i>declaration</i></ClLinks> specifies that *for-value references* to the indicated <ClLinks  term={"binding"}><i>bindings</i></ClLinks> might or might not occur within the scope of the <ClLinks  term={"declaration"}><i>declaration</i></ClLinks>. Within the <ClLinks  term={"scope"}><i>scope</i></ClLinks> of such a <ClLinks  term={"declaration"}><i>declaration</i></ClLinks>, it is not desirable for a compiler to issue a warning about the presence or absence of either a *for-value reference* to any *var* or *fn*, or a <DictionaryLink  term={"special"}><b>special</b></DictionaryLink> <ClLinks  term={"declaration"}><i>declaration</i></ClLinks> for any *var*. 



When not within the <ClLinks  term={"scope"}><i>scope</i></ClLinks> of a <DictionaryLink  term={"ignore"}><b>ignore</b></DictionaryLink> or <DictionaryLink  term={"ignorable"}><b>ignorable</b></DictionaryLink> <ClLinks  term={"declaration"}><i>declaration</i></ClLinks>, it is desirable for a compiler to issue a warning about any *var* for which there is neither a *for-value reference* nor a <DictionaryLink  term={"special"}><b>special</b></DictionaryLink> <ClLinks  term={"declaration"}><i>declaration</i></ClLinks>, or about any *fn* for which there is no *for-value reference*. 



Any warning about a “used” or “unused” <ClLinks  term={"binding"}><i>binding</i></ClLinks> must be of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"style-warning"}><b>style-warning</b></DictionaryLink>, and may not a↵ect program semantics. 



The <GlossaryTerm styled={true} term={"stream variable"}><i>stream variables</i></GlossaryTerm> established by <DictionaryLink  term={"with-open-file"}><b>with-open-file</b></DictionaryLink>, <DictionaryLink  term={"with-open-stream"}><b>with-open-stream</b></DictionaryLink>, <DictionaryLink  term={"with-input-from-string"}><b>with-input-from-string</b></DictionaryLink>, and <DictionaryLink  term={"with-output-to-string"}><b>with-output-to-string</b></DictionaryLink>, and all <GlossaryTerm styled={true} term={"iteration variable"}><i>iteration variables</i></GlossaryTerm> are, by definition, always “used”. Using (declare (ignore *v*)), for such a *variable v* has unspecified consequences. 



**See Also:** 



<DictionaryLink  term={"declare"}><b>declare</b></DictionaryLink> 



