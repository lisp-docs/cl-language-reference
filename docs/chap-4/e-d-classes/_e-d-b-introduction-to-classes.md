 



A <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> is an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> that determines the structure and behavior of a set of other <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks>, which are called its <ClLinks styled={true} term={"instance"}><i>instances</i></ClLinks>. 



A <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> can inherit structure and behavior from other *classes*. A <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> whose definition refers to other *classes* for the purpose of inheriting from them is said to be a <ClLinks styled={true} term={"subclass"}><i>subclass</i></ClLinks> of each of those *classes*. The *classes* that are designated for purposes of inheritance are said to be *superclasses* of the inheriting <ClLinks styled={true} term={"class"}><i>class</i></ClLinks>. 



A <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> can have a <ClLinks styled={true} term={"name"}><i>name</i></ClLinks>. The <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"class-name"}><b>class-name</b></ClLinks> takes a *class object* and returns its <ClLinks styled={true} term={"name"}><i>name</i></ClLinks>. The <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> of an anonymous <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> is <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. A <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> can <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> a <ClLinks styled={true} term={"class"}><i>class</i></ClLinks>. The <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"find-class"}><b>find-class</b></ClLinks> takes a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> and returns the <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> that the <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> names. A <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> has a *proper name* if the <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> is a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> and if the <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> of the <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> names that <ClLinks styled={true} term={"class"}><i>class</i></ClLinks>. That is, a *class C* has the *proper name S* if *S* = (class-name *C*) and *C* = (find-class *S*). Notice that it is possible for (find-class *S*<sub>1</sub>) = (find-class *S*<sub>2</sub>) and *S*<sub>1</sub> *6*= *S*<sub>2</sub>. If *C* = (find-class *S*), we say that *C* is the *class named S*. 



A <i>class C</i><sub>1</sub> is a <i>direct superclass</i> of a <i>class C</i><sub>2</sub> if <i>C</i><sub>2</sub> explicitly designates <i>C</i><sub>1</sub> as a <i>superclass</i> in its definition. In this case <i>C</i><sub>2</sub> is a <i>direct subclass</i> of <i>C</i><sub>1</sub>. A <i>class C<sub>n</sub></i> is a <i>superclass</i> of a <i>class C</i><sub>1</sub> if there exists a series of <i>classes C</i><sub>2</sub><i>, . . . , C<sub>n−</sub></i>1 such that <i>C<sub>i</sub></i>+1 is a <i>direct superclass</i> of <i>C<sub>i</sub></i> for 1 <i>≤ i</i> &lt; <i>n</i>. In this case, <i>C</i><sub>1</sub> is a <i>subclass</i> of <i>C<sub>n</sub></i>. A <i>class</i> is considered neither a <i>superclass</i> nor a <i>subclass</i> of 



itself. That is, if *C*<sub>1</sub> is a <ClLinks styled={true} term={"superclass"}><i>superclass</i></ClLinks> of *C*<sub>2</sub>, then *C*<sub>1</sub> *6*= *C*<sub>2</sub>. The set of *classes* consisting of some given *class C* along with all of its *superclasses* is called “*C* and its superclasses.” 



Each <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> has a *class precedence list*, which is a total ordering on the set of the given <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> and its *superclasses*. The total ordering is expressed as a list ordered from most specific to least specific. The *class precedence list* is used in several ways. In general, more specific *classes* can <ClLinks styled={true} term={"shadow"}><i>shadow</i></ClLinks><sub>1</sub> features that would otherwise be inherited from less specific *classes*. The <ClLinks styled={true} term={"method"}><i>method</i></ClLinks> selection and combination process uses the *class precedence list* to order <ClLinks styled={true} term={"method"}><i>methods</i></ClLinks> from most specific to least specific. 



When a <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> is defined, the order in which its direct *superclasses* are mentioned in the defining 











form is important. Each <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> has a *local precedence order*, which is a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> consisting of the <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> followed by its *direct superclasses* in the order mentioned in the defining <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>. 



