"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[71618],{74704:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>r});var t=a(85893),c=a(11151);const s={},l="Funcallable Instances",o={id:"meta-object-protocol/funcallable-instances",title:"Funcallable Instances",description:"Funcallable Instances",source:"@site/docs/meta-object-protocol/funcallable-instances.md",sourceDirName:"meta-object-protocol",slug:"/meta-object-protocol/funcallable-instances",permalink:"/cl-language-reference/meta-object-protocol/funcallable-instances",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/main/docs/meta-object-protocol/funcallable-instances.md",tags:[],version:"current",lastUpdatedBy:"Daniel Nussenbaum",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"find-method-combination",permalink:"/cl-language-reference/meta-object-protocol/find-method-combination"},next:{title:"funcallable-standard-instance-access",permalink:"/cl-language-reference/meta-object-protocol/funcallable-standard-instance-access"}},i={},r=[{value:"Funcallable Instances",id:"funcallable-instances-1",level:3},{value:"Example",id:"example",level:4}];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,c.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"funcallable-instances",children:"Funcallable Instances"}),"\n",(0,t.jsx)(n.h3,{id:"funcallable-instances-1",children:"Funcallable Instances"}),"\n",(0,t.jsxs)(n.p,{children:["Instances of classes which are themselves instances of ",(0,t.jsx)(n.a,{href:"/meta-object-protocol/class-funcallable-standard-class",children:"funcallable-standard-class"})," or one of its subclasses are called ",(0,t.jsx)(n.em,{children:"funcallable instances"}),". Funcallable instances can only be created by ",(0,t.jsx)(n.a,{href:"/meta-object-protocol/allocate-instance-funcallable-standard-class",children:"allocate-instance (class funcallable-standard-class)"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Like standard instances, funcallable instances have slots with the normal behavior. They differ from standard instances in that they can be used as functions as well; that is, they can be passed to ",(0,t.jsx)(n.a,{href:"http://www.lispworks.com/documentation/HyperSpec/Body/f_funcal.htm#funcall",children:"funcall"})," and ",(0,t.jsx)(n.a,{href:"http://www.lispworks.com/documentation/HyperSpec/Body/f_apply.htm#apply",children:"apply"}),", and they can be stored as the definition of a function name. Associated with each funcallable instance is the function which it runs when it is called. This function can be changed with ",(0,t.jsx)(n.a,{href:"/meta-object-protocol/set-funcallable-instance-function",children:"set-funcallable-instance-function"})]}),"\n",(0,t.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,t.jsxs)(n.p,{children:["The following simple example shows the use of funcallable instances to create a simple, ",(0,t.jsx)(n.a,{href:"http://www.lispworks.com/documentation/HyperSpec/Body/m_defstr.htm#defstruct",children:"defstruct"}),"-like facility. (Funcallable instances are useful when a program needs to construct and maintain a set of functions and information about those functions. They make it possible to maintain both as the same object rather than two separate objects linked, for example, by hash tables.)"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lisp",children:"    (defclass constructor ()\n         ((name :initarg :name :accessor constructor-name)\n          (fields :initarg :fields :accessor constructor-fields))\n      (:metaclass funcallable-standard-class))\n\n    (defmethod initialize-instance :after ((c constructor) &key)\n      (with-slots (name fields) c\n        (set-funcallable-instance-function\n          c\n          #'(lambda ()\n              (let ((new (make-array (1+ (length fields)))))\n                (setf (aref new 0) name)\n                new)))))\n\n    (setq c1 (make-instance 'constructor\n                            :name 'position :fields '(x y)))\n    #<CONSTRUCTOR 262437>\n\n    (setq p1 (funcall c1))\n    #<ARRAY 3 263674>\n"})})]})}function u(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,n,a)=>{a.d(n,{Z:()=>o,a:()=>l});var t=a(67294);const c={},s=t.createContext(c);function l(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:l(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);