 



<GlossaryTerm styled={true} term={"type specifier"}><i>Type specifiers</i></GlossaryTerm> can be <GlossaryTerm  term={"symbol"}><i>symbols</i></GlossaryTerm>, *classes*, or <GlossaryTerm  term={"list"}><i>lists</i></GlossaryTerm>. Figure 4–2 lists <GlossaryTerm  term={"symbol"}><i>symbols</i></GlossaryTerm> that are *standardized atomic type specifiers*, and Figure 4–3 lists *standardized compound type specifier names*. For syntax information, see the dictionary entry for the corresponding <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> . It is possible to define new <GlossaryTerm styled={true} term={"type specifier"}><i>type specifiers</i></GlossaryTerm> using <DictionaryLink  term={"defclass"}><b>defclass</b></DictionaryLink>, <DictionaryLink  term={"define-condition"}><b>define-condition</b></DictionaryLink>, <DictionaryLink  term={"defstruct"}><b>defstruct</b></DictionaryLink>, or <DictionaryLink  term={"deftype"}><b>deftype</b></DictionaryLink>.  





| **arithmetic-error** | **function** | **simple-condition** |
| :--- | :--- | :--- |
| **array** | **generic-function** | **simple-error** |
| **atom** | **hash-table** | **simple-string** |
| **base-char** | **integer** | **simple-type-error** |
| **base-string** | **keyword** | **simple-vector** |
| **bignum** | **list** | **simple-warning** |
| **bit** | **logical-pathname** | **single-float** |
| **bit-vector** | **long-float** | **standard-char** |
| **broadcast-stream** | **method** | **standard-class** |
| **built-in-class** | **method-combination** | **standard-generic-function** |
| **cell-error** | **nil** | **standard-method** |
| **character** | **null** | **standard-object** |
| **class** | **number** | **storage-condition** |
| **compiled-function** | **package** | **stream** |
| **complex** | **package-error** | **stream-error** |
| **concatenated-stream** | **parse-error** | **string** |
| **condition** | **pathname** | **string-stream** |
| **cons** | **print-not-readable** | **structure-class** |
| **control-error** | **program-error** | **structure-object** |
| **division-by-zero** | **random-state** | **style-warning** |
| **double-float** | **ratio** | **symbol** |
| **echo-stream** | **rational** | **synonym-stream** |
| **end-of-file** | **reader-error** | **t** |
| **error** | **readtable** | **two-way-stream** |
| **extended-char** | **real** | **type-error** |
| **file-error** | **restart** | **unbound-slot** |
| **file-stream** | **sequence** | **unbound-variable** |
| **fixnum** | **serious-condition** | **undefined-function** |
| **float** | **short-float** | **unsigned-byte** |
| **floating-point-inexact** | **signed-byte** | **vector** |
| **floating-point-invalid-operation** | **simple-array** | **warning** |
| **floating-point-overflow** | **simple-base-string** | |
| **floating-point-underflow** | **simple-bit-vector** | |





**Figure 4–2. Standardized Atomic Type Specifiers** 



If a <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> is a <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm>, the <GlossaryTerm  term={"car"}><i>car</i></GlossaryTerm> of the <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm> is a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>, and the rest of the <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm> is subsidiary <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> information. Such a <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> is called a <GlossaryTerm styled={true} term={"compound type specifier"}><i>compound type specifier</i></GlossaryTerm>. Except as explicitly stated otherwise, the subsidiary items can be unspecified. The unspecified subsidiary items are indicated by writing \*. For example, to completely specify a <GlossaryTerm  term={"vector"}><i>vector</i></GlossaryTerm> , the <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> of the elements and the length of the <GlossaryTerm  term={"vector"}><i>vector</i></GlossaryTerm> must be present. 



`(vector double-float 100)`



The following leaves the length unspecified:



"""lisp
(vector double-float *)
"""

The following leaves the element type unspecified:



`(vector * 100)`



Suppose that two <GlossaryTerm styled={true} term={"type specifier"}><i>type specifiers</i></GlossaryTerm> are the same except that the first has a \* where the second has a more explicit specification. Then the second denotes a <GlossaryTerm  term={"subtype"}><i>subtype</i></GlossaryTerm> of the <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> denoted by the first. 



If a <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm> has one or more unspecified items at the end, those items can be dropped. If dropping all occurrences of `*` results in a *singleton list*, then the parentheses can be dropped as well (the list can be replaced by the <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> in its <GlossaryTerm  term={"car"}><i>car</i></GlossaryTerm> ). For example, `(vector double-float *)` can be abbreviated to `(vector double-float)`, and `(vector * *)` can be abbreviated to `(vector)` and then to `vector`.



| **and** | **long-float** | **simple-array** |
| :--- | :--- | :--- |
| **array** | **member** | **simple-base-string** |
| **base-string** | **mod** | **simple-bit-vector** |
| **bit-vector** | **not** | **simple-string** |
| **complex** | **or** | **simple-vector** |
| **cons** | **rational** | **single-float** |
| **double-float** | **real** | **string** |
| **eql** | **satisfies** | **unsigned-byte** |
| **float** | **short-float** | **values** |
| **function** | **signed-byte** | **vector** |
| **integer** | | |





