"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[578],{96140:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>j,frontMatter:()=>c,metadata:()=>d,toc:()=>h});var l=s(85893),i=s(11151);function r(e){const n={em:"em",p:"p",strong:"strong",...(0,i.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"slot-value"})," ",(0,l.jsx)(n.em,{children:"Function"})]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"slot-value"})," ",(0,l.jsx)(n.em,{children:"object slot-name \u2192 value"})]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.em,{children:"object"}),"\u2014an ",(0,l.jsx)(n.em,{children:"object"}),"."]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.em,{children:"name"}),"\u2014a ",(0,l.jsx)(n.em,{children:"symbol"}),"."]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.em,{children:"value"}),"\u2014an ",(0,l.jsx)(n.em,{children:"object"}),"."]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Description:"})}),"\n",(0,l.jsxs)(n.p,{children:["The ",(0,l.jsx)(n.em,{children:"function"})," ",(0,l.jsx)(n.strong,{children:"slot-value"})," returns the ",(0,l.jsx)(n.em,{children:"value"})," of the ",(0,l.jsx)(n.em,{children:"slot"})," named ",(0,l.jsx)(n.em,{children:"slot-name"})," in the ",(0,l.jsx)(n.em,{children:"object"}),". If there is no ",(0,l.jsx)(n.em,{children:"slot"})," named ",(0,l.jsx)(n.em,{children:"slot-name"}),", ",(0,l.jsx)(n.strong,{children:"slot-missing"})," is called. If the ",(0,l.jsx)(n.em,{children:"slot"})," is unbound, ",(0,l.jsx)(n.strong,{children:"slot-unbound"})," is called."]}),"\n",(0,l.jsxs)(n.p,{children:["The macro ",(0,l.jsx)(n.strong,{children:"setf"})," can be used with ",(0,l.jsx)(n.strong,{children:"slot-value"})," to change the value of a ",(0,l.jsx)(n.em,{children:"slot"}),"."]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,l.jsx)(n.p,{children:"(defclass foo ()"}),"\n",(0,l.jsxs)(n.p,{children:["((a ",":accessor"," foo-a ",":initarg"," ",":a"," ",":initform"," 1)"]}),"\n",(0,l.jsxs)(n.p,{children:["(b ",":accessor"," foo-b ",":initarg"," ",":b",")"]}),"\n",(0,l.jsxs)(n.p,{children:["(c ",":accessor"," foo-c ",":initform"," 3)))"]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.em,{children:"\u2192"})," #<STANDARD-CLASS FOO 244020371>"]}),"\n",(0,l.jsxs)(n.p,{children:["(setq foo1 (make-instance \u2019foo ",":a"," \u2019one ",":b"," \u2019two))"]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.em,{children:"\u2192"})," #<FOO 36325624>"]}),"\n",(0,l.jsxs)(n.p,{children:["(slot-value foo1 \u2019a) ",(0,l.jsx)(n.em,{children:"\u2192"})," ONE"]}),"\n",(0,l.jsxs)(n.p,{children:["(slot-value foo1 \u2019b) ",(0,l.jsx)(n.em,{children:"\u2192"})," TWO"]}),"\n",(0,l.jsxs)(n.p,{children:["(slot-value foo1 \u2019c) ",(0,l.jsx)(n.em,{children:"\u2192"})," 3"]}),"\n",(0,l.jsxs)(n.p,{children:["(setf (slot-value foo1 \u2019a) \u2019uno) ",(0,l.jsx)(n.em,{children:"\u2192"})," UNO"]}),"\n",(0,l.jsxs)(n.p,{children:["(slot-value foo1 \u2019a) ",(0,l.jsx)(n.em,{children:"\u2192"})," UNO"]}),"\n",(0,l.jsx)(n.p,{children:"(defmethod foo-method ((x foo))"}),"\n",(0,l.jsx)(n.p,{children:"(slot-value x \u2019a))"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.em,{children:"\u2192"})," #<STANDARD-METHOD FOO-METHOD (FOO) 42720573>"]}),"\n",(0,l.jsxs)(n.p,{children:["(foo-method foo1) ",(0,l.jsx)(n.em,{children:"\u2192"})," UNO"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Exceptional Situations:"})}),"\n",(0,l.jsxs)(n.p,{children:["If an attempt is made to read a ",(0,l.jsx)(n.em,{children:"slot"})," and no ",(0,l.jsx)(n.em,{children:"slot"})," of the name ",(0,l.jsx)(n.em,{children:"slot-name"})," exists in the ",(0,l.jsx)(n.em,{children:"object"}),", ",(0,l.jsx)(n.strong,{children:"slot-missing"})," is called as follows:"]}),"\n",(0,l.jsxs)(n.p,{children:["(slot-missing (class-of ",(0,l.jsx)(n.em,{children:"instance"}),")"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.em,{children:"instance"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.em,{children:"slot-name"})}),"\n",(0,l.jsx)(n.p,{children:"\u2019slot-value)"}),"\n",(0,l.jsxs)(n.p,{children:["(If ",(0,l.jsx)(n.strong,{children:"slot-missing"})," is invoked, its ",(0,l.jsx)(n.em,{children:"primary value"})," is returned by ",(0,l.jsx)(n.strong,{children:"slot-value"}),".)"]}),"\n",(0,l.jsxs)(n.p,{children:["If an attempt is made to write a ",(0,l.jsx)(n.em,{children:"slot"})," and no ",(0,l.jsx)(n.em,{children:"slot"})," of the name ",(0,l.jsx)(n.em,{children:"slot-name"})," exists in the ",(0,l.jsx)(n.em,{children:"object"}),", ",(0,l.jsx)(n.strong,{children:"slot-missing"})," is called as follows:"]}),"\n",(0,l.jsxs)(n.p,{children:["(slot-missing (class-of ",(0,l.jsx)(n.em,{children:"instance"}),")"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.em,{children:"instance"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.em,{children:"slot-name"})}),"\n",(0,l.jsx)(n.p,{children:"\u2019setf"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.em,{children:"new-value"}),")"]}),"\n",(0,l.jsxs)(n.p,{children:["(If ",(0,l.jsx)(n.strong,{children:"slot-missing"})," returns in this case, any ",(0,l.jsx)(n.em,{children:"values"})," are ignored.)"]}),"\n",(0,l.jsxs)(n.p,{children:["The specific behavior depends on ",(0,l.jsx)(n.em,{children:"object"}),"\u2019s ",(0,l.jsx)(n.em,{children:"metaclass"}),". An error is never signaled if ",(0,l.jsx)(n.em,{children:"object"})," has ",(0,l.jsx)(n.em,{children:"metaclass"})," ",(0,l.jsx)(n.strong,{children:"standard-class"}),". An error is always signaled if ",(0,l.jsx)(n.em,{children:"object"})," has ",(0,l.jsx)(n.em,{children:"metaclass"})," ",(0,l.jsx)(n.strong,{children:"built-in-class"}),". The consequences are unspecified if ",(0,l.jsx)(n.em,{children:"object"})," has any other ",(0,l.jsx)(n.em,{children:"metaclass"}),"\u2013an error might or might not be signaled in this situation. Note in particular that the behavior for ",(0,l.jsx)(n.em,{children:"conditions"})," and ",(0,l.jsx)(n.em,{children:"structures"})," is not specified."]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"slot-missing"}),", ",(0,l.jsx)(n.strong,{children:"slot-unbound"}),", ",(0,l.jsx)(n.strong,{children:"with-slots"})]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,l.jsxs)(n.p,{children:["Although no ",(0,l.jsx)(n.em,{children:"implementation"})," is required to do so, implementors are strongly encouraged to implement the ",(0,l.jsx)(n.em,{children:"function"})," ",(0,l.jsx)(n.strong,{children:"slot-value"})," using the ",(0,l.jsx)(n.em,{children:"function"})," slot-value-using-class described in the ",(0,l.jsx)(n.em,{children:"Metaobject Protocol"}),"."]}),"\n",(0,l.jsxs)(n.p,{children:["Implementations may optimize ",(0,l.jsx)(n.strong,{children:"slot-value"})," by compiling it inline."]})]})}function t(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(r,{...e})}):r(e)}const c={},o="slot-value",d={id:"chap-7/h-h-dictionary/slotvalue",title:"slot-value",description:"Expanded Reference: slot-value",source:"@site/docs/chap-7/h-h-dictionary/slotvalue.md",sourceDirName:"chap-7/h-h-dictionary",slug:"/chap-7/h-h-dictionary/slotvalue",permalink:"/cl-language-reference/docs/chap-7/h-h-dictionary/slotvalue",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-7/h-h-dictionary/slotvalue.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"slot-unbound",permalink:"/cl-language-reference/docs/chap-7/h-h-dictionary/slotunbound"},next:{title:"update-instance-for-different-class",permalink:"/cl-language-reference/docs/chap-7/h-h-dictionary/updateinstancefordifferentclass"}},a={},h=[{value:"Expanded Reference: slot-value",id:"expanded-reference-slot-value",level:2}];function x(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"slot-value",children:"slot-value"}),"\n","\n","\n",(0,l.jsx)(t,{}),"\n",(0,l.jsx)(n.h2,{id:"expanded-reference-slot-value",children:"Expanded Reference: slot-value"}),"\n",(0,l.jsx)(n.admonition,{type:"tip",children:(0,l.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lisp",children:"(slot-value )\n"})})]})}function j(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(x,{...e})}):x(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>c,a:()=>t});var l=s(67294);const i={},r=l.createContext(i);function t(e){const n=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),l.createElement(r.Provider,{value:n},e.children)}}}]);