A *class precedence list* is always consistent with the *local precedence order* of each <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> in the list. The *classes* in each *local precedence order* appear within the *class precedence list* in the same order. If the *local precedence orders* are inconsistent with each other, no *class precedence list* can be constructed, and an error is signaled. The *class precedence list* and its computation is discussed in Section 4.3.5 (Determining the Class Precedence List). 



*classes* are organized into a directed acyclic graph. There are two distinguished *classes*, named <ClLinks styled={true} term={"t"}><b>t</b></ClLinks> and <ClLinks styled={true} term={"standard-object"}><b>standard-object</b></ClLinks>. The <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> named <ClLinks styled={true} term={"t"}><b>t</b></ClLinks> has no *superclasses*. It is a <ClLinks styled={true} term={"superclass"}><i>superclass</i></ClLinks> of every <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> except itself. The <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> named <ClLinks styled={true} term={"standard-object"}><b>standard-object</b></ClLinks> is an <ClLinks styled={true} term={"instance"}><i>instance</i></ClLinks> of the <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> <ClLinks styled={true} term={"standard-class"}><b>standard-class</b></ClLinks> and is a <ClLinks styled={true} term={"superclass"}><i>superclass</i></ClLinks> of every <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> that is an <ClLinks styled={true} term={"instance"}><i>instance</i></ClLinks> of the <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> <ClLinks styled={true} term={"standard-class"}><b>standard-class</b></ClLinks> except itself. 



There is a mapping from the object system <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> space into the <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> space. Many of the standard <ClLinks styled={true} term={"type"}><i>types</i></ClLinks> specified in this document have a corresponding <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> that has the same <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> as the <ClLinks styled={true} term={"type"}><i>type</i></ClLinks>. Some <ClLinks styled={true} term={"type"}><i>types</i></ClLinks> do not have a corresponding <ClLinks styled={true} term={"class"}><i>class</i></ClLinks>. The integration of the <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> and <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> systems is discussed in Section 4.3.7 (Integrating Types and Classes). 



*Classes* are represented by <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks> that are themselves <ClLinks styled={true} term={"instance"}><i>instances</i></ClLinks> of *classes*. The <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> of the <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> of an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> is termed the <ClLinks styled={true} term={"metaclass"}><i>metaclass</i></ClLinks> of that <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. When no misinterpretation is possible, the term <ClLinks styled={true} term={"metaclass"}><i>metaclass</i></ClLinks> is used to refer to a <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> that has <ClLinks styled={true} term={"instance"}><i>instances</i></ClLinks> that are themselves *classes*. The <ClLinks styled={true} term={"metaclass"}><i>metaclass</i></ClLinks> determines the form of inheritance used by the *classes* that are its <ClLinks styled={true} term={"instance"}><i>instances</i></ClLinks> and the representation of the <ClLinks styled={true} term={"instance"}><i>instances</i></ClLinks> of those *classes*. The object system provides a default <ClLinks styled={true} term={"metaclass"}><i>metaclass</i></ClLinks>, <ClLinks styled={true} term={"standard-class"}><b>standard-class</b></ClLinks>, that is appropriate for most programs. 



Except where otherwise specified, all *classes* mentioned in this standard are <ClLinks styled={true} term={"instance"}><i>instances</i></ClLinks> of the <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> <ClLinks styled={true} term={"standard-class"}><b>standard-class</b></ClLinks>, all *generic functions* are <ClLinks styled={true} term={"instance"}><i>instances</i></ClLinks> of the <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> <ClLinks styled={true} term={"standard-generic-function"}><b>standard-generic-function</b></ClLinks>, and all <ClLinks styled={true} term={"method"}><i>methods</i></ClLinks> are <ClLinks styled={true} term={"instance"}><i>instances</i></ClLinks> of the <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> <ClLinks styled={true} term={"standard-method"}><b>standard-method</b></ClLinks>. 



