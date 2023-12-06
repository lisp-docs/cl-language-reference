"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[37651],{67206:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>d,toc:()=>h});var r=t(85893),s=t(11151);function i(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"compute-restarts"})," ",(0,r.jsx)(n.em,{children:"Function"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"compute-restarts"})," &optional ",(0,r.jsx)(n.em,{children:"condition \u2192 restarts"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"condition"}),"\u2014a ",(0,r.jsx)(n.em,{children:"condition object"}),", or ",(0,r.jsx)(n.strong,{children:"nil"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"restarts"}),"\u2014a ",(0,r.jsx)(n.em,{children:"list"})," of ",(0,r.jsx)(n.em,{children:"restarts"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Description:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"compute-restarts"})," uses the dynamic state of the program to compute a ",(0,r.jsx)(n.em,{children:"list"})," of the ",(0,r.jsx)(n.em,{children:"restarts"})," which are currently active."]}),"\n",(0,r.jsxs)(n.p,{children:["The resulting ",(0,r.jsx)(n.em,{children:"list"})," is ordered so that the innermost (more-recently established) restarts are nearer the head of the ",(0,r.jsx)(n.em,{children:"list"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["When ",(0,r.jsx)(n.em,{children:"condition"})," is ",(0,r.jsx)(n.em,{children:"non-nil"}),", only those ",(0,r.jsx)(n.em,{children:"restarts"})," are considered that are either explicitly associated with that ",(0,r.jsx)(n.em,{children:"condition"}),", or not associated with any ",(0,r.jsx)(n.em,{children:"condition"}),"; that is, the excluded ",(0,r.jsx)(n.em,{children:"restarts"})," are those that are associated with a non-empty set of ",(0,r.jsx)(n.em,{children:"conditions"})," of which the given ",(0,r.jsx)(n.em,{children:"condition"})," is not an ",(0,r.jsx)(n.em,{children:"element"}),". If ",(0,r.jsx)(n.em,{children:"condition"})," is ",(0,r.jsx)(n.strong,{children:"nil"}),", all ",(0,r.jsx)(n.em,{children:"restarts"})," are considered."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"compute-restarts"})," returns all ",(0,r.jsx)(n.em,{children:"applicable restarts"}),", including anonymous ones, even if some of them have the same name as others and would therefore not be found by ",(0,r.jsx)(n.strong,{children:"find-restart"})," when given a ",(0,r.jsx)(n.em,{children:"symbol"})," argument."]}),"\n",(0,r.jsxs)(n.p,{children:["Implementations are permitted, but not required, to return ",(0,r.jsx)(n.em,{children:"distinct lists"})," from repeated calls to ",(0,r.jsx)(n.strong,{children:"compute-restarts"})," while in the same dynamic environment. The consequences are undefined if the ",(0,r.jsx)(n.em,{children:"list"})," returned by ",(0,r.jsx)(n.strong,{children:"compute-restarts"})," is every modified."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lisp",children:' \n\n;; One possible way in which an interactive debugger might present \n\n;; restarts to the user. \n\n(defun invoke-a-restart () \n\n(let ((restarts (compute-restarts))) \n\n(do ((i 0 (+ i 1)) (r restarts (cdr r))) ((null r)) \n\n(format t "&#126;&amp;&#126;D: &#126;A&#126;%" i (car r))) \n\n(let ((n nil) (k (length restarts))) \n\n(loop (when (and (typep n \u2019integer) (&gt;= n 0) (&lt; n k)) \n\n(return t)) \n\n(format t "&#126;&amp;Option: ") \n\n(setq n (read)) \n\n(fresh-line)) \n\n(invoke-restart-interactively (nth n restarts))))) \n\n\n\n \n\n \n\n(restart-case (invoke-a-restart) \n\n(one () 1) \n\n(two () 2) \n\n(nil () :report "Who knows?" \u2019anonymous) \n\n(one () \u2019I) \n\n(two () \u2019II)) \n\n\u25b7 0: ONE \n\n\u25b7 1: TWO \n\n\u25b7 2: Who knows? \n\n\u25b7 3: ONE \n\n\u25b7 4: TWO \n\n\u25b7 5: Return to Lisp Toplevel. \n\n\u25b7 Option: 4 \n\n\u2192 II \n\n;; Note that in addition to user-defined restart points, COMPUTE-RESTARTS \n\n;; also returns information about any system-supplied restarts, such as \n\n;; the "Return to Lisp Toplevel" restart offered above. \n\n\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Affected By:"})}),"\n",(0,r.jsx)(n.p,{children:"Existing restarts."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"find-restart"}),", ",(0,r.jsx)(n.strong,{children:"invoke-restart"}),", ",(0,r.jsx)(n.strong,{children:"restart-bind"})]})]})}function c(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}const o={},a="compute-restarts",d={id:"chap-9/j-c-dictionary/computerestarts",title:"compute-restarts",description:"Expanded Reference: compute-restarts",source:"@site/docs/chap-9/j-c-dictionary/computerestarts.md",sourceDirName:"chap-9/j-c-dictionary",slug:"/chap-9/j-c-dictionary/computerestarts",permalink:"/cl-language-reference/docs/chap-9/j-c-dictionary/computerestarts",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-9/j-c-dictionary/computerestarts.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"check-type",permalink:"/cl-language-reference/docs/chap-9/j-c-dictionary/checktype"},next:{title:"condition",permalink:"/cl-language-reference/docs/chap-9/j-c-dictionary/condition"}},l={},h=[{value:"Expanded Reference: compute-restarts",id:"expanded-reference-compute-restarts",level:2}];function p(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"compute-restarts",children:"compute-restarts"}),"\n","\n","\n",(0,r.jsx)(c,{}),"\n",(0,r.jsx)(n.h2,{id:"expanded-reference-compute-restarts",children:"Expanded Reference: compute-restarts"}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lisp",children:"(compute-restarts )\n"})})]})}function m(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>c});var r=t(67294);const s={},i=r.createContext(s);function c(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);