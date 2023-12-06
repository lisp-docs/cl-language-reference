"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[91592],{33267:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>h});var s=r(85893),t=r(11151);function a(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"assert"})," ",(0,s.jsx)(n.em,{children:"Macro"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"assert"})," ",(0,s.jsx)(n.em,{children:"test-form"})," [(",(0,s.jsx)(n.em,{children:"{place}"}),"*) [",(0,s.jsx)(n.em,{children:"datum-form {argument-form}"}),"*]]"]}),"\n",(0,s.jsxs)(n.p,{children:["\u2192 ",(0,s.jsx)(n.strong,{children:"nil"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"test-form"}),"\u2014a ",(0,s.jsx)(n.em,{children:"form"}),"; always evaluated."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"place"}),"\u2014a ",(0,s.jsx)(n.em,{children:"place"}),"; evaluated if an error is signaled."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"datum-form"}),"\u2014a ",(0,s.jsx)(n.em,{children:"form"})," that evaluates to a ",(0,s.jsx)(n.em,{children:"datum"}),". Evaluated each time an error is to be signaled, or not at all if no error is to be signaled."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"argument-form"}),"\u2014a ",(0,s.jsx)(n.em,{children:"form"})," that evaluates to an ",(0,s.jsx)(n.em,{children:"argument"}),". Evaluated each time an error is to be signaled, or not at all if no error is to be signaled."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"datum"}),", ",(0,s.jsx)(n.em,{children:"arguments"}),"\u2014",(0,s.jsx)(n.em,{children:"designators"})," for a ",(0,s.jsx)(n.em,{children:"condition"})," of default type ",(0,s.jsx)(n.strong,{children:"error"}),". (These ",(0,s.jsx)(n.em,{children:"designators"})," are the result of evaluating ",(0,s.jsx)(n.em,{children:"datum-form"})," and each of the ",(0,s.jsx)(n.em,{children:"argument-forms"}),".)"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"assert"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Description:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"assert"})," assures that ",(0,s.jsx)(n.em,{children:"test-form"})," evaluates to ",(0,s.jsx)(n.em,{children:"true"}),". If ",(0,s.jsx)(n.em,{children:"test-form"})," evaluates to ",(0,s.jsx)(n.em,{children:"false"}),", ",(0,s.jsx)(n.strong,{children:"assert"})," signals a ",(0,s.jsx)(n.em,{children:"correctable error"})," (denoted by ",(0,s.jsx)(n.em,{children:"datum"})," and ",(0,s.jsx)(n.em,{children:"arguments"}),"). Continuing from this error using the ",(0,s.jsx)(n.strong,{children:"continue"})," ",(0,s.jsx)(n.em,{children:"restart"})," makes it possible for the user to alter the values of the ",(0,s.jsx)(n.em,{children:"places"})," before ",(0,s.jsx)(n.strong,{children:"assert"})," evaluates ",(0,s.jsx)(n.em,{children:"test-form"})," again. If the value of ",(0,s.jsx)(n.em,{children:"test-form"})," is ",(0,s.jsx)(n.em,{children:"non-nil"}),", ",(0,s.jsx)(n.strong,{children:"assert"})," returns ",(0,s.jsx)(n.strong,{children:"nil"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.em,{children:"places"})," are ",(0,s.jsx)(n.em,{children:"generalized references"})," to data upon which ",(0,s.jsx)(n.em,{children:"test-form"})," depends, whose values can be changed by the user in attempting to correct the error. ",(0,s.jsx)(n.em,{children:"Subforms"})," of each ",(0,s.jsx)(n.em,{children:"place"})," are only evaluated if an error is signaled, and might be re-evaluated if the error is re-signaled (after continuing without actually fixing the problem). The order of evaluation of the ",(0,s.jsx)(n.em,{children:"places"})," is not specified; see Section 5.1.1.1 (Evaluation of Subforms to Places). If a ",(0,s.jsx)(n.em,{children:"place form"})," is supplied that produces more values than there are store variables, the extra values are ignored. If the supplied ",(0,s.jsx)(n.em,{children:"form"})," produces fewer values than there are store variables, the missing values are set to ",(0,s.jsx)(n.strong,{children:"nil"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lisp",children:' \n\n(setq x (make-array \u2019(3 5) :initial-element 3)) \n\n\u2192 #2A((3 3 3 3 3) (3 3 3 3 3) (3 3 3 3 3)) \n\n(setq y (make-array \u2019(3 5) :initial-element 7)) \n\n\u2192 #2A((7 7 7 7 7) (7 7 7 7 7) (7 7 7 7 7)) \n\n(defun matrix-multiply (a b) \n\n(let ((\\*print-array\\* nil)) \n\n(assert (and (= (array-rank a) (array-rank b) 2) \n\n(= (array-dimension a 1) (array-dimension b 0))) \n\n(a b) \n\n"Cannot multiply &#126;S by &#126;S." a b) \n\n(really-matrix-multiply a b))) \u2192 MATRIX-MULTIPLY \n\n(matrix-multiply x y) \n\n\u25b7 Correctable error in MATRIX-MULTIPLY: \n\n\u25b7 Cannot multiply #<ARRAY ...> by #<ARRAY ...>. \n\n\u25b7 Restart options: \n\n\u25b7 1: You will be prompted for one or more new values. \n\n\u25b7 2: Top level. \n\n\u25b7 Debug> :continue 1 \n\n\u25b7 Value for A: x \n\n\u25b7 Value for B: (make-array \u2019(5 3) :initial-element 6) \n\n\u2192 #2A((54 54 54 54 54) \n\n(54 54 54 54 54) \n\n(54 54 54 54 54) \n\n(54 54 54 54 54) \n\n(54 54 54 54 54)) \n\n(defun double-safely (x) (assert (numberp x) (x)) (+ x x)) \n\n(double-safely 4) \n\n\u2192 8 \n\n\n\n \n\n \n\n(double-safely t) \n\n\u25b7 Correctable error in DOUBLE-SAFELY: The value of (NUMBERP X) must be non-NIL. \u25b7 Restart options: \n\n\u25b7 1: You will be prompted for one or more new values. \n\n\u25b7 2: Top level. \n\n\u25b7 Debug> :continue 1 \n\n\u25b7 Value for X: 7 \n\n\u2192 14 \n\n\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Affected By:"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"*break-on-signals*"})}),"\n",(0,s.jsxs)(n.p,{children:["The set of active ",(0,s.jsx)(n.em,{children:"condition handlers"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"check-type"}),", ",(0,s.jsx)(n.strong,{children:"error"}),", Section 5.1 (Generalized Reference)"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,s.jsxs)(n.p,{children:["The debugger need not include the ",(0,s.jsx)(n.em,{children:"test-form"})," in the error message, and the ",(0,s.jsx)(n.em,{children:"places"})," should not be included in the message, but they should be made available for the user\u2019s perusal. If the user gives the \u201ccontinue\u201d command, the values of any of the references can be altered. The details of this depend on the implementation\u2019s style of user interface."]})]})}function i(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}const l={},o="assert",c={id:"chap-9/j-c-dictionary/assert",title:"assert",description:"Expanded Reference: assert",source:"@site/docs/chap-9/j-c-dictionary/assert.md",sourceDirName:"chap-9/j-c-dictionary",slug:"/chap-9/j-c-dictionary/assert",permalink:"/cl-language-reference/docs/chap-9/j-c-dictionary/assert",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-9/j-c-dictionary/assert.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"abort",permalink:"/cl-language-reference/docs/chap-9/j-c-dictionary/abort"},next:{title:"break",permalink:"/cl-language-reference/docs/chap-9/j-c-dictionary/break"}},d={},h=[{value:"Expanded Reference: assert",id:"expanded-reference-assert",level:2}];function m(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"assert",children:"assert"}),"\n","\n","\n",(0,s.jsx)(i,{}),"\n",(0,s.jsx)(n.h2,{id:"expanded-reference-assert",children:"Expanded Reference: assert"}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lisp",children:"(assert )\n"})})]})}function u(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>l,a:()=>i});var s=r(67294);const t={},a=s.createContext(t);function i(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);