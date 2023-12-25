 



The *upgraded array element type* of a *type T*<sub>1</sub> is a *type T*<sub>2</sub> that is a <ClLinks  term={"supertype"}><i>supertype</i></ClLinks> of <ClLinks  term={"t"}><i>T</i></ClLinks><sub>1</sub> and that is used instead of <ClLinks  term={"t"}><i>T</i></ClLinks><sub>1</sub> whenever <ClLinks  term={"t"}><i>T</i></ClLinks><sub>1</sub> is used as an *array element type* for object creation or type discrimination. 



During creation of an <ClLinks  term={"array"}><i>array</i></ClLinks>, the *element type* that was requested is called the *expressed array element type*. The *upgraded array element type* of the *expressed array element type* becomes the *actual array element type* of the <ClLinks  term={"array"}><i>array</i></ClLinks> that is created. 



<i>Type upgrading</i> implies a movement upwards in the type hierarchy lattice. A <i>type</i> is always a <i>subtype</i> of its <i>upgraded array element type</i>. Also, if a <i>type T<sub>x</sub></i> is a <i>subtype</i> of another <i>type T<sub>y</sub></i>, then the <i>upgraded array element type</i> of <i>T<sub>x</sub></i> must be a <i>subtype</i> of the <i>upgraded array element type</i> of <i>T<sub>y</sub></i>. Two <i>disjoint types</i> can be <i>upgraded</i> to the same <i>type</i>. 



The *upgraded array element type T*<sub>2</sub> of a *type T*<sub>1</sub> is a function only of <ClLinks  term={"t"}><i>T</i></ClLinks><sub>1</sub> itself; that is, it is independent of any other property of the <ClLinks  term={"array"}><i>array</i></ClLinks> for which <ClLinks  term={"t"}><i>T</i></ClLinks><sub>2</sub> will be used, such as <ClLinks  term={"rank"}><i>rank</i></ClLinks>, <ClLinks  term={"adjustability"}><i>adjustability</i></ClLinks>, *fill pointers*, or displacement. The <ClLinks  term={"function"}><i>function</i></ClLinks> <ClLinks  term={"upgraded-array-element-type"}><b>upgraded-array-element-type</b></ClLinks> can be used by *conforming programs* to predict how the <ClLinks  term={"implementation"}><i>implementation</i></ClLinks> will <ClLinks  term={"upgrade"}><i>upgrade</i></ClLinks> a given <ClLinks  term={"type"}><i>type</i></ClLinks>. 



