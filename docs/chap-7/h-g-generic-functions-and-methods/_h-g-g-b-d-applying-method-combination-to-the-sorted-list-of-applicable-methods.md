 



In the simple case—if standard method combination is used and all applicable methods are primary methods—the effective method is the most specific method. That method can call the next most specific method by using the *function* **call-next-method**. The method that **call-next-method** will call is referred to as the *next method*. The predicate **next-method-p** tests whether a next method exists. If **call-next-method** is called and there is no next most specific method, the generic function **no-next-method** is invoked. 



In general, the effective method is some combination of the applicable methods. It is described by a *form* that contains calls to some or all of the applicable methods, returns the value or values that will be returned as the value or values of the generic function, and optionally makes some of the methods accessible by means of **call-next-method**. 



The role of each method in the effective method is determined by its *qualifiers* and the specificity of the method. A *qualifier* serves to mark a method, and the meaning of a *qualifier* is determined 







 



 



by the way that these marks are used by this step of the procedure. If an applicable method has an unrecognized *qualifier* , this step signals an error and does not include that method in the effective method. 



When standard method combination is used together with qualified methods, the effective method is produced as described in Section 7.6.6.2 (Standard Method Combination). 



Another type of method combination can be specified by using the :method-combination option of **defgeneric** or of any of the other operators that specify generic function options. In this way this step of the procedure can be customized. 



New types of method combination can be defined by using the **define-method-combination** *macro*. 



