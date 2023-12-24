 



The *upgraded array element type* of a *type T*<sub>1</sub> is a *type T*<sub>2</sub> that is a <ClLinks styled={true} term={"supertype"}><i>supertype</i></ClLinks> of <ClLinks styled={true} term={"t"}><i>T</i></ClLinks><sub>1</sub> and that is used instead of <ClLinks styled={true} term={"t"}><i>T</i></ClLinks><sub>1</sub> whenever <ClLinks styled={true} term={"t"}><i>T</i></ClLinks><sub>1</sub> is used as an *array element type* for object creation or type discrimination. 



During creation of an <ClLinks styled={true} term={"array"}><i>array</i></ClLinks>, the *element type* that was requested is called the *expressed array element type*. The *upgraded array element type* of the *expressed array element type* becomes the *actual array element type* of the <ClLinks styled={true} term={"array"}><i>array</i></ClLinks> that is created. 



<i>Type upgrading</i> implies a movement upwards in the type hierarchy lattice. A <i>type</i> is always a <i>subtype</i> of its <i>upgraded array element type</i>. Also, if a <i>type T<sub>x</sub></i> is a <i>subtype</i> of another <i>type T<sub>y</sub></i>, then the <i>upgraded array element type</i> of <i>T<sub>x</sub></i> must be a <i>subtype</i> of the <i>upgraded array element type</i> of <i>T<sub>y</sub></i>. Two <i>disjoint types</i> can be <i>upgraded</i> to the same <i>type</i>. 



The *upgraded array element type T*<sub>2</sub> of a *type T*<sub>1</sub> is a function only of <ClLinks styled={true} term={"t"}><i>T</i></ClLinks><sub>1</sub> itself; that is, it is independent of any other property of the <ClLinks styled={true} term={"array"}><i>array</i></ClLinks> for which <ClLinks styled={true} term={"t"}><i>T</i></ClLinks><sub>2</sub> will be used, such as <ClLinks styled={true} term={"rank"}><i>rank</i></ClLinks>, <ClLinks styled={true} term={"adjustability"}><i>adjustability</i></ClLinks>, *fill pointers*, or displacement. The <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"upgraded-array-element-type"}><b>upgraded-array-element-type</b></ClLinks> can be used by *conforming programs* to predict how the <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks> will <ClLinks styled={true} term={"upgrade"}><i>upgrade</i></ClLinks> a given <ClLinks styled={true} term={"type"}><i>type</i></ClLinks>. 



