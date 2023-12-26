**class-name** *Standard Generic Function* 



**Syntax:** 



<DictionaryLink  term={"class-name"}><b>class-name</b></DictionaryLink> *class ! name* 



**Method Signatures:** 



<DictionaryLink  term={"class-name"}><b>class-name</b></DictionaryLink> (<ClLinks  term={"class"}><i>class</i></ClLinks> <DictionaryLink  term={"class"}><b>class</b></DictionaryLink>) 



**Arguments and Values:** 



<ClLinks  term={"class"}><i>class</i></ClLinks>—a *class object*. 



<ClLinks  term={"name"}><i>name</i></ClLinks>—a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>. 



**Description:** 



Returns the <ClLinks  term={"name"}><i>name</i></ClLinks> of the given <ClLinks  term={"class"}><i>class</i></ClLinks>. 



**See Also:** 



<DictionaryLink  term={"find-class"}><b>find-class</b></DictionaryLink>, Section 4.3 (Classes) 



**Notes:** 



If *S* is a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> such that *S* =(class-name *C*) and *C* =(find-class *S*), then *S* is the proper name of *C*. For further discussion, see Section 4.3 (Classes). 



The name of an anonymous <ClLinks  term={"class"}><i>class</i></ClLinks> is <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. 







 



 



**(setf class-name)** *Standard Generic Function* 



**Syntax:** 



**(setf class-name)** *new-value class ! new-value* 



**Method Signatures:** 



**(setf class-name)** *new-value* (<ClLinks  term={"class"}><i>class</i></ClLinks> <DictionaryLink  term={"class"}><b>class</b></DictionaryLink>) 



**Arguments and Values:** 



*new-value*—a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>. 



<ClLinks  term={"class"}><i>class</i></ClLinks>—a <ClLinks  term={"class"}><i>class</i></ClLinks>. 



**Description:** 



The generic function (setf class-name) sets the name of a <ClLinks  term={"class"}><i>class</i></ClLinks> object. 



**See Also:** 



<DictionaryLink  term={"find-class"}><b>find-class</b></DictionaryLink>, <GlossaryTerm styled={true} term={"proper name"}><i>proper name</i></GlossaryTerm>, Section 4.3 (Classes) 



