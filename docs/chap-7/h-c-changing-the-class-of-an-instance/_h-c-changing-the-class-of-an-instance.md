 



The <ClLinks  term={"function"}><i>function</i></ClLinks> <ClLinks  term={"change-class"}><b>change-class</b></ClLinks> can be used to change the <ClLinks  term={"class"}><i>class</i></ClLinks> of an <ClLinks  term={"instance"}><i>instance</i></ClLinks> from its current class, *C*<sub>from</sub>, to a different class, *C*<sub>to</sub>; it changes the structure of the <ClLinks  term={"instance"}><i>instance</i></ClLinks> to conform to the definition of the class *C*<sub>to</sub>. 



Note that changing the <ClLinks  term={"class"}><i>class</i></ClLinks> of an <ClLinks  term={"instance"}><i>instance</i></ClLinks> may cause <ClLinks  term={"slot"}><i>slots</i></ClLinks> to be added or deleted. Changing the <ClLinks  term={"class"}><i>class</i></ClLinks> of an <ClLinks  term={"instance"}><i>instance</i></ClLinks> does not change its identity as defined by the <ClLinks  term={"eq"}><b>eq</b></ClLinks> function. 



When <ClLinks  term={"change-class"}><b>change-class</b></ClLinks> is invoked on an <ClLinks  term={"instance"}><i>instance</i></ClLinks>, a two-step updating process takes place. The first step modifies the structure of the <ClLinks  term={"instance"}><i>instance</i></ClLinks> by adding new *local slots* and discarding *local slots* that are not specified in the new version of the <ClLinks  term={"instance"}><i>instance</i></ClLinks>. The second step initializes the newly added *local slots* and performs any other user-defined actions. These two steps are further described in the two following sections. 



