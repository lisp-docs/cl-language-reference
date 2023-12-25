 



A <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> is an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> that determines the structure and behavior of a set of other <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm>, which are called its <GlossaryTerm styled={true} term={"instance"}><i>instances</i></GlossaryTerm>. 



A <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> can inherit structure and behavior from other *classes*. A <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> whose definition refers to other *classes* for the purpose of inheriting from them is said to be a <GlossaryTerm styled={true} term={"subclass"}><i>subclass</i></GlossaryTerm> of each of those *classes*. The *classes* that are designated for purposes of inheritance are said to be *superclasses* of the inheriting <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm>. 



A <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> can have a <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm>. The <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"class-name"}><b>class-name</b></DictionaryLink> takes a *class object* and returns its <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm>. The <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> of an anonymous <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> is <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. A <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> can <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> a <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm>. The <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"find-class"}><b>find-class</b></DictionaryLink> takes a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> and returns the <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> that the <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> names. A <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> has a *proper name* if the <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> is a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> and if the <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> names that <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm>. That is, a *class C* has the *proper name S* if *S* = (class-name *C*) and *C* = (find-class *S*). Notice that it is possible for (find-class *S*<sub>1</sub>) = (find-class *S*<sub>2</sub>) and *S*<sub>1</sub> *6*= *S*<sub>2</sub>. If *C* = (find-class *S*), we say that *C* is the *class named S*. 



A <i>class C</i><sub>1</sub> is a <i>direct superclass</i> of a <i>class C</i><sub>2</sub> if <i>C</i><sub>2</sub> explicitly designates <i>C</i><sub>1</sub> as a <i>superclass</i> in its definition. In this case <i>C</i><sub>2</sub> is a <i>direct subclass</i> of <i>C</i><sub>1</sub>. A <i>class C<sub>n</sub></i> is a <i>superclass</i> of a <i>class C</i><sub>1</sub> if there exists a series of <i>classes C</i><sub>2</sub><i>, . . . , C<sub>n−</sub></i>1 such that <i>C<sub>i</sub></i>+1 is a <i>direct superclass</i> of <i>C<sub>i</sub></i> for 1 <i>≤ i</i> &lt; <i>n</i>. In this case, <i>C</i><sub>1</sub> is a <i>subclass</i> of <i>C<sub>n</sub></i>. A <i>class</i> is considered neither a <i>superclass</i> nor a <i>subclass</i> of 



itself. That is, if *C*<sub>1</sub> is a <GlossaryTerm styled={true} term={"superclass"}><i>superclass</i></GlossaryTerm> of *C*<sub>2</sub>, then *C*<sub>1</sub> *6*= *C*<sub>2</sub>. The set of *classes* consisting of some given *class C* along with all of its *superclasses* is called “*C* and its superclasses.” 



Each <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> has a *class precedence list*, which is a total ordering on the set of the given <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> and its *superclasses*. The total ordering is expressed as a list ordered from most specific to least specific. The *class precedence list* is used in several ways. In general, more specific *classes* can <GlossaryTerm styled={true} term={"shadow"}><i>shadow</i></GlossaryTerm><sub>1</sub> features that would otherwise be inherited from less specific *classes*. The <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> selection and combination process uses the *class precedence list* to order <GlossaryTerm styled={true} term={"method"}><i>methods</i></GlossaryTerm> from most specific to least specific. 



When a <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> is defined, the order in which its direct *superclasses* are mentioned in the defining 











form is important. Each <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> has a *local precedence order*, which is a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> consisting of the <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> followed by its *direct superclasses* in the order mentioned in the defining <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>. 



A *class precedence list* is always consistent with the *local precedence order* of each <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> in the list. The *classes* in each *local precedence order* appear within the *class precedence list* in the same order. If the *local precedence orders* are inconsistent with each other, no *class precedence list* can be constructed, and an error is signaled. The *class precedence list* and its computation is discussed in Section 4.3.5 (Determining the Class Precedence List). 



*classes* are organized into a directed acyclic graph. There are two distinguished *classes*, named <DictionaryLink styled={true} term={"t"}><b>t</b></DictionaryLink> and <DictionaryLink styled={true} term={"standard-object"}><b>standard-object</b></DictionaryLink>. The <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> named <DictionaryLink styled={true} term={"t"}><b>t</b></DictionaryLink> has no *superclasses*. It is a <GlossaryTerm styled={true} term={"superclass"}><i>superclass</i></GlossaryTerm> of every <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> except itself. The <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> named <DictionaryLink styled={true} term={"standard-object"}><b>standard-object</b></DictionaryLink> is an <GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> <DictionaryLink styled={true} term={"standard-class"}><b>standard-class</b></DictionaryLink> and is a <GlossaryTerm styled={true} term={"superclass"}><i>superclass</i></GlossaryTerm> of every <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> that is an <GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> <DictionaryLink styled={true} term={"standard-class"}><b>standard-class</b></DictionaryLink> except itself. 



There is a mapping from the object system <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> space into the <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> space. Many of the standard <GlossaryTerm styled={true} term={"type"}><i>types</i></GlossaryTerm> specified in this document have a corresponding <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> that has the same <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> as the <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm>. Some <GlossaryTerm styled={true} term={"type"}><i>types</i></GlossaryTerm> do not have a corresponding <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm>. The integration of the <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> and <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> systems is discussed in Section 4.3.7 (Integrating Types and Classes). 



*Classes* are represented by <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> that are themselves <GlossaryTerm styled={true} term={"instance"}><i>instances</i></GlossaryTerm> of *classes*. The <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> of an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> is termed the <GlossaryTerm styled={true} term={"metaclass"}><i>metaclass</i></GlossaryTerm> of that <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. When no misinterpretation is possible, the term <GlossaryTerm styled={true} term={"metaclass"}><i>metaclass</i></GlossaryTerm> is used to refer to a <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> that has <GlossaryTerm styled={true} term={"instance"}><i>instances</i></GlossaryTerm> that are themselves *classes*. The <GlossaryTerm styled={true} term={"metaclass"}><i>metaclass</i></GlossaryTerm> determines the form of inheritance used by the *classes* that are its <GlossaryTerm styled={true} term={"instance"}><i>instances</i></GlossaryTerm> and the representation of the <GlossaryTerm styled={true} term={"instance"}><i>instances</i></GlossaryTerm> of those *classes*. The object system provides a default <GlossaryTerm styled={true} term={"metaclass"}><i>metaclass</i></GlossaryTerm>, <DictionaryLink styled={true} term={"standard-class"}><b>standard-class</b></DictionaryLink>, that is appropriate for most programs. 



Except where otherwise specified, all *classes* mentioned in this standard are <GlossaryTerm styled={true} term={"instance"}><i>instances</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> <DictionaryLink styled={true} term={"standard-class"}><b>standard-class</b></DictionaryLink>, all *generic functions* are <GlossaryTerm styled={true} term={"instance"}><i>instances</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> <DictionaryLink styled={true} term={"standard-generic-function"}><b>standard-generic-function</b></DictionaryLink>, and all <GlossaryTerm styled={true} term={"method"}><i>methods</i></GlossaryTerm> are <GlossaryTerm styled={true} term={"instance"}><i>instances</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> <DictionaryLink styled={true} term={"standard-method"}><b>standard-method</b></DictionaryLink>. 



