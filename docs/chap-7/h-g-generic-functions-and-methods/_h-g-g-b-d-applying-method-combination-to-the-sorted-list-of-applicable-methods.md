 



In the simple case—if standard method combination is used and all applicable methods are primary methods—the effective method is the most specific method. That method can call the next most specific method by using the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"call-next-method"}><b>call-next-method</b></ClLinks>. The method that <ClLinks styled={true} term={"call-next-method"}><b>call-next-method</b></ClLinks> will call is referred to as the *next method*. The predicate <ClLinks styled={true} term={"next-method-p"}><b>next-method-p</b></ClLinks> tests whether a next method exists. If <ClLinks styled={true} term={"call-next-method"}><b>call-next-method</b></ClLinks> is called and there is no next most specific method, the generic function <ClLinks styled={true} term={"no-next-method"}><b>no-next-method</b></ClLinks> is invoked. 



In general, the effective method is some combination of the applicable methods. It is described by a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> that contains calls to some or all of the applicable methods, returns the value or values that will be returned as the value or values of the generic function, and optionally makes some of the methods accessible by means of <ClLinks styled={true} term={"call-next-method"}><b>call-next-method</b></ClLinks>. 



The role of each method in the effective method is determined by its <ClLinks styled={true} term={"qualifier"}><i>qualifiers</i></ClLinks> and the specificity of the method. A <ClLinks styled={true} term={"qualifier"}><i>qualifier</i></ClLinks> serves to mark a method, and the meaning of a <ClLinks styled={true} term={"qualifier"}><i>qualifier</i></ClLinks> is determined 







 



 



by the way that these marks are used by this step of the procedure. If an applicable method has an unrecognized <ClLinks styled={true} term={"qualifier"}><i>qualifier</i></ClLinks> , this step signals an error and does not include that method in the effective method. 



When standard method combination is used together with qualified methods, the effective method is produced as described in Section 7.6.6.2 (Standard Method Combination). 



Another type of method combination can be specified by using the :method-combination option of <ClLinks styled={true} term={"defgeneric"}><b>defgeneric</b></ClLinks> or of any of the other operators that specify generic function options. In this way this step of the procedure can be customized. 



New types of method combination can be defined by using the <ClLinks styled={true} term={"define-method-combination"}><b>define-method-combination</b></ClLinks> <ClLinks styled={true} term={"macro"}><i>macro</i></ClLinks>. 



