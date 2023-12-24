"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[43433],{53489:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>p,frontMatter:()=>c,metadata:()=>d,toc:()=>h});var t=i(85893),r=i(11151);function o(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components},{ClLinks:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ClLinks",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"with-compilation-unit"})," ",(0,t.jsx)(i,{styled:!0,term:"macro",children:(0,t.jsx)("i",{children:"Macro"})})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(i,{styled:!0,term:"with-compilation-unit",children:(0,t.jsx)("b",{children:"with-compilation-unit"})})," ([[ ",(0,t.jsx)(n.em,{children:"\u2193option"})," ]]) ",(0,t.jsx)(i,{styled:!0,term:"form",children:(0,t.jsx)("i",{children:"{form}"})}),"* \u2192 {result}*"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"option::"}),"=",":override"," ",(0,t.jsx)(n.em,{children:"override"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"override"}),"\u2014a ",(0,t.jsx)(n.em,{children:"generalized boolean"}),"; evaluated. The default is ",(0,t.jsx)(i,{styled:!0,term:"nil",children:(0,t.jsx)("b",{children:"nil"})}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(i,{styled:!0,term:"form",children:(0,t.jsx)("i",{children:"forms"})}),"\u2014an ",(0,t.jsx)(n.em,{children:"implicit progn"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"results"}),"\u2014the ",(0,t.jsx)(i,{styled:!0,term:"value",children:(0,t.jsx)("i",{children:"values"})})," returned by the ",(0,t.jsx)(i,{styled:!0,term:"form",children:(0,t.jsx)("i",{children:"forms"})}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Description:"})}),"\n",(0,t.jsxs)(n.p,{children:["Executes ",(0,t.jsx)(i,{styled:!0,term:"form",children:(0,t.jsx)("i",{children:"forms"})})," from left to right. Within the ",(0,t.jsx)(n.em,{children:"dynamic environment"})," of ",(0,t.jsx)(i,{styled:!0,term:"with-compilation-unit",children:(0,t.jsx)("b",{children:"with-compilation-unit"})}),", actions deferred by the compiler until the end of compilation will be deferred until the end of the outermost call to ",(0,t.jsx)(i,{styled:!0,term:"with-compilation-unit",children:(0,t.jsx)("b",{children:"with-compilation-unit"})}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["The set of ",(0,t.jsx)(n.em,{children:"options"})," permitted may be extended by the implementation, but the only ",(0,t.jsx)(i,{styled:!0,term:"standardized",children:(0,t.jsx)("i",{children:"standardized"})})," keyword is ",":override","."]}),"\n",(0,t.jsxs)(n.p,{children:["If nested dynamically only the outer call to ",(0,t.jsx)(i,{styled:!0,term:"with-compilation-unit",children:(0,t.jsx)("b",{children:"with-compilation-unit"})})," has any effect unless the value associated with ",":override"," is ",(0,t.jsx)(i,{styled:!0,term:"true",children:(0,t.jsx)("i",{children:"true"})}),", in which case warnings are deferred only to the end of the innermost call for which ",(0,t.jsx)(n.em,{children:"override"})," is ",(0,t.jsx)(i,{styled:!0,term:"true",children:(0,t.jsx)("i",{children:"true"})}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["The function ",(0,t.jsx)(i,{styled:!0,term:"compile-file",children:(0,t.jsx)("b",{children:"compile-file"})})," provides the effect of"]}),"\n",(0,t.jsxs)(n.p,{children:["(with-compilation-unit (",":override"," nil) ...)"]}),"\n",(0,t.jsxs)(n.p,{children:["around its ",(0,t.jsx)(i,{styled:!0,term:"code",children:(0,t.jsx)("i",{children:"code"})}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Any ",(0,t.jsx)(i,{styled:!0,term:"implementation-dependent",children:(0,t.jsx)("i",{children:"implementation-dependent"})})," extensions can only be provided as the result of an explicit programmer request by use of an ",(0,t.jsx)(i,{styled:!0,term:"implementation-dependent",children:(0,t.jsx)("i",{children:"implementation-dependent"})})," keyword. ",(0,t.jsx)(i,{styled:!0,term:"implementation",children:(0,t.jsx)("i",{children:"Implementations"})})," are forbidden from attaching additional meaning to a use of this macro which involves either no keywords or just the keyword ",":override","."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lisp",children:'\nIf an *implementation* would normally defer certain kinds of warnings, such as warnings about undefined functions, to the end of a compilation unit (such as a *file*), the following example shows how to cause those warnings to be deferred to the end of the compilation of several files. \n(defun compile-files (&rest files) \n  (with-compilation-unit () \n    (mapcar #\u2019(lambda (file) (compile-file file)) files))) \n(compile-files "A" "B" "C") \nNote however that if the implementation does not normally defer any warnings, use of *with-compilation-unit* might not have any effect. \n\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(i,{styled:!0,term:"compile",children:(0,t.jsx)("b",{children:"compile"})}),", ",(0,t.jsx)(i,{styled:!0,term:"compile-file",children:(0,t.jsx)("b",{children:"compile-file"})})]}),"\n",(0,t.jsx)(n.p,{children:"System"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.em,{children:["\u2217",(0,t.jsx)(i,{styled:!0,term:"features",children:(0,t.jsx)("b",{children:(0,t.jsx)(i,{styled:!0,term:"feature",children:(0,t.jsx)("i",{children:"features"})})})}),"\u2217"]})})]})}function l(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}const c={title:"with-compilation-unit"},s="with-compilation-unit",d={id:"chap-24/ce-c-dictionary/with-compilation-unit_macro",title:"with-compilation-unit",description:"Expanded Reference: with-compilation-unit",source:"@site/docs/chap-24/ce-c-dictionary/with-compilation-unit_macro.md",sourceDirName:"chap-24/ce-c-dictionary",slug:"/chap-24/ce-c-dictionary/with-compilation-unit_macro",permalink:"/cl-language-reference/docs/chap-24/ce-c-dictionary/with-compilation-unit_macro",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-24/ce-c-dictionary/with-compilation-unit_macro.md",tags:[],version:"current",frontMatter:{title:"with-compilation-unit"},sidebar:"tutorialSidebar",previous:{title:"provide, require",permalink:"/cl-language-reference/docs/chap-24/ce-c-dictionary/provide_require_function"},next:{title:"25. Environment",permalink:"/cl-language-reference/docs/category/25-environment"}},a={},h=[{value:"Expanded Reference: with-compilation-unit",id:"expanded-reference-with-compilation-unit",level:2}];function m(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"with-compilation-unit",children:"with-compilation-unit"}),"\n","\n","\n",(0,t.jsx)(l,{}),"\n",(0,t.jsx)(n.h2,{id:"expanded-reference-with-compilation-unit",children:"Expanded Reference: with-compilation-unit"}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lisp",children:"(with-compilation-unit )\n"})})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>c,a:()=>l});var t=i(67294);const r={},o=t.createContext(r);function l(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);