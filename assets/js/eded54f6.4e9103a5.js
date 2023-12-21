"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[70842],{9911:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>c,metadata:()=>o,toc:()=>h});var r=t(85893),s=t(11151);function i(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"restart-case"})," ",(0,r.jsx)(n.em,{children:"Macro"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"restart-case"})," ",(0,r.jsx)(n.em,{children:"restartable-form {\u2193clause} \u2192 {result}"}),"*"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"clause::"}),"=(",(0,r.jsx)(n.em,{children:"case-name lambda-list"})]}),"\n",(0,r.jsxs)(n.p,{children:["[[ ",":interactive"," ",(0,r.jsx)(n.em,{children:"interactive-expression |"})," ",":report"," ",(0,r.jsx)(n.em,{children:"report-expression |"})," ",":test"," ",(0,r.jsx)(n.em,{children:"test-expression"})," ]] ",(0,r.jsx)(n.em,{children:"{declaration}"}),"* ",(0,r.jsx)(n.em,{children:"{form}"}),"*)"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"restartable-form"}),"\u2014a ",(0,r.jsx)(n.em,{children:"form"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"case-name"}),"\u2014a ",(0,r.jsx)(n.em,{children:"symbol"})," or ",(0,r.jsx)(n.strong,{children:"nil"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"lambda-list"}),"\u2014an ",(0,r.jsx)(n.em,{children:"ordinary lambda list"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"interactive-expression"}),"\u2014a ",(0,r.jsx)(n.em,{children:"symbol"})," or a ",(0,r.jsx)(n.em,{children:"lambda expression"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"report-expression"}),"\u2014a ",(0,r.jsx)(n.em,{children:"string"}),", a ",(0,r.jsx)(n.em,{children:"symbol"}),", or a ",(0,r.jsx)(n.em,{children:"lambda expression"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"test-expression"}),"\u2014a ",(0,r.jsx)(n.em,{children:"symbol"})," or a ",(0,r.jsx)(n.em,{children:"lambda expression"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"declaration"}),"\u2014a ",(0,r.jsx)(n.strong,{children:"declare"})," ",(0,r.jsx)(n.em,{children:"expression"}),"; not evaluated."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"form"}),"\u2014a ",(0,r.jsx)(n.em,{children:"form"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"results"}),"\u2014the ",(0,r.jsx)(n.em,{children:"values"})," resulting from the ",(0,r.jsx)(n.em,{children:"evaluation"})," of ",(0,r.jsx)(n.em,{children:"restartable-form"}),", or the ",(0,r.jsx)(n.em,{children:"values"})," returned by the last ",(0,r.jsx)(n.em,{children:"form"})," executed in a chosen ",(0,r.jsx)(n.em,{children:"clause"}),", or ",(0,r.jsx)(n.strong,{children:"nil"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Description:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"restart-case"})," evaluates ",(0,r.jsx)(n.em,{children:"restartable-form"})," in a ",(0,r.jsx)(n.em,{children:"dynamic environment"})," where the clauses have special meanings as points to which control may be transferred. If ",(0,r.jsx)(n.em,{children:"restartable-form"})," finishes executing and returns any values, all values returned are returned by ",(0,r.jsx)(n.strong,{children:"restart-case"})," and processing has completed. While ",(0,r.jsx)(n.em,{children:"restartable-form"})," is executing, any code may transfer control to one of the clauses (see"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"restart-case"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"invoke-restart"}),"). If a transfer occurs, the forms in the body of that clause is evaluated and any values returned by the last such form are returned by ",(0,r.jsx)(n.strong,{children:"restart-case"}),". In this case, the dynamic state is unwound appropriately (so that the restarts established around the ",(0,r.jsx)(n.em,{children:"restartable-form"})," are no longer active) prior to execution of the clause."]}),"\n",(0,r.jsxs)(n.p,{children:["If there are no ",(0,r.jsx)(n.em,{children:"forms"})," in a selected clause, ",(0,r.jsx)(n.strong,{children:"restart-case"})," returns ",(0,r.jsx)(n.strong,{children:"nil"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["If ",(0,r.jsx)(n.em,{children:"case-name"})," is a ",(0,r.jsx)(n.em,{children:"symbol"}),", it names this restart."]}),"\n",(0,r.jsxs)(n.p,{children:["It is possible to have more than one clause use the same ",(0,r.jsx)(n.em,{children:"case-name"}),". In this case, the first clause with that name is found by ",(0,r.jsx)(n.strong,{children:"find-restart"}),". The other clauses are accessible using ",(0,r.jsx)(n.strong,{children:"compute-restarts"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Each ",(0,r.jsx)(n.em,{children:"arglist"})," is an ",(0,r.jsx)(n.em,{children:"ordinary lambda list"})," to be bound during the execution of its corresponding ",(0,r.jsx)(n.em,{children:"forms"}),". These parameters are used by the ",(0,r.jsx)(n.strong,{children:"restart-case"})," clause to receive any necessary data from a call to ",(0,r.jsx)(n.strong,{children:"invoke-restart"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["By default, ",(0,r.jsx)(n.strong,{children:"invoke-restart-interactively"})," passes no arguments and all arguments must be optional in order to accomodate interactive restarting. However, the arguments need not be optional if the ",":interactive"," keyword has been used to inform ",(0,r.jsx)(n.strong,{children:"invoke-restart-interactively"})," about how to compute a proper argument list."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"Keyword"})," options have the following meaning."]}),"\n",(0,r.jsx)(n.p,{children:":interactive"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.em,{children:"value"})," supplied by ",":interactive"," ",(0,r.jsx)(n.em,{children:"value"})," must be a suitable argument to ",(0,r.jsx)(n.strong,{children:"function"}),". (function ",(0,r.jsx)(n.em,{children:"value"}),") is evaluated in the current lexical environment. It should return a ",(0,r.jsx)(n.em,{children:"function"})," of no arguments which returns arguments to be used by ",(0,r.jsx)(n.strong,{children:"invoke-restart-interactively"})," when it is invoked. ",(0,r.jsx)(n.strong,{children:"invoke-restart-interactively"})," is called in the dynamic environment available prior to any restart attempt, and uses ",(0,r.jsx)(n.em,{children:"query I/O"})," for user interaction."]}),"\n",(0,r.jsxs)(n.p,{children:["If a restart is invoked interactively but no ",":interactive"," option was supplied, the argument list used in the invocation is the empty list."]}),"\n",(0,r.jsx)(n.p,{children:":report"}),"\n",(0,r.jsxs)(n.p,{children:["If the ",(0,r.jsx)(n.em,{children:"value"})," supplied by ",":report"," ",(0,r.jsx)(n.em,{children:"value"})," is a ",(0,r.jsx)(n.em,{children:"lambda expression"})," or a ",(0,r.jsx)(n.em,{children:"symbol"}),", it must be acceptable to ",(0,r.jsx)(n.strong,{children:"function"}),". (function ",(0,r.jsx)(n.em,{children:"value"}),") is evaluated in the current lexical environment. It should return a ",(0,r.jsx)(n.em,{children:"function"})," of one argument, a ",(0,r.jsx)(n.em,{children:"stream"}),", which prints on the ",(0,r.jsx)(n.em,{children:"stream"})," a description of the restart. This ",(0,r.jsx)(n.em,{children:"function"})," is called whenever the restart is printed while ",(0,r.jsx)(n.strong,{children:"*print-escape*"})," is ",(0,r.jsx)(n.strong,{children:"nil"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["If ",(0,r.jsx)(n.em,{children:"value"})," is a ",(0,r.jsx)(n.em,{children:"string"}),", it is a shorthand for"]}),"\n",(0,r.jsx)(n.p,{children:"(lambda (stream) (write-string value stream))"}),"\n",(0,r.jsx)(n.p,{children:"If a named restart is asked to report but no report information has been supplied, the name of the restart is used in generating default report text."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"restart-case"})}),"\n",(0,r.jsxs)(n.p,{children:["When ",(0,r.jsx)(n.strong,{children:"*print-escape*"})," is ",(0,r.jsx)(n.strong,{children:"nil"}),", the printer uses the report information for a restart. For example, a debugger might announce the action of typing a \u201ccontinue\u201d command by:"]}),"\n",(0,r.jsxs)(n.p,{children:['(format t "~&~S \u2013 ~A~%" \u2019',":continue"," some-restart)"]}),"\n",(0,r.jsx)(n.p,{children:"which might then display as something like:"}),"\n",(0,r.jsxs)(n.p,{children:[":CONTINUE"," \u2013 Return to command level"]}),"\n",(0,r.jsxs)(n.p,{children:["The consequences are unspecified if an unnamed restart is specified but no ",":report"," option is provided."]}),"\n",(0,r.jsx)(n.p,{children:":test"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.em,{children:"value"})," supplied by ",":test"," ",(0,r.jsx)(n.em,{children:"value"})," must be a suitable argument to ",(0,r.jsx)(n.strong,{children:"function"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["(function ",(0,r.jsx)(n.em,{children:"value"}),") is evaluated in the current lexical environment. It should return a ",(0,r.jsx)(n.em,{children:"function"})," of one ",(0,r.jsx)(n.em,{children:"argument"}),", the ",(0,r.jsx)(n.em,{children:"condition"}),", that returns ",(0,r.jsx)(n.em,{children:"true"})," if the restart is to be considered visible."]}),"\n",(0,r.jsx)(n.p,{children:"The default for this option is equivalent to (lambda (c) (declare (ignore c)) t)."}),"\n",(0,r.jsxs)(n.p,{children:["If the ",(0,r.jsx)(n.em,{children:"restartable-form"})," is a ",(0,r.jsx)(n.em,{children:"list"})," whose ",(0,r.jsx)(n.em,{children:"car"})," is any of the ",(0,r.jsx)(n.em,{children:"symbols"})," ",(0,r.jsx)(n.strong,{children:"signal"}),", ",(0,r.jsx)(n.strong,{children:"error"}),", ",(0,r.jsx)(n.strong,{children:"cerror"}),", or ",(0,r.jsx)(n.strong,{children:"warn"})," (or is a ",(0,r.jsx)(n.em,{children:"macro form"})," which macroexpands into such a ",(0,r.jsx)(n.em,{children:"list"}),"), then ",(0,r.jsx)(n.strong,{children:"with-condition-restarts"})," is used implicitly to associate the indicated ",(0,r.jsx)(n.em,{children:"restarts"})," with the ",(0,r.jsx)(n.em,{children:"condition"})," to be signaled."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lisp",children:'\n(restart-case \n    (handler-bind ((error #\u2019(lambda (c) \n\t\t\t      (declare (ignore condition)) \n\t\t\t      (invoke-restart \u2019my-restart 7)))) \n      (error "Foo.")) \n  (my-restart (&optional v) v)) \n\u2192 7 \n(define-condition food-error (error) ()) \n\u2192 FOOD-ERROR \n(define-condition bad-tasting-sundae (food-error) \n  ((ice-cream :initarg :ice-cream :reader bad-tasting-sundae-ice-cream) \n   (sauce :initarg :sauce :reader bad-tasting-sundae-sauce) \n   (topping :initarg :topping :reader bad-tasting-sundae-topping)) \n  (:report (lambda (condition stream) \n\t     (format stream "Bad tasting sundae with ~S, ~S, and ~S" \n\t\t     (bad-tasting-sundae-ice-cream condition) \n\t\t     (bad-tasting-sundae-sauce condition) \n\t\t     (bad-tasting-sundae-topping condition))))) \n\u2192 BAD-TASTING-SUNDAE \n(defun all-start-with-same-letter (symbol1 symbol2 symbol3) \n\n  \n  \n  **restart-case** \n  (let ((first-letter (char (symbol-name symbol1) 0))) \n    (and (eql first-letter (char (symbol-name symbol2) 0)) \n\t (eql first-letter (char (symbol-name symbol3) 0))))) \n\u2192 ALL-START-WITH-SAME-LETTER \n(defun read-new-value () \n  (format t "Enter a new value: ") \n  (multiple-value-list (eval (read)))) \n\u2192 READ-NEW-VALUE \n\n\n\n**restart-case** \n(defun verify-or-fix-perfect-sundae (ice-cream sauce topping) (do () \n\t\t\t\t\t\t\t\t  ((all-start-with-same-letter ice-cream sauce topping)) \n\t\t\t\t\t\t\t\t(restart-case \n\t\t\t\t\t\t\t\t    (error \u2019bad-tasting-sundae \n\t\t\t\t\t\t\t\t\t    :ice-cream ice-cream \n\t\t\t\t\t\t\t\t\t    :sauce sauce \n\t\t\t\t\t\t\t\t\t    :topping topping) \n\t\t\t\t\t\t\t\t  (use-new-ice-cream (new-ice-cream) \n\t\t\t\t\t\t\t\t    :report "Use a new ice cream." \n\t\t\t\t\t\t\t\t    :interactive read-new-value \n\t\t\t\t\t\t\t\t    (setq ice-cream new-ice-cream)) \n\t\t\t\t\t\t\t\t  (use-new-sauce (new-sauce) \n\t\t\t\t\t\t\t\t    :report "Use a new sauce." \n\t\t\t\t\t\t\t\t    :interactive read-new-value \n\t\t\t\t\t\t\t\t    (setq sauce new-sauce)) \n\t\t\t\t\t\t\t\t  (use-new-topping (new-topping) \n\t\t\t\t\t\t\t\t    :report "Use a new topping." \n\t\t\t\t\t\t\t\t    :interactive read-new-value \n\t\t\t\t\t\t\t\t    (setq topping new-topping)))) \n       (values ice-cream sauce topping)) \n\u2192 VERIFY-OR-FIX-PERFECT-SUNDAE \n(verify-or-fix-perfect-sundae \u2019vanilla \u2019caramel \u2019cherry) \u25b7 Error: Bad tasting sundae with VANILLA, CARAMEL, and CHERRY. \u25b7 To continue, type :CONTINUE followed by an option number: \u25b7 1: Use a new ice cream. \n\u25b7 2: Use a new sauce. \n\u25b7 3: Use a new topping. \n\u25b7 4: Return to Lisp Toplevel. \n\u25b7 Debug> :continue 1 \n\u25b7 Use a new ice cream. \n\u25b7 Enter a new ice cream: \u2019chocolate \n\u2192 CHOCOLATE, CARAMEL, CHERRY \n\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"restart-bind"}),", ",(0,r.jsx)(n.strong,{children:"with-simple-restart"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,r.jsxs)(n.p,{children:["(restart-case ",(0,r.jsx)(n.em,{children:"expression"})]}),"\n",(0,r.jsxs)(n.p,{children:["(",(0,r.jsx)(n.em,{children:"name1 arglist1"})," ...",(0,r.jsx)(n.em,{children:"options1"}),"... . ",(0,r.jsx)(n.em,{children:"body1"}),")"]}),"\n",(0,r.jsxs)(n.p,{children:["(",(0,r.jsx)(n.em,{children:"name2 arglist2"})," ...",(0,r.jsx)(n.em,{children:"options2"}),"... . ",(0,r.jsx)(n.em,{children:"body2"}),"))"]}),"\n",(0,r.jsx)(n.p,{children:"is essentially equivalent to"}),"\n",(0,r.jsxs)(n.p,{children:["(block #1=#",":g0001"]}),"\n",(0,r.jsxs)(n.p,{children:["(let ((#2=#",":g0002"," nil))"]}),"\n",(0,r.jsx)(n.p,{children:"(tagbody"}),"\n",(0,r.jsx)(n.p,{children:"(restart-bind ((name1 #\u2019(lambda (&rest temp)"}),"\n",(0,r.jsx)(n.p,{children:"(setq #2# temp)"}),"\n",(0,r.jsxs)(n.p,{children:["(go #3=#",":g0003","))"]}),"\n",(0,r.jsxs)(n.p,{children:["...",(0,r.jsx)(n.em,{children:"slightly-transformed-options1"}),"...)"]}),"\n",(0,r.jsx)(n.p,{children:"(name2 #\u2019(lambda (&rest temp)"}),"\n",(0,r.jsx)(n.p,{children:"(setq #2# temp)"}),"\n",(0,r.jsxs)(n.p,{children:["(go #4=#",":g0004","))"]}),"\n",(0,r.jsxs)(n.p,{children:["...",(0,r.jsx)(n.em,{children:"slightly-transformed-options2"}),"...))"]}),"\n",(0,r.jsxs)(n.p,{children:["(return-from #1# ",(0,r.jsx)(n.em,{children:"expression"}),"))"]}),"\n",(0,r.jsx)(n.p,{children:"#3# (return-from #1#"}),"\n",(0,r.jsxs)(n.p,{children:["(apply #\u2019(lambda ",(0,r.jsx)(n.em,{children:"arglist1"})," . ",(0,r.jsx)(n.em,{children:"body1"}),") #2#))"]}),"\n",(0,r.jsx)(n.p,{children:"#4# (return-from #1#"}),"\n",(0,r.jsxs)(n.p,{children:["(apply #\u2019(lambda ",(0,r.jsx)(n.em,{children:"arglist2"})," . ",(0,r.jsx)(n.em,{children:"body2"}),") #2#)))))"]}),"\n",(0,r.jsx)(n.p,{children:"Unnamed restarts are generally only useful interactively and an interactive option which has no description is of little value. Implementations are encouraged to warn if an unnamed restart is used and no report information is provided at compilation time. At runtime, this error might be noticed when entering the debugger. Since signaling an error would probably cause recursive entry into the debugger (causing yet another recursive error, etc.) it is suggested that the debugger print some indication of such problems when they occur but not actually signal errors."}),"\n",(0,r.jsx)(n.p,{children:"(restart-case (signal fred)"}),"\n",(0,r.jsx)(n.p,{children:"(a ...)"}),"\n",(0,r.jsx)(n.p,{children:"(b ...))"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"\u2261"})}),"\n",(0,r.jsx)(n.p,{children:"(restart-case"}),"\n",(0,r.jsx)(n.p,{children:"(with-condition-restarts fred"}),"\n",(0,r.jsx)(n.p,{children:"(list (find-restart \u2019a)"}),"\n",(0,r.jsx)(n.p,{children:"(find-restart \u2019b))"}),"\n",(0,r.jsx)(n.p,{children:"(signal fred))"}),"\n",(0,r.jsx)(n.p,{children:"(a ...)"}),"\n",(0,r.jsx)(n.p,{children:"(b ...))"})]})}function a(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}const c={title:"restart-case"},l="restart-case",o={id:"chap-9/j-c-dictionary/restart-case_macro",title:"restart-case",description:"Expanded Reference: restart-case",source:"@site/docs/chap-9/j-c-dictionary/restart-case_macro.md",sourceDirName:"chap-9/j-c-dictionary",slug:"/chap-9/j-c-dictionary/restart-case_macro",permalink:"/cl-language-reference/docs/chap-9/j-c-dictionary/restart-case_macro",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-9/j-c-dictionary/restart-case_macro.md",tags:[],version:"current",frontMatter:{title:"restart-case"},sidebar:"tutorialSidebar",previous:{title:"restart-bind",permalink:"/cl-language-reference/docs/chap-9/j-c-dictionary/restart-bind_macro"},next:{title:"restart-name",permalink:"/cl-language-reference/docs/chap-9/j-c-dictionary/restart-name_function"}},d={},h=[{value:"Expanded Reference: restart-case",id:"expanded-reference-restart-case",level:2}];function m(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"restart-case",children:"restart-case"}),"\n","\n","\n",(0,r.jsx)(a,{}),"\n",(0,r.jsx)(n.h2,{id:"expanded-reference-restart-case",children:"Expanded Reference: restart-case"}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lisp",children:"(restart-case )\n"})})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>a});var r=t(67294);const s={},i=r.createContext(s);function a(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);