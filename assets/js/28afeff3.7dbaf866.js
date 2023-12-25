"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[40262],{41477:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>x,frontMatter:()=>d,metadata:()=>h,toc:()=>a});var i=s(85893),l=s(11151);function t(e){const n={em:"em",p:"p",strong:"strong",...(0,l.a)(),...e.components},{ClLinks:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ClLinks",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"symbol"})," ",(0,i.jsx)(n.em,{children:"System Class"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Class Precedence List:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(s,{styled:!0,term:"symbol",children:(0,i.jsx)("b",{children:"symbol"})}),", ",(0,i.jsx)(s,{styled:!0,term:"t",children:(0,i.jsx)("b",{children:"t"})})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Description:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(s,{styled:!0,term:"symbol",children:(0,i.jsx)("i",{children:"Symbols"})})," are used for their ",(0,i.jsx)(s,{styled:!0,term:"object",children:(0,i.jsx)("i",{children:"object"})})," identity to name various entities in Common Lisp, including (but not limited to) linguistic entities such as ",(0,i.jsx)(s,{styled:!0,term:"variable",children:(0,i.jsx)("i",{children:"variables"})})," and ",(0,i.jsx)(s,{styled:!0,term:"function",children:(0,i.jsx)("i",{children:"functions"})}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(s,{styled:!0,term:"symbol",children:(0,i.jsx)("i",{children:"Symbols"})})," can be collected together into ",(0,i.jsx)(s,{styled:!0,term:"package",children:(0,i.jsx)("i",{children:"packages"})}),". A ",(0,i.jsx)(s,{styled:!0,term:"symbol",children:(0,i.jsx)("i",{children:"symbol"})})," is said to be ",(0,i.jsx)(s,{styled:!0,term:"interned",children:(0,i.jsx)("i",{children:"interned"})})," in a ",(0,i.jsx)(s,{styled:!0,term:"package",children:(0,i.jsx)("i",{children:"package"})})," if it is ",(0,i.jsx)(s,{styled:!0,term:"accessible",children:(0,i.jsx)("i",{children:"accessible"})})," in that ",(0,i.jsx)(s,{styled:!0,term:"package",children:(0,i.jsx)("i",{children:"package"})}),"; the same ",(0,i.jsx)(s,{styled:!0,term:"symbol",children:(0,i.jsx)("i",{children:"symbol"})})," can be ",(0,i.jsx)(s,{styled:!0,term:"interned",children:(0,i.jsx)("i",{children:"interned"})})," in more than one ",(0,i.jsx)(s,{styled:!0,term:"package",children:(0,i.jsx)("i",{children:"package"})}),". If a ",(0,i.jsx)(s,{styled:!0,term:"symbol",children:(0,i.jsx)("i",{children:"symbol"})})," is not ",(0,i.jsx)(s,{styled:!0,term:"interned",children:(0,i.jsx)("i",{children:"interned"})})," in any ",(0,i.jsx)(s,{styled:!0,term:"package",children:(0,i.jsx)("i",{children:"package"})}),", it is called ",(0,i.jsx)(s,{styled:!0,term:"uninterned",children:(0,i.jsx)("i",{children:"uninterned"})}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["An ",(0,i.jsx)(n.em,{children:"interned symbol"})," is uniquely identifiable by its ",(0,i.jsx)(s,{styled:!0,term:"name",children:(0,i.jsx)("i",{children:"name"})})," from any ",(0,i.jsx)(s,{styled:!0,term:"package",children:(0,i.jsx)("i",{children:"package"})})," in which it is ",(0,i.jsx)(s,{styled:!0,term:"accessible",children:(0,i.jsx)("i",{children:"accessible"})}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(s,{styled:!0,term:"symbol",children:(0,i.jsx)("i",{children:"Symbols"})})," have the following attributes. For historical reasons, these are sometimes referred to as ",(0,i.jsx)(s,{styled:!0,term:"cell",children:(0,i.jsx)("i",{children:"cells"})}),", although the actual internal representation of ",(0,i.jsx)(s,{styled:!0,term:"symbol",children:(0,i.jsx)("i",{children:"symbols"})})," and their attributes is ",(0,i.jsx)(s,{styled:!0,term:"implementation-dependent",children:(0,i.jsx)("i",{children:"implementation-dependent"})}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Name"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(s,{styled:!0,term:"name",children:(0,i.jsx)("i",{children:"name"})})," of a ",(0,i.jsx)(s,{styled:!0,term:"symbol",children:(0,i.jsx)("i",{children:"symbol"})})," is a ",(0,i.jsx)(s,{styled:!0,term:"string",children:(0,i.jsx)("i",{children:"string"})})," used to identify the ",(0,i.jsx)(s,{styled:!0,term:"symbol",children:(0,i.jsx)("i",{children:"symbol"})}),". Every ",(0,i.jsx)(s,{styled:!0,term:"symbol",children:(0,i.jsx)("i",{children:"symbol"})})," has a ",(0,i.jsx)(s,{styled:!0,term:"name",children:(0,i.jsx)("i",{children:"name"})}),", and the consequences are undefined if that ",(0,i.jsx)(s,{styled:!0,term:"name",children:(0,i.jsx)("i",{children:"name"})})," is altered. The ",(0,i.jsx)(s,{styled:!0,term:"name",children:(0,i.jsx)("i",{children:"name"})})," is used as part of the external, printed representation of the ",(0,i.jsx)(s,{styled:!0,term:"symbol",children:(0,i.jsx)("i",{children:"symbol"})}),"; see Section 2.1 (Character Syntax). The ",(0,i.jsx)(s,{styled:!0,term:"function",children:(0,i.jsx)("i",{children:"function"})})," ",(0,i.jsx)(s,{styled:!0,term:"symbol-name",children:(0,i.jsx)("b",{children:"symbol-name"})})," returns the ",(0,i.jsx)(s,{styled:!0,term:"name",children:(0,i.jsx)("i",{children:"name"})})," of a given ",(0,i.jsx)(s,{styled:!0,term:"symbol",children:(0,i.jsx)("i",{children:"symbol"})}),". A ",(0,i.jsx)(s,{styled:!0,term:"symbol",children:(0,i.jsx)("i",{children:"symbol"})})," may have any ",(0,i.jsx)(s,{styled:!0,term:"character",children:(0,i.jsx)("i",{children:"character"})})," in its ",(0,i.jsx)(s,{styled:!0,term:"name",children:(0,i.jsx)("i",{children:"name"})}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Package"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(s,{styled:!0,term:"object",children:(0,i.jsx)("i",{children:"object"})})," in this ",(0,i.jsx)(s,{styled:!0,term:"cell",children:(0,i.jsx)("i",{children:"cell"})})," is called the ",(0,i.jsx)(n.em,{children:"home package"})," of the ",(0,i.jsx)(s,{styled:!0,term:"symbol",children:(0,i.jsx)("i",{children:"symbol"})}),". If the ",(0,i.jsx)(n.em,{children:"home package"})," is ",(0,i.jsx)(s,{styled:!0,term:"nil",children:(0,i.jsx)("b",{children:"nil"})}),", the ",(0,i.jsx)(s,{styled:!0,term:"symbol",children:(0,i.jsx)("i",{children:"symbol"})})," is sometimes said to have no ",(0,i.jsx)(n.em,{children:"home package"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["When a ",(0,i.jsx)(s,{styled:!0,term:"symbol",children:(0,i.jsx)("i",{children:"symbol"})})," is first created, it has no ",(0,i.jsx)(n.em,{children:"home package"}),". When it is first ",(0,i.jsx)(s,{styled:!0,term:"interned",children:(0,i.jsx)("i",{children:"interned"})}),", the ",(0,i.jsx)(s,{styled:!0,term:"package",children:(0,i.jsx)("i",{children:"package"})})," in which it is initially ",(0,i.jsx)(s,{styled:!0,term:"interned",children:(0,i.jsx)("i",{children:"interned"})})," becomes its ",(0,i.jsx)(n.em,{children:"home package"}),". The ",(0,i.jsx)(n.em,{children:"home package"})," of a ",(0,i.jsx)(s,{styled:!0,term:"symbol",children:(0,i.jsx)("i",{children:"symbol"})})," can be ",(0,i.jsx)(n.em,{children:"accessed"})," by using the ",(0,i.jsx)(s,{styled:!0,term:"function",children:(0,i.jsx)("i",{children:"function"})})," ",(0,i.jsx)(s,{styled:!0,term:"symbol-package",children:(0,i.jsx)("b",{children:"symbol-package"})}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["If a ",(0,i.jsx)(s,{styled:!0,term:"symbol",children:(0,i.jsx)("i",{children:"symbol"})})," is ",(0,i.jsx)(s,{styled:!0,term:"uninterned",children:(0,i.jsx)("i",{children:"uninterned"})})," from the ",(0,i.jsx)(s,{styled:!0,term:"package",children:(0,i.jsx)("i",{children:"package"})})," which is its ",(0,i.jsx)(n.em,{children:"home package"}),", its ",(0,i.jsx)(n.em,{children:"home package"})," is set to ",(0,i.jsx)(s,{styled:!0,term:"nil",children:(0,i.jsx)("b",{children:"nil"})}),". Depending on whether there is another ",(0,i.jsx)(s,{styled:!0,term:"package",children:(0,i.jsx)("i",{children:"package"})})," in which the ",(0,i.jsx)(s,{styled:!0,term:"symbol",children:(0,i.jsx)("i",{children:"symbol"})})," is ",(0,i.jsx)(s,{styled:!0,term:"interned",children:(0,i.jsx)("i",{children:"interned"})}),", the symbol might or might not really be an ",(0,i.jsx)(n.em,{children:"uninterned symbol"}),". A ",(0,i.jsx)(s,{styled:!0,term:"symbol",children:(0,i.jsx)("i",{children:"symbol"})})," with no ",(0,i.jsx)(n.em,{children:"home package"})," is therefore called ",(0,i.jsx)(n.em,{children:"apparently uninterned"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["The consequences are undefined if an attempt is made to alter the ",(0,i.jsx)(n.em,{children:"home package"})," of a ",(0,i.jsx)(s,{styled:!0,term:"symbol",children:(0,i.jsx)("i",{children:"symbol"})})," external in the COMMON-LISP ",(0,i.jsx)(s,{styled:!0,term:"package",children:(0,i.jsx)("i",{children:"package"})})," or the KEYWORD ",(0,i.jsx)(s,{styled:!0,term:"package",children:(0,i.jsx)("i",{children:"package"})}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Property list"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.em,{children:"property list"})," of a ",(0,i.jsx)(s,{styled:!0,term:"symbol",children:(0,i.jsx)("i",{children:"symbol"})})," provides a mechanism for associating named attributes"]}),"\n",(0,i.jsxs)(n.p,{children:["with that ",(0,i.jsx)(s,{styled:!0,term:"symbol",children:(0,i.jsx)("i",{children:"symbol"})}),". The operations for adding and removing entries are ",(0,i.jsx)(s,{styled:!0,term:"destructive",children:(0,i.jsx)("i",{children:"destructive"})})," to the ",(0,i.jsx)(n.em,{children:"property list"}),". Common Lisp provides ",(0,i.jsx)(s,{styled:!0,term:"operator",children:(0,i.jsx)("i",{children:"operators"})})," both for direct manipulation of ",(0,i.jsx)(n.em,{children:"property list objects"})," (",(0,i.jsx)(n.em,{children:"e.g."}),", see ",(0,i.jsx)(s,{styled:!0,term:"getf",children:(0,i.jsx)("b",{children:"getf"})}),", ",(0,i.jsx)(s,{styled:!0,term:"remf",children:(0,i.jsx)("b",{children:"remf"})}),", and ",(0,i.jsx)(s,{styled:!0,term:"symbol-plist",children:(0,i.jsx)("b",{children:"symbol-plist"})}),") and for implicit manipulation of a ",(0,i.jsx)(s,{styled:!0,term:"symbol",children:(0,i.jsx)("i",{children:"symbol"})}),"\u2019s ",(0,i.jsx)(n.em,{children:"property list"})," by reference to the ",(0,i.jsx)(s,{styled:!0,term:"symbol",children:(0,i.jsx)("i",{children:"symbol"})})," (",(0,i.jsx)(n.em,{children:"e.g."}),", see ",(0,i.jsx)(s,{styled:!0,term:"get",children:(0,i.jsx)("b",{children:"get"})})," and ",(0,i.jsx)(s,{styled:!0,term:"remprop",children:(0,i.jsx)("b",{children:"remprop"})}),"). The ",(0,i.jsx)(n.em,{children:"property list"})," associated with a ",(0,i.jsx)(n.em,{children:"fresh symbol"})," is initially ",(0,i.jsx)(s,{styled:!0,term:"null",children:(0,i.jsx)("i",{children:"null"})}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Value"})}),"\n",(0,i.jsxs)(n.p,{children:["If a symbol has a value attribute, it is said to be ",(0,i.jsx)(s,{styled:!0,term:"bound",children:(0,i.jsx)("i",{children:"bound"})}),", and that fact can be detected by the ",(0,i.jsx)(s,{styled:!0,term:"function",children:(0,i.jsx)("i",{children:"function"})})," ",(0,i.jsx)(s,{styled:!0,term:"boundp",children:(0,i.jsx)("b",{children:"boundp"})}),". The ",(0,i.jsx)(s,{styled:!0,term:"object",children:(0,i.jsx)("i",{children:"object"})})," contained in the ",(0,i.jsx)(n.em,{children:"value cell"})," of a ",(0,i.jsx)(n.em,{children:"bound symbol"})," is the ",(0,i.jsx)(s,{styled:!0,term:"value",children:(0,i.jsx)("i",{children:"value"})})," of the ",(0,i.jsx)(n.em,{children:"global variable"})," named by that ",(0,i.jsx)(s,{styled:!0,term:"symbol",children:(0,i.jsx)("i",{children:"symbol"})}),", and can be ",(0,i.jsx)(n.em,{children:"accessed"})," by the ",(0,i.jsx)(s,{styled:!0,term:"function",children:(0,i.jsx)("i",{children:"function"})})," ",(0,i.jsx)(s,{styled:!0,term:"symbol-value",children:(0,i.jsx)("b",{children:"symbol-value"})}),". A ",(0,i.jsx)(s,{styled:!0,term:"symbol",children:(0,i.jsx)("i",{children:"symbol"})})," can be made to be ",(0,i.jsx)(s,{styled:!0,term:"unbound",children:(0,i.jsx)("i",{children:"unbound"})})," by the ",(0,i.jsx)(s,{styled:!0,term:"function",children:(0,i.jsx)("i",{children:"function"})})," ",(0,i.jsx)(s,{styled:!0,term:"makunbound",children:(0,i.jsx)("b",{children:"makunbound"})}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["The consequences are undefined if an attempt is made to change the ",(0,i.jsx)(s,{styled:!0,term:"value",children:(0,i.jsx)("i",{children:"value"})})," of a ",(0,i.jsx)(s,{styled:!0,term:"symbol",children:(0,i.jsx)("i",{children:"symbol"})})," that names a ",(0,i.jsx)(n.em,{children:"constant variable"}),", or to make such a ",(0,i.jsx)(s,{styled:!0,term:"symbol",children:(0,i.jsx)("i",{children:"symbol"})})," be ",(0,i.jsx)(s,{styled:!0,term:"unbound",children:(0,i.jsx)("i",{children:"unbound"})}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Function"})}),"\n",(0,i.jsxs)(n.p,{children:["If a symbol has a function attribute, it is said to be ",(0,i.jsx)(s,{styled:!0,term:"fbound",children:(0,i.jsx)("i",{children:"fbound"})}),", and that fact can be detected by the ",(0,i.jsx)(s,{styled:!0,term:"function",children:(0,i.jsx)("i",{children:"function"})})," ",(0,i.jsx)(s,{styled:!0,term:"fboundp",children:(0,i.jsx)("b",{children:"fboundp"})}),". If the ",(0,i.jsx)(s,{styled:!0,term:"symbol",children:(0,i.jsx)("i",{children:"symbol"})})," is the ",(0,i.jsx)(s,{styled:!0,term:"name",children:(0,i.jsx)("i",{children:"name"})})," of a ",(0,i.jsx)(s,{styled:!0,term:"function",children:(0,i.jsx)("i",{children:"function"})})," in the ",(0,i.jsx)(n.em,{children:"global environment"}),", the ",(0,i.jsx)(n.em,{children:"function cell"})," contains the ",(0,i.jsx)(s,{styled:!0,term:"function",children:(0,i.jsx)("i",{children:"function"})}),", and can be ",(0,i.jsx)(n.em,{children:"accessed"})," by the ",(0,i.jsx)(s,{styled:!0,term:"function",children:(0,i.jsx)("i",{children:"function"})})," ",(0,i.jsx)(s,{styled:!0,term:"symbol-function",children:(0,i.jsx)("b",{children:"symbol-function"})}),". If the ",(0,i.jsx)(s,{styled:!0,term:"symbol",children:(0,i.jsx)("i",{children:"symbol"})})," is the ",(0,i.jsx)(s,{styled:!0,term:"name",children:(0,i.jsx)("i",{children:"name"})})," of either a ",(0,i.jsx)(s,{styled:!0,term:"macro",children:(0,i.jsx)("i",{children:"macro"})})," in the ",(0,i.jsx)(n.em,{children:"global environment"})," (see ",(0,i.jsx)(s,{styled:!0,term:"macro-function",children:(0,i.jsx)("b",{children:"macro-function"})}),") or a ",(0,i.jsx)(n.em,{children:"special operator"})," (see ",(0,i.jsx)(s,{styled:!0,term:"special-operator-p",children:(0,i.jsx)("b",{children:"special-operator-p"})}),"), the ",(0,i.jsx)(s,{styled:!0,term:"symbol",children:(0,i.jsx)("i",{children:"symbol"})})," is ",(0,i.jsx)(s,{styled:!0,term:"fbound",children:(0,i.jsx)("i",{children:"fbound"})}),", and can be ",(0,i.jsx)(n.em,{children:"accessed"})," by the ",(0,i.jsx)(s,{styled:!0,term:"function",children:(0,i.jsx)("i",{children:"function"})})," ",(0,i.jsx)(s,{styled:!0,term:"symbol-function",children:(0,i.jsx)("b",{children:"symbol-function"})}),", but the ",(0,i.jsx)(s,{styled:!0,term:"object",children:(0,i.jsx)("i",{children:"object"})})," which the ",(0,i.jsx)(n.em,{children:"function cell"})," contains is of ",(0,i.jsx)(n.em,{children:"implementation-dependent type"})," and purpose. A ",(0,i.jsx)(s,{styled:!0,term:"symbol",children:(0,i.jsx)("i",{children:"symbol"})})," can be made to be ",(0,i.jsx)(s,{styled:!0,term:"funbound",children:(0,i.jsx)("i",{children:"funbound"})})," by the ",(0,i.jsx)(s,{styled:!0,term:"function",children:(0,i.jsx)("i",{children:"function"})})," ",(0,i.jsx)(s,{styled:!0,term:"fmakunbound",children:(0,i.jsx)("b",{children:"fmakunbound"})}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["The consequences are undefined if an attempt is made to change the ",(0,i.jsx)(n.em,{children:"functional value"})," of a ",(0,i.jsx)(s,{styled:!0,term:"symbol",children:(0,i.jsx)("i",{children:"symbol"})})," that names a ",(0,i.jsx)(n.em,{children:"special form"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Operations on a ",(0,i.jsx)(s,{styled:!0,term:"symbol",children:(0,i.jsx)("i",{children:"symbol"})}),"\u2019s ",(0,i.jsx)(n.em,{children:"value cell"})," and ",(0,i.jsx)(n.em,{children:"function cell"})," are sometimes described in terms of their effect on the ",(0,i.jsx)(s,{styled:!0,term:"symbol",children:(0,i.jsx)("i",{children:"symbol"})})," itself, but the user should keep in mind that there is an intimate relationship between the contents of those ",(0,i.jsx)(s,{styled:!0,term:"cell",children:(0,i.jsx)("i",{children:"cells"})})," and the ",(0,i.jsx)(n.em,{children:"global variable"})," or global ",(0,i.jsx)(s,{styled:!0,term:"function",children:(0,i.jsx)("i",{children:"function"})})," definition, respectively."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(s,{styled:!0,term:"symbol",children:(0,i.jsx)("i",{children:"Symbols"})})," are used as identifiers for ",(0,i.jsx)(n.em,{children:"lexical variables"})," and lexical ",(0,i.jsx)(s,{styled:!0,term:"function",children:(0,i.jsx)("i",{children:"function"})})," definitions, but in that role, only their ",(0,i.jsx)(s,{styled:!0,term:"object",children:(0,i.jsx)("i",{children:"object"})})," identity is significant. Common Lisp provides no operation on a ",(0,i.jsx)(s,{styled:!0,term:"symbol",children:(0,i.jsx)("i",{children:"symbol"})})," that can have any effect on a ",(0,i.jsx)(n.em,{children:"lexical variable"})," or on a lexical ",(0,i.jsx)(s,{styled:!0,term:"function",children:(0,i.jsx)("i",{children:"function"})})," definition."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,i.jsx)(n.p,{children:"Section 2.3.4 (Symbols as Tokens), Section 2.3.1.1 (Potential Numbers as Tokens), Section 22.1.3.3 (Printing Symbols)"})]})}function r(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(t,{...e})}):t(e)}const d={title:"symbol"},c="symbol",h={id:"chap-10/ba-c-dictionary/symbol_system-class",title:"symbol",description:"Expanded Reference: symbol",source:"@site/docs/chap-10/ba-c-dictionary/symbol_system-class.md",sourceDirName:"chap-10/ba-c-dictionary",slug:"/chap-10/ba-c-dictionary/symbol_system-class",permalink:"/cl-language-reference/chap-10/ba-c-dictionary/symbol_system-class",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-10/ba-c-dictionary/symbol_system-class.md",tags:[],version:"current",frontMatter:{title:"symbol"},sidebar:"tutorialSidebar",previous:{title:"symbol-value",permalink:"/cl-language-reference/chap-10/ba-c-dictionary/symbol-value_accessor"},next:{title:"symbolp",permalink:"/cl-language-reference/chap-10/ba-c-dictionary/symbolp_function"}},o={},a=[{value:"Expanded Reference: symbol",id:"expanded-reference-symbol",level:2}];function m(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"symbol",children:"symbol"}),"\n","\n","\n",(0,i.jsx)(r,{}),"\n",(0,i.jsx)(n.h2,{id:"expanded-reference-symbol",children:"Expanded Reference: symbol"}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lisp",children:"(symbol )\n"})})]})}function x(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>d,a:()=>r});var i=s(67294);const l={},t=i.createContext(l);function r(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);