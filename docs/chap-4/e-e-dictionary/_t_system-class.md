**t** *System Class* 



**Class Precedence List:** 



<ClLinks  term={"t"}><b>t</b></ClLinks> 



**Description:** 



The set of all <ClLinks  term={"object"}><i>objects</i></ClLinks>. The <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"t"}><b>t</b></ClLinks> is a <ClLinks  term={"supertype"}><i>supertype</i></ClLinks> of every <ClLinks  term={"type"}><i>type</i></ClLinks>, including itself. Every <ClLinks  term={"object"}><i>object</i></ClLinks> is of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"t"}><b>t</b></ClLinks>. 



**satisfies** *Type Specifier* 



**Compound Type Specifier Kind:** 



Predicating. 



**Compound Type Specifier Syntax:** 



(satisfies *predicate-name*) 



**Compound Type Specifier Arguments:** 



*predicate-name*—a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>. 



**Compound Type Specifier Description:** 



This denotes the set of all <ClLinks  term={"object"}><i>objects</i></ClLinks> that satisfy the *predicate predicate-name*, which must be a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> whose global <ClLinks  term={"function"}><i>function</i></ClLinks> definition is a one-argument predicate. A name is required for *predicate-name*; *lambda expressions* are not allowed. For example, the *type specifier* (and integer (satisfies evenp)) denotes the set of all even integers. The form (typep *x* ’(satisfies *p*)) is equivalent to (if (*p x*) t nil).  







The argument is required. The <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> **\*** can be the argument, but it denotes itself (the <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> **\***), and does not represent an unspecified value. 



The symbol **satisfies** is not valid as a *type specifier* . 



<ClLinks  term={"member"}><b>member</b></ClLinks> *Type Specifier* 



**Compound Type Specifier Kind:** 



Combining. 



**Compound Type Specifier Syntax:** 



(member <ClLinks  term={"object"}><i>\{object\}</i></ClLinks>\*) 



**Compound Type Specifier Arguments:** 



<ClLinks  term={"object"}><i>object</i></ClLinks>—an <ClLinks  term={"object"}><i>object</i></ClLinks>. 



**Compound Type Specifier Description:** 



This denotes the set containing the named <ClLinks  term={"object"}><i>objects</i></ClLinks>. An <ClLinks  term={"object"}><i>object</i></ClLinks> is of this <ClLinks  term={"type"}><i>type</i></ClLinks> if and only if it is <ClLinks  term={"eql"}><b>eql</b></ClLinks> to one of the specified <ClLinks  term={"object"}><i>objects</i></ClLinks>. 



The *type specifiers* (member) and <ClLinks  term={"nil"}><b>nil</b></ClLinks> are equivalent. **\*** can be among the <ClLinks  term={"object"}><i>objects</i></ClLinks>, but if so it denotes itself (the symbol **\***) and does not represent an unspecified value. The symbol <ClLinks  term={"member"}><b>member</b></ClLinks> is not valid as a *type specifier* ; and, specifically, it is not an abbreviation for either (member) or (member \*). 



**See Also:** 



the <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"eql"}><b>eql</b></ClLinks> 



<ClLinks  term={"not"}><b>not</b></ClLinks> *Type Specifier* 



**Compound Type Specifier Kind:** 



Combining. 



**Compound Type Specifier Syntax:** 



(not *typespec*) 



**Compound Type Specifier Arguments:** 



*typespec*—a *type specifier* .  







**Compound Type Specifier Description:** 



This denotes the set of all <ClLinks  term={"object"}><i>objects</i></ClLinks> that are not of the *type typespec*. 



The argument is required, and cannot be **\***. 



The symbol <ClLinks  term={"not"}><b>not</b></ClLinks> is not valid as a *type specifier* . 



<ClLinks  term={"and"}><b>and</b></ClLinks> *Type Specifier* 



**Compound Type Specifier Kind:** 



Combining. 



**Compound Type Specifier Syntax:** 



(and *\{typespec\}*\*) 



**Compound Type Specifier Arguments:** 



*typespec*—a *type specifier* . 



**Compound Type Specifier Description:** 



