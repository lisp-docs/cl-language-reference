"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[93295],{8394:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>j,frontMatter:()=>l,metadata:()=>a,toc:()=>h});var s=r(85893),i=r(11151);function t(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"destructuring-bind"})," ",(0,s.jsx)(n.em,{children:"Macro"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"destructuring-bind"})," ",(0,s.jsx)(n.em,{children:"lambda-list expression {declaration}"}),"* ",(0,s.jsx)(n.em,{children:"{form}"}),"*"]}),"\n",(0,s.jsx)(n.p,{children:"\u2192 {result}*"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"lambda-list"}),"\u2014a ",(0,s.jsx)(n.em,{children:"destructuring lambda list"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"expression"}),"\u2014a ",(0,s.jsx)(n.em,{children:"form"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"declaration"}),"\u2014a ",(0,s.jsx)(n.strong,{children:"declare"})," ",(0,s.jsx)(n.em,{children:"expression"}),"; not evaluated."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"forms"}),"\u2014an ",(0,s.jsx)(n.em,{children:"implicit progn"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"results"}),"\u2014the ",(0,s.jsx)(n.em,{children:"values"})," returned by the ",(0,s.jsx)(n.em,{children:"forms"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Description:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"destructuring-bind"})," binds the variables specified in ",(0,s.jsx)(n.em,{children:"lambda-list"})," to the corresponding values in the tree structure resulting from the evaluation of ",(0,s.jsx)(n.em,{children:"expression"}),"; then ",(0,s.jsx)(n.strong,{children:"destructuring-bind"})," evaluates ",(0,s.jsx)(n.em,{children:"forms"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.em,{children:"lambda-list"})," supports destructuring as described in Section 3.4.5 (Destructuring Lambda Lists). ",(0,s.jsx)(n.strong,{children:"Examples:"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lisp",children:" \n\n(defun iota (n) (loop for i from 1 to n collect i)) ;helper \n\n(destructuring-bind ((a &amp;optional (b \u2019bee)) one two three) \n\n\u2018((alpha) ,@(iota 3)) \n\n(list a b three two one)) \u2192 (ALPHA BEE 3 2 1) \n\nData and Control \n\n\n\n\n\n\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Exceptional Situations:"})}),"\n",(0,s.jsxs)(n.p,{children:["If the result of evaluating the ",(0,s.jsx)(n.em,{children:"expression"})," does not match the destructuring pattern, an error of ",(0,s.jsx)(n.em,{children:"type"})," ",(0,s.jsx)(n.strong,{children:"error"})," should be signaled."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"macrolet"}),", ",(0,s.jsx)(n.strong,{children:"defmacro"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"let, let"}),(0,s.jsx)(n.em,{children:"\u2217 Special Operator"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"let"})," (",(0,s.jsx)(n.em,{children:"{var |"})," (",(0,s.jsx)(n.em,{children:"var"})," [",(0,s.jsx)(n.em,{children:"init-form"}),"])",(0,s.jsx)(n.em,{children:"}"}),"*) ",(0,s.jsx)(n.em,{children:"{declaration}"}),"* ",(0,s.jsx)(n.em,{children:"{form}"}),"* \u2192 {result}*"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"let*"})," (",(0,s.jsx)(n.em,{children:"{var |"})," (",(0,s.jsx)(n.em,{children:"var"})," [",(0,s.jsx)(n.em,{children:"init-form"}),"])",(0,s.jsx)(n.em,{children:"}"}),"*) ",(0,s.jsx)(n.em,{children:"{declaration}"}),"* ",(0,s.jsx)(n.em,{children:"{form}"}),"* \u2192 {result}*"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"var"}),"\u2014a ",(0,s.jsx)(n.em,{children:"symbol"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"init-form"}),"\u2014a ",(0,s.jsx)(n.em,{children:"form"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"declaration"}),"\u2014a ",(0,s.jsx)(n.strong,{children:"declare"})," ",(0,s.jsx)(n.em,{children:"expression"}),"; not evaluated."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"form"}),"\u2014a ",(0,s.jsx)(n.em,{children:"form"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"results"}),"\u2014the ",(0,s.jsx)(n.em,{children:"values"})," returned by the ",(0,s.jsx)(n.em,{children:"forms"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Description:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"let"})," and ",(0,s.jsx)(n.strong,{children:"let*"})," create new variable ",(0,s.jsx)(n.em,{children:"bindings"})," and execute a series of ",(0,s.jsx)(n.em,{children:"forms"})," that use these ",(0,s.jsx)(n.em,{children:"bindings"}),". ",(0,s.jsx)(n.strong,{children:"let"})," performs the ",(0,s.jsx)(n.em,{children:"bindings"})," in parallel and ",(0,s.jsx)(n.strong,{children:"let*"})," does them sequentially."]}),"\n",(0,s.jsx)(n.p,{children:"The form"}),"\n",(0,s.jsxs)(n.p,{children:["(let ((",(0,s.jsx)(n.em,{children:"var1 init-form-1"})," )"]}),"\n",(0,s.jsxs)(n.p,{children:["(",(0,s.jsx)(n.em,{children:"var2 init-form-2"})," )"]}),"\n",(0,s.jsx)(n.p,{children:"..."}),"\n",(0,s.jsxs)(n.p,{children:["(",(0,s.jsx)(n.em,{children:"varm init-form-m"}),"))"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"declaration1"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"declaration2"})}),"\n",(0,s.jsx)(n.p,{children:"..."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"declarationp"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"form1"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"form2"})}),"\n",(0,s.jsx)(n.p,{children:"..."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"formn"}),")"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"let, let"}),(0,s.jsx)(n.em,{children:"\u2217"})]}),"\n",(0,s.jsxs)(n.p,{children:["first evaluates the expressions ",(0,s.jsx)(n.em,{children:"init-form-1"}),", ",(0,s.jsx)(n.em,{children:"init-form-2"}),", and so on, in that order, saving the resulting values. Then all of the variables ",(0,s.jsx)(n.em,{children:"varj"})," are bound to the corresponding values; each ",(0,s.jsx)(n.em,{children:"binding"})," is lexical unless there is a ",(0,s.jsx)(n.strong,{children:"special"})," declaration to the contrary. The expressions ",(0,s.jsx)(n.em,{children:"formk"})," are then evaluated in order; the values of all but the last are discarded (that is, the body of a ",(0,s.jsx)(n.strong,{children:"let"})," is an ",(0,s.jsx)(n.em,{children:"implicit progn"}),")."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"let*"})," is similar to ",(0,s.jsx)(n.strong,{children:"let"}),", but the ",(0,s.jsx)(n.em,{children:"bindings"})," of variables are performed sequentially rather than in parallel. The expression for the ",(0,s.jsx)(n.em,{children:"init-form"})," of a ",(0,s.jsx)(n.em,{children:"var"})," can refer to ",(0,s.jsx)(n.em,{children:"vars"})," previously bound in the ",(0,s.jsx)(n.strong,{children:"let*"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"The form"}),"\n",(0,s.jsxs)(n.p,{children:["(let* ((",(0,s.jsx)(n.em,{children:"var1 init-form-1"})," )"]}),"\n",(0,s.jsxs)(n.p,{children:["(",(0,s.jsx)(n.em,{children:"var2 init-form-2"})," )"]}),"\n",(0,s.jsx)(n.p,{children:"..."}),"\n",(0,s.jsxs)(n.p,{children:["(",(0,s.jsx)(n.em,{children:"varm init-form-m"}),"))"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"declaration1"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"declaration2"})}),"\n",(0,s.jsx)(n.p,{children:"..."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"declarationp"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"form1"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"form2"})}),"\n",(0,s.jsx)(n.p,{children:"..."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"formn"}),")"]}),"\n",(0,s.jsxs)(n.p,{children:["first evaluates the expression ",(0,s.jsx)(n.em,{children:"init-form-1"}),", then binds the variable ",(0,s.jsx)(n.em,{children:"var1"})," to that value; then it evaluates ",(0,s.jsx)(n.em,{children:"init-form-2"})," and binds ",(0,s.jsx)(n.em,{children:"var2"}),", and so on. The expressions ",(0,s.jsx)(n.em,{children:"formj"})," are then evaluated in order; the values of all but the last are discarded (that is, the body of ",(0,s.jsx)(n.strong,{children:"let*"})," is an implicit ",(0,s.jsx)(n.strong,{children:"progn"}),")."]}),"\n",(0,s.jsxs)(n.p,{children:["For both ",(0,s.jsx)(n.strong,{children:"let"})," and ",(0,s.jsx)(n.strong,{children:"let*"}),", if there is not an ",(0,s.jsx)(n.em,{children:"init-form"})," associated with a ",(0,s.jsx)(n.em,{children:"var"}),", ",(0,s.jsx)(n.em,{children:"var"})," is initialized to ",(0,s.jsx)(n.strong,{children:"nil"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["The special form ",(0,s.jsx)(n.strong,{children:"let"})," has the property that the ",(0,s.jsx)(n.em,{children:"scope"})," of the name binding does not include any initial value form. For ",(0,s.jsx)(n.strong,{children:"let*"}),", a variable\u2019s ",(0,s.jsx)(n.em,{children:"scope"})," also includes the remaining initial value forms for subsequent variable bindings."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lisp",children:' \n\n(setq a \u2019top) \u2192 TOP \n\n(defun dummy-function () a) \u2192 DUMMY-FUNCTION \n\n(let ((a \u2019inside) (b a)) \n\n(format nil "&#126;S &#126;S &#126;S" a b (dummy-function))) \u2192 "INSIDE TOP TOP" \n\n(let\\* ((a \u2019inside) (b a)) \n\n(format nil "&#126;S &#126;S &#126;S" a b (dummy-function))) \u2192 "INSIDE INSIDE TOP" \n\n(let ((a \u2019inside) (b a)) \n\n(declare (special a)) \n\n(format nil "&#126;S &#126;S &#126;S" a b (dummy-function))) \u2192 "INSIDE TOP INSIDE" \n\nThe code \n\n(let (x) \n\nData and Control \n\n\n\n\n\n(declare (integer x)) \n\n(setq x (gcd y z)) \n\n...) \n\nis incorrect; although x is indeed set before it is used, and is set to a value of the declared type *integer* , nevertheless x initially takes on the value **nil** in violation of the type declaration. \n\n\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"progv"})})]})}function d(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(t,{...e})}):t(e)}const l={},c="destructuring-bind",a={id:"chap-5/f-d-dictionary/destructuringbind",title:"destructuring-bind",description:"Expanded Reference: destructuring-bind",source:"@site/docs/chap-5/f-d-dictionary/destructuringbind.md",sourceDirName:"chap-5/f-d-dictionary",slug:"/chap-5/f-d-dictionary/destructuringbind",permalink:"/cl-language-reference/docs/chap-5/f-d-dictionary/destructuringbind",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-5/f-d-dictionary/destructuringbind.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"defsetf",permalink:"/cl-language-reference/docs/chap-5/f-d-dictionary/defsetf"},next:{title:"eq",permalink:"/cl-language-reference/docs/chap-5/f-d-dictionary/eq"}},o={},h=[{value:"Expanded Reference: destructuring-bind",id:"expanded-reference-destructuring-bind",level:2}];function x(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"destructuring-bind",children:"destructuring-bind"}),"\n","\n","\n",(0,s.jsx)(d,{}),"\n",(0,s.jsx)(n.h2,{id:"expanded-reference-destructuring-bind",children:"Expanded Reference: destructuring-bind"}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lisp",children:"(destructuring-bind )\n"})})]})}function j(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>l,a:()=>d});var s=r(67294);const i={},t=s.createContext(i);function d(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);