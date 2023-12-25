**class-name** *Standard Generic Function* 



**Syntax:** 



<DictionaryLink styled={true} term={"class-name"}><b>class-name</b></DictionaryLink> *class ! name* 



**Method Signatures:** 



<DictionaryLink styled={true} term={"class-name"}><b>class-name</b></DictionaryLink> (<GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> <DictionaryLink styled={true} term={"class"}><b>class</b></DictionaryLink>) 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm>—a *class object*. 



<GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>. 



**Description:** 



Returns the <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> of the given <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm>. 



**See Also:** 



<DictionaryLink styled={true} term={"find-class"}><b>find-class</b></DictionaryLink>, Section 4.3 (Classes) 



**Notes:** 



If *S* is a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> such that *S* =(class-name *C*) and *C* =(find-class *S*), then *S* is the proper name of *C*. For further discussion, see Section 4.3 (Classes). 



The name of an anonymous <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> is <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 







 



 



**(setf class-name)** *Standard Generic Function* 



**Syntax:** 



**(setf class-name)** *new-value class ! new-value* 



**Method Signatures:** 



**(setf class-name)** *new-value* (<GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> <DictionaryLink styled={true} term={"class"}><b>class</b></DictionaryLink>) 



**Arguments and Values:** 



*new-value*—a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>. 



<GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm>. 



**Description:** 



The generic function (setf class-name) sets the name of a <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> object. 



**See Also:** 



<DictionaryLink styled={true} term={"find-class"}><b>find-class</b></DictionaryLink>, *proper name*, Section 4.3 (Classes) 



