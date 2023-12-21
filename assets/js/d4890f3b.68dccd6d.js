"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[7335],{43203:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>h});var t=s(85893),c=s(11151);function r(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,c.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"set"})," ",(0,t.jsx)(n.em,{children:"Function"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"set"})," ",(0,t.jsx)(n.em,{children:"symbol value \u2192 value"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"symbol"}),"\u2014a ",(0,t.jsx)(n.em,{children:"symbol"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"value"}),"\u2014an ",(0,t.jsx)(n.em,{children:"object"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Description:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"set"})," changes the contents of the ",(0,t.jsx)(n.em,{children:"value cell"})," of ",(0,t.jsx)(n.em,{children:"symbol"})," to the given ",(0,t.jsx)(n.em,{children:"value"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["(set ",(0,t.jsx)(n.em,{children:"symbol value"}),") ",(0,t.jsx)(n.em,{children:"\u2261"})," (setf (symbol-value ",(0,t.jsx)(n.em,{children:"symbol"}),") ",(0,t.jsx)(n.em,{children:"value"}),")"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lisp",children:"\n(setf (symbol-value \u2019n) 1) \u2192 1 \n(set \u2019n 2) \u2192 2 \n(symbol-value \u2019n) \u2192 2 \n(let ((n 3)) \n  (declare (special n)) \n  (setq n (+ n 1)) \n  (setf (symbol-value \u2019n) (\\* n 10)) \n  (set \u2019n (+ (symbol-value \u2019n) n)) \n  n) \u2192 80 \nn \u2192 2 \n(let ((n 3)) \n  (setq n (+ n 1)) \n  (setf (symbol-value \u2019n) (\\* n 10)) \n  (set \u2019n (+ (symbol-value \u2019n) n)) \n  n) \u2192 4 \nn \u2192 44 \n(defvar \\*n\\* 2) \n(let ((\\*n\\* 3)) \n  (setq \\*n\\* (+ \\*n\\* 1)) \n  (setf (symbol-value \u2019\\*n\\*) (\\* \\*n\\* 10)) \n  (set \u2019\\*n\\* (+ (symbol-value \u2019\\*n\\*) \\*n\\*)) \n  \\*n\\*) \u2192 80 \n\\*n\\* \u2192 2 \n\n\n\n(defvar \\*even-count\\* 0) \u2192 \\*EVEN-COUNT\\* \n(defvar \\*odd-count\\* 0) \u2192 \\*ODD-COUNT\\* \n(defun tally-list (list) \n  (dolist (element list) \n    (set (if (evenp element) \u2019\\*even-count\\* \u2019\\*odd-count\\*) \n\t (+ element (if (evenp element) \\*even-count\\* \\*odd-count\\*))))) \n(tally-list \u2019(1 9 4 3 2 7)) \u2192 NIL \n\\*even-count\\* \u2192 6 \n\\*odd-count\\* \u2192 20 \n\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Side Effects:"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.em,{children:"value"})," of ",(0,t.jsx)(n.em,{children:"symbol"})," is changed."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"setq"}),", ",(0,t.jsx)(n.strong,{children:"progv"}),", ",(0,t.jsx)(n.strong,{children:"symbol-value"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,t.jsxs)(n.p,{children:["The function ",(0,t.jsx)(n.strong,{children:"set"})," is deprecated."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"set"})," cannot change the value of a ",(0,t.jsx)(n.em,{children:"lexical variable"}),"."]})]})}function l(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(r,{...e})}):r(e)}const i={title:"set"},o="set",a={id:"chap-10/ba-c-dictionary/set_function",title:"set",description:"Expanded Reference: set",source:"@site/docs/chap-10/ba-c-dictionary/set_function.md",sourceDirName:"chap-10/ba-c-dictionary",slug:"/chap-10/ba-c-dictionary/set_function",permalink:"/cl-language-reference/docs/chap-10/ba-c-dictionary/set_function",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-10/ba-c-dictionary/set_function.md",tags:[],version:"current",frontMatter:{title:"set"},sidebar:"tutorialSidebar",previous:{title:"remprop",permalink:"/cl-language-reference/docs/chap-10/ba-c-dictionary/remprop_function"},next:{title:"symbol-function",permalink:"/cl-language-reference/docs/chap-10/ba-c-dictionary/symbol-function_accessor"}},d={},h=[{value:"Expanded Reference: set",id:"expanded-reference-set",level:2}];function p(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,c.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"set",children:"set"}),"\n","\n","\n",(0,t.jsx)(l,{}),"\n",(0,t.jsx)(n.h2,{id:"expanded-reference-set",children:"Expanded Reference: set"}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lisp",children:"(set )\n"})})]})}function u(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>i,a:()=>l});var t=s(67294);const c={},r=t.createContext(c);function l(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:l(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);