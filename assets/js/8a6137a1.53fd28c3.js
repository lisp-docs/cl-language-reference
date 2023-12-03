"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[61063],{67017:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>h,contentTitle:()=>d,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>a});var r=s(85893),i=s(11151);function t(e){const n={em:"em",p:"p",strong:"strong",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"gensym"})," ",(0,r.jsx)(n.em,{children:"Function"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"gensym"})," &optional ",(0,r.jsx)(n.em,{children:"x \u2192 new-symbol"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"x"}),"\u2014a ",(0,r.jsx)(n.em,{children:"string"})," or a non-negative ",(0,r.jsx)(n.em,{children:"integer"})," . Complicated defaulting behavior; see below. ",(0,r.jsx)(n.em,{children:"new-symbol"}),"\u2014a ",(0,r.jsx)(n.em,{children:"fresh"}),", ",(0,r.jsx)(n.em,{children:"uninterned symbol"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Description:"})}),"\n",(0,r.jsxs)(n.p,{children:["Creates and returns a ",(0,r.jsx)(n.em,{children:"fresh"}),", ",(0,r.jsx)(n.em,{children:"uninterned symbol"}),", as if by calling ",(0,r.jsx)(n.strong,{children:"make-symbol"}),". (The only difference between ",(0,r.jsx)(n.strong,{children:"gensym"})," and ",(0,r.jsx)(n.strong,{children:"make-symbol"})," is in how the ",(0,r.jsx)(n.em,{children:"new-symbol"}),"\u2019s ",(0,r.jsx)(n.em,{children:"name"})," is determined.)"]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.em,{children:"name"})," of the ",(0,r.jsx)(n.em,{children:"new-symbol"}),' is the concatenation of a prefix, which defaults to "G", and a suffix, which is the decimal representation of a number that defaults to the ',(0,r.jsx)(n.em,{children:"value"})," of ",(0,r.jsx)(n.strong,{children:"*gensym-counter*"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["If ",(0,r.jsx)(n.em,{children:"x"})," is supplied, and is a ",(0,r.jsx)(n.em,{children:"string"}),", then that ",(0,r.jsx)(n.em,{children:"string"}),' is used as a prefix instead of "G" for this call to ',(0,r.jsx)(n.strong,{children:"gensym"})," only."]}),"\n",(0,r.jsxs)(n.p,{children:["If ",(0,r.jsx)(n.em,{children:"x"})," is supplied, and is an ",(0,r.jsx)(n.em,{children:"integer"})," , then that ",(0,r.jsx)(n.em,{children:"integer"})," , instead of the ",(0,r.jsx)(n.em,{children:"value"})," of ",(0,r.jsx)(n.strong,{children:"*gensym-counter*"}),", is used as the suffix for this call to ",(0,r.jsx)(n.strong,{children:"gensym"})," only."]}),"\n",(0,r.jsxs)(n.p,{children:["If and only if no explicit suffix is supplied, ",(0,r.jsx)(n.strong,{children:"*gensym-counter*"})," is incremented after it is used. ",(0,r.jsx)(n.strong,{children:"Examples:"})]}),"\n",(0,r.jsxs)(n.p,{children:["(setq sym1 (gensym)) ",(0,r.jsx)(n.em,{children:"\u2192"})," #",":G3142"]}),"\n",(0,r.jsxs)(n.p,{children:["(symbol-package sym1) ",(0,r.jsx)(n.em,{children:"\u2192"})," NIL"]}),"\n",(0,r.jsxs)(n.p,{children:["(setq sym2 (gensym 100)) ",(0,r.jsx)(n.em,{children:"\u2192"})," #",":G100"]}),"\n",(0,r.jsxs)(n.p,{children:["(setq sym3 (gensym 100)) ",(0,r.jsx)(n.em,{children:"\u2192"})," #",":G100"]}),"\n",(0,r.jsxs)(n.p,{children:["(eq sym2 sym3) ",(0,r.jsx)(n.em,{children:"\u2192 false"})]}),"\n",(0,r.jsxs)(n.p,{children:['(find-symbol "G100") ',(0,r.jsx)(n.em,{children:"\u2192"})," NIL, NIL"]}),"\n",(0,r.jsxs)(n.p,{children:['(gensym "T") ',(0,r.jsx)(n.em,{children:"\u2192"})," #",":T3143"]}),"\n",(0,r.jsxs)(n.p,{children:["(gensym) ",(0,r.jsx)(n.em,{children:"\u2192"})," #",":G3144"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Side Effects:"})}),"\n",(0,r.jsxs)(n.p,{children:["Might increment ",(0,r.jsx)(n.strong,{children:"*gensym-counter*"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Affected By:"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"*gensym-counter*"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Exceptional Situations:"})}),"\n",(0,r.jsxs)(n.p,{children:["Should signal an error of ",(0,r.jsx)(n.em,{children:"type"})," ",(0,r.jsx)(n.strong,{children:"type-error"})," if ",(0,r.jsx)(n.em,{children:"x"})," is not a ",(0,r.jsx)(n.em,{children:"string"})," or a non-negative ",(0,r.jsx)(n.em,{children:"integer"})," ."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"gentemp"}),", ",(0,r.jsx)(n.strong,{children:"*gensym-counter*"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,r.jsxs)(n.p,{children:["The ability to pass a numeric argument to ",(0,r.jsx)(n.strong,{children:"gensym"})," has been deprecated; explicitly ",(0,r.jsx)(n.em,{children:"binding"})," ",(0,r.jsx)(n.strong,{children:"*gensym-counter*"})," is now stylistically preferred. (The somewhat baroque conventions for the optional argument are historical in nature, and supported primarily for compatibility with older dialects of Lisp. In modern code, it is recommended that the only kind of argument used be a string prefix. In general, though, to obtain more flexible control of the ",(0,r.jsx)(n.em,{children:"new-symbol"}),"\u2019s ",(0,r.jsx)(n.em,{children:"name"}),", consider using ",(0,r.jsx)(n.strong,{children:"make-symbol"})," instead.)"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"\u2217"}),(0,r.jsx)(n.strong,{children:"gensym-counter"}),(0,r.jsx)(n.em,{children:"\u2217 Variable"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Value Type:"})}),"\n",(0,r.jsxs)(n.p,{children:["a non-negative ",(0,r.jsx)(n.em,{children:"integer"})," ."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Initial Value:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"implementation-dependent"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Description:"})}),"\n",(0,r.jsxs)(n.p,{children:["A number which will be used in constructing the ",(0,r.jsx)(n.em,{children:"name"})," of the next ",(0,r.jsx)(n.em,{children:"symbol"})," generated by the ",(0,r.jsx)(n.em,{children:"function"})," ",(0,r.jsx)(n.strong,{children:"gensym"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"*gensym-counter*"})," can be either ",(0,r.jsx)(n.em,{children:"assigned"})," or ",(0,r.jsx)(n.em,{children:"bound"})," at any time, but its value must always be a non-negative ",(0,r.jsx)(n.em,{children:"integer"})," ."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Affected By:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"gensym"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"gensym"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,r.jsxs)(n.p,{children:["The ability to pass a numeric argument to ",(0,r.jsx)(n.strong,{children:"gensym"})," has been deprecated; explicitly ",(0,r.jsx)(n.em,{children:"binding"})," ",(0,r.jsx)(n.strong,{children:"*gensym-counter*"})," is now stylistically preferred."]})]})}function c(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(t,{...e})}):t(e)}const l={},d="gensym",o={id:"chap-10/ba-c-dictionary/gensym",title:"gensym",description:"Expanded Reference: gensym",source:"@site/docs/chap-10/ba-c-dictionary/gensym.md",sourceDirName:"chap-10/ba-c-dictionary",slug:"/chap-10/ba-c-dictionary/gensym",permalink:"/cl-language-reference/docs/chap-10/ba-c-dictionary/gensym",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-10/ba-c-dictionary/gensym.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"copy-symbol",permalink:"/cl-language-reference/docs/chap-10/ba-c-dictionary/copysymbol"},next:{title:"gentemp",permalink:"/cl-language-reference/docs/chap-10/ba-c-dictionary/gentemp"}},h={},a=[{value:"Expanded Reference: gensym",id:"expanded-reference-gensym",level:2}];function x(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"gensym",children:"gensym"}),"\n","\n","\n",(0,r.jsx)(c,{}),"\n",(0,r.jsx)(n.h2,{id:"expanded-reference-gensym",children:"Expanded Reference: gensym"}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lisp",children:"(gensym )\n"})})]})}function m(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(x,{...e})}):x(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>c});var r=s(67294);const i={},t=r.createContext(i);function c(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);