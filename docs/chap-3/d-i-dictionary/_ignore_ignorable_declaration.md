**ignore, ignorable** <ClLinks styled={true} term={"declaration"}><i>Declaration</i></ClLinks> 



**Syntax:** 



(ignore *\{var* | (<ClLinks styled={true} term={"function"}><b>function</b></ClLinks> *fn*)*\}*\*) 



(ignorable *\{var* | (<ClLinks styled={true} term={"function"}><b>function</b></ClLinks> *fn*)*\}*\*) 



**Arguments:** 



*var*—a *variable name*. 



*fn*—a *function name*. 



**Valid Context:** 



<ClLinks styled={true} term={"declaration"}><i>declaration</i></ClLinks> 



**Binding Types Aected:** 



<ClLinks styled={true} term={"variable"}><i>variable</i></ClLinks>, <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> 



**Description:** 



The <ClLinks styled={true} term={"ignore"}><b>ignore</b></ClLinks> and <ClLinks styled={true} term={"ignorable"}><b>ignorable</b></ClLinks> declarations refer to *for-value references* to *variable bindings* for the *vars* and to *function bindings* for the *fns*. 



An <ClLinks styled={true} term={"ignore"}><b>ignore</b></ClLinks> <ClLinks styled={true} term={"declaration"}><i>declaration</i></ClLinks> specifies that *for-value references* to the indicated <ClLinks styled={true} term={"binding"}><i>bindings</i></ClLinks> will not occur within the scope of the <ClLinks styled={true} term={"declaration"}><i>declaration</i></ClLinks>. Within the <ClLinks styled={true} term={"scope"}><i>scope</i></ClLinks> of such a <ClLinks styled={true} term={"declaration"}><i>declaration</i></ClLinks>, it is desirable for a compiler to issue a warning about the presence of either a *for-value reference* to any *var* or *fn*, or a <ClLinks styled={true} term={"special"}><b>special</b></ClLinks> <ClLinks styled={true} term={"declaration"}><i>declaration</i></ClLinks> for any *var*. 







 



 



An <ClLinks styled={true} term={"ignorable"}><b>ignorable</b></ClLinks> <ClLinks styled={true} term={"declaration"}><i>declaration</i></ClLinks> specifies that *for-value references* to the indicated <ClLinks styled={true} term={"binding"}><i>bindings</i></ClLinks> might or might not occur within the scope of the <ClLinks styled={true} term={"declaration"}><i>declaration</i></ClLinks>. Within the <ClLinks styled={true} term={"scope"}><i>scope</i></ClLinks> of such a <ClLinks styled={true} term={"declaration"}><i>declaration</i></ClLinks>, it is not desirable for a compiler to issue a warning about the presence or absence of either a *for-value reference* to any *var* or *fn*, or a <ClLinks styled={true} term={"special"}><b>special</b></ClLinks> <ClLinks styled={true} term={"declaration"}><i>declaration</i></ClLinks> for any *var*. 



When not within the <ClLinks styled={true} term={"scope"}><i>scope</i></ClLinks> of a <ClLinks styled={true} term={"ignore"}><b>ignore</b></ClLinks> or <ClLinks styled={true} term={"ignorable"}><b>ignorable</b></ClLinks> <ClLinks styled={true} term={"declaration"}><i>declaration</i></ClLinks>, it is desirable for a compiler to issue a warning about any *var* for which there is neither a *for-value reference* nor a <ClLinks styled={true} term={"special"}><b>special</b></ClLinks> <ClLinks styled={true} term={"declaration"}><i>declaration</i></ClLinks>, or about any *fn* for which there is no *for-value reference*. 



Any warning about a “used” or “unused” <ClLinks styled={true} term={"binding"}><i>binding</i></ClLinks> must be of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"style-warning"}><b>style-warning</b></ClLinks>, and may not a↵ect program semantics. 



The *stream variables* established by <ClLinks styled={true} term={"with-open-file"}><b>with-open-file</b></ClLinks>, <ClLinks styled={true} term={"with-open-stream"}><b>with-open-stream</b></ClLinks>, <ClLinks styled={true} term={"with-input-from-string"}><b>with-input-from-string</b></ClLinks>, and <ClLinks styled={true} term={"with-output-to-string"}><b>with-output-to-string</b></ClLinks>, and all *iteration variables* are, by definition, always “used”. Using (declare (ignore *v*)), for such a *variable v* has unspecified consequences. 



**See Also:** 



<ClLinks styled={true} term={"declare"}><b>declare</b></ClLinks> 



