"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[93004],{2458:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>h});var r=s(85893),t=s(11151);function l(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"eql"})," ",(0,r.jsx)(n.em,{children:"Function"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"eql"})," ",(0,r.jsx)(n.em,{children:"x y \u2192 generalized-boolean"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"x"}),"\u2014an ",(0,r.jsx)(n.em,{children:"object"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"y"}),"\u2014an ",(0,r.jsx)(n.em,{children:"object"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"generalized-boolean"}),"\u2014a ",(0,r.jsx)(n.em,{children:"generalized boolean"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Description:"})}),"\n",(0,r.jsxs)(n.p,{children:["The value of ",(0,r.jsx)(n.strong,{children:"eql"})," is ",(0,r.jsx)(n.em,{children:"true"})," of two objects, ",(0,r.jsx)(n.em,{children:"x"})," and ",(0,r.jsx)(n.em,{children:"y"}),", in the folowing cases:"]}),"\n",(0,r.jsxs)(n.p,{children:["1. If ",(0,r.jsx)(n.em,{children:"x"})," and ",(0,r.jsx)(n.em,{children:"y"})," are ",(0,r.jsx)(n.strong,{children:"eq"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["2. If ",(0,r.jsx)(n.em,{children:"x"})," and ",(0,r.jsx)(n.em,{children:"y"})," are both ",(0,r.jsx)(n.em,{children:"numbers"})," of the same ",(0,r.jsx)(n.em,{children:"type"})," and the same value."]}),"\n",(0,r.jsxs)(n.p,{children:["3. If they are both ",(0,r.jsx)(n.em,{children:"characters"})," that represent the same character."]}),"\n",(0,r.jsxs)(n.p,{children:["Otherwise the value of ",(0,r.jsx)(n.strong,{children:"eql"})," is ",(0,r.jsx)(n.em,{children:"false"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["If an implementation supports positive and negative zeros as ",(0,r.jsx)(n.em,{children:"distinct"})," values, then (eql 0.0 -0.0) returns ",(0,r.jsx)(n.em,{children:"false"}),". Otherwise, when the syntax -0.0 is read it is interpreted as the value 0.0, and so (eql 0.0 -0.0) returns ",(0,r.jsx)(n.em,{children:"true"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lisp",children:' \n\n(eql \u2019a \u2019b) \u2192 false \n\n(eql \u2019a \u2019a) \u2192 true \n\n(eql 3 3) \u2192 true \n\n(eql 3 3.0) \u2192 false \n\n(eql 3.0 3.0) \u2192 true \n\n(eql #c(3 -4) #c(3 -4)) \u2192 true \n\n(eql #c(3 -4.0) #c(3 -4)) \u2192 false \n\n(eql (cons \u2019a \u2019b) (cons \u2019a \u2019c)) \u2192 false \n\n\n\n\n\n\n\n(eql (cons \u2019a \u2019b) (cons \u2019a \u2019b)) \u2192 false \n\n(eql \u2019(a . b) \u2019(a . b)) \n\n\u2192 true \n\n<i><sup>or</sup>\u2192 false</i> \n\n(progn (setq x (cons \u2019a \u2019b)) (eql x x)) \u2192 true \n\n(progn (setq x \u2019(a . b)) (eql x x)) \u2192 true \n\n(eql #\\A #\\A) \u2192 true \n\n(eql "Foo" "Foo") \n\n\u2192 true \n\n<i><sup>or</sup>\u2192 false</i> \n\n(eql "Foo" (copy-seq "Foo")) \u2192 false \n\n(eql "FOO" "foo") \u2192 false \n\nNormally (eql 1.0s0 1.0d0) is false, under the assumption that 1.0s0 and 1.0d0 are of distinct data types. However, implementations that do not provide four distinct floating-point formats are permitted to \u201ccollapse\u201d the four formats into some smaller number of them; in such an implementation (eql 1.0s0 1.0d0) might be true. \n\n\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"eq"}),", ",(0,r.jsx)(n.strong,{children:"equal"}),", ",(0,r.jsx)(n.strong,{children:"equalp"}),", ",(0,r.jsx)(n.strong,{children:"="}),", ",(0,r.jsx)(n.strong,{children:"char="})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"eql"})," is the same as ",(0,r.jsx)(n.strong,{children:"eq"}),", except that if the arguments are ",(0,r.jsx)(n.em,{children:"characters"})," or ",(0,r.jsx)(n.em,{children:"numbers"})," of the same type then their values are compared. Thus ",(0,r.jsx)(n.strong,{children:"eql"})," tells whether two ",(0,r.jsx)(n.em,{children:"objects"})," are conceptually the same, whereas ",(0,r.jsx)(n.strong,{children:"eq"})," tells whether two ",(0,r.jsx)(n.em,{children:"objects"})," are implementationally identical. It is for this reason that ",(0,r.jsx)(n.strong,{children:"eql"}),", not ",(0,r.jsx)(n.strong,{children:"eq"}),", is the default comparison predicate for ",(0,r.jsx)(n.em,{children:"operators"})," that take ",(0,r.jsx)(n.em,{children:"sequences"})," as arguments."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"eql"})," may not be true of two ",(0,r.jsx)(n.em,{children:"floats"})," even when they represent the same value. ",(0,r.jsx)(n.strong,{children:"="})," is used to compare mathematical values."]}),"\n",(0,r.jsxs)(n.p,{children:["Two ",(0,r.jsx)(n.em,{children:"complex"})," numbers are considered to be ",(0,r.jsx)(n.strong,{children:"eql"})," if their real parts are ",(0,r.jsx)(n.strong,{children:"eql"})," and their imaginary parts are ",(0,r.jsx)(n.strong,{children:"eql"}),". For example, (eql #C(4 5) #C(4 5)) is ",(0,r.jsx)(n.em,{children:"true"})," and (eql #C(4 5) #C(4.0 5.0)) is ",(0,r.jsx)(n.em,{children:"false"}),". Note that while (eql #C(5.0 0.0) 5.0) is ",(0,r.jsx)(n.em,{children:"false"}),", (eql #C(5 0) 5) is ",(0,r.jsx)(n.em,{children:"true"}),". In the case of"]}),"\n",(0,r.jsxs)(n.p,{children:["(eql #C(5.0 0.0) 5.0) the two arguments are of different types, and so cannot satisfy ",(0,r.jsx)(n.strong,{children:"eql"}),". In the case of (eql #C(5 0) 5), #C(5 0) is not a ",(0,r.jsx)(n.em,{children:"complex"})," number, but is automatically reduced to the ",(0,r.jsx)(n.em,{children:"integer"})," 5."]})]})}function i(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}const a={},c="eql",o={id:"chap-5/f-d-dictionary/eql",title:"eql",description:"Expanded Reference: eql",source:"@site/docs/chap-5/f-d-dictionary/eql.md",sourceDirName:"chap-5/f-d-dictionary",slug:"/chap-5/f-d-dictionary/eql",permalink:"/cl-language-reference/docs/chap-5/f-d-dictionary/eql",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-5/f-d-dictionary/eql.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"eq",permalink:"/cl-language-reference/docs/chap-5/f-d-dictionary/eq"},next:{title:"equal",permalink:"/cl-language-reference/docs/chap-5/f-d-dictionary/equal"}},d={},h=[{value:"Expanded Reference: eql",id:"expanded-reference-eql",level:2}];function x(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"eql",children:"eql"}),"\n","\n","\n",(0,r.jsx)(i,{}),"\n",(0,r.jsx)(n.h2,{id:"expanded-reference-eql",children:"Expanded Reference: eql"}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lisp",children:"(eql )\n"})})]})}function p(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(x,{...e})}):x(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>a,a:()=>i});var r=s(67294);const t={},l=r.createContext(t);function i(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);