**Figure 4–3. Standardized Compound Type Specifier Names** 



Figure 4–4 show the <GlossaryTerm styled={true} term={"defined name"}><i>defined names</i></GlossaryTerm> that can be used as *compound type specifier names* but that cannot be used as <GlossaryTerm styled={true} term={"atomic type specifier"}><i>atomic type specifiers</i></GlossaryTerm>. 

| **and** | **mod** | **satisfies** |
| :--- | :--- | :--- |
| **eql** | **not** | **values** |
| **member** | **or** | |





**Figure 4–4. Standardized Compound-Only Type Specifier Names** 



New <GlossaryTerm styled={true} term={"type specifier"}><i>type specifiers</i></GlossaryTerm> can come into existence in two ways. 



*•* Defining a structure by using <DictionaryLink  term={"defstruct"}><b>defstruct</b></DictionaryLink> without using the :type specifier or defining a <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> by using <DictionaryLink  term={"defclass"}><b>defclass</b></DictionaryLink> or <DictionaryLink  term={"define-condition"}><b>define-condition</b></DictionaryLink> automatically causes the name of the structure or class to be a new *type specifier symbol*. 



*•* <DictionaryLink  term={"deftype"}><b>deftype</b></DictionaryLink> can be used to define <GlossaryTerm styled={true} term={"derived type specifier"}><i>derived type specifiers</i></GlossaryTerm>, which act as ‘abbreviations’ for other <GlossaryTerm styled={true} term={"type specifier"}><i>type specifiers</i></GlossaryTerm>. 



A *class object* can be used as a <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> . When used this way, it denotes the set of all members of that <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm>.



Figure 4–5 shows some <GlossaryTerm styled={true} term={"defined name"}><i>defined names</i></GlossaryTerm> relating to <GlossaryTerm  term={"type"}><i>types</i></GlossaryTerm> and <GlossaryTerm  term={"declaration"}><i>declarations</i></GlossaryTerm>. 

| **coerce** | **defstruct** | **subtypep** |
| :--- | :--- | :--- |
| **declaim** | **deftype** | **the** |
| **declare** | **ftype** | **type** |
| **defclass** | **locally** | **type-of** |
| **define-condition** | **proclaim** | **typep** |





**Figure 4–5. Defined names relating to types and declarations.** 



Figure 4–6 shows all <GlossaryTerm styled={true} term={"defined name"}><i>defined names</i></GlossaryTerm> that are *type specifier names*, whether for <GlossaryTerm styled={true} term={"atomic type specifier"}><i>atomic type specifiers</i></GlossaryTerm> or <GlossaryTerm styled={true} term={"compound type specifier"}><i>compound type specifiers</i></GlossaryTerm>; this list is the union of the lists in Figure 4–2 and Figure 4–3.  







| **and** | **extended-char** | **nil** | **serious-condition** | **standard-object** |
| :--- | :--- | :--- | :--- | :--- |
| **arithmetic-error** | **file-error** | **not** | **short-float** | **storage-condition** |
| **array** | **file-stream** | **null** | **signed-byte** | **stream** |
| **atom** | **fixnum** | **number** | **simple-array** | **stream-error** |
| **base-char** | **float** | **or** | **simple-base-string** | **string** |
| **base-string** | **floating-point-inexact** | **package** | **simple-bit-vector** | **string-stream** |
| **bignum** | **floating-point-invalid-operation** | **package-error** | **simple-condition** | **structure-class** |
| **bit** | **floating-point-overflow** | **parse-error** | **simple-error** | **structure-object** |
| **bit-vector** | **floating-point-underflow** | **pathname** | **simple-string** | **style-warning** |
| **broadcast-stream** | **function** | **print-not-readable** | **simple-type-error** | **symbol** |
| **built-in-class** | **generic-function** | **program-error** | **simple-vector** | **synonym-stream** |
| **cell-error** | **hash-table** | **random-state** | **simple-warning** | **t** |
| **character** | **integer** | **ratio** | **single-float** | **two-way-stream** |
| **class** | **keyword** | **rational** | **standard-char** | **type-error** |
| **compiled-function** | **list** | **reader-error** | **standard-class** | **unbound-slot** |
| **complex** | **logical-pathname** | **readtable** | **standard-generic-function** | **unbound-variable** |
| **concatenated-stream** | **long-float** | **real** | **standard-method** | **undefined-function** |
| **condition** | **member** | **restart** | **unsigned-byte** |
| **cons** | **method** | **satisfies** | **values** |
| **control-error** | **method-combination** | **sequence** | **vector** |
| **division-by-zero** | **mod** | **warning** |
| **double-float** |
| **echo-stream** |
| **end-of-file** |
| **eql** |
| **error** |





**Figure 4–6. Standardized Type Specifier Names**  







