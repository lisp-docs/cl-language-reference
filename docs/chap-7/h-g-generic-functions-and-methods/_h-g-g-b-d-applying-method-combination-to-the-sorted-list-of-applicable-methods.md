 



In the simple case—if standard method combination is used and all applicable methods are primary methods—the effective method is the most specific method. That method can call the next most specific method by using the <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink  term={"call-next-method"}><b>call-next-method</b></DictionaryLink>. The method that <DictionaryLink  term={"call-next-method"}><b>call-next-method</b></DictionaryLink> will call is referred to as the <GlossaryTerm styled={true} term={"next method"}><i>next method</i></GlossaryTerm>. The predicate <DictionaryLink  term={"next-method-p"}><b>next-method-p</b></DictionaryLink> tests whether a next method exists. If <DictionaryLink  term={"call-next-method"}><b>call-next-method</b></DictionaryLink> is called and there is no next most specific method, the generic function <DictionaryLink  term={"no-next-method"}><b>no-next-method</b></DictionaryLink> is invoked. 



In general, the effective method is some combination of the applicable methods. It is described by a <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> that contains calls to some or all of the applicable methods, returns the value or values that will be returned as the value or values of the generic function, and optionally makes some of the methods accessible by means of <DictionaryLink  term={"call-next-method"}><b>call-next-method</b></DictionaryLink>. 



The role of each method in the effective method is determined by its <GlossaryTerm  term={"qualifier"}><i>qualifiers</i></GlossaryTerm> and the specificity of the method. A <GlossaryTerm  term={"qualifier"}><i>qualifier</i></GlossaryTerm> serves to mark a method, and the meaning of a <GlossaryTerm  term={"qualifier"}><i>qualifier</i></GlossaryTerm> is determined 







 



 



by the way that these marks are used by this step of the procedure. If an applicable method has an unrecognized <GlossaryTerm  term={"qualifier"}><i>qualifier</i></GlossaryTerm> , this step signals an error and does not include that method in the effective method. 



When standard method combination is used together with qualified methods, the effective method is produced as described in Section 7.6.6.2 (Standard Method Combination). 



Another type of method combination can be specified by using the :method-combination option of <DictionaryLink  term={"defgeneric"}><b>defgeneric</b></DictionaryLink> or of any of the other operators that specify generic function options. In this way this step of the procedure can be customized. 



New types of method combination can be defined by using the <DictionaryLink  term={"define-method-combination"}><b>define-method-combination</b></DictionaryLink> <GlossaryTerm  term={"macro"}><i>macro</i></GlossaryTerm>. 



