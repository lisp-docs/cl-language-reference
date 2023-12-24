**storage-condition** *Condition Type* 



**Class Precedence List:** 



<ClLinks styled={true} term={"storage-condition"}><b>storage-condition</b></ClLinks>, <ClLinks styled={true} term={"serious-condition"}><b>serious-condition</b></ClLinks>, <ClLinks styled={true} term={"condition"}><b>condition</b></ClLinks>, <ClLinks styled={true} term={"t"}><b>t</b></ClLinks> 



**Description:** 



The <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"storage-condition"}><b>storage-condition</b></ClLinks> consists of serious conditions that relate to problems with memory management that are potentially due to <ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks> limits rather than semantic errors in *conforming programs*, and that typically warrant entry to the debugger if not handled. 



Depending on the details of the <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks>, these might include such problems as stack overflow, memory region overflow, and storage exhausted. 



**Notes:** 



While some Common Lisp operations might signal *storage-condition* because they are defined to create <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks>, it is unspecified whether operations that are not defined to create <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks> create them anyway and so might also signal <ClLinks styled={true} term={"storage-condition"}><b>storage-condition</b></ClLinks>. Likewise, the evaluator itself might create <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks> and so might signal <ClLinks styled={true} term={"storage-condition"}><b>storage-condition</b></ClLinks>. (The natural assumption might be that such <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> creation is naturally inefficient, but even that is <ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks>.) In general, the entire question of how storage allocation is done is <ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks>, and so any operation might signal <ClLinks styled={true} term={"storage-condition"}><b>storage-condition</b></ClLinks> at any time. Because such a <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks> is indicative of a limitation of the <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks> or of the *image* rather than an error in a <ClLinks styled={true} term={"program"}><i>program</i></ClLinks>, <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks> of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"storage-condition"}><b>storage-condition</b></ClLinks> are not of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"error"}><b>error</b></ClLinks>. 



