"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[37973],{31295:(e,r,i)=>{i.r(r),i.d(r,{assets:()=>h,contentTitle:()=>l,default:()=>o,frontMatter:()=>n,metadata:()=>c,toc:()=>d});var s=i(85893),t=i(11151);const n={title:"T",sidebar_position:116},l=void 0,c={id:"chap-26/t",title:"T",description:"T",source:"@site/docs/chap-26/t.md",sourceDirName:"chap-26",slug:"/chap-26/t",permalink:"/cl-language-reference/chap-26/t",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/main/docs/chap-26/t.md",tags:[],version:"current",lastUpdatedBy:"Daniel Nussenbaum",sidebarPosition:116,frontMatter:{title:"T",sidebar_position:116},sidebar:"tutorialSidebar",previous:{title:"S",permalink:"/cl-language-reference/chap-26/s"},next:{title:"U",permalink:"/cl-language-reference/chap-26/u"}},h={},d=[];function a(e){const r={em:"em",p:"p",strong:"strong",...(0,t.a)(),...e.components},{DictionaryLink:i,GlossaryTerm:n}=r;return i||j("DictionaryLink",!0),n||j("GlossaryTerm",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"T"})}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(i,{term:"t",children:(0,s.jsx)("b",{children:"t"})})," ",(0,s.jsx)(r.em,{children:"n."})," 1. a. the ",(0,s.jsx)(n,{term:"boolean",children:(0,s.jsx)("i",{children:"boolean"})})," representing true. b. the canonical ",(0,s.jsx)(n,{styled:!0,term:"generalized boolean",children:(0,s.jsx)("i",{children:"generalized boolean"})})]}),"\n",(0,s.jsxs)(r.p,{children:["representing true. (Although any ",(0,s.jsx)(n,{term:"object",children:(0,s.jsx)("i",{children:"object"})})," other than ",(0,s.jsx)(i,{term:"nil",children:(0,s.jsx)("b",{children:"nil"})})," is considered ",(0,s.jsx)(n,{term:"true",children:(0,s.jsx)("i",{children:"true"})})," as a"]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(n,{styled:!0,term:"generalized boolean",children:(0,s.jsx)("i",{children:"generalized boolean"})}),", t is generally used when there is no special reason to prefer one such ",(0,s.jsx)(n,{term:"object",children:(0,s.jsx)("i",{children:"object"})})," over another.) 2. the ",(0,s.jsx)(n,{term:"name",children:(0,s.jsx)("i",{children:"name"})})," of the ",(0,s.jsx)(n,{term:"type",children:(0,s.jsx)("i",{children:"type"})})," to which all ",(0,s.jsx)(n,{term:"object",children:(0,s.jsx)("i",{children:"objects"})})," belong\u2014the ",(0,s.jsx)(n,{term:"supertype",children:(0,s.jsx)("i",{children:"supertype"})})," of all ",(0,s.jsx)(n,{term:"type",children:(0,s.jsx)("i",{children:"types"})})," (including itself). 3. the ",(0,s.jsx)(n,{term:"name",children:(0,s.jsx)("i",{children:"name"})})," of the ",(0,s.jsx)(n,{term:"superclass",children:(0,s.jsx)("i",{children:"superclass"})})," of all ",(0,s.jsx)(r.em,{children:"classes"})," except itself."]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"tag"})," ",(0,s.jsx)(r.em,{children:"n."})," 1. a ",(0,s.jsx)(n,{styled:!0,term:"catch tag",children:(0,s.jsx)("i",{children:"catch tag"})}),". 2. a ",(0,s.jsx)(n,{styled:!0,term:"go tag",children:(0,s.jsx)("i",{children:"go tag"})}),"."]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"tail"})," ",(0,s.jsx)(r.em,{children:"n."})," (of a ",(0,s.jsx)(n,{term:"list",children:(0,s.jsx)("i",{children:"list"})}),") an ",(0,s.jsx)(n,{term:"object",children:(0,s.jsx)("i",{children:"object"})})," that is the ",(0,s.jsx)(n,{term:"same",children:(0,s.jsx)("i",{children:"same"})})," as either some ",(0,s.jsx)(n,{term:"cons",children:(0,s.jsx)("i",{children:"cons"})})," which makes up that ",(0,s.jsx)(n,{term:"list",children:(0,s.jsx)("i",{children:"list"})})," or the ",(0,s.jsx)(n,{term:"atom",children:(0,s.jsx)("i",{children:"atom"})})," (if any) which terminates the ",(0,s.jsx)(n,{term:"list",children:(0,s.jsx)("i",{children:"list"})}),". \u201cThe empty list is a tail of every proper list.\u201d"]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"target"})," ",(0,s.jsx)(r.em,{children:"n."})," 1. (of a ",(0,s.jsx)(n,{styled:!0,term:"constructed stream",children:(0,s.jsx)("i",{children:"constructed stream"})}),") a ",(0,s.jsx)(n,{term:"constituent",children:(0,s.jsx)("i",{children:"constituent"})})," of the ",(0,s.jsx)(n,{styled:!0,term:"constructed stream",children:(0,s.jsx)("i",{children:"constructed stream"})}),". \u201cThe target of a synonym stream is the value of its synonym stream symbol.\u201d 2. (of a ",(0,s.jsx)(n,{styled:!0,term:"displaced array",children:(0,s.jsx)("i",{children:"displaced array"})}),") the ",(0,s.jsx)(n,{term:"array",children:(0,s.jsx)("i",{children:"array"})})," to which the ",(0,s.jsx)(n,{styled:!0,term:"displaced array",children:(0,s.jsx)("i",{children:"displaced array"})})," is displaced. (In the case of a chain of ",(0,s.jsx)(n,{styled:!0,term:"constructed stream",children:(0,s.jsx)("i",{children:"constructed streams"})})," or ",(0,s.jsx)(n,{styled:!0,term:"displaced array",children:(0,s.jsx)("i",{children:"displaced arrays"})}),", the unqualified term \u201c",(0,s.jsx)(n,{term:"target",children:(0,s.jsx)("i",{children:"target"})}),"\u201d always refers to the immediate ",(0,s.jsx)(n,{term:"target",children:(0,s.jsx)("i",{children:"target"})})," of the first item in the chain, not the immediate target of the last item.)"]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"terminal I/O"})," ",(0,s.jsx)(r.em,{children:"n."})," the ",(0,s.jsx)(r.em,{children:"bidirectional stream"})," that is the ",(0,s.jsx)(n,{term:"value",children:(0,s.jsx)("i",{children:"value"})})," of the ",(0,s.jsx)(n,{term:"variable",children:(0,s.jsx)("i",{children:"variable"})})]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(i,{term:"terminal-io",children:(0,s.jsx)("b",{children:"*terminal-io*"})}),"."]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"terminating"})," ",(0,s.jsx)(r.em,{children:"n."})," (of a ",(0,s.jsx)(n,{styled:!0,term:"macro character",children:(0,s.jsx)("i",{children:"macro character"})})," ) being such that, if it appears while parsing a token, it terminates that token. See Section 2.2 (Reader Algorithm)."]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"tertiary value"})," ",(0,s.jsx)(r.em,{children:"n."})," (of ",(0,s.jsx)(n,{term:"value",children:(0,s.jsx)("i",{children:"values"})})," resulting from the ",(0,s.jsx)(n,{term:"evaluation",children:(0,s.jsx)("i",{children:"evaluation"})})," of a ",(0,s.jsx)(n,{term:"form",children:(0,s.jsx)("i",{children:"form"})}),") the third ",(0,s.jsx)(n,{term:"value",children:(0,s.jsx)("i",{children:"value"})}),", if any, or else ",(0,s.jsx)(i,{term:"nil",children:(0,s.jsx)("b",{children:"nil"})})," if there are fewer than three ",(0,s.jsx)(n,{term:"value",children:(0,s.jsx)("i",{children:"values"})}),"."]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(i,{term:"throw",children:(0,s.jsx)("b",{children:"throw"})})," ",(0,s.jsx)(r.em,{children:"v."})," to transfer control and ",(0,s.jsx)(n,{term:"value",children:(0,s.jsx)("i",{children:"values"})})," to a ",(0,s.jsx)(n,{term:"catch",children:(0,s.jsx)("i",{children:"catch"})}),". See the ",(0,s.jsx)(n,{styled:!0,term:"special operator",children:(0,s.jsx)("i",{children:"special operator"})})," ",(0,s.jsx)(i,{term:"throw",children:(0,s.jsx)("b",{children:"throw"})}),". ",(0,s.jsx)(r.strong,{children:"tilde"})," ",(0,s.jsx)(r.em,{children:"n."})," the ",(0,s.jsx)(n,{styled:!0,term:"standard character",children:(0,s.jsx)("i",{children:"standard character"})})," that is called \u201ctilde\u201d (~). See Figure 2\u20135."]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(i,{term:"time",children:(0,s.jsx)("b",{children:"time"})})," a representation of a point (",(0,s.jsx)(r.em,{children:"absolute time"}),") or an interval (",(0,s.jsx)(r.em,{children:"relative time"}),") on a time line. See ",(0,s.jsx)(n,{styled:!0,term:"decoded time",children:(0,s.jsx)("i",{children:"decoded time"})}),", ",(0,s.jsx)(n,{styled:!0,term:"internal time",children:(0,s.jsx)("i",{children:"internal time"})}),", and ",(0,s.jsx)(n,{styled:!0,term:"universal time",children:(0,s.jsx)("i",{children:"universal time"})}),"."]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"time zone"})," ",(0,s.jsx)(r.em,{children:"n."})," a ",(0,s.jsx)(n,{term:"rational",children:(0,s.jsx)("i",{children:"rational"})})," multiple of 1/3600 between -24 (inclusive) and 24 (inclusive) that represents a time zone as a number of hours offset from Greenwich Mean Time. Time zone values increase with motion to the west, so Massachusetts, U.S.A. is in time zone 5, California, U.S.A. is time zone 8, and Moscow, Russia is time zone ",(0,s.jsx)(r.em,{children:"-3"})," . (When \u201cdaylight savings time\u201d is separately represented as an ",(0,s.jsx)(n,{term:"argument",children:(0,s.jsx)("i",{children:"argument"})})," or ",(0,s.jsx)(n,{styled:!0,term:"return value",children:(0,s.jsx)("i",{children:"return value"})}),", the ",(0,s.jsx)(n,{styled:!0,term:"time zone",children:(0,s.jsx)("i",{children:"time zone"})})," that accompanies it does not depend on whether daylight savings time is in effect.)"]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"token"})," ",(0,s.jsx)(r.em,{children:"n."})," a textual representation for a ",(0,s.jsx)(n,{term:"number",children:(0,s.jsx)("i",{children:"number"})})," or a ",(0,s.jsx)(n,{term:"symbol",children:(0,s.jsx)("i",{children:"symbol"})}),". See Section 2.3"]}),"\n",(0,s.jsx)(r.p,{children:"(Interpretation of Tokens)."}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"top level form"})," ",(0,s.jsx)(r.em,{children:"n."})," a ",(0,s.jsx)(n,{term:"form",children:(0,s.jsx)("i",{children:"form"})})," which is processed specially by ",(0,s.jsx)(i,{term:"compile-file",children:(0,s.jsx)("b",{children:"compile-file"})})," for the purposes of enabling ",(0,s.jsx)(r.em,{children:"compile time evaluation"})," of that ",(0,s.jsx)(n,{term:"form",children:(0,s.jsx)("i",{children:"form"})}),". ",(0,s.jsx)(n,{styled:!0,term:"top level form",children:(0,s.jsx)("i",{children:"Top level forms"})})," include those ",(0,s.jsx)(n,{term:"form",children:(0,s.jsx)("i",{children:"forms"})})," which are not ",(0,s.jsx)(n,{term:"subform",children:(0,s.jsx)("i",{children:"subforms"})})," of any other ",(0,s.jsx)(n,{term:"form",children:(0,s.jsx)("i",{children:"form"})}),", and certain other cases. See Section 3.2.3.1 (Processing of Top Level Forms)."]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"trace output"})," ",(0,s.jsx)(r.em,{children:"n."})," the ",(0,s.jsx)(r.em,{children:"output stream"})," which is the ",(0,s.jsx)(n,{term:"value",children:(0,s.jsx)("i",{children:"value"})})," of the ",(0,s.jsx)(n,{styled:!0,term:"dynamic variable",children:(0,s.jsx)("i",{children:"dynamic variable"})})]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"*trace-output*"}),"."]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"tree"})," ",(0,s.jsx)(r.em,{children:"n."})," 1. a binary recursive data structure made up of ",(0,s.jsx)(r.em,{children:"conses"})," and ",(0,s.jsx)(n,{term:"atom",children:(0,s.jsx)("i",{children:"atoms"})}),": the ",(0,s.jsx)(r.em,{children:"conses"})," are themselves also ",(0,s.jsx)(n,{term:"tree",children:(0,s.jsx)("i",{children:"trees"})})," (sometimes called \u201csubtrees\u201d or \u201cbranches\u201d), and the ",(0,s.jsx)(n,{term:"atom",children:(0,s.jsx)("i",{children:"atoms"})})," are terminal nodes (sometimes called ",(0,s.jsx)(r.em,{children:"leaves"}),"). Typically, the ",(0,s.jsx)(r.em,{children:"leaves"})," represent data while the branches establish some relationship among that data. 2. in general, any recursive data structure that has some notion of \u201cbranches\u201d and ",(0,s.jsx)(r.em,{children:"leaves"}),"."]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)("b",{children:"tree structure"})," ",(0,s.jsx)("i",{children:"n."})," (of a ",(0,s.jsx)("i",{children:"tree"}),(0,s.jsx)("sub",{children:"1"}),") the set of ",(0,s.jsx)("i",{children:"conses"})," that make up the ",(0,s.jsx)("i",{children:"tree"}),". Note that while the ",(0,s.jsx)("i",{children:"car"})," ",(0,s.jsxs)("sub",{children:["1",(0,s.jsx)("i",{children:"b"})]})," component of each such ",(0,s.jsx)("i",{children:"cons"})," is part of the ",(0,s.jsx)("i",{children:"tree structure"}),", the ",(0,s.jsx)("i",{children:"objects"})," that are the ",(0,s.jsx)("i",{children:"cars"}),(0,s.jsx)("sub",{children:"2"})," of each ",(0,s.jsx)("i",{children:"cons"})," in the ",(0,s.jsx)("i",{children:"tree"})," are not themselves part of its ",(0,s.jsx)("i",{children:"tree structure"})," unless they are also ",(0,s.jsx)("i",{children:"conses"}),"."]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"true"})," ",(0,s.jsx)(r.em,{children:"n."})," any ",(0,s.jsx)(n,{term:"object",children:(0,s.jsx)("i",{children:"object"})})," that is not ",(0,s.jsx)(n,{term:"false",children:(0,s.jsx)("i",{children:"false"})})," and that is used to represent the success of a ",(0,s.jsx)(n,{term:"predicate",children:(0,s.jsx)("i",{children:"predicate"})})," test. See ",(0,s.jsx)(n,{term:"t",children:(0,s.jsx)("i",{children:"t"})}),(0,s.jsx)("sub",{children:"1"}),"."]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(i,{term:"truename",children:(0,s.jsx)("b",{children:"truename"})})," ",(0,s.jsx)(r.em,{children:"n."})," 1. the canonical ",(0,s.jsx)(n,{term:"filename",children:(0,s.jsx)("i",{children:"filename"})})," of a ",(0,s.jsx)(n,{term:"file",children:(0,s.jsx)("i",{children:"file"})})," in the ",(0,s.jsx)(n,{styled:!0,term:"file system",children:(0,s.jsx)("i",{children:"file system"})}),". See Section 20.1.3 (Truenames). 2. a ",(0,s.jsx)(n,{term:"pathname",children:(0,s.jsx)("i",{children:"pathname"})})," representing a ",(0,s.jsx)(n,{term:"truename",children:(0,s.jsx)("i",{children:"truename"})}),(0,s.jsx)("sub",{children:"1"}),"."]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"two-way stream"})," ",(0,s.jsx)(r.em,{children:"n."})," a ",(0,s.jsx)(n,{term:"stream",children:(0,s.jsx)("i",{children:"stream"})})," of ",(0,s.jsx)(n,{term:"type",children:(0,s.jsx)("i",{children:"type"})})," ",(0,s.jsx)(i,{term:"two-way-stream",children:(0,s.jsx)("b",{children:"two-way-stream"})}),", which is a ",(0,s.jsx)(n,{term:"bidirectional",children:(0,s.jsx)("i",{children:"bidirectional"})})]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(n,{styled:!0,term:"composite stream",children:(0,s.jsx)("i",{children:"composite stream"})})," that receives its input from an associated ",(0,s.jsx)(r.em,{children:"input stream"})," and sends its output to an associated ",(0,s.jsx)(r.em,{children:"output stream"}),"."]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)("b",{children:"type"})," ",(0,s.jsx)("i",{children:"n."})," 1. a set of ",(0,s.jsx)("i",{children:"objects"}),", usually with common structure, behavior, or purpose. (Note that the expression \u201c",(0,s.jsx)("i",{children:"X"})," is of type ",(0,s.jsxs)("i",{children:["S",(0,s.jsx)("sub",{children:"a"})]}),"\u201d naturally implies that \u201c",(0,s.jsx)("i",{children:"X"})," is of type ",(0,s.jsxs)("i",{children:["S",(0,s.jsx)("sub",{children:"b"})]}),"\u201d if ",(0,s.jsxs)("i",{children:["S",(0,s.jsx)("sub",{children:"a"})]})," is a ",(0,s.jsx)("i",{children:"subtype"})," of ",(0,s.jsxs)("i",{children:["S",(0,s.jsx)("sub",{children:"b"})]}),".) 2. (immediately following the name of a ",(0,s.jsx)("i",{children:"type"}),") a ",(0,s.jsx)("i",{children:"subtype"})," of that ",(0,s.jsx)("i",{children:"type"}),". \u201cThe type ",(0,s.jsx)("b",{children:"vector"})," is an array type.\u201d"]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"type declaration"})," ",(0,s.jsx)(r.em,{children:"n."})," a ",(0,s.jsx)(n,{term:"declaration",children:(0,s.jsx)("i",{children:"declaration"})})," that asserts that every reference to a specified ",(0,s.jsx)(n,{term:"binding",children:(0,s.jsx)("i",{children:"binding"})})," within the scope of the ",(0,s.jsx)(n,{term:"declaration",children:(0,s.jsx)("i",{children:"declaration"})})," results in some ",(0,s.jsx)(n,{term:"object",children:(0,s.jsx)("i",{children:"object"})})," of the specified ",(0,s.jsx)(n,{term:"type",children:(0,s.jsx)("i",{children:"type"})}),"."]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"type equivalent"})," ",(0,s.jsx)(r.em,{children:"adj."})," (of two ",(0,s.jsx)(r.em,{children:"types X"})," and ",(0,s.jsx)(r.em,{children:"Y"})," ) having the same ",(0,s.jsx)(n,{term:"element",children:(0,s.jsx)("i",{children:"elements"})}),"; that is, ",(0,s.jsx)(r.em,{children:"X"})," is a ",(0,s.jsx)(n,{term:"subtype",children:(0,s.jsx)("i",{children:"subtype"})})," of ",(0,s.jsx)(r.em,{children:"Y"})," and ",(0,s.jsx)(r.em,{children:"Y"})," is a ",(0,s.jsx)(n,{term:"subtype",children:(0,s.jsx)("i",{children:"subtype"})})," of ",(0,s.jsx)(r.em,{children:"X"}),"."]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"type expand"})," ",(0,s.jsx)(r.em,{children:"n."})," to fully expand a ",(0,s.jsx)(n,{styled:!0,term:"type specifier",children:(0,s.jsx)("i",{children:"type specifier"})})," , removing any references to ",(0,s.jsx)(n,{styled:!0,term:"derived type",children:(0,s.jsx)("i",{children:"derived types"})}),". (Common Lisp provides no program interface to cause this to occur, but the semantics of Common Lisp are such that every ",(0,s.jsx)(n,{term:"implementation",children:(0,s.jsx)("i",{children:"implementation"})})," must be able to do"]}),"\n",(0,s.jsxs)(r.p,{children:["this internally, and some situations involving ",(0,s.jsx)(n,{styled:!0,term:"type specifier",children:(0,s.jsx)("i",{children:"type specifiers"})})," are most easily described in terms of a fully expanded ",(0,s.jsx)(n,{styled:!0,term:"type specifier",children:(0,s.jsx)("i",{children:"type specifier"})})," .)"]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"type specifier"})," ",(0,s.jsx)(r.em,{children:"n."})," an ",(0,s.jsx)(n,{term:"expression",children:(0,s.jsx)("i",{children:"expression"})})," that denotes a ",(0,s.jsx)(n,{term:"type",children:(0,s.jsx)("i",{children:"type"})}),". \u201cThe symbol random-state, the list (integer 3 5), the list (and list (not null)), and the class named standard-class are type specifiers.\u201d"]})]})}function o(e={}){const{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}function j(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(e,r,i)=>{i.d(r,{Z:()=>c,a:()=>l});var s=i(67294);const t={},n=s.createContext(t);function l(e){const r=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(n.Provider,{value:r},e.children)}}}]);