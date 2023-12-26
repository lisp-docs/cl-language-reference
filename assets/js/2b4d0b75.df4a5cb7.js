"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[59571],{60509:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>p,frontMatter:()=>a,metadata:()=>h,toc:()=>m});var i=r(85893),s=r(11151);function t(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components},{DictionaryLink:r,GlossaryTerm:t}=n;return r||l("DictionaryLink",!0),t||l("GlossaryTerm",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"gentemp"})," ",(0,i.jsx)(t,{term:"function",children:(0,i.jsx)("i",{children:"Function"})})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(r,{term:"gentemp",children:(0,i.jsx)("b",{children:"gentemp"})})," &optional ",(0,i.jsx)(n.em,{children:"prefix package \u2192 new-symbol"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"prefix"}),"\u2014a ",(0,i.jsx)(t,{term:"string",children:(0,i.jsx)("i",{children:"string"})}),'. The default is "T".']}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(t,{term:"package",children:(0,i.jsx)("i",{children:"package"})}),"\u2014a ",(0,i.jsx)(t,{styled:!0,term:"package designator",children:(0,i.jsx)("i",{children:"package designator"})})," . The default is the ",(0,i.jsx)(t,{styled:!0,term:"current package",children:(0,i.jsx)("i",{children:"current package"})}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"new-symbol"}),"\u2014a ",(0,i.jsx)(t,{term:"fresh",children:(0,i.jsx)("i",{children:"fresh"})}),", ",(0,i.jsx)(n.em,{children:"interned symbol"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Description:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(r,{term:"gentemp",children:(0,i.jsx)("b",{children:"gentemp"})})," creates and returns a ",(0,i.jsx)(n.em,{children:"fresh symbol"}),", ",(0,i.jsx)(t,{styled:!0,term:"interned",children:(0,i.jsx)("i",{children:"interned"})})," in the indicated ",(0,i.jsx)(t,{term:"package",children:(0,i.jsx)("i",{children:"package"})}),". The ",(0,i.jsx)(t,{term:"symbol",children:(0,i.jsx)("i",{children:"symbol"})})," is guaranteed to be one that was not previously ",(0,i.jsx)(t,{term:"accessible",children:(0,i.jsx)("i",{children:"accessible"})})," in ",(0,i.jsx)(t,{term:"package",children:(0,i.jsx)("i",{children:"package"})}),". It is neither ",(0,i.jsx)(t,{term:"bound",children:(0,i.jsx)("i",{children:"bound"})})," nor ",(0,i.jsx)(t,{term:"fbound",children:(0,i.jsx)("i",{children:"fbound"})}),", and has a ",(0,i.jsx)(n.em,{children:"null property list"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(t,{term:"name",children:(0,i.jsx)("i",{children:"name"})})," of the ",(0,i.jsx)(n.em,{children:"new-symbol"})," is the concatenation of the ",(0,i.jsx)(n.em,{children:"prefix"})," and a suffix, which is taken from an internal counter used only by ",(0,i.jsx)(r,{term:"gentemp",children:(0,i.jsx)("b",{children:"gentemp"})}),". (If a ",(0,i.jsx)(t,{term:"symbol",children:(0,i.jsx)("i",{children:"symbol"})})," by that name is already ",(0,i.jsx)(t,{term:"accessible",children:(0,i.jsx)("i",{children:"accessible"})})," in ",(0,i.jsx)(t,{term:"package",children:(0,i.jsx)("i",{children:"package"})}),", the counter is incremented as many times as is necessary to produce a ",(0,i.jsx)(t,{term:"name",children:(0,i.jsx)("i",{children:"name"})})," that is not already the ",(0,i.jsx)(t,{term:"name",children:(0,i.jsx)("i",{children:"name"})})," of a ",(0,i.jsx)(n.em,{children:"symbol accessible"})," in ",(0,i.jsx)(t,{term:"package",children:(0,i.jsx)("i",{children:"package"})}),".)"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lisp",children:'(gentemp) \u2192 T1298 \n(gentemp "FOO") \u2192 FOO1299 \n(find-symbol "FOO1300") \u2192 NIL, NIL \n(gentemp "FOO") \u2192 FOO1300 \n(find-symbol "FOO1300") \u2192 FOO1300, :INTERNAL \n(intern "FOO1301") \u2192 FOO1301, :INTERNAL \n(gentemp "FOO") \u2192 FOO1302 \n(gentemp) \u2192 T1303 \n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Side Effects:"})}),"\n",(0,i.jsx)(n.p,{children:"Its internal counter is incremented one or more times."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(t,{term:"intern",children:(0,i.jsx)("i",{children:"Interns"})})," the ",(0,i.jsx)(n.em,{children:"new-symbol"})," in ",(0,i.jsx)(t,{term:"package",children:(0,i.jsx)("i",{children:"package"})}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Affected By:"})}),"\n",(0,i.jsxs)(n.p,{children:["The current state of its internal counter, and the current state of the ",(0,i.jsx)(t,{term:"package",children:(0,i.jsx)("i",{children:"package"})}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Exceptional Situations:"})}),"\n",(0,i.jsxs)(n.p,{children:["Should signal an error of ",(0,i.jsx)(t,{term:"type",children:(0,i.jsx)("i",{children:"type"})})," ",(0,i.jsx)(r,{term:"type-error",children:(0,i.jsx)("b",{children:"type-error"})})," if ",(0,i.jsx)(n.em,{children:"prefix"})," is not a ",(0,i.jsx)(t,{term:"string",children:(0,i.jsx)("i",{children:"string"})}),". Should signal an error of ",(0,i.jsx)(t,{term:"type",children:(0,i.jsx)("i",{children:"type"})})," ",(0,i.jsx)(r,{term:"type-error",children:(0,i.jsx)("b",{children:"type-error"})})," if ",(0,i.jsx)(t,{term:"package",children:(0,i.jsx)("i",{children:"package"})})," is not a ",(0,i.jsx)(t,{styled:!0,term:"package designator",children:(0,i.jsx)("i",{children:"package designator"})})," ."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,i.jsx)(r,{term:"gensym",children:(0,i.jsx)("b",{children:"gensym"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,i.jsxs)(n.p,{children:["The function ",(0,i.jsx)(r,{term:"gentemp",children:(0,i.jsx)("b",{children:"gentemp"})})," is deprecated."]}),"\n",(0,i.jsxs)(n.p,{children:["If ",(0,i.jsx)(t,{term:"package",children:(0,i.jsx)("i",{children:"package"})})," is the KEYWORD ",(0,i.jsx)(t,{term:"package",children:(0,i.jsx)("i",{children:"package"})}),", the result is an ",(0,i.jsx)(t,{styled:!0,term:"external symbol",children:(0,i.jsx)("i",{children:"external symbol"})})," of ",(0,i.jsx)(t,{term:"package",children:(0,i.jsx)("i",{children:"package"})}),". Otherwise, the result is an ",(0,i.jsx)(t,{styled:!0,term:"internal symbol",children:(0,i.jsx)("i",{children:"internal symbol"})})," of ",(0,i.jsx)(t,{term:"package",children:(0,i.jsx)("i",{children:"package"})}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(r,{term:"gentemp",children:(0,i.jsx)("b",{children:"gentemp"})})," internal counter is independent of ",(0,i.jsx)(r,{term:"gensym-counter",children:(0,i.jsx)("b",{children:"*gensym-counter*"})}),", the counter used by ",(0,i.jsx)(r,{term:"gensym",children:(0,i.jsx)("b",{children:"gensym"})}),". There is no provision for accessing the ",(0,i.jsx)(r,{term:"gentemp",children:(0,i.jsx)("b",{children:"gentemp"})})," internal counter."]}),"\n",(0,i.jsxs)(n.p,{children:["Just because ",(0,i.jsx)(r,{term:"gentemp",children:(0,i.jsx)("b",{children:"gentemp"})})," creates a ",(0,i.jsx)(t,{term:"symbol",children:(0,i.jsx)("i",{children:"symbol"})})," which did not previously exist does not mean that such a ",(0,i.jsx)(t,{term:"symbol",children:(0,i.jsx)("i",{children:"symbol"})})," might not be seen in the future (",(0,i.jsx)(n.em,{children:"e.g."}),", in a data file\u2014perhaps even created by the same program in another session). As such, this symbol is not truly unique in the same sense as a ",(0,i.jsx)(t,{term:"gensym",children:(0,i.jsx)("i",{children:"gensym"})})," would be. In particular, programs which do automatic code generation should be careful not to attach global attributes to such generated ",(0,i.jsx)(t,{term:"symbol",children:(0,i.jsx)("i",{children:"symbols"})})," (",(0,i.jsx)(n.em,{children:"e.g."}),", ",(0,i.jsx)(r,{term:"special",children:(0,i.jsx)("b",{children:"special"})})," ",(0,i.jsx)(t,{term:"declaration",children:(0,i.jsx)("i",{children:"declarations"})}),") and then write them into a file because such global attributes might, in a different session, end up applying to other ",(0,i.jsx)(t,{term:"symbol",children:(0,i.jsx)("i",{children:"symbols"})})," that were automatically generated on another day for some other purpose."]})]})}function c(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(t,{...e})}):t(e)}function l(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}const a={title:"gentemp"},d="gentemp",h={id:"chap-10/ba-c-dictionary/gentemp_function",title:"gentemp",description:"Expanded Reference: gentemp",source:"@site/docs/chap-10/ba-c-dictionary/gentemp_function.md",sourceDirName:"chap-10/ba-c-dictionary",slug:"/chap-10/ba-c-dictionary/gentemp_function",permalink:"/cl-language-reference/chap-10/ba-c-dictionary/gentemp_function",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-10/ba-c-dictionary/gentemp_function.md",tags:[],version:"current",frontMatter:{title:"gentemp"},sidebar:"tutorialSidebar",previous:{title:"gensym",permalink:"/cl-language-reference/chap-10/ba-c-dictionary/gensym_function"},next:{title:"get",permalink:"/cl-language-reference/chap-10/ba-c-dictionary/get_accessor"}},o={},m=[{value:"Expanded Reference: gentemp",id:"expanded-reference-gentemp",level:2}];function x(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"gentemp",children:"gentemp"}),"\n","\n","\n",(0,i.jsx)(c,{}),"\n",(0,i.jsx)(n.h2,{id:"expanded-reference-gentemp",children:"Expanded Reference: gentemp"}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lisp",children:"(gentemp )\n"})})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(x,{...e})}):x(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>l,a:()=>c});var i=r(67294);const s={},t=i.createContext(s);function c(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);