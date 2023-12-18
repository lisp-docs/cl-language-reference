"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[99304],{75155:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>x,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var s=r(85893),t=r(11151);function i(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"use-value"})," ",(0,s.jsx)(n.em,{children:"Restart"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Data Arguments Required:"})}),"\n",(0,s.jsx)(n.p,{children:"a value to use instead (once)."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Description:"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"use-value"})," ",(0,s.jsx)(n.em,{children:"restart"})," is generally used by ",(0,s.jsx)(n.em,{children:"handlers"})," trying to recover from errors of ",(0,s.jsx)(n.em,{children:"types"})," such as ",(0,s.jsx)(n.strong,{children:"cell-error"}),", where the handler may wish to supply a replacement datum for one-time use."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,s.jsxs)(n.p,{children:["Section 9.1.4.2 (Restarts), Section 9.1.4.2.2 (Interfaces to Restarts), ",(0,s.jsx)(n.strong,{children:"invoke-restart"}),", ",(0,s.jsx)(n.strong,{children:"use-value"})," (",(0,s.jsx)(n.em,{children:"function"}),"), ",(0,s.jsx)(n.strong,{children:"store-value"})," (",(0,s.jsx)(n.em,{children:"function"})," and ",(0,s.jsx)(n.em,{children:"restart"}),")"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsxs)(n.strong,{children:[(0,s.jsx)("sup",{children:"abort, continue, muffle-warning, store-value, use"})," value"]})," ",(0,s.jsx)("i",{children:"Function"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"abort"})," &optional ",(0,s.jsx)(n.em,{children:"condition \u2192"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"continue"})," &optional ",(0,s.jsx)(n.em,{children:"condition \u2192"})," ",(0,s.jsx)(n.strong,{children:"nil"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"muffle-warning"})," &optional ",(0,s.jsx)(n.em,{children:"condition \u2192"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"store-value"})," ",(0,s.jsx)(n.em,{children:"value"})," &optional ",(0,s.jsx)(n.em,{children:"condition \u2192"})," ",(0,s.jsx)(n.strong,{children:"nil"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"use-value"})," ",(0,s.jsx)(n.em,{children:"value"})," &optional ",(0,s.jsx)(n.em,{children:"condition \u2192"})," ",(0,s.jsx)(n.strong,{children:"nil"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"abort, continue, muffle-warning, store-value, use-value"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"value"}),"\u2014an ",(0,s.jsx)(n.em,{children:"object"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"condition"}),"\u2014a ",(0,s.jsx)(n.em,{children:"condition object"}),", or ",(0,s.jsx)(n.strong,{children:"nil"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Description:"})}),"\n",(0,s.jsxs)(n.p,{children:["Transfers control to the most recently established ",(0,s.jsx)(n.em,{children:"applicable restart"})," having the same name as the function. That is, the ",(0,s.jsx)(n.em,{children:"function"})," ",(0,s.jsx)(n.strong,{children:"abort"})," searches for an ",(0,s.jsx)(n.em,{children:"applicable"})," ",(0,s.jsx)(n.strong,{children:"abort"})," ",(0,s.jsx)(n.em,{children:"restart"}),", the ",(0,s.jsx)(n.em,{children:"function"})," ",(0,s.jsx)(n.strong,{children:"continue"})," searches for an ",(0,s.jsx)(n.em,{children:"applicable"})," ",(0,s.jsx)(n.strong,{children:"continue"})," ",(0,s.jsx)(n.em,{children:"restart"}),", and so on."]}),"\n",(0,s.jsxs)(n.p,{children:["If no such ",(0,s.jsx)(n.em,{children:"restart"})," exists, the functions ",(0,s.jsx)(n.strong,{children:"continue"}),", ",(0,s.jsx)(n.strong,{children:"store-value"}),", and ",(0,s.jsx)(n.strong,{children:"use-value"})," return ",(0,s.jsx)(n.strong,{children:"nil"}),", and the functions ",(0,s.jsx)(n.strong,{children:"abort"})," and ",(0,s.jsx)(n.strong,{children:"muffle-warning"})," signal an error of ",(0,s.jsx)(n.em,{children:"type"})," ",(0,s.jsx)(n.strong,{children:"control-error"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["When ",(0,s.jsx)(n.em,{children:"condition"})," is ",(0,s.jsx)(n.em,{children:"non-nil"}),", only those ",(0,s.jsx)(n.em,{children:"restarts"})," are considered that are either explicitly associated with that ",(0,s.jsx)(n.em,{children:"condition"}),", or not associated with any ",(0,s.jsx)(n.em,{children:"condition"}),"; that is, the excluded ",(0,s.jsx)(n.em,{children:"restarts"})," are those that are associated with a non-empty set of ",(0,s.jsx)(n.em,{children:"conditions"})," of which the given ",(0,s.jsx)(n.em,{children:"condition"})," is not an ",(0,s.jsx)(n.em,{children:"element"}),". If ",(0,s.jsx)(n.em,{children:"condition"})," is ",(0,s.jsx)(n.strong,{children:"nil"}),", all ",(0,s.jsx)(n.em,{children:"restarts"})," are considered."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lisp",children:';;; Example of the ABORT retart \n(defmacro abort-on-error (&body forms) \n  \u2018(handler-bind ((error #\u2019abort)) \n     ,@forms)) \u2192 ABORT-ON-ERROR \n(abort-on-error (+ 3 5)) \u2192 8 \n(abort-on-error (error "You lose.")) \n\u25b7 Returned to Lisp Top Level. \n;;; Example of the CONTINUE restart \n(defun real-sqrt (n) \n  (when (minusp n) \n    (setq n (- n)) \n    (cerror "Return sqrt(~D) instead." "Tried to take sqrt(-~D)." n)) \n  (sqrt n)) \n(real-sqrt 4) \u2192 2 \n(real-sqrt -9) \n\u25b7 Error: Tried to take sqrt(-9). \n\u25b7 To continue, type :CONTINUE followed by an option number: \n\u25b7 1: Return sqrt(9) instead. \n\u25b7 2: Return to Lisp Toplevel. \n\u25b7 Debug> (continue) \n\u25b7 Return sqrt(9) instead. \n\u2192 3 \n\n\n**abort, continue, muffle-warning, store-value, use-value** \n(handler-bind ((error #\u2019(lambda (c) (continue)))) \n  (real-sqrt -9)) \u2192 3 \n;;; Example of the MUFFLE-WARNING restart \n(defun count-down (x) \n  (do ((counter x (1- counter))) \n      ((= counter 0) \u2019done) \n    (when (= counter 1) \n      (warn "Almost done")) \n    (format t "~&~D~%" counter))) \n\u2192 COUNT-DOWN \n(count-down 3) \n\u25b7 3 \n\u25b7 2 \n\u25b7 Warning: Almost done \n\u25b7 1 \n\u2192 DONE \n(defun ignore-warnings-while-counting (x) \n  (handler-bind ((warning #\u2019ignore-warning)) \n    (count-down x))) \n\u2192 IGNORE-WARNINGS-WHILE-COUNTING \n(defun ignore-warning (condition) \n  (declare (ignore condition)) \n  (muffle-warning)) \n\u2192 IGNORE-WARNING \n(ignore-warnings-while-counting 3) \n\u25b7 3 \n\u25b7 2 \n\u25b7 1 \n\u2192 DONE \n;;; Example of the STORE-VALUE and USE-VALUE restarts \n(defun careful-symbol-value (symbol) \n  (check-type symbol symbol) \n  (restart-case (if (boundp symbol) \n\t\t    (return-from careful-symbol-value \n\t\t      (symbol-value symbol)) \n\t\t    (error \u2019unbound-variable \n\t\t\t    :name symbol)) \n    (use-value (value) \n      :report "Specify a value to use this time." \n      value) \n    \n    \n    **abort, continue, muffle-warning, store-value, use-value** \n    (store-value (value) \n      :report "Specify a value to store and use in the future." \n      (setf (symbol-value symbol) value)))) \n(setq a 1234) \u2192 1234 \n(careful-symbol-value \u2019a) \u2192 1234 \n(makunbound \u2019a) \u2192 A \n(careful-symbol-value \u2019a) \n\u25b7 Error: A is not bound. \n\u25b7 To continue, type :CONTINUE followed by an option number. \n\u25b7 1: Specify a value to use this time. \n\u25b7 2: Specify a value to store and use in the future. \n\u25b7 3: Return to Lisp Toplevel. \n\u25b7 Debug> (use-value 12) \n\u2192 12 \n(careful-symbol-value \u2019a) \n\u25b7 Error: A is not bound. \n\u25b7 To continue, type :CONTINUE followed by an option number. \n\u25b7 1: Specify a value to use this time. \n\u25b7 2: Specify a value to store and use in the future. \n\u25b7 3: Return to Lisp Toplevel. \n\u25b7 Debug> (store-value 24) \n\u2192 24 \n(careful-symbol-value \u2019a) \n\u2192 24 \n;;; Example of the USE-VALUE restart \n(defun add-symbols-with-default (default &rest symbols) \n  (handler-bind ((sys:unbound-symbol \n\t\t  #\u2019(lambda (c) \n\t\t      (declare (ignore c)) \n\t\t      (use-value default)))) \n    (apply #\u2019+ (mapcar #\u2019careful-symbol-value symbols)))) \n\u2192 ADD-SYMBOLS-WITH-DEFAULT \n(setq x 1 y 2) \u2192 2 \n(add-symbols-with-default 3 \u2019x \u2019y \u2019z) \u2192 6 \n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Side Effects:"})}),"\n",(0,s.jsxs)(n.p,{children:["A transfer of control may occur if an appropriate ",(0,s.jsx)(n.em,{children:"restart"})," is available, or (in the case of the ",(0,s.jsx)(n.em,{children:"function"})," ",(0,s.jsx)(n.strong,{children:"abort"})," or the ",(0,s.jsx)(n.em,{children:"function"})," ",(0,s.jsx)(n.strong,{children:"muffle-warning"}),") execution may be stopped."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Affected By:"})}),"\n",(0,s.jsxs)(n.p,{children:["Each of these functions can be affected by the presence of a ",(0,s.jsx)(n.em,{children:"restart"})," having the same name."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"abort, continue, muffle-warning, store-value, use-value"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Exceptional Situations:"})}),"\n",(0,s.jsxs)(n.p,{children:["If an appropriate ",(0,s.jsx)(n.strong,{children:"abort"})," ",(0,s.jsx)(n.em,{children:"restart"})," is not available for the ",(0,s.jsx)(n.em,{children:"function"})," ",(0,s.jsx)(n.strong,{children:"abort"}),", or an appropriate ",(0,s.jsx)(n.strong,{children:"muffle-warning"})," ",(0,s.jsx)(n.em,{children:"restart"})," is not available for the ",(0,s.jsx)(n.em,{children:"function"})," ",(0,s.jsx)(n.strong,{children:"muffle-warning"}),", an error of ",(0,s.jsx)(n.em,{children:"type"})," ",(0,s.jsx)(n.strong,{children:"control-error"})," is signaled."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"invoke-restart"}),", Section 9.1.4.2 (Restarts), Section 9.1.4.2.2 (Interfaces to Restarts), ",(0,s.jsx)(n.strong,{children:"assert"}),", ",(0,s.jsx)(n.strong,{children:"ccase"}),", ",(0,s.jsx)(n.strong,{children:"cerror"}),", ",(0,s.jsx)(n.strong,{children:"check-type"}),", ",(0,s.jsx)(n.strong,{children:"ctypecase"}),", ",(0,s.jsx)(n.strong,{children:"use-value"}),", ",(0,s.jsx)(n.strong,{children:"warn"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,s.jsxs)(n.p,{children:["(abort condition) ",(0,s.jsx)(n.em,{children:"\u2261"})," (invoke-restart \u2019abort)"]}),"\n",(0,s.jsxs)(n.p,{children:["(muffle-warning) ",(0,s.jsx)(n.em,{children:"\u2261"})," (invoke-restart \u2019muffle-warning)"]}),"\n",(0,s.jsxs)(n.p,{children:["(continue) ",(0,s.jsx)(n.em,{children:"\u2261"})," (let ((r (find-restart \u2019continue))) (if r (invoke-restart r))) (use-value ",(0,s.jsx)(n.em,{children:"x"}),") ",(0,s.jsx)(n.em,{children:"\u2261"})," (let ((r (find-restart \u2019use-value))) (if r (invoke-restart r ",(0,s.jsx)(n.em,{children:"x"}),"))) (store-value x) ",(0,s.jsx)(n.em,{children:"\u2261"})," (let ((r (find-restart \u2019store-value))) (if r (invoke-restart r ",(0,s.jsx)(n.em,{children:"x"}),")))"]}),"\n",(0,s.jsxs)(n.p,{children:["No functions defined in this specification are required to provide a ",(0,s.jsx)(n.strong,{children:"use-value"})," ",(0,s.jsx)(n.em,{children:"restart"}),"."]})]})}function o(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(i,{...e})}):i(e)}const l={},a="use-value",c={id:"chap-9/j-c-dictionary/usevalue",title:"use-value",description:"Expanded Reference: use-value",source:"@site/docs/chap-9/j-c-dictionary/usevalue.md",sourceDirName:"chap-9/j-c-dictionary",slug:"/chap-9/j-c-dictionary/usevalue",permalink:"/cl-language-reference/docs/chap-9/j-c-dictionary/usevalue",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-9/j-c-dictionary/usevalue.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"style-warning",permalink:"/cl-language-reference/docs/chap-9/j-c-dictionary/stylewarning"},next:{title:"warn",permalink:"/cl-language-reference/docs/chap-9/j-c-dictionary/warn"}},d={},u=[{value:"Expanded Reference: use-value",id:"expanded-reference-use-value",level:2}];function h(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"use-value",children:"use-value"}),"\n","\n","\n",(0,s.jsx)(o,{}),"\n",(0,s.jsx)(n.h2,{id:"expanded-reference-use-value",children:"Expanded Reference: use-value"}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lisp",children:"(use-value )\n"})})]})}function x(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>l,a:()=>o});var s=r(67294);const t={},i=s.createContext(t);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);