This denotes the set of all <ClLinks  term={"object"}><i>objects</i></ClLinks> of the <ClLinks  term={"type"}><i>type</i></ClLinks> determined by the intersection of the *typespecs*. **\*** is not permitted as an argument. 



The *type specifiers* (and) and <ClLinks  term={"t"}><b>t</b></ClLinks> are equivalent. The symbol <ClLinks  term={"and"}><b>and</b></ClLinks> is not valid as a *type specifier* , and, specifically, it is not an abbreviation for (and). 



<ClLinks  term={"or"}><b>or</b></ClLinks> *Type Specifier* 



**Compound Type Specifier Kind:** 



Combining. 



**Compound Type Specifier Syntax:** 



(or *\{typespec\}*\*) 



**Compound Type Specifier Arguments:** 



*typespec*—a *type specifier* .  







**Compound Type Specifier Description:** 



This denotes the set of all <ClLinks  term={"object"}><i>objects</i></ClLinks> of the <ClLinks  term={"type"}><i>type</i></ClLinks> determined by the union of the *typespecs*. For example, the <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"list"}><b>list</b></ClLinks> by definition is the same as (or null cons). Also, the value returned by <ClLinks  term={"position"}><b>position</b></ClLinks> is an <ClLinks  term={"object"}><i>object</i></ClLinks> of <ClLinks  term={"type"}><i>type</i></ClLinks> (or null (integer 0 \*)); *i.e.*, either <ClLinks  term={"nil"}><b>nil</b></ClLinks> or a non-negative *integer* . 



**\*** is not permitted as an argument. 



The *type specifiers* (or) and <ClLinks  term={"nil"}><b>nil</b></ClLinks> are equivalent. The symbol <ClLinks  term={"or"}><b>or</b></ClLinks> is not valid as a *type specifier* ; and, specifically, it is not an abbreviation for (or). 



<ClLinks  term={"values"}><b>values</b></ClLinks> *Type Specifier* 



**Compound Type Specifier Kind:** 



Specializing. 



**Compound Type Specifier Syntax:** 



(values *↓value-typespec*) 



*value-typespec::*=*\{typespec\}*\* [&amp;optional *\{typespec\}*\*] [&amp;rest *typespec*] [**&amp;allow-other-keys**] 



**Compound Type Specifier Arguments:** 



*typespec*—a *type specifier* . 



**Compound Type Specifier Description:** 



This *type specifier* can be used only as the *value-type* in a <ClLinks  term={"function"}><b>function</b></ClLinks> *type specifier* or a <ClLinks  term={"the"}><b>the</b></ClLinks> *special form*. It is used to specify individual <ClLinks  term={"type"}><i>types</i></ClLinks> when *multiple values* are involved. The **&amp;optional** and **&amp;rest** markers can appear in the *value-type* list; they indicate the parameter list of a <ClLinks  term={"function"}><i>function</i></ClLinks> that, when given to <ClLinks  term={"multiple-value-call"}><b>multiple-value-call</b></ClLinks> along with the values, would correctly receive those values. 



The symbol **\*** may not be among the *value-types*. 



The symbol <ClLinks  term={"values"}><b>values</b></ClLinks> is not valid as a *type specifier* ; and, specifically, it is not an abbreviation for (values).  







<ClLinks  term={"eql"}><b>eql</b></ClLinks> *Type Specifier* 



**Compound Type Specifier Kind:** 



Combining. 



**Compound Type Specifier Syntax:** 



(eql <ClLinks  term={"object"}><i>object</i></ClLinks>) 



**Compound Type Specifier Arguments:** 



<ClLinks  term={"object"}><i>object</i></ClLinks>—an <ClLinks  term={"object"}><i>object</i></ClLinks>. 



**Compound Type Specifier Description:** 



Represents the <ClLinks  term={"type"}><i>type</i></ClLinks> of all *x* for which (eql *object x*) is true. 



The argument <ClLinks  term={"object"}><i>object</i></ClLinks> is required. The <ClLinks  term={"object"}><i>object</i></ClLinks> can be **\***, but if so it denotes itself (the symbol **\***) and does not represent an unspecified value. The <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> <ClLinks  term={"eql"}><b>eql</b></ClLinks> is not valid as an *atomic type specifier* . 



