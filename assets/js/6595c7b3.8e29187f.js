"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[4279],{65461:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>h,contentTitle:()=>d,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>m});var i=n(85893),s=n(11151);function t(e){const r={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components},{ClLinks:n,DictionaryLink:t,GlossaryTerm:c}=r;return n||l("ClLinks",!0),t||l("DictionaryLink",!0),c||l("GlossaryTerm",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"import"})," ",(0,i.jsx)(c,{term:"function",children:(0,i.jsx)("i",{children:"Function"})})]}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.strong,{children:"Syntax:"})}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(t,{term:"import",children:(0,i.jsx)("b",{children:"import"})})," ",(0,i.jsx)(c,{term:"symbol",children:(0,i.jsx)("i",{children:"symbols"})})," &optional ",(0,i.jsx)(r.em,{children:"package \u2192"})," ",(0,i.jsx)(t,{term:"t",children:(0,i.jsx)("b",{children:"t"})})]}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.strong,{children:"Arguments and Values:"})}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(c,{term:"symbol",children:(0,i.jsx)("i",{children:"symbols"})}),"\u2014a ",(0,i.jsx)(c,{term:"designator",children:(0,i.jsx)("i",{children:"designator"})})," for a ",(0,i.jsx)(c,{term:"list",children:(0,i.jsx)("i",{children:"list"})})," of ",(0,i.jsx)(c,{term:"symbol",children:(0,i.jsx)("i",{children:"symbols"})}),"."]}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(c,{term:"package",children:(0,i.jsx)("i",{children:"package"})}),"\u2014a ",(0,i.jsx)(c,{styled:!0,term:"package designator",children:(0,i.jsx)("i",{children:"package designator"})})," . The default is the ",(0,i.jsx)(c,{styled:!0,term:"current package",children:(0,i.jsx)("i",{children:"current package"})}),"."]}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.strong,{children:"Description:"})}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(t,{term:"import",children:(0,i.jsx)("b",{children:"import"})})," adds ",(0,i.jsx)(c,{term:"symbol",children:(0,i.jsx)("i",{children:"symbol"})})," or ",(0,i.jsx)(c,{term:"symbol",children:(0,i.jsx)("i",{children:"symbols"})})," to the internals of ",(0,i.jsx)(c,{term:"package",children:(0,i.jsx)("i",{children:"package"})}),", checking for name conflicts with existing ",(0,i.jsx)(c,{term:"symbol",children:(0,i.jsx)("i",{children:"symbols"})})," either ",(0,i.jsx)(c,{term:"present",children:(0,i.jsx)("i",{children:"present"})})," in ",(0,i.jsx)(c,{term:"package",children:(0,i.jsx)("i",{children:"package"})})," or ",(0,i.jsx)(c,{term:"accessible",children:(0,i.jsx)("i",{children:"accessible"})})," to it. Once the ",(0,i.jsx)(c,{term:"symbol",children:(0,i.jsx)("i",{children:"symbols"})})," have been ",(0,i.jsx)(r.em,{children:"imported"}),", they may be referenced in the ",(0,i.jsx)(r.em,{children:"importing package"})," without the use of a ",(0,i.jsx)(c,{styled:!0,term:"package prefix",children:(0,i.jsx)("i",{children:"package prefix"})})," when using the ",(0,i.jsx)(r.em,{children:"Lisp reader"})," ."]}),"\n",(0,i.jsxs)(r.p,{children:["A name conflict in ",(0,i.jsx)(t,{term:"import",children:(0,i.jsx)("b",{children:"import"})})," between the ",(0,i.jsx)(c,{term:"symbol",children:(0,i.jsx)("i",{children:"symbol"})})," being imported and a symbol inherited from some other ",(0,i.jsx)(c,{term:"package",children:(0,i.jsx)("i",{children:"package"})})," can be resolved in favor of the ",(0,i.jsx)(c,{term:"symbol",children:(0,i.jsx)("i",{children:"symbol"})})," being ",(0,i.jsx)(r.em,{children:"imported"})," by making it a shadowing symbol, or in favor of the ",(0,i.jsx)(c,{term:"symbol",children:(0,i.jsx)("i",{children:"symbol"})})," already ",(0,i.jsx)(c,{term:"accessible",children:(0,i.jsx)("i",{children:"accessible"})})," by not doing the ",(0,i.jsx)(t,{term:"import",children:(0,i.jsx)("b",{children:"import"})}),". A name conflict in ",(0,i.jsx)(t,{term:"import",children:(0,i.jsx)("b",{children:"import"})})," with a ",(0,i.jsx)(c,{term:"symbol",children:(0,i.jsx)("i",{children:"symbol"})})," already ",(0,i.jsx)(c,{term:"present",children:(0,i.jsx)("i",{children:"present"})})," in the ",(0,i.jsx)(c,{term:"package",children:(0,i.jsx)("i",{children:"package"})})," may be resolved by uninterning that ",(0,i.jsx)(c,{term:"symbol",children:(0,i.jsx)("i",{children:"symbol"})}),", or by not doing the ",(0,i.jsx)(t,{term:"import",children:(0,i.jsx)("b",{children:"import"})}),"."]}),"\n",(0,i.jsxs)(r.p,{children:["The imported ",(0,i.jsx)(c,{term:"symbol",children:(0,i.jsx)("i",{children:"symbol"})})," is not automatically exported from the ",(0,i.jsx)(c,{styled:!0,term:"current package",children:(0,i.jsx)("i",{children:"current package"})}),", but if it is already ",(0,i.jsx)(c,{term:"present",children:(0,i.jsx)("i",{children:"present"})})," and external, then the fact that it is external is not changed. If any ",(0,i.jsx)(c,{term:"symbol",children:(0,i.jsx)("i",{children:"symbol"})})," to be ",(0,i.jsx)(r.em,{children:"imported"})," has no home package (",(0,i.jsx)(r.em,{children:"i.e."}),", (symbol-package ",(0,i.jsx)(c,{term:"symbol",children:(0,i.jsx)("i",{children:"symbol"})}),") \u2192 nil), ",(0,i.jsx)(t,{term:"import",children:(0,i.jsx)("b",{children:"import"})})," sets the ",(0,i.jsx)(c,{styled:!0,term:"home package",children:(0,i.jsx)("i",{children:"home package"})})," of the ",(0,i.jsx)(c,{term:"symbol",children:(0,i.jsx)("i",{children:"symbol"})})," to ",(0,i.jsx)(c,{term:"package",children:(0,i.jsx)("i",{children:"package"})}),"."]}),"\n",(0,i.jsxs)(r.p,{children:["If the ",(0,i.jsx)(c,{term:"symbol",children:(0,i.jsx)("i",{children:"symbol"})})," is already ",(0,i.jsx)(c,{term:"present",children:(0,i.jsx)("i",{children:"present"})})," in the importing ",(0,i.jsx)(c,{term:"package",children:(0,i.jsx)("i",{children:"package"})}),", ",(0,i.jsx)(t,{term:"import",children:(0,i.jsx)("b",{children:"import"})})," has no effect."]}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.strong,{children:"Examples:"})}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-lisp",children:'(import \u2019common-lisp::car (make-package \u2019temp :use nil)) \u2192 T \n(find-symbol "CAR" \u2019temp) \u2192 CAR, :INTERNAL \n(find-symbol "CDR" \u2019temp) \u2192 NIL, NIL \nThe form (import \u2019editor:buffer) takes the external symbol named buffer in the EDITOR *package* (this symbol was located when the form was read by the *Lisp reader* ) and adds it to the *current package* as an *internal symbol*. The symbol buffer is then *present* in the *current package*. \n'})}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.strong,{children:"Side Effects:"})}),"\n",(0,i.jsx)(r.p,{children:"The package system is modified."}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.strong,{children:"Affected By:"})}),"\n",(0,i.jsx)(r.p,{children:"Current state of the package system."}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.strong,{children:"Exceptional Situations:"})}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(t,{term:"import",children:(0,i.jsx)("b",{children:"import"})})," signals a ",(0,i.jsx)(c,{term:"correctable",children:(0,i.jsx)("i",{children:"correctable"})})," error of ",(0,i.jsx)(c,{term:"type",children:(0,i.jsx)("i",{children:"type"})})," ",(0,i.jsx)(t,{term:"package-error",children:(0,i.jsx)("b",{children:"package-error"})})," if any of the ",(0,i.jsx)(c,{term:"symbol",children:(0,i.jsx)("i",{children:"symbols"})})," to be ",(0,i.jsx)(r.em,{children:"imported"})," has the ",(0,i.jsx)(r.em,{children:"same name"})," (under ",(0,i.jsx)(n,{term:"string",children:(0,i.jsx)("b",{children:"string="})}),") as some distinct ",(0,i.jsx)(c,{term:"symbol",children:(0,i.jsx)("i",{children:"symbol"})})," (under ",(0,i.jsx)(t,{term:"eql",children:(0,i.jsx)("b",{children:"eql"})}),") already ",(0,i.jsx)(c,{term:"accessible",children:(0,i.jsx)("i",{children:"accessible"})})," in the ",(0,i.jsx)(c,{term:"package",children:(0,i.jsx)("i",{children:"package"})}),", even if the conflict is with a ",(0,i.jsx)(c,{styled:!0,term:"shadowing symbol",children:(0,i.jsx)("i",{children:"shadowing symbol"})})," of the ",(0,i.jsx)(c,{term:"package",children:(0,i.jsx)("i",{children:"package"})}),"."]}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.strong,{children:"See Also:"})}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(t,{term:"shadow",children:(0,i.jsx)("b",{children:"shadow"})}),", ",(0,i.jsx)(t,{term:"export",children:(0,i.jsx)("b",{children:"export"})})]})]})}function c(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(t,{...e})}):t(e)}function l(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}const o={title:"import"},d="import",a={id:"chap-11/bb-c-dictionary/import_function",title:"import",description:"Expanded Reference: import",source:"@site/docs/chap-11/bb-c-dictionary/import_function.md",sourceDirName:"chap-11/bb-c-dictionary",slug:"/chap-11/bb-c-dictionary/import_function",permalink:"/cl-language-reference/chap-11/bb-c-dictionary/import_function",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-11/bb-c-dictionary/import_function.md",tags:[],version:"current",frontMatter:{title:"import"},sidebar:"tutorialSidebar",previous:{title:"find-symbol",permalink:"/cl-language-reference/chap-11/bb-c-dictionary/find-symbol_function"},next:{title:"in-package",permalink:"/cl-language-reference/chap-11/bb-c-dictionary/in-package_macro"}},h={},m=[{value:"Expanded Reference: import",id:"expanded-reference-import",level:2}];function x(e){const r={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.h1,{id:"import",children:"import"}),"\n","\n","\n",(0,i.jsx)(c,{}),"\n",(0,i.jsx)(r.h2,{id:"expanded-reference-import",children:"Expanded Reference: import"}),"\n",(0,i.jsx)(r.admonition,{type:"tip",children:(0,i.jsx)(r.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-lisp",children:"(import )\n"})})]})}function p(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(x,{...e})}):x(e)}},11151:(e,r,n)=>{n.d(r,{Z:()=>l,a:()=>c});var i=n(67294);const s={},t=i.createContext(s);function c(e){const r=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),i.createElement(t.Provider,{value:r},e.children)}}}]);