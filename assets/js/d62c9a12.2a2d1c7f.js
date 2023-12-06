"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[41426],{27067:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>h,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var r=t(85893),c=t(11151);function o(n){const e={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,c.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"unwind-protect"})," ",(0,r.jsx)(e.em,{children:"Special Operator"})]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"Syntax:"})}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"unwind-protect"})," ",(0,r.jsx)(e.em,{children:"protected-form {cleanup-form}"}),"* \u2192 {result}*"]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"Arguments and Values:"})}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.em,{children:"protected-form"}),"\u2014a ",(0,r.jsx)(e.em,{children:"form"}),"."]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.em,{children:"cleanup-form"}),"\u2014a ",(0,r.jsx)(e.em,{children:"form"}),"."]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.em,{children:"results"}),"\u2014the ",(0,r.jsx)(e.em,{children:"values"})," of the ",(0,r.jsx)(e.em,{children:"protected-form"}),"."]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"Description:"})}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"unwind-protect"})," evaluates ",(0,r.jsx)(e.em,{children:"protected-form"})," and guarantees that ",(0,r.jsx)(e.em,{children:"cleanup-forms"})," are executed before ",(0,r.jsx)(e.strong,{children:"unwind-protect"})," exits, whether it terminates normally or is aborted by a control transfer of some kind. ",(0,r.jsx)(e.strong,{children:"unwind-protect"})," is intended to be used to make sure that certain side effects take place after the evaluation of ",(0,r.jsx)(e.em,{children:"protected-form"}),"."]}),"\n",(0,r.jsxs)(e.p,{children:["If a ",(0,r.jsx)(e.em,{children:"non-local exit"})," occurs during execution of ",(0,r.jsx)(e.em,{children:"cleanup-forms"}),", no special action is taken. The ",(0,r.jsx)(e.em,{children:"cleanup-forms"})," of ",(0,r.jsx)(e.strong,{children:"unwind-protect"})," are not protected by that ",(0,r.jsx)(e.strong,{children:"unwind-protect"}),"."]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"unwind-protect"})," protects against all attempts to exit from ",(0,r.jsx)(e.em,{children:"protected-form"}),", including ",(0,r.jsx)(e.strong,{children:"go"}),", ",(0,r.jsx)(e.strong,{children:"handler-case"}),", ",(0,r.jsx)(e.strong,{children:"ignore-errors"}),", ",(0,r.jsx)(e.strong,{children:"restart-case"}),", ",(0,r.jsx)(e.strong,{children:"return-from"}),", ",(0,r.jsx)(e.strong,{children:"throw"}),", and ",(0,r.jsx)(e.strong,{children:"with-simple-restart"}),"."]}),"\n",(0,r.jsxs)(e.p,{children:["Undoing of ",(0,r.jsx)(e.em,{children:"handler"})," and ",(0,r.jsx)(e.em,{children:"restart bindings"})," during an exit happens in parallel with the undoing of the bindings of ",(0,r.jsx)(e.em,{children:"dynamic variables"})," and ",(0,r.jsx)(e.strong,{children:"catch"})," tags, in the reverse order in which they were established. The effect of this is that ",(0,r.jsx)(e.em,{children:"cleanup-form"})," sees the same ",(0,r.jsx)(e.em,{children:"handler"})," and ",(0,r.jsx)(e.em,{children:"restart bindings"}),", as well as ",(0,r.jsx)(e.em,{children:"dynamic variable bindings"})," and ",(0,r.jsx)(e.strong,{children:"catch"})," tags, as were visible when the ",(0,r.jsx)(e.strong,{children:"unwind-protect"})," was entered."]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"Examples:"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-lisp",children:' \n\n(tagbody \n\n(let ((x 3)) \n\nData and Control \n\n\n\n\n\n**unwind-protect** \n\n(unwind-protect \n\n(if (numberp x) (go out)) \n\n(print x))) \n\nout \n\n...) \n\nWhen **go** is executed, the call to **print** is executed first, and then the transfer of control to the tag out is completed. \n\n(defun dummy-function (x) \n\n(setq state \u2019running) \n\n(unless (numberp x) (throw \u2019abort \u2019not-a-number)) \n\n(setq state (1+ x))) \u2192 DUMMY-FUNCTION \n\n(catch \u2019abort (dummy-function 1)) \u2192 2 \n\nstate \u2192 2 \n\n(catch \u2019abort (dummy-function \u2019trash)) \u2192 NOT-A-NUMBER \n\nstate \u2192 RUNNING \n\n(catch \u2019abort (unwind-protect (dummy-function \u2019trash) \n\n(setq state \u2019aborted))) \u2192 NOT-A-NUMBER \n\nstate \u2192 ABORTED \n\nThe following code is not correct: \n\n(unwind-protect \n\n(progn (incf \\*access-count\\*) \n\n(perform-access)) \n\n(decf \\*access-count\\*)) \n\nIf an exit occurs before completion of **incf**, the **decf** *form* is executed anyway, resulting in an incorrect value for \\*access-count\\*. The correct way to code this is as follows: \n\n(let ((old-count \\*access-count\\*)) \n\n(unwind-protect \n\n(progn (incf \\*access-count\\*) \n\n(perform-access)) \n\n(setq \\*access-count\\* old-count))) \n\n;;; The following returns 2. \n\n(block nil \n\n(unwind-protect (return 1) \n\n(return 2))) \n\n;;; The following has undefined consequences. \n\n(block a \n\n(block b \n\n(unwind-protect (return-from a 1) \n\n\n\n\n\n\n\n**unwind-protect** \n\n(return-from b 2)))) \n\n;;; The following returns 2. \n\n(catch nil \n\n(unwind-protect (throw nil 1) \n\n(throw nil 2))) \n\n;;; The following has undefined consequences because the catch of B is \n\n;;; passed over by the first THROW, hence portable programs must assume \n\n;;; its dynamic extent is terminated. The binding of the catch tag is not \n\n;;; yet disestablished and therefore it is the target of the second throw. \n\n(catch \u2019a \n\n(catch \u2019b \n\n(unwind-protect (throw \u2019a 1) \n\n(throw \u2019b 2)))) \n\n;;; The following prints "The inner catch returns :SECOND-THROW" \n\n;;; and then returns :OUTER-CATCH. \n\n(catch \u2019foo \n\n(format t "The inner catch returns &#126;s.&#126;%" \n\n(catch \u2019foo \n\n(unwind-protect (throw \u2019foo :first-throw) \n\n(throw \u2019foo :second-throw)))) \n\n:outer-catch) \n\n;;; The following returns 10. The inner CATCH of A is passed over, but \n\n;;; because that CATCH is disestablished before the THROW to A is executed, \n\n;;; it isn\u2019t seen. \n\n(catch \u2019a \n\n(catch \u2019b \n\n(unwind-protect (1+ (catch \u2019a (throw \u2019b 1))) \n\n(throw \u2019a 10)))) \n\n;;; The following has undefined consequences because the extent of \n\n;;; the (CATCH \u2019BAR ...) exit ends when the (THROW \u2019FOO ...) \n\n;;; commences. \n\n(catch \u2019foo \n\n(catch \u2019bar \n\n(unwind-protect (throw \u2019foo 3) \n\n(throw \u2019bar 4) \n\n(print \u2019xxx)))) \n\nData and Control \n\n\n\n\n\n;;; The following returns 4; XXX is not printed. \n\n;;; The (THROW \u2019FOO ...) has no effect on the scope of the BAR \n\n;;; catch tag or the extent of the (CATCH \u2019BAR ...) exit. \n\n(catch \u2019bar \n\n(catch \u2019foo \n\n(unwind-protect (throw \u2019foo 3) \n\n(throw \u2019bar 4) \n\n(print \u2019xxx)))) \n\n;;; The following prints 5. \n\n(block nil \n\n(let ((x 5)) \n\n(declare (special x)) \n\n(unwind-protect (return) \n\n(print x)))) \n\n\n'})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"See Also:"})})]})}function s(n={}){const{wrapper:e}={...(0,c.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(o,{...n})}):o(n)}const i={},a="unwind-protect",d={id:"chap-5/f-d-dictionary/unwindprotect",title:"unwind-protect",description:"Expanded Reference: unwind-protect",source:"@site/docs/chap-5/f-d-dictionary/unwindprotect.md",sourceDirName:"chap-5/f-d-dictionary",slug:"/chap-5/f-d-dictionary/unwindprotect",permalink:"/cl-language-reference/docs/chap-5/f-d-dictionary/unwindprotect",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-5/f-d-dictionary/unwindprotect.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"undefined-function",permalink:"/cl-language-reference/docs/chap-5/f-d-dictionary/undefinedfunction"},next:{title:"values",permalink:"/cl-language-reference/docs/chap-5/f-d-dictionary/values"}},h={},l=[{value:"Expanded Reference: unwind-protect",id:"expanded-reference-unwind-protect",level:2}];function u(n){const e={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,c.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"unwind-protect",children:"unwind-protect"}),"\n","\n","\n",(0,r.jsx)(s,{}),"\n",(0,r.jsx)(e.h2,{id:"expanded-reference-unwind-protect",children:"Expanded Reference: unwind-protect"}),"\n",(0,r.jsx)(e.admonition,{type:"tip",children:(0,r.jsx)(e.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-lisp",children:"(unwind-protect )\n"})})]})}function p(n={}){const{wrapper:e}={...(0,c.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(u,{...n})}):u(n)}},11151:(n,e,t)=>{t.d(e,{Z:()=>i,a:()=>s});var r=t(67294);const c={},o=r.createContext(c);function s(n){const e=r.useContext(o);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:s(n.components),r.createElement(o.Provider,{value:e},n.children)}}}]);