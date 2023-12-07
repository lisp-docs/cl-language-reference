"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[78168],{54324:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>h,contentTitle:()=>a,default:()=>o,frontMatter:()=>t,metadata:()=>c,toc:()=>l});var s=r(85893),i=r(11151);const t={title:"P",sidebar_position:112},a=void 0,c={id:"chap-26/p",title:"P",description:"P",source:"@site/docs/chap-26/p.md",sourceDirName:"chap-26",slug:"/chap-26/p",permalink:"/cl-language-reference/docs/chap-26/p",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-26/p.md",tags:[],version:"current",sidebarPosition:112,frontMatter:{title:"P",sidebar_position:112},sidebar:"tutorialSidebar",previous:{title:"O",permalink:"/cl-language-reference/docs/chap-26/o"},next:{title:"Q",permalink:"/cl-language-reference/docs/chap-26/q"}},h={},l=[];function d(e){const n={em:"em",p:"p",strong:"strong",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"P"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"package"})," ",(0,s.jsx)(n.em,{children:"n."})," an ",(0,s.jsx)(n.em,{children:"object"})," of ",(0,s.jsx)(n.em,{children:"type"})," ",(0,s.jsx)(n.strong,{children:"package"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"package cell"})," ",(0,s.jsx)(n.em,{children:"n. Trad."})," (of a ",(0,s.jsx)(n.em,{children:"symbol"}),") The ",(0,s.jsx)(n.em,{children:"place"})," in a ",(0,s.jsx)(n.em,{children:"symbol"})," that holds one of possibly several ",(0,s.jsx)(n.em,{children:"packages"})," in which the ",(0,s.jsx)(n.em,{children:"symbol"})," is ",(0,s.jsx)(n.em,{children:"interned"}),", called the ",(0,s.jsx)(n.em,{children:"home package"}),", or which holds ",(0,s.jsx)(n.strong,{children:"nil"})," if no such ",(0,s.jsx)(n.em,{children:"package"})," exists or is known. See the ",(0,s.jsx)(n.em,{children:"function"})," ",(0,s.jsx)(n.strong,{children:"symbol-package"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"package designator"})," ",(0,s.jsx)(n.em,{children:"n."})," a ",(0,s.jsx)(n.em,{children:"designator"})," for a ",(0,s.jsx)(n.em,{children:"package"}),"; that is, an ",(0,s.jsx)(n.em,{children:"object"})," that denotes a ",(0,s.jsx)(n.em,{children:"package"})," and that is one of: a ",(0,s.jsx)(n.em,{children:"string designator"})," (denoting the ",(0,s.jsx)(n.em,{children:"package"})," that has the ",(0,s.jsx)(n.em,{children:"string"})," that it designates as its ",(0,s.jsx)(n.em,{children:"name"})," or as one of its ",(0,s.jsx)(n.em,{children:"nicknames"}),"), or a ",(0,s.jsx)(n.em,{children:"package"})," (denoting itself)."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"package marker"})," ",(0,s.jsx)(n.em,{children:"n."})," a character which is used in the textual notation for a symbol to separate the package name from the symbol name, and which is ",(0,s.jsx)(n.em,{children:"colon"})," in the ",(0,s.jsx)(n.em,{children:"standard readtable"}),". See Section 2.1 (Character Syntax)."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"package prefix"})," ",(0,s.jsx)(n.em,{children:"n."})," a notation preceding the ",(0,s.jsx)(n.em,{children:"name"})," of a ",(0,s.jsx)(n.em,{children:"symbol"})," in text that is processed by the ",(0,s.jsx)(n.em,{children:"Lisp reader"})," , which uses a ",(0,s.jsx)(n.em,{children:"package name"})," followed by one or more ",(0,s.jsx)(n.em,{children:"package markers"}),", and which indicates that the symbol is looked up in the indicated ",(0,s.jsx)(n.em,{children:"package"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"package registry"})," ",(0,s.jsx)(n.em,{children:"n."})," A mapping of ",(0,s.jsx)(n.em,{children:"names"})," to ",(0,s.jsx)(n.em,{children:"package objects"}),". It is possible for there to be a ",(0,s.jsx)(n.em,{children:"package object"})," which is not in this mapping; such a ",(0,s.jsx)(n.em,{children:"package"})," is called an ",(0,s.jsx)(n.em,{children:"unregistered package"}),". ",(0,s.jsx)(n.em,{children:"Operators"})," such as ",(0,s.jsx)(n.strong,{children:"find-package"})," consult this mapping in order to find a ",(0,s.jsx)(n.em,{children:"package"})," from its ",(0,s.jsx)(n.em,{children:"name"}),". ",(0,s.jsx)(n.em,{children:"Operators"})," such as ",(0,s.jsx)(n.strong,{children:"do-all-symbols"}),", ",(0,s.jsx)(n.strong,{children:"find-all-symbols"}),", and ",(0,s.jsx)(n.strong,{children:"list-all-packages"})," operate only on ",(0,s.jsx)(n.em,{children:"packages"})," that exist in the ",(0,s.jsx)(n.em,{children:"package registry"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"pairwise"})," ",(0,s.jsx)(n.em,{children:"adv."}),' (of an adjective on a set) applying individually to all possible pairings of elements of the set. "The types ',(0,s.jsx)(n.em,{children:"A"}),", ",(0,s.jsx)(n.em,{children:"B"}),", and ",(0,s.jsx)(n.em,{children:"C"})," are pairwise disjoint if ",(0,s.jsx)(n.em,{children:"A"})," and ",(0,s.jsx)(n.em,{children:"B"})," are disjoint, ",(0,s.jsx)(n.em,{children:"B"})," and ",(0,s.jsx)(n.em,{children:"C"})," are disjoint, and ",(0,s.jsx)(n.em,{children:"A"})," and ",(0,s.jsx)(n.em,{children:"C"}),' are disjoint."']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"parallel"})," ",(0,s.jsx)(n.em,{children:"adj. Trad."})," (of ",(0,s.jsx)(n.em,{children:"binding"})," or ",(0,s.jsx)(n.em,{children:"assignment"}),") done in the style of ",(0,s.jsx)(n.strong,{children:"psetq"}),", ",(0,s.jsx)(n.strong,{children:"let"}),", or ",(0,s.jsx)(n.strong,{children:"do"}),"; that is, first evaluating all of the ",(0,s.jsx)(n.em,{children:"forms"})," that produce ",(0,s.jsx)(n.em,{children:"values"}),", and only then ",(0,s.jsx)(n.em,{children:"assigning"})," or ",(0,s.jsx)(n.em,{children:"binding"})," the ",(0,s.jsx)(n.em,{children:"variables"})," (or ",(0,s.jsx)(n.em,{children:"places"}),'). Note that this does not imply traditional computational "parallelism" since the ',(0,s.jsx)(n.em,{children:"forms"})," that produce ",(0,s.jsx)(n.em,{children:"values"})," are evaluated  ",(0,s.jsx)(n.em,{children:"sequentially"}),". See ",(0,s.jsx)(n.em,{children:"sequential"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"parameter"})," ",(0,s.jsx)(n.em,{children:"n."})," 1. (of a ",(0,s.jsx)(n.em,{children:"function"}),") a ",(0,s.jsx)(n.em,{children:"variable"})," in the definition of a ",(0,s.jsx)(n.em,{children:"function"})," which takes on the ",(0,s.jsx)(n.em,{children:"value"})," of a corresponding ",(0,s.jsx)(n.em,{children:"argument"})," (or of a ",(0,s.jsx)(n.em,{children:"list"})," of corresponding arguments) to that ",(0,s.jsx)(n.em,{children:"function"})," when it is called, or which in some cases is given a default value because there is no corresponding ",(0,s.jsx)(n.em,{children:"argument"}),". 2. (of a ",(0,s.jsx)(n.em,{children:"format directive"}),") an ",(0,s.jsx)(n.em,{children:"object"})," received as data flow by a ",(0,s.jsx)(n.em,{children:"format directive"})," due to a prefix notation within the ",(0,s.jsx)(n.em,{children:"format string"})," at the ",(0,s.jsx)(n.em,{children:"format directive"}),'\u2019s point of use. See Section 22.3 (Formatted Output). "In "~3,\u20190D", the number 3 and the character #\\0 are parameters to the ~D format directive."']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"parameter specializer"})," ",(0,s.jsx)(n.em,{children:"n."})," 1. (of a ",(0,s.jsx)(n.em,{children:"method"}),") an ",(0,s.jsx)(n.em,{children:"expression"})," which constrains the  ",(0,s.jsx)(n.em,{children:"method"})," to be applicable only to ",(0,s.jsx)(n.em,{children:"argument"})," sequences in which the corresponding  ",(0,s.jsx)(n.em,{children:"argument"})," matches the ",(0,s.jsx)(n.em,{children:"parameter specializer"})," . 2. a ",(0,s.jsx)(n.em,{children:"class"}),", or a ",(0,s.jsx)(n.em,{children:"list"})," (eql ",(0,s.jsx)(n.em,{children:"object"}),")."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"parameter specializer name"})," ",(0,s.jsx)(n.em,{children:"n."})," 1. (of a ",(0,s.jsx)(n.em,{children:"method"})," definition) an expression used in code to name a ",(0,s.jsx)(n.em,{children:"parameter specializer"})," . See Section 7.6.2 (Introduction to Methods). 2. a ",(0,s.jsx)(n.em,{children:"class"}),", a ",(0,s.jsx)(n.em,{children:"symbol"})," naming a ",(0,s.jsx)(n.em,{children:"class"}),", or a ",(0,s.jsx)(n.em,{children:"list"})," (eql ",(0,s.jsx)(n.em,{children:"form"}),")."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"pathname"})," ",(0,s.jsx)(n.em,{children:"n."})," an ",(0,s.jsx)(n.em,{children:"object"})," of ",(0,s.jsx)(n.em,{children:"type"})," ",(0,s.jsx)(n.strong,{children:"pathname"}),", which is a structured representation of the name of a ",(0,s.jsx)(n.em,{children:"file"}),". A ",(0,s.jsx)(n.em,{children:"pathname"}),' has six components: a "host," a "device," a "directory," a "name," a "type," and a "version."']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"pathname designator"})," ",(0,s.jsx)(n.em,{children:"n."})," a ",(0,s.jsx)(n.em,{children:"designator"})," for a ",(0,s.jsx)(n.em,{children:"pathname"}),"; that is, an ",(0,s.jsx)(n.em,{children:"object"})," that denotes a ",(0,s.jsx)(n.em,{children:"pathname"})," and that is one of: a ",(0,s.jsx)(n.em,{children:"pathname namestring"})," (denoting the corresponding ",(0,s.jsx)(n.em,{children:"pathname"}),"), a ",(0,s.jsx)(n.em,{children:"stream associated with a file"})," (denoting the ",(0,s.jsx)(n.em,{children:"pathname"})," used to open the ",(0,s.jsx)(n.em,{children:"file"}),"; this may be, but is not required to be, the actual name of the ",(0,s.jsx)(n.em,{children:"file"}),"), or a ",(0,s.jsx)(n.em,{children:"pathname"})," (denoting itself). See Section 21.1.1.1.2 (Open and Closed Streams)."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"physical pathname"})," ",(0,s.jsx)(n.em,{children:"n."})," a ",(0,s.jsx)(n.em,{children:"pathname"})," that is not a ",(0,s.jsx)(n.em,{children:"logical pathname"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"place"})," ",(0,s.jsx)(n.em,{children:"n."})," 1. a ",(0,s.jsx)(n.em,{children:"form"})," which is suitable for use as a ",(0,s.jsx)(n.em,{children:"generalized reference"}),". 2. the conceptual location referred to by such a ",(0,s.jsx)(n.em,{children:"place"}),(0,s.jsx)("sub",{children:"1"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"plist"})," [ ",(0,s.jsx)(n.strong,{children:"p\u2014e list"})," ] ",(0,s.jsx)(n.em,{children:"n."})," a ",(0,s.jsx)(n.em,{children:"property list"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"portable"})," ",(0,s.jsx)(n.em,{children:"adj."})," (of ",(0,s.jsx)(n.em,{children:"code"}),") required to produce equivalent results and observable side effects in all ",(0,s.jsx)(n.em,{children:"conforming implementations"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"potential copy"})," ",(0,s.jsx)(n.em,{children:"n."})," (of an ",(0,s.jsx)(n.em,{children:"object O"}),(0,s.jsx)("sub",{children:"1"})," subject to constriants) an ",(0,s.jsx)(n.em,{children:"object O"}),(0,s.jsx)("sub",{children:"2"})," that if the specified constraints are satisfied by ",(0,s.jsx)(n.em,{children:"O"}),(0,s.jsx)("sub",{children:"1"})," without any modification might or might not be ",(0,s.jsx)(n.em,{children:"identical"})," to ",(0,s.jsx)(n.em,{children:"O"}),(0,s.jsx)("sub",{children:"1"}),", or else that must be a ",(0,s.jsx)(n.em,{children:"fresh object"})," that resembles a ",(0,s.jsx)(n.em,{children:"copy"})," of ",(0,s.jsx)(n.em,{children:"O"}),(0,s.jsx)("sub",{children:"1"})," except that it has been modified as necessary to satisfy the constraints."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"potential number"})," ",(0,s.jsx)(n.em,{children:"n."})," A textual notation that might be parsed by the ",(0,s.jsx)(n.em,{children:"Lisp reader"})," in some ",(0,s.jsx)(n.em,{children:"conforming implementation"})," as a ",(0,s.jsx)(n.em,{children:"number"})," but is not required to be parsed as a ",(0,s.jsx)(n.em,{children:"number"})," . No ",(0,s.jsx)(n.em,{children:"object"})," is a ",(0,s.jsx)(n.em,{children:"potential number"}),"\u2014either an ",(0,s.jsx)(n.em,{children:"object"})," is a ",(0,s.jsx)(n.em,{children:"number"})," or it is not. See Section 2.3.1.1 (Potential Numbers as Tokens)."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"pprint dispatch table"})," ",(0,s.jsx)(n.em,{children:"n."})," an ",(0,s.jsx)(n.em,{children:"object"})," that can be the ",(0,s.jsx)(n.em,{children:"value"})," of ",(0,s.jsx)(n.strong,{children:"*print-pprint-dispatch*"})," and hence can control how ",(0,s.jsx)(n.em,{children:"objects"})," are printed when ",(0,s.jsx)(n.strong,{children:"*print-pretty*"})," is ",(0,s.jsx)(n.em,{children:"true"}),". See Section 22.2.1.4 (Pretty Print Dispatch Tables)."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"predicate"})," ",(0,s.jsx)(n.em,{children:"n."})," a ",(0,s.jsx)(n.em,{children:"function"})," that returns a ",(0,s.jsx)(n.em,{children:"generalized boolean"})," as its first value."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"present"})," ",(0,s.jsx)(n.em,{children:"n."})," 1. (of a ",(0,s.jsx)(n.em,{children:"feature"})," in a ",(0,s.jsx)(n.em,{children:"Lisp image"}),") a state of being that is in effect if and only if the ",(0,s.jsx)(n.em,{children:"symbol"})," naming the ",(0,s.jsx)(n.em,{children:"feature"})," is an ",(0,s.jsx)(n.em,{children:"element"})," of the ",(0,s.jsx)(n.em,{children:"features list"}),". 2. (of a ",(0,s.jsx)(n.em,{children:"symbol"})," in a ",(0,s.jsx)(n.em,{children:"package"}),") being accessible in that ",(0,s.jsx)(n.em,{children:"package"})," directly, rather than being inherited from another ",(0,s.jsx)(n.em,{children:"package"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"pretty print"})," ",(0,s.jsx)(n.em,{children:"v.t."})," (an ",(0,s.jsx)(n.em,{children:"object"}),") to invoke the ",(0,s.jsx)(n.em,{children:"pretty printer"})," on the ",(0,s.jsx)(n.em,{children:"object"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"pretty printer"})," ",(0,s.jsx)(n.em,{children:"n."})," the procedure that prints the character representation of an  ",(0,s.jsx)(n.em,{children:"object"})," onto a ",(0,s.jsx)(n.em,{children:"stream"})," when the ",(0,s.jsx)(n.em,{children:"value"})," of ",(0,s.jsx)(n.strong,{children:"*print-pretty*"})," is ",(0,s.jsx)(n.em,{children:"true"}),", and that uses layout techniques (",(0,s.jsx)(n.em,{children:"e.g."}),", indentation) that tend to highlight the structure of the ",(0,s.jsx)(n.em,{children:"object"})," in a way that makes it easier for human readers to parse visually. See the ",(0,s.jsx)(n.em,{children:"variable"})," ",(0,s.jsx)(n.strong,{children:"*print-pprint-dispatch*"})," and Section 22.2 (The Lisp Pretty Printer)."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"pretty printing stream"})," ",(0,s.jsx)(n.em,{children:"n."})," a ",(0,s.jsx)(n.em,{children:"stream"})," that does pretty printing. Such streams are created by the ",(0,s.jsx)(n.em,{children:"function"})," ",(0,s.jsx)(n.strong,{children:"pprint-logical-block"})," as a link between the output stream and the logical block."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"primary method"})," ",(0,s.jsx)(n.em,{children:"n."})," a member of one of two sets of ",(0,s.jsx)(n.em,{children:"methods"})," (the set of ",(0,s.jsx)(n.em,{children:"auxiliary methods"})," is the other) that form an exhaustive partition of the set of ",(0,s.jsx)(n.em,{children:"methods"})," on the ",(0,s.jsx)(n.em,{children:"method"}),"\u2019s ",(0,s.jsx)(n.em,{children:"generic function"}),". How these sets are determined is dependent on the ",(0,s.jsx)(n.em,{children:"method combination"})," type; see Section 7.6.2 (Introduction to Methods)."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"primary value"})," ",(0,s.jsx)(n.em,{children:"n."})," (of ",(0,s.jsx)(n.em,{children:"values"})," resulting from the ",(0,s.jsx)(n.em,{children:"evaluation"})," of a ",(0,s.jsx)(n.em,{children:"form"}),") the first ",(0,s.jsx)(n.em,{children:"value"}),", if any, or else ",(0,s.jsx)(n.strong,{children:"nil"})," if there are no ",(0,s.jsx)(n.em,{children:"values"}),'. "The primary value returned by ',(0,s.jsx)(n.strong,{children:"truncate"}),' is an integer quotient, truncated toward zero."']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"principal"})," ",(0,s.jsx)(n.em,{children:"adj."})," (of a value returned by a Common Lisp ",(0,s.jsx)(n.em,{children:"function"})," that implements a mathematically irrational or transcendental function defined in the complex domain) of possibly many (sometimes an infinite number of) correct values for the mathematical function, being the particular ",(0,s.jsx)(n.em,{children:"value"})," which the corresponding Common Lisp ",(0,s.jsx)(n.em,{children:"function"})," has been defined to return."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"print name"})," ",(0,s.jsx)(n.em,{children:"n. Trad."})," (usually of a ",(0,s.jsx)(n.em,{children:"symbol"}),") a ",(0,s.jsx)(n.em,{children:"name"}),(0,s.jsx)("sub",{children:"3"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"printer control variable"})," ",(0,s.jsx)(n.em,{children:"n."})," a ",(0,s.jsx)(n.em,{children:"variable"})," whose specific purpose is to control some action of the ",(0,s.jsx)(n.em,{children:"Lisp printer"})," ; that is, one of the ",(0,s.jsx)(n.em,{children:"variables"})," in Figure 22\u20131, or else some ",(0,s.jsx)(n.em,{children:"implementation-defined variable"})," which is defined by the ",(0,s.jsx)(n.em,{children:"implementation"})," to be a ",(0,s.jsx)(n.em,{children:"printer control variable"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"printer escaping"})," ",(0,s.jsx)(n.em,{children:"n."})," The combined state of the ",(0,s.jsx)(n.em,{children:"printer control variables"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"*print-escape*"})," and ",(0,s.jsx)(n.strong,{children:"*print-readably*"}),". If the value of either ",(0,s.jsx)(n.strong,{children:"*print-readably*"}),"  or ",(0,s.jsx)(n.strong,{children:"*print-escape*"})," is ",(0,s.jsx)(n.em,{children:"true"}),", then ",(0,s.jsx)(n.em,{children:"printer escaping"}),' is "enabled"; otherwise (if the values of both ',(0,s.jsx)(n.strong,{children:"*print-readably*"})," and ",(0,s.jsx)(n.strong,{children:"*print-escape*"})," are ",(0,s.jsx)(n.em,{children:"false"}),"), then ",(0,s.jsx)(n.em,{children:"printer escaping"}),' is "disabled".']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"printing"})," ",(0,s.jsx)(n.em,{children:"adj."})," (of a ",(0,s.jsx)(n.em,{children:"character"})," ) being a ",(0,s.jsx)(n.em,{children:"graphic character"})," other than ",(0,s.jsx)(n.em,{children:"space"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"process"})," ",(0,s.jsx)(n.em,{children:"v.t."})," (a ",(0,s.jsx)(n.em,{children:"form"})," by the ",(0,s.jsx)(n.em,{children:"compiler"})," ) to perform ",(0,s.jsx)(n.em,{children:"minimal compilation"}),", determining the time of evaluation for a ",(0,s.jsx)(n.em,{children:"form"}),", and possibly ",(0,s.jsx)(n.em,{children:"evaluating"})," that ",(0,s.jsx)(n.em,{children:"form"})," (if required)."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"processor"})," ",(0,s.jsx)(n.em,{children:"n."}),", ",(0,s.jsx)(n.em,{children:"ANSI"})," an ",(0,s.jsx)(n.em,{children:"implementation"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"proclaim"})," ",(0,s.jsx)(n.em,{children:"v.t."})," (a ",(0,s.jsx)(n.em,{children:"proclamation"}),") to ",(0,s.jsx)(n.em,{children:"establish"})," that ",(0,s.jsx)(n.em,{children:"proclamation"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"proclamation"})," ",(0,s.jsx)(n.em,{children:"n."})," a ",(0,s.jsx)(n.em,{children:"global declaration"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"prog tag"})," ",(0,s.jsx)(n.em,{children:"n. Trad."})," a ",(0,s.jsx)(n.em,{children:"go tag"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"program"})," ",(0,s.jsx)(n.em,{children:"n. Trad."})," Common Lisp ",(0,s.jsx)(n.em,{children:"code"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"programmer"})," ",(0,s.jsx)(n.em,{children:"n."})," an active entity, typically a human, that writes a ",(0,s.jsx)(n.em,{children:"program"}),", and that might or might not also be a ",(0,s.jsx)(n.em,{children:"user"})," of the ",(0,s.jsx)(n.em,{children:"program"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"programmer code"})," ",(0,s.jsx)(n.em,{children:"n. code"})," that is supplied by the programmer; that is, ",(0,s.jsx)(n.em,{children:"code"})," that is not ",(0,s.jsx)(n.em,{children:"system code"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"proper list"})," ",(0,s.jsx)(n.em,{children:"n."})," A ",(0,s.jsx)(n.em,{children:"list"})," terminated by the ",(0,s.jsx)(n.em,{children:"empty list"}),". (The ",(0,s.jsx)(n.em,{children:"empty list"})," is a ",(0,s.jsx)(n.em,{children:"proper list"}),".) See ",(0,s.jsx)(n.em,{children:"improper list"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"proper name"})," ",(0,s.jsx)(n.em,{children:"n."})," (of a ",(0,s.jsx)(n.em,{children:"class"}),") a ",(0,s.jsx)(n.em,{children:"symbol"})," that ",(0,s.jsx)(n.em,{children:"names"})," the ",(0,s.jsx)(n.em,{children:"class"})," whose ",(0,s.jsx)(n.em,{children:"name"})," is that ",(0,s.jsx)(n.em,{children:"symbol"}),". See the ",(0,s.jsx)(n.em,{children:"functions"})," ",(0,s.jsx)(n.strong,{children:"class-name"})," and ",(0,s.jsx)(n.strong,{children:"find-class"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"proper sequence"})," ",(0,s.jsx)(n.em,{children:"n."})," a ",(0,s.jsx)(n.em,{children:"sequence"})," which is not an ",(0,s.jsx)(n.em,{children:"improper list"}),"; that is, a ",(0,s.jsx)(n.em,{children:"vector"})," or a ",(0,s.jsx)(n.em,{children:"proper list"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"proper subtype"})," ",(0,s.jsx)(n.em,{children:"n."})," (of a ",(0,s.jsx)(n.em,{children:"type"}),") a ",(0,s.jsx)(n.em,{children:"subtype"})," of the ",(0,s.jsx)(n.em,{children:"type"})," which is not the ",(0,s.jsx)(n.em,{children:"same type"})," as the ",(0,s.jsx)(n.em,{children:"type"})," (",(0,s.jsx)(n.em,{children:"i.e."}),", its ",(0,s.jsx)(n.em,{children:"elements"}),' are a "proper subset" of the ',(0,s.jsx)(n.em,{children:"type"}),")."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"property"})," ",(0,s.jsx)(n.em,{children:"n."})," (of a ",(0,s.jsx)(n.em,{children:"property list"}),") 1. a conceptual pairing of a ",(0,s.jsx)(n.em,{children:"property indicator"})," and its associated ",(0,s.jsx)(n.em,{children:"property value"})," on a ",(0,s.jsx)(n.em,{children:"property list"}),". 2. a ",(0,s.jsx)(n.em,{children:"property value"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"property indicator"})," ",(0,s.jsx)(n.em,{children:"n."})," (of a ",(0,s.jsx)(n.em,{children:"property list"}),") the ",(0,s.jsx)(n.em,{children:"name"})," part of a ",(0,s.jsx)(n.em,{children:"property"}),", used as a ",(0,s.jsx)(n.em,{children:"key"})," when looking up a ",(0,s.jsx)(n.em,{children:"property value"})," on a ",(0,s.jsx)(n.em,{children:"property list"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"property list"})," ",(0,s.jsx)(n.em,{children:"n."})," 1. a ",(0,s.jsx)(n.em,{children:"list"})," containing an even number of ",(0,s.jsx)(n.em,{children:"elements"})," that are alternating ",(0,s.jsx)(n.em,{children:"names"})," (sometimes called ",(0,s.jsx)(n.em,{children:"indicators"})," or ",(0,s.jsx)(n.em,{children:"keys"}),") and ",(0,s.jsx)(n.em,{children:"values"})," (sometimes called ",(0,s.jsx)(n.em,{children:"properties"}),"). When there is more than one ",(0,s.jsx)(n.em,{children:"name"})," and ",(0,s.jsx)(n.em,{children:"value"})," pair with the ",(0,s.jsx)(n.em,{children:"identical name"})," in a ",(0,s.jsx)(n.em,{children:"property list"}),", the first such pair determines the ",(0,s.jsx)(n.em,{children:"property"}),". 2. (of a ",(0,s.jsx)(n.em,{children:"symbol"}),") the component of the ",(0,s.jsx)(n.em,{children:"symbol"})," containing a ",(0,s.jsx)(n.em,{children:"property list"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"property value"})," ",(0,s.jsx)(n.em,{children:"n."})," (of a ",(0,s.jsx)(n.em,{children:"property indicator"})," on a ",(0,s.jsx)(n.em,{children:"property list"}),") the ",(0,s.jsx)(n.em,{children:"object"})," associated with the ",(0,s.jsx)(n.em,{children:"property indicator"})," on the ",(0,s.jsx)(n.em,{children:"property list"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"purports to conform"})," ",(0,s.jsx)(n.em,{children:"v."})," makes a good-faith claim of conformance. This term expresses intention to conform, regardless of whether the goal of that intention is realized in practice. For example, language implementations have been known to have bugs, and while an ",(0,s.jsx)(n.em,{children:"implementation"})," of this specification with bugs might not be a ",(0,s.jsx)(n.em,{children:"conforming implementation"}),", it can still ",(0,s.jsx)(n.em,{children:"purport to conform"}),". This is an important distinction in certain specific cases; ",(0,s.jsx)(n.em,{children:"e.g."}),", see the ",(0,s.jsx)(n.em,{children:"variable"})," ",(0,s.jsx)(n.strong,{children:"*features*"}),"."]})]})}function o(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>c,a:()=>a});var s=r(67294);const i={},t=s.createContext(i);function a(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);