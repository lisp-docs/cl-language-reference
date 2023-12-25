 



The second step initializes the newly added *local slots* and performs any other user-defined actions. This step is implemented by the generic function **update-instance-for-redefined-class**, which is called after completion of the first step of modifying the structure of the <ClLinks  term={"instance"}><i>instance</i></ClLinks>. 



The generic function **update-instance-for-redefined-class** takes four required arguments: the <ClLinks  term={"instance"}><i>instance</i></ClLinks> being updated after it has undergone the first step, a list of the names of *local slots* that were added, a list of the names of *local slots* that were discarded, and a property list containing the <ClLinks  term={"slot"}><i>slot</i></ClLinks> names and values of <ClLinks  term={"slot"}><i>slots</i></ClLinks> that were discarded and had values. Included among the discarded <ClLinks  term={"slot"}><i>slots</i></ClLinks> are <ClLinks  term={"slot"}><i>slots</i></ClLinks> that were local in the old <ClLinks  term={"class"}><i>class</i></ClLinks> and that are shared in the new <ClLinks  term={"class"}><i>class</i></ClLinks>. 



The generic function **update-instance-for-redefined-class** also takes any number of initialization arguments. When it is called by the system to update an <ClLinks  term={"instance"}><i>instance</i></ClLinks> whose <ClLinks  term={"class"}><i>class</i></ClLinks> has been redefined, no initialization arguments are provided. 



There is a system-supplied primary <ClLinks  term={"method"}><i>method</i></ClLinks> for **update-instance-for-redefined-class** whose *parameter specializer* for its <ClLinks  term={"instance"}><i>instance</i></ClLinks> argument is the <ClLinks  term={"class"}><i>class</i></ClLinks> <ClLinks  term={"standard-object"}><b>standard-object</b></ClLinks>. First this <ClLinks  term={"method"}><i>method</i></ClLinks> checks the validity of initialization arguments and signals an error if an initialization argument is supplied that is not declared as valid. (For more information, see Section 7.1.2 (Declaring the Validity of Initialization Arguments).) Then it calls the generic function <ClLinks  term={"shared-initialize"}><b>shared-initialize</b></ClLinks> with the following arguments: the <ClLinks  term={"instance"}><i>instance</i></ClLinks>, the list of <ClLinks  term={"name"}><i>names</i></ClLinks> of the newly added <ClLinks  term={"slot"}><i>slots</i></ClLinks>, and the initialization arguments it received. 



