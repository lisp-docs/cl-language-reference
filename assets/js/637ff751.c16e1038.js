"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[39980],{1600:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>h});var t=r(85893),s=r(11151);function d(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"and"})," ",(0,t.jsx)(n.em,{children:"Macro"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"and"})," ",(0,t.jsx)(n.em,{children:"{form}"}),"* \u2192 {result}*"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"form"}),"\u2014a ",(0,t.jsx)(n.em,{children:"form"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"results"}),"\u2014the ",(0,t.jsx)(n.em,{children:"values"})," resulting from the evaluation of the last ",(0,t.jsx)(n.em,{children:"form"}),", or the symbols ",(0,t.jsx)(n.strong,{children:"nil"})," or ",(0,t.jsx)(n.strong,{children:"t"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Description:"})}),"\n",(0,t.jsxs)(n.p,{children:["The macro ",(0,t.jsx)(n.strong,{children:"and"})," evaluates each ",(0,t.jsx)(n.em,{children:"form"})," one at a time from left to right. As soon as any ",(0,t.jsx)(n.em,{children:"form"})," evaluates to ",(0,t.jsx)(n.strong,{children:"nil"}),", ",(0,t.jsx)(n.strong,{children:"and"})," returns ",(0,t.jsx)(n.strong,{children:"nil"})," without evaluating the remaining ",(0,t.jsx)(n.em,{children:"forms"}),". If all ",(0,t.jsx)(n.em,{children:"forms"})," but the last evaluate to ",(0,t.jsx)(n.em,{children:"true"})," values, ",(0,t.jsx)(n.strong,{children:"and"})," returns the results produced by evaluating the last ",(0,t.jsx)(n.em,{children:"form"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["If no ",(0,t.jsx)(n.em,{children:"forms"})," are supplied, (and) returns ",(0,t.jsx)(n.strong,{children:"t"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"and"})," passes back multiple values from the last ",(0,t.jsx)(n.em,{children:"subform"})," but not from subforms other than the last. ",(0,t.jsx)(n.strong,{children:"Examples:"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lisp",children:'\n(if (and (>= n 0) \n\n\n\n\t (< n (length a-simple-vector)) \n\t (eq (elt a-simple-vector n) \u2019foo)) \n    (princ "Foo!")) \nThe above expression prints Foo! if element n of a-simple-vector is the symbol foo, provided also that n is indeed a valid index for a-simple-vector. Because **and** guarantees left-to-right testing of its parts, **elt** is not called if n is out of range. \n(setq temp1 1 temp2 1 temp3 1) \u2192 1 \n(and (incf temp1) (incf temp2) (incf temp3)) \u2192 2 \n(and (eql 2 temp1) (eql 2 temp2) (eql 2 temp3)) \u2192 true \n(decf temp3) \u2192 1 \n(and (decf temp1) (decf temp2) (eq temp3 \u2019nil) (decf temp3)) \u2192 NIL \n(and (eql temp1 temp2) (eql temp2 temp3)) \u2192 true \n(and) \u2192 T \n\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"cond"}),", ",(0,t.jsx)(n.strong,{children:"every"}),", ",(0,t.jsx)(n.strong,{children:"if"}),", ",(0,t.jsx)(n.strong,{children:"or"}),", ",(0,t.jsx)(n.strong,{children:"when"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,t.jsxs)(n.p,{children:["(and ",(0,t.jsx)(n.em,{children:"form"}),") ",(0,t.jsx)(n.em,{children:"\u2261"})," (let () ",(0,t.jsx)(n.em,{children:"form"}),")"]}),"\n",(0,t.jsxs)(n.p,{children:["(and ",(0,t.jsx)(n.em,{children:"form1 form2"})," ...) ",(0,t.jsx)(n.em,{children:"\u2261"})," (when ",(0,t.jsx)(n.em,{children:"form1"})," (and ",(0,t.jsx)(n.em,{children:"form2"})," ...))"]})]})}function i(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}const o={},a="and",c={id:"chap-5/f-d-dictionary/and",title:"and",description:"Expanded Reference: and",source:"@site/docs/chap-5/f-d-dictionary/and.md",sourceDirName:"chap-5/f-d-dictionary",slug:"/chap-5/f-d-dictionary/and",permalink:"/cl-language-reference/docs/chap-5/f-d-dictionary/and",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-5/f-d-dictionary/and.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"5.3 Data and Control Flow Dictionary",permalink:"/cl-language-reference/docs/category/53-data-and-control-flow-dictionary"},next:{title:"apply",permalink:"/cl-language-reference/docs/chap-5/f-d-dictionary/apply"}},l={},h=[{value:"Expanded Reference: and",id:"expanded-reference-and",level:2}];function p(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"and",children:"and"}),"\n","\n","\n",(0,t.jsx)(i,{}),"\n",(0,t.jsx)(n.h2,{id:"expanded-reference-and",children:"Expanded Reference: and"}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lisp",children:"(and )\n"})})]})}function m(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>o,a:()=>i});var t=r(67294);const s={},d=t.createContext(s);function i(e){const n=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);