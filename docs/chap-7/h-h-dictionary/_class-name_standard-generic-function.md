**class-name** *Standard Generic Function* 



**Syntax:** 



<DictionaryLink  term={"class-name"}><b>class-name</b></DictionaryLink> *class ! name* 



**Method Signatures:** 



<DictionaryLink  term={"class-name"}><b>class-name</b></DictionaryLink> (<GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> <DictionaryLink  term={"class"}><b>class</b></DictionaryLink>) 



**Arguments and Values:** 



<GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm>—a *class object*. 



<GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm>—a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>. 



**Description:** 



Returns the <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> of the given <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm>. 



**See Also:** 



<DictionaryLink  term={"find-class"}><b>find-class</b></DictionaryLink>, Section 4.3 (Classes) 



**Notes:** 



If *S* is a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> such that *S* =(class-name *C*) and *C* =(find-class *S*), then *S* is the proper name of *C*. For further discussion, see Section 4.3 (Classes). 



The name of an anonymous <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> is <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. 







 



 



**(setf class-name)** *Standard Generic Function* 



**Syntax:** 



**(setf class-name)** *new-value class ! new-value* 



**Method Signatures:** 



**(setf class-name)** *new-value* (<GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> <DictionaryLink  term={"class"}><b>class</b></DictionaryLink>) 



**Arguments and Values:** 



*new-value*—a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>. 



<GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm>—a <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm>. 



**Description:** 



The generic function (setf class-name) sets the name of a <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> object. 



**See Also:** 



<DictionaryLink  term={"find-class"}><b>find-class</b></DictionaryLink>, <GlossaryTerm styled={true} term={"proper name"}><i>proper name</i></GlossaryTerm>, Section 4.3 (Classes) 



