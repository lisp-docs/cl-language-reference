 



An *ordinary lambda list* is used to describe how a set of <ClLinks styled={true} term={"argument"}><i>arguments</i></ClLinks> is received by an *ordinary function*. The *defined names* in Figure 3–12 are those which use *ordinary lambda lists*:  







|<p>**define-method-combination handler-case restart-case defun labels** </p><p>**flet lambda**</p>|

| :- |





**Figure 3–12. Standardized Operators that use Ordinary Lambda Lists** 



An *ordinary lambda list* can contain the *lambda list keywords* shown in Figure 3–13. 



|<p>**&amp;allow-other-keys &amp;key &amp;rest** </p><p>**&amp;aux &amp;optional**</p>|

| :- |





**Figure 3–13. Lambda List Keywords used by Ordinary Lambda Lists** 



Each <ClLinks styled={true} term={"element"}><i>element</i></ClLinks> of a *lambda list* is either a parameter specifier or a *lambda list keyword*. Implementations are free to provide additional *lambda list keywords*. For a list of all *lambda list keywords* used by the implementation, see <ClLinks styled={true} term={"lambda-list-keywords"}><b>lambda-list-keywords</b></ClLinks>. 



The syntax for *ordinary lambda lists* is as follows: 



*lambda-list::*=(*\{var\}*\* 



[&amp;optional *\{var |* (*var* [*init-form* [*supplied-p-parameter*]])*\}*\*] 



[&amp;rest *var*] 



[&amp;key *\{var |* (*\{var |* (*keyword-name var*)*\}* [*init-form* [*supplied-p-parameter*]])*\}*\* 



[&amp;allow-other-keys]] 



[&amp;aux *\{var |* (*var* [*init-form*])*\}*\*]) 



A *var* or *supplied-p-parameter* must be a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> that is not the name of a *constant variable*. 



An *init-form* can be any <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>. Whenever any *init-form* is evaluated for any parameter specifier, that <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> may refer to any parameter variable to the left of the specifier in which the *init-form* appears, including any *supplied-p-parameter* variables, and may rely on the fact that no other parameter variable has yet been bound (including its own parameter variable). 



A *keyword-name* can be any <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>, but by convention is normally a <ClLinks styled={true} term={"keyword"}><i>keyword</i></ClLinks> <sub>1</sub>; all *standardized functions* follow that convention. 



An *ordinary lambda list* has five parts, any or all of which may be empty. For information about the treatment of argument mismatches, see Section 3.5 (Error Checking in Function Calls).  







