 



The generic function <ClLinks  term={"reinitialize-instance"}><b>reinitialize-instance</b></ClLinks> may be used to change the values of <ClLinks  term={"slot"}><i>slots</i></ClLinks> according to initialization arguments. 



The process of reinitialization changes the values of some <ClLinks  term={"slot"}><i>slots</i></ClLinks> and performs any user-defined actions. It does not modify the structure of an <ClLinks  term={"instance"}><i>instance</i></ClLinks> to add or delete <ClLinks  term={"slot"}><i>slots</i></ClLinks>, and it does not use any :initform forms to initialize <ClLinks  term={"slot"}><i>slots</i></ClLinks>. 



The generic function <ClLinks  term={"reinitialize-instance"}><b>reinitialize-instance</b></ClLinks> may be called directly. It takes one required argument, the <ClLinks  term={"instance"}><i>instance</i></ClLinks>. It also takes any number of initialization arguments to be used by <ClLinks  term={"method"}><i>methods</i></ClLinks> for <ClLinks  term={"reinitialize-instance"}><b>reinitialize-instance</b></ClLinks> or for <ClLinks  term={"shared-initialize"}><b>shared-initialize</b></ClLinks>. The arguments after the required <ClLinks  term={"instance"}><i>instance</i></ClLinks> must form an *initialization argument list*. 



There is a system-supplied primary <ClLinks  term={"method"}><i>method</i></ClLinks> for <ClLinks  term={"reinitialize-instance"}><b>reinitialize-instance</b></ClLinks> whose *parameter specializer* is the <ClLinks  term={"class"}><i>class</i></ClLinks> <ClLinks  term={"standard-object"}><b>standard-object</b></ClLinks>. First this <ClLinks  term={"method"}><i>method</i></ClLinks> checks the validity of initialization arguments and signals an error if an initialization argument is supplied that is not declared as valid. (For more information, see Section 7.1.2 (Declaring the Validity of Initialization Arguments).) Then it calls the generic function <ClLinks  term={"shared-initialize"}><b>shared-initialize</b></ClLinks> with the following arguments: the <ClLinks  term={"instance"}><i>instance</i></ClLinks>, <ClLinks  term={"nil"}><b>nil</b></ClLinks>, and the initialization arguments it received. 



