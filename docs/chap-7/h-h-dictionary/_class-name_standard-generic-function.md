**class-name** *Standard Generic Function* 



**Syntax:** 



<ClLinks styled={true} term={"class-name"}><b>class-name</b></ClLinks> *class ! name* 



**Method Signatures:** 



<ClLinks styled={true} term={"class-name"}><b>class-name</b></ClLinks> (<ClLinks styled={true} term={"class"}><i>class</i></ClLinks> <ClLinks styled={true} term={"class"}><b>class</b></ClLinks>) 



**Arguments and Values:** 



<ClLinks styled={true} term={"class"}><i>class</i></ClLinks>—a *class object*. 



<ClLinks styled={true} term={"name"}><i>name</i></ClLinks>—a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>. 



**Description:** 



Returns the <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> of the given <ClLinks styled={true} term={"class"}><i>class</i></ClLinks>. 



**See Also:** 



<ClLinks styled={true} term={"find-class"}><b>find-class</b></ClLinks>, Section 4.3 (Classes) 



**Notes:** 



If *S* is a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> such that *S* =(class-name *C*) and *C* =(find-class *S*), then *S* is the proper name of *C*. For further discussion, see Section 4.3 (Classes). 



The name of an anonymous <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> is <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 







 



 



**(setf class-name)** *Standard Generic Function* 



**Syntax:** 



**(setf class-name)** *new-value class ! new-value* 



**Method Signatures:** 



**(setf class-name)** *new-value* (<ClLinks styled={true} term={"class"}><i>class</i></ClLinks> <ClLinks styled={true} term={"class"}><b>class</b></ClLinks>) 



**Arguments and Values:** 



*new-value*—a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>. 



<ClLinks styled={true} term={"class"}><i>class</i></ClLinks>—a <ClLinks styled={true} term={"class"}><i>class</i></ClLinks>. 



**Description:** 



The generic function (setf class-name) sets the name of a <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> object. 



**See Also:** 



<ClLinks styled={true} term={"find-class"}><b>find-class</b></ClLinks>, *proper name*, Section 4.3 (Classes) 



