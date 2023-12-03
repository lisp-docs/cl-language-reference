"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[28647],{12475:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>h,metadata:()=>a,toc:()=>o});var i=s(85893),r=s(11151);function c(e){const n={del:"del",em:"em",p:"p",strong:"strong",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"with-accessors"})," ",(0,i.jsx)(n.em,{children:"Macro"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"with-accessors"})," (",(0,i.jsx)(n.em,{children:"{slot-entry}"}),"*) ",(0,i.jsx)(n.em,{children:"instance-form {declaration}"}),"* ",(0,i.jsx)(n.em,{children:"{form}"}),"*"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"\u2192 {result}"}),"*"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"slot-entry::"}),"=(",(0,i.jsx)(n.em,{children:"variable-name accessor-name"}),")"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"variable-name"}),"\u2014a ",(0,i.jsx)(n.em,{children:"variable name"}),"; not evaluated."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"accessor-name"}),"\u2014a ",(0,i.jsx)(n.em,{children:"function name"}),"; not evaluated."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"instance-form"}),"\u2014a ",(0,i.jsx)(n.em,{children:"form"}),"; evaluated."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"declaration"}),"\u2014a ",(0,i.jsx)(n.strong,{children:"declare"})," ",(0,i.jsx)(n.em,{children:"expression"}),"; not evaluated."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"forms"}),"\u2014an ",(0,i.jsx)(n.em,{children:"implicit progn"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"results"}),"\u2014the ",(0,i.jsx)(n.em,{children:"values"})," returned by the ",(0,i.jsx)(n.em,{children:"forms"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Description:"})}),"\n",(0,i.jsxs)(n.p,{children:["Creates a lexical environment in which the slots specified by ",(0,i.jsx)(n.em,{children:"slot-entry"})," are lexically available through their accessors as if they were variables. The macro ",(0,i.jsx)(n.strong,{children:"with-accessors"})," invokes the appropriate accessors to ",(0,i.jsx)(n.em,{children:"access"})," the ",(0,i.jsx)(n.em,{children:"slots"})," specified by ",(0,i.jsx)(n.em,{children:"slot-entry"}),". Both ",(0,i.jsx)(n.strong,{children:"setf"})," and ",(0,i.jsx)(n.strong,{children:"setq"})," can be used to set the value of the ",(0,i.jsx)(n.em,{children:"slot"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"with-accessors"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,i.jsx)(n.p,{children:"(defclass thing ()"}),"\n",(0,i.jsxs)(n.p,{children:["((x ",":initarg"," ",":x"," ",":accessor"," thing-x)"]}),"\n",(0,i.jsxs)(n.p,{children:["(y ",":initarg"," ",":y"," ",":accessor"," thing-y)))"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"\u2192"})," #<STANDARD-CLASS THING 250020173>"]}),"\n",(0,i.jsxs)(n.p,{children:["(defmethod (setf thing-x) ",":before"," (new-x (thing thing))"]}),"\n",(0,i.jsxs)(n.p,{children:['(format t "~&Changing X from ~D to ~D in ',(0,i.jsx)(n.del,{children:"S."}),'%"']}),"\n",(0,i.jsx)(n.p,{children:"(thing-x thing) new-x thing))"}),"\n",(0,i.jsxs)(n.p,{children:["(setq thing1 (make-instance \u2019thing ",":x"," 1 ",":y"," 2)) ",(0,i.jsx)(n.em,{children:"\u2192"})," #<THING 43135676>"]}),"\n",(0,i.jsxs)(n.p,{children:["(setq thing2 (make-instance \u2019thing ",":x"," 7 ",":y"," 8)) ",(0,i.jsx)(n.em,{children:"\u2192"})," #<THING 43147374>"]}),"\n",(0,i.jsx)(n.p,{children:"(with-accessors ((x1 thing-x) (y1 thing-y))"}),"\n",(0,i.jsx)(n.p,{children:"thing1"}),"\n",(0,i.jsx)(n.p,{children:"(with-accessors ((x2 thing-x) (y2 thing-y))"}),"\n",(0,i.jsx)(n.p,{children:"thing2"}),"\n",(0,i.jsx)(n.p,{children:"(list (list x1 (thing-x thing1) y1 (thing-y thing1)"}),"\n",(0,i.jsx)(n.p,{children:"x2 (thing-x thing2) y2 (thing-y thing2))"}),"\n",(0,i.jsx)(n.p,{children:"(setq x1 (+ y1 x2))"}),"\n",(0,i.jsx)(n.p,{children:"(list x1 (thing-x thing1) y1 (thing-y thing1)"}),"\n",(0,i.jsx)(n.p,{children:"x2 (thing-x thing2) y2 (thing-y thing2))"}),"\n",(0,i.jsx)(n.p,{children:"(setf (thing-x thing2) (list x1))"}),"\n",(0,i.jsx)(n.p,{children:"(list x1 (thing-x thing1) y1 (thing-y thing1)"}),"\n",(0,i.jsx)(n.p,{children:"x2 (thing-x thing2) y2 (thing-y thing2)))))"}),"\n",(0,i.jsx)(n.p,{children:"\u25b7 Changing X from 1 to 9 in #<THING 43135676>."}),"\n",(0,i.jsx)(n.p,{children:"\u25b7 Changing X from 7 to (9) in #<THING 43147374>."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"\u2192"})," ((1 1 2 2 7 7 8 8)"]}),"\n",(0,i.jsx)(n.p,{children:"9"}),"\n",(0,i.jsx)(n.p,{children:"(9 9 2 2 7 7 8 8)"}),"\n",(0,i.jsx)(n.p,{children:"(9)"}),"\n",(0,i.jsx)(n.p,{children:"(9 9 2 2 (9) (9) 8 8))"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Affected By:"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"defclass"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Exceptional Situations:"})}),"\n",(0,i.jsxs)(n.p,{children:["The consequences are undefined if any ",(0,i.jsx)(n.em,{children:"accessor-name"})," is not the name of an accessor for the ",(0,i.jsx)(n.em,{children:"instance"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"with-slots"}),", ",(0,i.jsx)(n.strong,{children:"symbol-macrolet"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,i.jsxs)(n.p,{children:["A ",(0,i.jsx)(n.strong,{children:"with-accessors"})," expression of the form:"]}),"\n",(0,i.jsx)(n.p,{children:"(with-accessors (<i>slot-entry</i><sub>1</sub><i>. . . slot-entry<sub>n</sub></i>) <i>instance-form form</i><sub>1</sub><i>. . . form<sub>k</sub></i>)"}),"\n",(0,i.jsx)(n.p,{children:"expands into the equivalent of"}),"\n",(0,i.jsxs)(n.p,{children:["(let ((",(0,i.jsx)(n.em,{children:"in instance-form"}),"))"]}),"\n",(0,i.jsx)(n.p,{children:"(symbol-macrolet (<i>Q</i><sub>1</sub><i>. . . Q<sub>n</sub></i>) <i>form</i><sub>1</sub><i>. . . form<sub>k</sub></i>))"}),"\n",(0,i.jsx)(n.p,{children:"where <i>Q<sub>i</sub></i>is"}),"\n",(0,i.jsx)(n.p,{children:"(<i>variable-name<sub>i</sub></i> () (<i>accessor-name<sub>i</sub> in</i>))"})]})}function t(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}const h={},l="with-accessors",a={id:"chap-7/h-h-dictionary/withaccessors",title:"with-accessors",description:"Expanded Reference: with-accessors",source:"@site/docs/chap-7/h-h-dictionary/withaccessors.md",sourceDirName:"chap-7/h-h-dictionary",slug:"/chap-7/h-h-dictionary/withaccessors",permalink:"/cl-language-reference/docs/chap-7/h-h-dictionary/withaccessors",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-7/h-h-dictionary/withaccessors.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"update-instance-for-redefined-class",permalink:"/cl-language-reference/docs/chap-7/h-h-dictionary/updateinstanceforredefinedclass"},next:{title:"with-slots",permalink:"/cl-language-reference/docs/chap-7/h-h-dictionary/withslots"}},d={},o=[{value:"Expanded Reference: with-accessors",id:"expanded-reference-with-accessors",level:2}];function x(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"with-accessors",children:"with-accessors"}),"\n","\n","\n",(0,i.jsx)(t,{}),"\n",(0,i.jsx)(n.h2,{id:"expanded-reference-with-accessors",children:"Expanded Reference: with-accessors"}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lisp",children:"(with-accessors )\n"})})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(x,{...e})}):x(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>h,a:()=>t});var i=s(67294);const r={},c=i.createContext(r);function t(e){const n=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function h(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),i.createElement(c.Provider,{value:n},e.children)}}}]);