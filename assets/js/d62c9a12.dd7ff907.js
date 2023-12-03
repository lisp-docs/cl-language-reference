"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[41426],{27067:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>x,frontMatter:()=>d,metadata:()=>h,toc:()=>a});var t=r(85893),c=r(11151);function s(e){const n={del:"del",em:"em",p:"p",strong:"strong",...(0,c.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"unwind-protect"})," ",(0,t.jsx)(n.em,{children:"Special Operator"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"unwind-protect"})," ",(0,t.jsx)(n.em,{children:"protected-form {cleanup-form}"}),"* ",(0,t.jsx)(n.em,{children:"\u2192 {result}"}),"*"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"protected-form"}),"\u2014a ",(0,t.jsx)(n.em,{children:"form"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"cleanup-form"}),"\u2014a ",(0,t.jsx)(n.em,{children:"form"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"results"}),"\u2014the ",(0,t.jsx)(n.em,{children:"values"})," of the ",(0,t.jsx)(n.em,{children:"protected-form"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Description:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"unwind-protect"})," evaluates ",(0,t.jsx)(n.em,{children:"protected-form"})," and guarantees that ",(0,t.jsx)(n.em,{children:"cleanup-forms"})," are executed before ",(0,t.jsx)(n.strong,{children:"unwind-protect"})," exits, whether it terminates normally or is aborted by a control transfer of some kind. ",(0,t.jsx)(n.strong,{children:"unwind-protect"})," is intended to be used to make sure that certain side effects take place after the evaluation of ",(0,t.jsx)(n.em,{children:"protected-form"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["If a ",(0,t.jsx)(n.em,{children:"non-local exit"})," occurs during execution of ",(0,t.jsx)(n.em,{children:"cleanup-forms"}),", no special action is taken. The ",(0,t.jsx)(n.em,{children:"cleanup-forms"})," of ",(0,t.jsx)(n.strong,{children:"unwind-protect"})," are not protected by that ",(0,t.jsx)(n.strong,{children:"unwind-protect"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"unwind-protect"})," protects against all attempts to exit from ",(0,t.jsx)(n.em,{children:"protected-form"}),", including ",(0,t.jsx)(n.strong,{children:"go"}),", ",(0,t.jsx)(n.strong,{children:"handler-case"}),", ",(0,t.jsx)(n.strong,{children:"ignore-errors"}),", ",(0,t.jsx)(n.strong,{children:"restart-case"}),", ",(0,t.jsx)(n.strong,{children:"return-from"}),", ",(0,t.jsx)(n.strong,{children:"throw"}),", and ",(0,t.jsx)(n.strong,{children:"with-simple-restart"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Undoing of ",(0,t.jsx)(n.em,{children:"handler"})," and ",(0,t.jsx)(n.em,{children:"restart bindings"})," during an exit happens in parallel with the undoing of the bindings of ",(0,t.jsx)(n.em,{children:"dynamic variables"})," and ",(0,t.jsx)(n.strong,{children:"catch"})," tags, in the reverse order in which they were established. The effect of this is that ",(0,t.jsx)(n.em,{children:"cleanup-form"})," sees the same ",(0,t.jsx)(n.em,{children:"handler"})," and ",(0,t.jsx)(n.em,{children:"restart bindings"}),", as well as ",(0,t.jsx)(n.em,{children:"dynamic variable bindings"})," and ",(0,t.jsx)(n.strong,{children:"catch"})," tags, as were visible when the ",(0,t.jsx)(n.strong,{children:"unwind-protect"})," was entered."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,t.jsx)(n.p,{children:"(tagbody"}),"\n",(0,t.jsx)(n.p,{children:"(let ((x 3))"}),"\n",(0,t.jsx)(n.p,{children:"Data and Control"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"unwind-protect"})}),"\n",(0,t.jsx)(n.p,{children:"(unwind-protect"}),"\n",(0,t.jsx)(n.p,{children:"(if (numberp x) (go out))"}),"\n",(0,t.jsx)(n.p,{children:"(print x)))"}),"\n",(0,t.jsx)(n.p,{children:"out"}),"\n",(0,t.jsx)(n.p,{children:"...)"}),"\n",(0,t.jsxs)(n.p,{children:["When ",(0,t.jsx)(n.strong,{children:"go"})," is executed, the call to ",(0,t.jsx)(n.strong,{children:"print"})," is executed first, and then the transfer of control to the tag out is completed."]}),"\n",(0,t.jsx)(n.p,{children:"(defun dummy-function (x)"}),"\n",(0,t.jsx)(n.p,{children:"(setq state \u2019running)"}),"\n",(0,t.jsx)(n.p,{children:"(unless (numberp x) (throw \u2019abort \u2019not-a-number))"}),"\n",(0,t.jsxs)(n.p,{children:["(setq state (1+ x))) ",(0,t.jsx)(n.em,{children:"\u2192"})," DUMMY-FUNCTION"]}),"\n",(0,t.jsxs)(n.p,{children:["(catch \u2019abort (dummy-function 1)) ",(0,t.jsx)(n.em,{children:"\u2192"})," 2"]}),"\n",(0,t.jsxs)(n.p,{children:["state ",(0,t.jsx)(n.em,{children:"\u2192"})," 2"]}),"\n",(0,t.jsxs)(n.p,{children:["(catch \u2019abort (dummy-function \u2019trash)) ",(0,t.jsx)(n.em,{children:"\u2192"})," NOT-A-NUMBER"]}),"\n",(0,t.jsxs)(n.p,{children:["state ",(0,t.jsx)(n.em,{children:"\u2192"})," RUNNING"]}),"\n",(0,t.jsx)(n.p,{children:"(catch \u2019abort (unwind-protect (dummy-function \u2019trash)"}),"\n",(0,t.jsxs)(n.p,{children:["(setq state \u2019aborted))) ",(0,t.jsx)(n.em,{children:"\u2192"})," NOT-A-NUMBER"]}),"\n",(0,t.jsxs)(n.p,{children:["state ",(0,t.jsx)(n.em,{children:"\u2192"})," ABORTED"]}),"\n",(0,t.jsx)(n.p,{children:"The following code is not correct:"}),"\n",(0,t.jsx)(n.p,{children:"(unwind-protect"}),"\n",(0,t.jsx)(n.p,{children:"(progn (incf *access-count*)"}),"\n",(0,t.jsx)(n.p,{children:"(perform-access))"}),"\n",(0,t.jsx)(n.p,{children:"(decf *access-count*))"}),"\n",(0,t.jsxs)(n.p,{children:["If an exit occurs before completion of ",(0,t.jsx)(n.strong,{children:"incf"}),", the ",(0,t.jsx)(n.strong,{children:"decf"})," ",(0,t.jsx)(n.em,{children:"form"})," is executed anyway, resulting in an incorrect value for *access-count*. The correct way to code this is as follows:"]}),"\n",(0,t.jsx)(n.p,{children:"(let ((old-count *access-count*))"}),"\n",(0,t.jsx)(n.p,{children:"(unwind-protect"}),"\n",(0,t.jsx)(n.p,{children:"(progn (incf *access-count*)"}),"\n",(0,t.jsx)(n.p,{children:"(perform-access))"}),"\n",(0,t.jsx)(n.p,{children:"(setq *access-count* old-count)))"}),"\n",(0,t.jsx)(n.p,{children:";;; The following returns 2."}),"\n",(0,t.jsx)(n.p,{children:"(block nil"}),"\n",(0,t.jsx)(n.p,{children:"(unwind-protect (return 1)"}),"\n",(0,t.jsx)(n.p,{children:"(return 2)))"}),"\n",(0,t.jsx)(n.p,{children:";;; The following has undefined consequences."}),"\n",(0,t.jsx)(n.p,{children:"(block a"}),"\n",(0,t.jsx)(n.p,{children:"(block b"}),"\n",(0,t.jsx)(n.p,{children:"(unwind-protect (return-from a 1)"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"unwind-protect"})}),"\n",(0,t.jsx)(n.p,{children:"(return-from b 2))))"}),"\n",(0,t.jsx)(n.p,{children:";;; The following returns 2."}),"\n",(0,t.jsx)(n.p,{children:"(catch nil"}),"\n",(0,t.jsx)(n.p,{children:"(unwind-protect (throw nil 1)"}),"\n",(0,t.jsx)(n.p,{children:"(throw nil 2)))"}),"\n",(0,t.jsx)(n.p,{children:";;; The following has undefined consequences because the catch of B is"}),"\n",(0,t.jsx)(n.p,{children:";;; passed over by the first THROW, hence portable programs must assume"}),"\n",(0,t.jsx)(n.p,{children:";;; its dynamic extent is terminated. The binding of the catch tag is not"}),"\n",(0,t.jsx)(n.p,{children:";;; yet disestablished and therefore it is the target of the second throw."}),"\n",(0,t.jsx)(n.p,{children:"(catch \u2019a"}),"\n",(0,t.jsx)(n.p,{children:"(catch \u2019b"}),"\n",(0,t.jsx)(n.p,{children:"(unwind-protect (throw \u2019a 1)"}),"\n",(0,t.jsx)(n.p,{children:"(throw \u2019b 2))))"}),"\n",(0,t.jsxs)(n.p,{children:[';;; The following prints "The inner catch returns ',":SECOND-THROW",'"']}),"\n",(0,t.jsxs)(n.p,{children:[";;; and then returns ",":OUTER-CATCH","."]}),"\n",(0,t.jsx)(n.p,{children:"(catch \u2019foo"}),"\n",(0,t.jsxs)(n.p,{children:['(format t "The inner catch returns ',(0,t.jsx)(n.del,{children:"s."}),'%"']}),"\n",(0,t.jsx)(n.p,{children:"(catch \u2019foo"}),"\n",(0,t.jsxs)(n.p,{children:["(unwind-protect (throw \u2019foo ",":first-throw",")"]}),"\n",(0,t.jsxs)(n.p,{children:["(throw \u2019foo ",":second-throw","))))"]}),"\n",(0,t.jsxs)(n.p,{children:[":outer-catch",")"]}),"\n",(0,t.jsx)(n.p,{children:";;; The following returns 10. The inner CATCH of A is passed over, but"}),"\n",(0,t.jsx)(n.p,{children:";;; because that CATCH is disestablished before the THROW to A is executed,"}),"\n",(0,t.jsx)(n.p,{children:";;; it isn\u2019t seen."}),"\n",(0,t.jsx)(n.p,{children:"(catch \u2019a"}),"\n",(0,t.jsx)(n.p,{children:"(catch \u2019b"}),"\n",(0,t.jsx)(n.p,{children:"(unwind-protect (1+ (catch \u2019a (throw \u2019b 1)))"}),"\n",(0,t.jsx)(n.p,{children:"(throw \u2019a 10))))"}),"\n",(0,t.jsx)(n.p,{children:";;; The following has undefined consequences because the extent of"}),"\n",(0,t.jsx)(n.p,{children:";;; the (CATCH \u2019BAR ...) exit ends when the (THROW \u2019FOO ...)"}),"\n",(0,t.jsx)(n.p,{children:";;; commences."}),"\n",(0,t.jsx)(n.p,{children:"(catch \u2019foo"}),"\n",(0,t.jsx)(n.p,{children:"(catch \u2019bar"}),"\n",(0,t.jsx)(n.p,{children:"(unwind-protect (throw \u2019foo 3)"}),"\n",(0,t.jsx)(n.p,{children:"(throw \u2019bar 4)"}),"\n",(0,t.jsx)(n.p,{children:"(print \u2019xxx))))"}),"\n",(0,t.jsx)(n.p,{children:"Data and Control"}),"\n",(0,t.jsx)(n.p,{children:";;; The following returns 4; XXX is not printed."}),"\n",(0,t.jsx)(n.p,{children:";;; The (THROW \u2019FOO ...) has no effect on the scope of the BAR"}),"\n",(0,t.jsx)(n.p,{children:";;; catch tag or the extent of the (CATCH \u2019BAR ...) exit."}),"\n",(0,t.jsx)(n.p,{children:"(catch \u2019bar"}),"\n",(0,t.jsx)(n.p,{children:"(catch \u2019foo"}),"\n",(0,t.jsx)(n.p,{children:"(unwind-protect (throw \u2019foo 3)"}),"\n",(0,t.jsx)(n.p,{children:"(throw \u2019bar 4)"}),"\n",(0,t.jsx)(n.p,{children:"(print \u2019xxx))))"}),"\n",(0,t.jsx)(n.p,{children:";;; The following prints 5."}),"\n",(0,t.jsx)(n.p,{children:"(block nil"}),"\n",(0,t.jsx)(n.p,{children:"(let ((x 5))"}),"\n",(0,t.jsx)(n.p,{children:"(declare (special x))"}),"\n",(0,t.jsx)(n.p,{children:"(unwind-protect (return)"}),"\n",(0,t.jsx)(n.p,{children:"(print x))))"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"See Also:"})})]})}function i(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(s,{...e})}):s(e)}const d={},o="unwind-protect",h={id:"chap-5/f-d-dictionary/unwindprotect",title:"unwind-protect",description:"Expanded Reference: unwind-protect",source:"@site/docs/chap-5/f-d-dictionary/unwindprotect.md",sourceDirName:"chap-5/f-d-dictionary",slug:"/chap-5/f-d-dictionary/unwindprotect",permalink:"/cl-language-reference/docs/chap-5/f-d-dictionary/unwindprotect",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-5/f-d-dictionary/unwindprotect.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"typecase, ctypecase, etypecase",permalink:"/cl-language-reference/docs/chap-5/f-d-dictionary/typecaseaactypecaseaaetypecase"},next:{title:"when, unless",permalink:"/cl-language-reference/docs/chap-5/f-d-dictionary/whenaaunless"}},l={},a=[{value:"Expanded Reference: unwind-protect",id:"expanded-reference-unwind-protect",level:2}];function p(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,c.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"unwind-protect",children:"unwind-protect"}),"\n","\n","\n",(0,t.jsx)(i,{}),"\n",(0,t.jsx)(n.h2,{id:"expanded-reference-unwind-protect",children:"Expanded Reference: unwind-protect"}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lisp",children:"(unwind-protect )\n"})})]})}function x(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>d,a:()=>i});var t=r(67294);const c={},s=t.createContext(c);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);