"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[23408],{62953:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>i,default:()=>h,frontMatter:()=>d,metadata:()=>c,toc:()=>s});var o=n(85893),a=n(11151);const d={},i="make-method-lambda",c={id:"meta-object-protocol/dictionary/make-method-lambda",title:"make-method-lambda",description:"Generic Function MAKE-METHOD-LAMBDA",source:"@site/docs/meta-object-protocol/dictionary/make-method-lambda.md",sourceDirName:"meta-object-protocol/dictionary",slug:"/meta-object-protocol/dictionary/make-method-lambda",permalink:"/cl-language-reference/meta-object-protocol/dictionary/make-method-lambda",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/main/docs/meta-object-protocol/dictionary/make-method-lambda.md",tags:[],version:"current",lastUpdatedBy:"Daniel Nussenbaum",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"make-method-lambda-standard-generic-function-standard-method",permalink:"/cl-language-reference/meta-object-protocol/dictionary/make-method-lambda-standard-generic-function-standard-method"},next:{title:"map-dependents-funcallable-standard-class",permalink:"/cl-language-reference/meta-object-protocol/dictionary/map-dependents-funcallable-standard-class"}},r={},s=[{value:"<strong>make-method-lambda</strong> (<em>generic-function</em> standard-generic-function) (<em>method</em> standard-method) <em>lambda-expression</em> <em>environment</em>",id:"make-method-lambda-generic-function-standard-generic-function-method-standard-method-lambda-expression-environment",level:2}];function m(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",hr:"hr",p:"p",strong:"strong",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"make-method-lambda",children:"make-method-lambda"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.em,{children:"Generic Function"})," ",(0,o.jsx)(t.strong,{children:"MAKE-METHOD-LAMBDA"})]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Syntax:"})}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"make-method-lambda"})," ",(0,o.jsx)(t.em,{children:"generic-function"})," ",(0,o.jsx)(t.em,{children:"method"})," ",(0,o.jsx)(t.em,{children:"lambda-expression"})," ",(0,o.jsx)(t.em,{children:"environment"})," => ",(0,o.jsx)(t.em,{children:"resulting-lambda-expression"}),", ",(0,o.jsx)(t.em,{children:"initargs"})]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Arguments and values:"})}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.em,{children:"generic-function"})," -- A generic function metaobject."]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.em,{children:"method"})," -- A (possibly uninitialized) method metaobject."]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.em,{children:"lambda-expression"})," -- A lambda expression."]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.em,{children:"environment"})," -- An",(0,o.jsx)(t.a,{href:"http://www.lispworks.com/documentation/HyperSpec/Body/03_aad.htm",children:"environment object"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.em,{children:"resulting-lambda-expression"})," -- A lambda expression."]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.em,{children:"initargs"})," -- A list of initialization arguments and values."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Description:"})}),"\n",(0,o.jsx)(t.p,{children:"This generic function is called to produce a lambda expression which can itself be used to produce a method function for a method and generic function with the specified classes. The generic function and method the method function will be used with are not required to be the given ones. Moreover, the method metaobject may be uninitialized."}),"\n",(0,o.jsxs)(t.p,{children:["Either the function ",(0,o.jsx)(t.a,{href:"http://www.lispworks.com/documentation/HyperSpec/Body/f_cmp.htm#compile",children:"compile"}),", the special form ",(0,o.jsx)(t.a,{href:"http://www.lispworks.com/documentation/HyperSpec/Body/s_fn.htm",children:"function"})," or the function ",(0,o.jsx)(t.a,{href:"http://www.lispworks.com/documentation/HyperSpec/Body/f_coerce.htm#coerce",children:"coerce"})," must be used to convert the lambda expression to a method function. The method function itself can be applied to arguments with ",(0,o.jsx)(t.a,{href:"http://www.lispworks.com/documentation/HyperSpec/Body/f_apply.htm#apply",children:"apply"})," or ",(0,o.jsx)(t.a,{href:"http://www.lispworks.com/documentation/HyperSpec/Body/f_funcal.htm#funcall",children:"funcall"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["When a method is actually called by an effective method, its first argument will be a list of the arguments to the generic function. Its remaining arguments will be all but the first argument passed to ",(0,o.jsx)(t.a,{href:"http://www.lispworks.com/documentation/HyperSpec/Body/m_call_m.htm#call-method",children:"call-method"}),". By default, all method functions must accept two arguments: the list of arguments to the generic function and the list of next methods."]}),"\n",(0,o.jsxs)(t.p,{children:["For a given generic function and method class, the applicable methods on ",(0,o.jsx)(t.code,{children:"make-method-lambda"})," and ",(0,o.jsx)(t.a,{href:"/meta-object-protocol/compute-effective-method",children:"compute-effective-method"})," must be consistent in the following way: each use of ",(0,o.jsx)(t.a,{href:"http://www.lispworks.com/documentation/HyperSpec/Body/m_call_m.htm#call-method",children:"call-method"})," returned by the method on ",(0,o.jsx)(t.a,{href:"/meta-object-protocol/compute-effective-method",children:"compute-effective-method"})," must have the same number of arguments, and the method lambda returned by the method on ",(0,o.jsx)(t.code,{children:"make-method-lambda"})," must accept a corresponding number of arguments."]}),"\n",(0,o.jsxs)(t.p,{children:["Note that the system-supplied implementation of ",(0,o.jsx)(t.a,{href:"http://www.lispworks.com/documentation/HyperSpec/Body/f_call_n.htm#call-next-method",children:"call-next-method"})," is not required to handle extra arguments to the method function. Users who define additional arguments to the method function must either redefine or forego ",(0,o.jsx)(t.a,{href:"http://www.lispworks.com/documentation/HyperSpec/Body/f_call_n.htm#call-next-method",children:"call-next-method"}),". (See the example below.)"]}),"\n",(0,o.jsxs)(t.p,{children:["When the method metaobject is created with ",(0,o.jsx)(t.a,{href:"/meta-object-protocol/make-instance",children:"make-instance"}),", the method function must be the value of the ",(0,o.jsx)(t.code,{children:":function"})," initialization argument. The additional initialization arguments, returned as the second value of this generic function, must also be passed in this call to ",(0,o.jsx)(t.a,{href:"/meta-object-protocol/make-instance",children:"make-instance"}),"."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Methods:"})}),"\n",(0,o.jsx)(t.hr,{}),"\n",(0,o.jsx)(t.h2,{id:"make-method-lambda-generic-function-standard-generic-function-method-standard-method-lambda-expression-environment",children:(0,o.jsxs)(t.a,{href:"/meta-object-protocol/make-method-lambda-standard-generic-function-standard-method",children:[(0,o.jsx)(t.strong,{children:"make-method-lambda"})," (",(0,o.jsx)(t.em,{children:"generic-function"})," standard-generic-function) (",(0,o.jsx)(t.em,{children:"method"})," standard-method) ",(0,o.jsx)(t.em,{children:"lambda-expression"})," ",(0,o.jsx)(t.em,{children:"environment"})]})}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Example:"})}),"\n",(0,o.jsxs)(t.p,{children:["This example shows how to define a kind of method which, from within the body of the method, has access to the actual method metaobject for the method. This simplified code overrides whatever method combination is specified for the generic function, implementing a simple method combination supporting only primary methods, ",(0,o.jsx)(t.a,{href:"http://www.lispworks.com/documentation/HyperSpec/Body/f_call_n.htm#call-next-method",children:"call-next-method"})," and ",(0,o.jsx)(t.a,{href:"http://www.lispworks.com/documentation/HyperSpec/Body/f_next_m.htm#next-method-p",children:"next-method-p"}),". (In addition, its a simplified version of ",(0,o.jsx)(t.a,{href:"http://www.lispworks.com/documentation/HyperSpec/Body/f_call_n.htm#call-next-method",children:"call-next-method"})," which does no error checking.)"]}),"\n",(0,o.jsxs)(t.p,{children:["Notice that the extra lexical function bindings get wrapped around the body before ",(0,o.jsx)(t.a,{href:"http://www.lispworks.com/documentation/HyperSpec/Body/f_call_n.htm#call-next-method",children:"call-next-method"})," is called. In this way, the user's definition of ",(0,o.jsx)(t.a,{href:"http://www.lispworks.com/documentation/HyperSpec/Body/f_call_n.htm#call-next-method",children:"call-next-method"})," and ",(0,o.jsx)(t.a,{href:"http://www.lispworks.com/documentation/HyperSpec/Body/f_next_m.htm#next-method-p",children:"next-method-p"})," are sure to override the system's definitions."]}),"\n",(0,o.jsxs)(t.p,{children:["(defclass my-generic-function (standard-generic-function)\n()\n(",":default-initargs"," ",":method-class"," (find-class 'my-method)))"]}),"\n",(0,o.jsx)(t.p,{children:"(defclass my-method (standard-method) ())"}),"\n",(0,o.jsxs)(t.p,{children:["(defmethod make-method-lambda ((gf my-generic-function)\n(method my-method)\nlambda-expression\nenvironment)\n(declare (ignore environment))\n",(0,o.jsx)(t.code,{children:"(lambda (args next-methods this-method)          (,(call-next-method gf method              "}),"(lambda ,(cadr lambda-expression)\n(flet ((this-method () this-method)\n(call-next-method (&rest cnm-args)\n(funcall (method-function (car next-methods))\n(or cnm-args args)\n(cdr next-methods)\n(car next-methods)))\n(next-method-p ()\n(not (null next-methods))))\n,@(cddr lambda-expression)))\nenvironment)\nargs next-methods)))"]}),"\n",(0,o.jsx)(t.p,{children:"(defmethod compute-effective-method ((gf my-generic-function)\nmethod-combination\nmethods)\n`(call-method ,(car methods) ,(cdr methods) ,(car methods)))"})]})}function h(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(m,{...e})}):m(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>i});var o=n(67294);const a={},d=o.createContext(a);function i(e){const t=o.useContext(d);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),o.createElement(d.Provider,{value:t},e.children)}}}]);