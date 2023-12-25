 



The *generic function* <ClLinks  term={"shared-initialize"}><b>shared-initialize</b></ClLinks> is used to fill the <ClLinks  term={"slot"}><i>slots</i></ClLinks> of an <ClLinks  term={"instance"}><i>instance</i></ClLinks> using initialization arguments and :initform forms when an <ClLinks  term={"instance"}><i>instance</i></ClLinks> is created, when an <ClLinks  term={"instance"}><i>instance</i></ClLinks> is re-initialized, when an <ClLinks  term={"instance"}><i>instance</i></ClLinks> is updated to conform to a redefined <ClLinks  term={"class"}><i>class</i></ClLinks>, and when an <ClLinks  term={"instance"}><i>instance</i></ClLinks> is updated to conform to a different <ClLinks  term={"class"}><i>class</i></ClLinks>. It uses standard <ClLinks  term={"method"}><i>method</i></ClLinks> combination. It takes the following 



arguments: the <ClLinks  term={"instance"}><i>instance</i></ClLinks> to be initialized, a specification of a set of <ClLinks  term={"name"}><i>names</i></ClLinks> of *slots accessible* in that <ClLinks  term={"instance"}><i>instance</i></ClLinks>, and any number of initialization arguments. The arguments after the first two must form an *initialization argument list*. 



The second argument to <ClLinks  term={"shared-initialize"}><b>shared-initialize</b></ClLinks> may be one of the following: 



*•* It can be a (possibly empty) <ClLinks  term={"list"}><i>list</i></ClLinks> of <ClLinks  term={"slot"}><i>slot</i></ClLinks> names, which specifies the set of those <ClLinks  term={"slot"}><i>slot</i></ClLinks> names. 



*•* It can be the symbol <ClLinks  term={"t"}><b>t</b></ClLinks>, which specifies the set of all of the <ClLinks  term={"slot"}><i>slots</i></ClLinks>. 



There is a system-supplied primary <ClLinks  term={"method"}><i>method</i></ClLinks> for <ClLinks  term={"shared-initialize"}><b>shared-initialize</b></ClLinks> whose first *parameter specializer* is the <ClLinks  term={"class"}><i>class</i></ClLinks> <ClLinks  term={"standard-object"}><b>standard-object</b></ClLinks>. This <ClLinks  term={"method"}><i>method</i></ClLinks> behaves as follows on each <ClLinks  term={"slot"}><i>slot</i></ClLinks>, whether shared or local: 



*•* If an initialization argument in the *initialization argument list* specifies a value for that <ClLinks  term={"slot"}><i>slot</i></ClLinks>, that value is stored into the <ClLinks  term={"slot"}><i>slot</i></ClLinks>, even if a value has already been stored in the <ClLinks  term={"slot"}><i>slot</i></ClLinks> before the <ClLinks  term={"method"}><i>method</i></ClLinks> is run. The affected <ClLinks  term={"slot"}><i>slots</i></ClLinks> are independent of which <ClLinks  term={"slot"}><i>slots</i></ClLinks> are indicated by the second argument to <ClLinks  term={"shared-initialize"}><b>shared-initialize</b></ClLinks>. 



*•* Any <ClLinks  term={"slot"}><i>slots</i></ClLinks> indicated by the second argument that are still unbound at this point are initialized according to their :initform forms. For any such <ClLinks  term={"slot"}><i>slot</i></ClLinks> that has an :initform form, that <ClLinks  term={"form"}><i>form</i></ClLinks> is evaluated in the lexical environment of its defining <ClLinks  term={"defclass"}><b>defclass</b></ClLinks> form and the result is stored into the <ClLinks  term={"slot"}><i>slot</i></ClLinks>. For example, if a *before method* stores a value in the <ClLinks  term={"slot"}><i>slot</i></ClLinks>, the :initform form will not be used to supply a value for the <ClLinks  term={"slot"}><i>slot</i></ClLinks>. If the second argument specifies a <ClLinks  term={"name"}><i>name</i></ClLinks> that does not correspond to any *slots accessible* in the <ClLinks  term={"instance"}><i>instance</i></ClLinks>, the results are unspecified. 



*•* The rules mentioned in Section 7.1.4 (Rules for Initialization Arguments) are obeyed. 



The generic function <ClLinks  term={"shared-initialize"}><b>shared-initialize</b></ClLinks> is called by the system-supplied primary <ClLinks  term={"method"}><i>methods</i></ClLinks> for <ClLinks  term={"reinitialize-instance"}><b>reinitialize-instance</b></ClLinks>, **update-instance-for-different-class**, **update-instance-for-redefined-class**, and <ClLinks  term={"initialize-instance"}><b>initialize-instance</b></ClLinks>. Thus, <ClLinks  term={"method"}><i>methods</i></ClLinks> can be written for <ClLinks  term={"shared-initialize"}><b>shared-initialize</b></ClLinks> to specify actions that should be taken in all of these contexts. 



