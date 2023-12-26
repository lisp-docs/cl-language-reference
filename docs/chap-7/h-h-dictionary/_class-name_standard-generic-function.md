**class-name** *Standard Generic Function* 



**Syntax:** 



<ClLinks  term={"class-name"}><b>class-name</b></ClLinks> *class ! name* 



**Method Signatures:** 



<ClLinks  term={"class-name"}><b>class-name</b></ClLinks> (<ClLinks  term={"class"}><i>class</i></ClLinks> <ClLinks  term={"class"}><b>class</b></ClLinks>) 



**Arguments and Values:** 



<ClLinks  term={"class"}><i>class</i></ClLinks>—a *class object*. 



<ClLinks  term={"name"}><i>name</i></ClLinks>—a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>. 



**Description:** 



Returns the <ClLinks  term={"name"}><i>name</i></ClLinks> of the given <ClLinks  term={"class"}><i>class</i></ClLinks>. 



**See Also:** 



<ClLinks  term={"find-class"}><b>find-class</b></ClLinks>, Section 4.3 (Classes) 



**Notes:** 



If *S* is a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> such that *S* =(class-name *C*) and *C* =(find-class *S*), then *S* is the proper name of *C*. For further discussion, see Section 4.3 (Classes). 



The name of an anonymous <ClLinks  term={"class"}><i>class</i></ClLinks> is <ClLinks  term={"nil"}><b>nil</b></ClLinks>. 







 



 



**(setf class-name)** *Standard Generic Function* 



**Syntax:** 



**(setf class-name)** *new-value class ! new-value* 



**Method Signatures:** 



**(setf class-name)** *new-value* (<ClLinks  term={"class"}><i>class</i></ClLinks> <ClLinks  term={"class"}><b>class</b></ClLinks>) 



**Arguments and Values:** 



*new-value*—a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>. 



<ClLinks  term={"class"}><i>class</i></ClLinks>—a <ClLinks  term={"class"}><i>class</i></ClLinks>. 



**Description:** 



The generic function (setf class-name) sets the name of a <ClLinks  term={"class"}><i>class</i></ClLinks> object. 



**See Also:** 



<ClLinks  term={"find-class"}><b>find-class</b></ClLinks>, <GlossaryTerm styled={true} term={"proper name"}><i>proper name</i></GlossaryTerm>, Section 4.3 (Classes) 



