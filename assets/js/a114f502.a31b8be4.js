"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[67679],{7142:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>x,frontMatter:()=>o,metadata:()=>h,toc:()=>a});var s=i(85893),r=i(11151);function t(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"with-compilation-unit"})," ",(0,s.jsx)(n.em,{children:"Macro"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"with-compilation-unit"})," ([[ ",(0,s.jsx)(n.em,{children:"\u2193option"})," ]]) ",(0,s.jsx)(n.em,{children:"{form}"}),"* \u2192 {result}*"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"option::"}),"=",":override"," ",(0,s.jsx)(n.em,{children:"override"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"override"}),"\u2014a ",(0,s.jsx)(n.em,{children:"generalized boolean"}),"; evaluated. The default is ",(0,s.jsx)(n.strong,{children:"nil"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"forms"}),"\u2014an ",(0,s.jsx)(n.em,{children:"implicit progn"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"results"}),"\u2014the ",(0,s.jsx)(n.em,{children:"values"})," returned by the ",(0,s.jsx)(n.em,{children:"forms"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Description:"})}),"\n",(0,s.jsxs)(n.p,{children:["Executes ",(0,s.jsx)(n.em,{children:"forms"})," from left to right. Within the ",(0,s.jsx)(n.em,{children:"dynamic environment"})," of ",(0,s.jsx)(n.strong,{children:"with-compilation-unit"}),", actions deferred by the compiler until the end of compilation will be deferred until the end of the outermost call to ",(0,s.jsx)(n.strong,{children:"with-compilation-unit"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["The set of ",(0,s.jsx)(n.em,{children:"options"})," permitted may be extended by the implementation, but the only ",(0,s.jsx)(n.em,{children:"standardized"})," keyword is ",":override","."]}),"\n",(0,s.jsxs)(n.p,{children:["If nested dynamically only the outer call to ",(0,s.jsx)(n.strong,{children:"with-compilation-unit"})," has any effect unless the value associated with ",":override"," is ",(0,s.jsx)(n.em,{children:"true"}),", in which case warnings are deferred only to the end of the innermost call for which ",(0,s.jsx)(n.em,{children:"override"})," is ",(0,s.jsx)(n.em,{children:"true"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["The function ",(0,s.jsx)(n.strong,{children:"compile-file"})," provides the effect of"]}),"\n",(0,s.jsxs)(n.p,{children:["(with-compilation-unit (",":override"," nil) ...)"]}),"\n",(0,s.jsxs)(n.p,{children:["around its ",(0,s.jsx)(n.em,{children:"code"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Any ",(0,s.jsx)(n.em,{children:"implementation-dependent"})," extensions can only be provided as the result of an explicit programmer request by use of an ",(0,s.jsx)(n.em,{children:"implementation-dependent"})," keyword. ",(0,s.jsx)(n.em,{children:"Implementations"})," are forbidden from attaching additional meaning to a use of this macro which involves either no keywords or just the keyword ",":override","."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lisp",children:' \n\nIf an *implementation* would normally defer certain kinds of warnings, such as warnings about undefined functions, to the end of a compilation unit (such as a *file*), the following example shows how to cause those warnings to be deferred to the end of the compilation of several files. \n\n(defun compile-files (&amp;rest files) \n\n(with-compilation-unit () \n\n(mapcar #\u2019(lambda (file) (compile-file file)) files))) \n\n(compile-files "A" "B" "C") \n\nNote however that if the implementation does not normally defer any warnings, use of *with-compilation-unit* might not have any effect. \n\n\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"compile"}),", ",(0,s.jsx)(n.strong,{children:"compile-file"})]}),"\n",(0,s.jsx)(n.p,{children:"System"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"\u2217"}),(0,s.jsx)(n.strong,{children:"features"}),(0,s.jsx)(n.em,{children:"\u2217"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"\u2217"}),(0,s.jsx)(n.strong,{children:"features"}),(0,s.jsx)(n.em,{children:"\u2217 Variable"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Value Type:"})}),"\n",(0,s.jsxs)(n.p,{children:["a ",(0,s.jsx)(n.em,{children:"proper list"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Initial Value:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"implementation-dependent"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Description:"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.em,{children:"value"})," of ",(0,s.jsx)(n.strong,{children:"*features*"})," is called the ",(0,s.jsx)(n.em,{children:"features list"}),". It is a ",(0,s.jsx)(n.em,{children:"list"})," of ",(0,s.jsx)(n.em,{children:"symbols"}),", called ",(0,s.jsx)(n.em,{children:"features"}),", that correspond to some aspect of the ",(0,s.jsx)(n.em,{children:"implementation"})," or ",(0,s.jsx)(n.em,{children:"environment"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Most ",(0,s.jsx)(n.em,{children:"features"})," have ",(0,s.jsx)(n.em,{children:"implementation-dependent"})," meanings; The following meanings have been assigned to feature names:"]}),"\n",(0,s.jsx)(n.p,{children:":cltl1"}),"\n",(0,s.jsxs)(n.p,{children:["If present, indicates that the LISP ",(0,s.jsx)(n.em,{children:"package purports to conform"})," to the 1984 specification ",(0,s.jsx)(n.em,{children:"Common Lisp: The Language"}),". It is possible, but not required, for a ",(0,s.jsx)(n.em,{children:"conforming implementation"})," to have this feature because this specification specifies that its ",(0,s.jsx)(n.em,{children:"symbols"})," are to be in the COMMON-LISP ",(0,s.jsx)(n.em,{children:"package"}),", not the LISP package."]}),"\n",(0,s.jsx)(n.p,{children:":cltl2"}),"\n",(0,s.jsxs)(n.p,{children:["If present, indicates that the implementation ",(0,s.jsx)(n.em,{children:"purports to conform"})," to ",(0,s.jsx)(n.em,{children:"Common Lisp: The Language, Second Edition"}),". This feature must not be present in any ",(0,s.jsx)(n.em,{children:"conforming implementation"}),", since conformance to that document is not compatible with conformance to this specification. The name, however, is reserved by this specification in order to help programs distinguish implementations which conform to that document from implementations which conform to this specification."]}),"\n",(0,s.jsx)(n.p,{children:":ieee-floating-point"}),"\n",(0,s.jsxs)(n.p,{children:["If present, indicates that the implementation ",(0,s.jsx)(n.em,{children:"purports to conform"})," to the requirements of ",(0,s.jsx)(n.em,{children:"IEEE Standard for Binary Floating-Point Arithmetic"}),"."]}),"\n",(0,s.jsx)(n.p,{children:":x3j13"}),"\n",(0,s.jsxs)(n.p,{children:["If present, indicates that the implementation conforms to some particular working draft of this specification, or to some subset of features that approximates a belief about what this specification might turn out to contain. A ",(0,s.jsx)(n.em,{children:"conforming implementation"})," might or might not contain such a feature. (This feature is intended primarily as a stopgap in order to provide implementors something to use prior to the availability of a draft standard, in order to"]}),"\n",(0,s.jsxs)(n.p,{children:["discourage them from introducing the ",":draft-ansi-cl"," and ",":ansi-cl"," ",(0,s.jsx)(n.em,{children:"features"})," prematurely.) ",":draft-ansi-cl"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"\u2217"}),(0,s.jsx)(n.strong,{children:"features"}),(0,s.jsx)(n.em,{children:"\u2217"})]}),"\n",(0,s.jsxs)(n.p,{children:["If present, indicates that the ",(0,s.jsx)(n.em,{children:"implementation purports to conform"})," to the first full draft of this specification, which went to public review in 1992. A ",(0,s.jsx)(n.em,{children:"conforming implementation"})," which has the ",":draft-ansi-cl-2"," or ",":ansi-cl"," ",(0,s.jsx)(n.em,{children:"feature"})," is not permitted to retain the ",":draft-ansi-cl"," ",(0,s.jsx)(n.em,{children:"feature"})," since incompatible changes were made subsequent to the first draft."]}),"\n",(0,s.jsx)(n.p,{children:":draft-ansi-cl-2"}),"\n",(0,s.jsxs)(n.p,{children:["If present, indicates that a second full draft of this specification has gone to public review, and that the ",(0,s.jsx)(n.em,{children:"implementation purports to conform"})," to that specification. (If additional public review drafts are produced, this keyword will continue to refer to the second draft, and additional keywords will be added to identify conformance with such later drafts. As such, the meaning of this keyword can be relied upon not to change over time.) A ",(0,s.jsx)(n.em,{children:"conforming implementation"})," which has the ",":ansi-cl"," ",(0,s.jsx)(n.em,{children:"feature"})," is only permitted to retain the ",":draft-ansi-cl"," ",(0,s.jsx)(n.em,{children:"feature"})," if the finally approved standard is not incompatible with the draft standard."]}),"\n",(0,s.jsx)(n.p,{children:":ansi-cl"}),"\n",(0,s.jsxs)(n.p,{children:["If present, indicates that this specification has been adopted by ANSI as an official standard, and that the ",(0,s.jsx)(n.em,{children:"implementation purports to conform"}),"."]}),"\n",(0,s.jsx)(n.p,{children:":common-lisp"}),"\n",(0,s.jsxs)(n.p,{children:["This feature must appear in ",(0,s.jsx)(n.strong,{children:"*features*"})," for any implementation that has one or more of the features ",":x3j13",", ",":draft-ansi-cl",", or ",":ansi-cl",". It is intended that it should also appear in implementations which have the features ",":cltl1"," or ",":cltl2",", but this specification cannot force such behavior. The intent is that this feature should identify the language family named \u201cCommon Lisp,\u201d rather than some specific dialect within that family."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,s.jsx)(n.p,{children:"Section 1.5.2.1.1 (Use of Read-Time Conditionals), Section 2.4 (Standard Macro Characters)"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.em,{children:"value"})," of ",(0,s.jsx)(n.strong,{children:"*features*"})," is used by the #+ and #- reader syntax."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"Symbols"})," in the ",(0,s.jsx)(n.em,{children:"features list"})," may be in any ",(0,s.jsx)(n.em,{children:"package"}),", but in practice they are generally in the KEYWORD ",(0,s.jsx)(n.em,{children:"package"}),". This is because KEYWORD is the ",(0,s.jsx)(n.em,{children:"package"})," used by default when ",(0,s.jsx)(n.em,{children:"reading"}),(0,s.jsx)("sub",{children:"2"})," ",(0,s.jsx)(n.em,{children:"feature expressions"})," in the #+ and #- ",(0,s.jsx)(n.em,{children:"reader macros"}),". ",(0,s.jsx)(n.em,{children:"Code"})," that needs to name a ",(0,s.jsx)(n.em,{children:"feature"}),(0,s.jsx)("sub",{children:"2"})," in a ",(0,s.jsx)(n.em,{children:"package P"})," (other than KEYWORD) can do so by making explicit use of a ",(0,s.jsx)(n.em,{children:"package prefix"})," for ",(0,s.jsx)(n.em,{children:"P"}),", but note that such ",(0,s.jsx)(n.em,{children:"code"})," must also assure that the ",(0,s.jsx)(n.em,{children:"package P"})," exists in order for the ",(0,s.jsx)(n.em,{children:"feature expression"})," to be ",(0,s.jsx)(n.em,{children:"read"})," ",(0,s.jsx)("sub",{children:"2"}),"\u2014even in cases where the ",(0,s.jsx)(n.em,{children:"feature expression"})," is expected to fail."]}),"\n",(0,s.jsxs)(n.p,{children:["It is generally considered wise for an ",(0,s.jsx)(n.em,{children:"implementation"})," to include one or more ",(0,s.jsx)(n.em,{children:"features"})," identifying the specific ",(0,s.jsx)(n.em,{children:"implementation"}),", so that conditional expressions can be written which distinguish idiosyncrasies of one ",(0,s.jsx)(n.em,{children:"implementation"})," from those of another. Since features are normally ",(0,s.jsx)(n.em,{children:"symbols"})," in the KEYWORD ",(0,s.jsx)(n.em,{children:"package"})," where name collisions might easily result, and since no uniquely defined"]}),"\n",(0,s.jsx)(n.p,{children:"System"}),"\n",(0,s.jsxs)(n.p,{children:["mechanism is designated for deciding who has the right to use which ",(0,s.jsx)(n.em,{children:"symbol"})," for what reason, a conservative strategy is to prefer names derived from one\u2019s own company or product name, since those names are often trademarked and are hence less likely to be used unwittingly by another ",(0,s.jsx)(n.em,{children:"implementation"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"\u2217"}),(0,s.jsx)(n.strong,{children:"compile-file-pathname"}),(0,s.jsx)(n.em,{children:"\u2217"}),"**,** ",(0,s.jsx)(n.em,{children:"\u2217"}),(0,s.jsx)(n.strong,{children:"compile-file-truename"}),(0,s.jsx)(n.em,{children:"\u2217 Variable"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Value Type:"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.em,{children:"value"})," of ",(0,s.jsx)(n.strong,{children:"*compile-file-pathname*"})," must always be a ",(0,s.jsx)(n.em,{children:"pathname"})," or ",(0,s.jsx)(n.strong,{children:"nil"}),". The ",(0,s.jsx)(n.em,{children:"value"})," of ",(0,s.jsx)(n.strong,{children:"*compile-file-truename*"})," must always be a ",(0,s.jsx)(n.em,{children:"physical pathname"})," or ",(0,s.jsx)(n.strong,{children:"nil"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Initial Value:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"nil"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Description:"})}),"\n",(0,s.jsxs)(n.p,{children:["During a call to ",(0,s.jsx)(n.strong,{children:"compile-file"}),", ",(0,s.jsx)(n.strong,{children:"*compile-file-pathname*"})," is ",(0,s.jsx)(n.em,{children:"bound"})," to the ",(0,s.jsx)(n.em,{children:"pathname"})," denoted by the first argument to ",(0,s.jsx)(n.strong,{children:"compile-file"}),", merged against the defaults; that is, it is ",(0,s.jsx)(n.em,{children:"bound"})," to (pathname (merge-pathnames ",(0,s.jsx)(n.em,{children:"input-file"}),")). During the same time interval, ",(0,s.jsx)(n.strong,{children:"*compile-file-truename*"})," is ",(0,s.jsx)(n.em,{children:"bound"})," to the ",(0,s.jsx)(n.em,{children:"truename"})," of the ",(0,s.jsx)(n.em,{children:"file"})," being ",(0,s.jsx)(n.em,{children:"compiled"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["At other times, the ",(0,s.jsx)(n.em,{children:"value"})," of these ",(0,s.jsx)(n.em,{children:"variables"})," is ",(0,s.jsx)(n.strong,{children:"nil"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["If a ",(0,s.jsx)(n.em,{children:"break loop"})," is entered while ",(0,s.jsx)(n.strong,{children:"compile-file"})," is ongoing, it is ",(0,s.jsx)(n.em,{children:"implementation-dependent"})," whether these ",(0,s.jsx)(n.em,{children:"variables"})," retain the ",(0,s.jsx)(n.em,{children:"values"})," they had just prior to entering the ",(0,s.jsx)(n.em,{children:"break loop"})," or whether they are ",(0,s.jsx)(n.em,{children:"bound"})," to ",(0,s.jsx)(n.strong,{children:"nil"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["The consequences are unspecified if an attempt is made to ",(0,s.jsx)(n.em,{children:"assign"})," or ",(0,s.jsx)(n.em,{children:"bind"})," either of these ",(0,s.jsx)(n.em,{children:"variables"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Affected By:"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.em,{children:"file system"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"compile-file"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"\u2217"}),(0,s.jsx)(n.strong,{children:"load-pathname"}),(0,s.jsx)(n.em,{children:"\u2217"}),"**,** ",(0,s.jsx)(n.em,{children:"\u2217"}),(0,s.jsx)(n.strong,{children:"load-truename"}),(0,s.jsx)(n.em,{children:"\u2217 Variable"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Value Type:"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.em,{children:"value"})," of ",(0,s.jsx)(n.strong,{children:"*load-pathname*"})," must always be a ",(0,s.jsx)(n.em,{children:"pathname"})," or ",(0,s.jsx)(n.strong,{children:"nil"}),". The ",(0,s.jsx)(n.em,{children:"value"})," of ",(0,s.jsx)(n.strong,{children:"*load-truename*"})," must always be a ",(0,s.jsx)(n.em,{children:"physical pathname"})," or ",(0,s.jsx)(n.strong,{children:"nil"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Initial Value:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"nil"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Description:"})}),"\n",(0,s.jsxs)(n.p,{children:["During a call to ",(0,s.jsx)(n.strong,{children:"load"}),", ",(0,s.jsx)(n.strong,{children:"*load-pathname*"})," is ",(0,s.jsx)(n.em,{children:"bound"})," to the ",(0,s.jsx)(n.em,{children:"pathname"})," denoted by the the first argument to ",(0,s.jsx)(n.strong,{children:"load"}),", merged against the defaults; that is, it is ",(0,s.jsx)(n.em,{children:"bound"})," to (pathname (merge-pathnames ",(0,s.jsx)(n.em,{children:"filespec"}),")). During the same time interval, ",(0,s.jsx)(n.strong,{children:"*load-truename*"})," is ",(0,s.jsx)(n.em,{children:"bound"})," to the ",(0,s.jsx)(n.em,{children:"truename"})," of the ",(0,s.jsx)(n.em,{children:"file"})," being loaded."]}),"\n",(0,s.jsxs)(n.p,{children:["At other times, the ",(0,s.jsx)(n.em,{children:"value"})," of these ",(0,s.jsx)(n.em,{children:"variables"})," is ",(0,s.jsx)(n.strong,{children:"nil"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["If a ",(0,s.jsx)(n.em,{children:"break loop"})," is entered while ",(0,s.jsx)(n.strong,{children:"load"})," is ongoing, it is ",(0,s.jsx)(n.em,{children:"implementation-dependent"})," whether these ",(0,s.jsx)(n.em,{children:"variables"})," retain the ",(0,s.jsx)(n.em,{children:"values"})," they had just prior to entering the ",(0,s.jsx)(n.em,{children:"break loop"})," or whether they are ",(0,s.jsx)(n.em,{children:"bound"})," to ",(0,s.jsx)(n.strong,{children:"nil"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["The consequences are unspecified if an attempt is made to ",(0,s.jsx)(n.em,{children:"assign"})," or ",(0,s.jsx)(n.em,{children:"bind"})," either of these ",(0,s.jsx)(n.em,{children:"variables"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Affected By:"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.em,{children:"file system"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"load"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"\u2217"}),(0,s.jsx)(n.strong,{children:"compile-print"}),(0,s.jsx)(n.em,{children:"\u2217"}),"**,** ",(0,s.jsx)(n.em,{children:"\u2217"}),(0,s.jsx)(n.strong,{children:"compile-verbose"}),(0,s.jsx)(n.em,{children:"\u2217 Variable"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Value Type:"})}),"\n",(0,s.jsxs)(n.p,{children:["a ",(0,s.jsx)(n.em,{children:"generalized boolean"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Initial Value:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"implementation-dependent"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Description:"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.em,{children:"value"})," of ",(0,s.jsx)(n.strong,{children:"*compile-print*"})," is the default value of the ",":print"," ",(0,s.jsx)(n.em,{children:"argument"})," to ",(0,s.jsx)(n.strong,{children:"compile-file"}),". The ",(0,s.jsx)(n.em,{children:"value"})," of ",(0,s.jsx)(n.strong,{children:"*compile-verbose*"})," is the default value of the ",":verbose"," ",(0,s.jsx)(n.em,{children:"argument"})," to ",(0,s.jsx)(n.strong,{children:"compile-file"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"compile-file"})}),"\n",(0,s.jsx)(n.p,{children:"System"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"\u2217"}),(0,s.jsx)(n.strong,{children:"load-print"}),(0,s.jsx)(n.em,{children:"\u2217"}),"**,** ",(0,s.jsx)(n.em,{children:"\u2217"}),(0,s.jsx)(n.strong,{children:"load-verbose"}),(0,s.jsx)(n.em,{children:"\u2217 Variable"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Value Type:"})}),"\n",(0,s.jsxs)(n.p,{children:["a ",(0,s.jsx)(n.em,{children:"generalized boolean"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Initial Value:"})}),"\n",(0,s.jsxs)(n.p,{children:["The initial ",(0,s.jsx)(n.em,{children:"value"})," of ",(0,s.jsx)(n.strong,{children:"*load-print*"})," is ",(0,s.jsx)(n.em,{children:"false"}),". The initial ",(0,s.jsx)(n.em,{children:"value"})," of ",(0,s.jsx)(n.strong,{children:"*load-verbose*"})," is ",(0,s.jsx)(n.em,{children:"implementation dependent"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Description:"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.em,{children:"value"})," of ",(0,s.jsx)(n.strong,{children:"*load-print*"})," is the default value of the ",":print"," ",(0,s.jsx)(n.em,{children:"argument"})," to ",(0,s.jsx)(n.strong,{children:"load"}),". The ",(0,s.jsx)(n.em,{children:"value"})," of ",(0,s.jsx)(n.strong,{children:"*load-verbose*"})," is the default value of the ",":verbose"," ",(0,s.jsx)(n.em,{children:"argument"})," to ",(0,s.jsx)(n.strong,{children:"load"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"load"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"\u2217"}),(0,s.jsx)(n.strong,{children:"modules"}),(0,s.jsx)(n.em,{children:"\u2217 Variable"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Value Type:"})}),"\n",(0,s.jsxs)(n.p,{children:["a ",(0,s.jsx)(n.em,{children:"list"})," of ",(0,s.jsx)(n.em,{children:"strings"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Initial Value:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"implementation-dependent"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Description:"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.em,{children:"value"})," of ",(0,s.jsx)(n.strong,{children:"*modules*"})," is a list of names of the modules that have been loaded into the current ",(0,s.jsx)(n.em,{children:"Lisp image"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Affected By:"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"provide"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"provide"}),", ",(0,s.jsx)(n.strong,{children:"require"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,s.jsxs)(n.p,{children:["The variable ",(0,s.jsx)(n.strong,{children:"*modules*"})," is deprecated."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"provide, require"})})]})}function l(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(t,{...e})}):t(e)}const o={},c="with-compilation-unit",h={id:"chap-24/ce-c-dictionary/withcompilationunit",title:"with-compilation-unit",description:"Expanded Reference: with-compilation-unit",source:"@site/docs/chap-24/ce-c-dictionary/withcompilationunit.md",sourceDirName:"chap-24/ce-c-dictionary",slug:"/chap-24/ce-c-dictionary/withcompilationunit",permalink:"/cl-language-reference/docs/chap-24/ce-c-dictionary/withcompilationunit",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-24/ce-c-dictionary/withcompilationunit.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"provide, require",permalink:"/cl-language-reference/docs/chap-24/ce-c-dictionary/provide"},next:{title:"25. Environment",permalink:"/cl-language-reference/docs/category/25-environment"}},d={},a=[{value:"Expanded Reference: with-compilation-unit",id:"expanded-reference-with-compilation-unit",level:2}];function m(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"with-compilation-unit",children:"with-compilation-unit"}),"\n","\n","\n",(0,s.jsx)(l,{}),"\n",(0,s.jsx)(n.h2,{id:"expanded-reference-with-compilation-unit",children:"Expanded Reference: with-compilation-unit"}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lisp",children:"(with-compilation-unit )\n"})})]})}function x(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>o,a:()=>l});var s=i(67294);const r={},t=s.createContext(r);function l(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);