 



*Type specifiers* can be <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm>, *classes*, or <GlossaryTerm styled={true} term={"list"}><i>lists</i></GlossaryTerm>. Figure 4–2 lists <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm> that are *standardized atomic type specifiers*, and Figure 4–3 lists *standardized compound type specifier names*. For syntax information, see the dictionary entry for the corresponding *type specifier* . It is possible to define new *type specifiers* using <DictionaryLink styled={true} term={"defclass"}><b>defclass</b></DictionaryLink>, <DictionaryLink styled={true} term={"define-condition"}><b>define-condition</b></DictionaryLink>, <DictionaryLink styled={true} term={"defstruct"}><b>defstruct</b></DictionaryLink>, or <DictionaryLink styled={true} term={"deftype"}><b>deftype</b></DictionaryLink>.  







|<p>**arithmetic-error function simple-condition array generic-function simple-error atom hash-table simple-string base-char integer simple-type-error base-string keyword simple-vector bignum list simple-warning bit logical-pathname single-float bit-vector long-float standard-char broadcast-stream method standard-class built-in-class method-combination standard-generic-function cell-error nil standard-method character null standard-object class number storage-condition compiled-function package stream** </p><p>**complex package-error stream-error concatenated-stream parse-error string** </p><p>**condition pathname string-stream cons print-not-readable structure-class control-error program-error structure-object division-by-zero random-state style-warning double-float ratio symbol** </p><p>**echo-stream rational synonym-stream end-of-file reader-error t** </p><p>**error readtable two-way-stream extended-char real type-error file-error restart unbound-slot file-stream sequence unbound-variable fixnum serious-condition undefined-function float short-float unsigned-byte floating-point-inexact signed-byte vector** </p><p>**floating-point-invalid-operation simple-array warning** </p><p>**floating-point-overflow simple-base-string** </p><p>**floating-point-underflow simple-bit-vector**</p>|

| :- |





**Figure 4–2. Standardized Atomic Type Specifiers** 



If a *type specifier* is a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>, the <GlossaryTerm styled={true} term={"car"}><i>car</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> is a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>, and the rest of the <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> is subsidiary <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> information. Such a *type specifier* is called a *compound type specifier*. Except as explicitly stated otherwise, the subsidiary items can be unspecified. The unspecified subsidiary items are indicated by writing \*. For example, to completely specify a <GlossaryTerm styled={true} term={"vector"}><i>vector</i></GlossaryTerm> , the <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> of the elements and the length of the <GlossaryTerm styled={true} term={"vector"}><i>vector</i></GlossaryTerm> must be present. 



(vector double-float 100) 



The following leaves the length unspecified:  







(vector double-float \*) 



The following leaves the element type unspecified: 



(vector \* 100) 



Suppose that two *type specifiers* are the same except that the first has a \* where the second has a more explicit specification. Then the second denotes a <GlossaryTerm styled={true} term={"subtype"}><i>subtype</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> denoted by the first. 



If a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> has one or more unspecified items at the end, those items can be dropped. If dropping all occurrences of \* results in a *singleton list*, then the parentheses can be dropped as well (the list can be replaced by the <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> in its <GlossaryTerm styled={true} term={"car"}><i>car</i></GlossaryTerm> ). For example, (vector double-float \*) can be abbreviated to (vector double-float), and (vector \* \*) can be abbreviated to (vector) and then to vector. 



|<p>**and long-float simple-base-string array member simple-bit-vector** </p><p>**base-string mod simple-string** </p><p>**bit-vector not simple-vector** </p><p>**complex or single-float** </p><p>**cons rational string** </p><p>**double-float real unsigned-byte** </p><p>**eql satisfies values** </p><p>**float short-float vector** </p><p>**function signed-byte** </p><p>**integer simple-array**</p>|

| :- |





**Figure 4–3. Standardized Compound Type Specifier Names** 



Figure 4–4 show the *defined names* that can be used as *compound type specifier names* but that cannot be used as *atomic type specifiers*. 



|<p>**and mod satisfies** </p><p>**eql not values** </p><p>**member or**</p>|

| :- |





**Figure 4–4. Standardized Compound-Only Type Specifier Names** 



New *type specifiers* can come into existence in two ways. 



*•* Defining a structure by using <DictionaryLink styled={true} term={"defstruct"}><b>defstruct</b></DictionaryLink> without using the :type specifier or defining a <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> by using <DictionaryLink styled={true} term={"defclass"}><b>defclass</b></DictionaryLink> or <DictionaryLink styled={true} term={"define-condition"}><b>define-condition</b></DictionaryLink> automatically causes the name of the structure or class to be a new *type specifier symbol*. 



*•* <DictionaryLink styled={true} term={"deftype"}><b>deftype</b></DictionaryLink> can be used to define *derived type specifiers*, which act as ‘abbreviations’ for other *type specifiers*. 



A *class object* can be used as a *type specifier* . When used this way, it denotes the set of all members 











of that <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm>. 



Figure 4–5 shows some *defined names* relating to <GlossaryTerm styled={true} term={"type"}><i>types</i></GlossaryTerm> and <GlossaryTerm styled={true} term={"declaration"}><i>declarations</i></GlossaryTerm>. 



|<p>**coerce defstruct subtypep** </p><p>**declaim deftype the** </p><p>**declare ftype type** </p><p>**defclass locally type-of** </p><p>**define-condition proclaim typep**</p>|

| :- |





**Figure 4–5. Defined names relating to types and declarations.** 



Figure 4–6 shows all *defined names* that are *type specifier names*, whether for *atomic type specifiers* or *compound type specifiers*; this list is the union of the lists in Figure 4–2 and Figure 4–3.  







|<p>**and function simple-array arithmetic-error generic-function simple-base-string array hash-table simple-bit-vector atom integer simple-condition base-char keyword simple-error base-string list simple-string bignum logical-pathname simple-type-error bit long-float simple-vector bit-vector member simple-warning broadcast-stream method single-float built-in-class method-combination standard-char cell-error mod standard-class character nil standard-generic-function class not standard-method compiled-function null standard-object complex number storage-condition concatenated-stream or stream** </p><p>**condition package stream-error cons package-error string** </p><p>**control-error parse-error string-stream division-by-zero pathname structure-class double-float print-not-readable structure-object echo-stream program-error style-warning end-of-file random-state symbol** </p><p>**eql ratio synonym-stream error rational t** </p><p>**extended-char reader-error two-way-stream file-error readtable type-error file-stream real unbound-slot fixnum restart unbound-variable float satisfies undefined-function floating-point-inexact sequence unsigned-byte floating-point-invalid-operation serious-condition values** </p><p>**floating-point-overflow short-float vector** </p><p>**floating-point-underflow signed-byte warning**</p>|

| :- |





**Figure 4–6. Standardized Type Specifier Names**  







