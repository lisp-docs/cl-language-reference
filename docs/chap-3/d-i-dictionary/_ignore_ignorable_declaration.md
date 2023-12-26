**ignore, ignorable** <ClLinks  term={"declaration"}><i>Declaration</i></ClLinks> 



**Syntax:** 



(ignore *\{var* | (<ClLinks  term={"function"}><b>function</b></ClLinks> *fn*)*\}*\*) 



(ignorable *\{var* | (<ClLinks  term={"function"}><b>function</b></ClLinks> *fn*)*\}*\*) 



**Arguments:** 



*var*—a *variable name*. 



*fn*—a <GlossaryTerm styled={true} term={"function name"}><i>function name</i></GlossaryTerm>. 



**Valid Context:** 



<ClLinks  term={"declaration"}><i>declaration</i></ClLinks> 



**Binding Types Aected:** 



<ClLinks  term={"variable"}><i>variable</i></ClLinks>, <ClLinks  term={"function"}><i>function</i></ClLinks> 



**Description:** 



The <ClLinks  term={"ignore"}><b>ignore</b></ClLinks> and <ClLinks  term={"ignorable"}><b>ignorable</b></ClLinks> declarations refer to *for-value references* to *variable bindings* for the *vars* and to *function bindings* for the *fns*. 



An <ClLinks  term={"ignore"}><b>ignore</b></ClLinks> <ClLinks  term={"declaration"}><i>declaration</i></ClLinks> specifies that *for-value references* to the indicated <ClLinks  term={"binding"}><i>bindings</i></ClLinks> will not occur within the scope of the <ClLinks  term={"declaration"}><i>declaration</i></ClLinks>. Within the <ClLinks  term={"scope"}><i>scope</i></ClLinks> of such a <ClLinks  term={"declaration"}><i>declaration</i></ClLinks>, it is desirable for a compiler to issue a warning about the presence of either a *for-value reference* to any *var* or *fn*, or a <ClLinks  term={"special"}><b>special</b></ClLinks> <ClLinks  term={"declaration"}><i>declaration</i></ClLinks> for any *var*. 







 



 



An <ClLinks  term={"ignorable"}><b>ignorable</b></ClLinks> <ClLinks  term={"declaration"}><i>declaration</i></ClLinks> specifies that *for-value references* to the indicated <ClLinks  term={"binding"}><i>bindings</i></ClLinks> might or might not occur within the scope of the <ClLinks  term={"declaration"}><i>declaration</i></ClLinks>. Within the <ClLinks  term={"scope"}><i>scope</i></ClLinks> of such a <ClLinks  term={"declaration"}><i>declaration</i></ClLinks>, it is not desirable for a compiler to issue a warning about the presence or absence of either a *for-value reference* to any *var* or *fn*, or a <ClLinks  term={"special"}><b>special</b></ClLinks> <ClLinks  term={"declaration"}><i>declaration</i></ClLinks> for any *var*. 



When not within the <ClLinks  term={"scope"}><i>scope</i></ClLinks> of a <ClLinks  term={"ignore"}><b>ignore</b></ClLinks> or <ClLinks  term={"ignorable"}><b>ignorable</b></ClLinks> <ClLinks  term={"declaration"}><i>declaration</i></ClLinks>, it is desirable for a compiler to issue a warning about any *var* for which there is neither a *for-value reference* nor a <ClLinks  term={"special"}><b>special</b></ClLinks> <ClLinks  term={"declaration"}><i>declaration</i></ClLinks>, or about any *fn* for which there is no *for-value reference*. 



Any warning about a “used” or “unused” <ClLinks  term={"binding"}><i>binding</i></ClLinks> must be of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"style-warning"}><b>style-warning</b></ClLinks>, and may not a↵ect program semantics. 



The <GlossaryTerm styled={true} term={"stream variable"}><i>stream variables</i></GlossaryTerm> established by <ClLinks  term={"with-open-file"}><b>with-open-file</b></ClLinks>, <ClLinks  term={"with-open-stream"}><b>with-open-stream</b></ClLinks>, <ClLinks  term={"with-input-from-string"}><b>with-input-from-string</b></ClLinks>, and <ClLinks  term={"with-output-to-string"}><b>with-output-to-string</b></ClLinks>, and all <GlossaryTerm styled={true} term={"iteration variable"}><i>iteration variables</i></GlossaryTerm> are, by definition, always “used”. Using (declare (ignore *v*)), for such a *variable v* has unspecified consequences. 



**See Also:** 



<ClLinks  term={"declare"}><b>declare</b></ClLinks> 



