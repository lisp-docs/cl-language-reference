"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[18426],{43860:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>a,frontMatter:()=>t,metadata:()=>l,toc:()=>h});var s=i(85893),r=i(11151);const t={title:"F",sidebar_position:102},c=void 0,l={id:"chap-26/f",title:"F",description:"F",source:"@site/docs/chap-26/f.md",sourceDirName:"chap-26",slug:"/chap-26/f",permalink:"/cl-language-reference/docs/chap-26/f",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-26/f.md",tags:[],version:"current",sidebarPosition:102,frontMatter:{title:"F",sidebar_position:102},sidebar:"tutorialSidebar",previous:{title:"E",permalink:"/cl-language-reference/docs/chap-26/e"},next:{title:"G",permalink:"/cl-language-reference/docs/chap-26/g"}},o={},h=[];function d(e){const n={em:"em",p:"p",strong:"strong",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"F"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"false"})," ",(0,s.jsx)(n.em,{children:"n."})," the ",(0,s.jsx)(n.em,{children:"symbol"})," ",(0,s.jsx)(n.strong,{children:"nil"}),", used to represent the failure of a ",(0,s.jsx)(n.em,{children:"predicate"})," test."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"fbound"})," [ ",(0,s.jsx)(n.strong,{children:"ef ba_und"})," ] ",(0,s.jsx)(n.em,{children:"adj."})," (of a ",(0,s.jsx)(n.em,{children:"function name"}),") ",(0,s.jsx)(n.em,{children:"bound"})," in the ",(0,s.jsx)(n.em,{children:"function namespace"}),". (The ",(0,s.jsx)(n.em,{children:"names"})," of ",(0,s.jsx)(n.em,{children:"macros"})," and ",(0,s.jsx)(n.em,{children:"special operators"})," are ",(0,s.jsx)(n.em,{children:"fbound"}),", but the nature and ",(0,s.jsx)(n.em,{children:"type"})," of the ",(0,s.jsx)(n.em,{children:"object"})," which is their ",(0,s.jsx)(n.em,{children:"value"})," is ",(0,s.jsx)(n.em,{children:"implementation-dependent"}),". Further, defining a ",(0,s.jsx)(n.em,{children:"setf expander F"})," does not cause the ",(0,s.jsx)(n.em,{children:"setf function"})," (setf ",(0,s.jsx)(n.em,{children:"F"}),") to become defined; as such, if there is a such a definition of a ",(0,s.jsx)(n.em,{children:"setf expander F"}),", the ",(0,s.jsx)(n.em,{children:"function"})," (setf ",(0,s.jsx)(n.em,{children:"F"}),") can be ",(0,s.jsx)(n.em,{children:"fbound"})," if and only if, by design or coincidence, a function binding for (setf ",(0,s.jsx)(n.em,{children:"F"}),") has been independently established.) See the ",(0,s.jsx)(n.em,{children:"functions"})," ",(0,s.jsx)(n.strong,{children:"fboundp"})," and ",(0,s.jsx)(n.strong,{children:"symbol-function"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"feature"})," ",(0,s.jsx)(n.em,{children:"n."})," 1. an aspect or attribute of Common Lisp, of the ",(0,s.jsx)(n.em,{children:"implementation"}),", or of the ",(0,s.jsx)(n.em,{children:"environment"}),". 2. a ",(0,s.jsx)(n.em,{children:"symbol"})," that names a ",(0,s.jsx)(n.em,{children:"feature"}),(0,s.jsx)("sub",{children:"1"}),'. See Section 24.1.2 (Features). "The ',":ansi-cl",' feature is present in all conforming implementations."']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"feature expression"})," ",(0,s.jsx)(n.em,{children:"n."})," A boolean combination of ",(0,s.jsx)(n.em,{children:"features"})," used by the #+ and #- ",(0,s.jsx)(n.em,{children:"reader macros"})," in order to direct conditional ",(0,s.jsx)(n.em,{children:"reading"})," of ",(0,s.jsx)(n.em,{children:"expressions"})," by the ",(0,s.jsx)(n.em,{children:"Lisp reader"})," . See Section 24.1.2.1 (Feature Expressions)."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"features list"})," ",(0,s.jsx)(n.em,{children:"n."})," the ",(0,s.jsx)(n.em,{children:"list"})," that is the ",(0,s.jsx)(n.em,{children:"value"})," of ",(0,s.jsx)(n.strong,{children:"*features*"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"file"})," ",(0,s.jsx)(n.em,{children:"n."})," a named entry in a ",(0,s.jsx)(n.em,{children:"file system"}),", having an ",(0,s.jsx)(n.em,{children:"implementation-defined"})," nature."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"file compiler"})," ",(0,s.jsx)(n.em,{children:"n."})," any ",(0,s.jsx)(n.em,{children:"compiler"})," which ",(0,s.jsx)(n.em,{children:"compiles source code"})," contained in a ",(0,s.jsx)(n.em,{children:"file"}),", producing a ",(0,s.jsx)(n.em,{children:"compiled file"})," as output. The ",(0,s.jsx)(n.strong,{children:"compile-file"})," function is the only interface to such a ",(0,s.jsx)(n.em,{children:"compiler"})," provided by Common Lisp, but there might be other, ",(0,s.jsx)(n.em,{children:"implementation-defined"})," mechanisms for invoking the ",(0,s.jsx)(n.em,{children:"file compiler"})," ."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"file position"})," ",(0,s.jsx)(n.em,{children:"n."})," (in a ",(0,s.jsx)(n.em,{children:"stream"}),") a non-negative ",(0,s.jsx)(n.em,{children:"integer"})," that represents a position in the ",(0,s.jsx)(n.em,{children:"stream"}),". Not all ",(0,s.jsx)(n.em,{children:"streams"})," are able to represent the notion of ",(0,s.jsx)(n.em,{children:"file position"}),"; in the description of any ",(0,s.jsx)(n.em,{children:"operator"})," which manipulates ",(0,s.jsx)(n.em,{children:"file positions"}),", the behavior for ",(0,s.jsx)(n.em,{children:"streams"})," that don\u2019t have this notion must be explicitly stated. For ",(0,s.jsx)(n.em,{children:"binary streams"}),", the ",(0,s.jsx)(n.em,{children:"file position"})," represents the number of preceding ",(0,s.jsx)(n.em,{children:"bytes"})," in the ",(0,s.jsx)(n.em,{children:"stream"}),". For ",(0,s.jsx)(n.em,{children:"character streams"}),", the constraint is more relaxed: ",(0,s.jsx)(n.em,{children:"file positions"})," must increase monotonically, the amount of the increase between ",(0,s.jsx)(n.em,{children:"file positions"})," corresponding to any two successive characters in the ",(0,s.jsx)(n.em,{children:"stream"})," is ",(0,s.jsx)(n.em,{children:"implementation-dependent"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"file position designator"})," ",(0,s.jsx)(n.em,{children:"n."})," (in a ",(0,s.jsx)(n.em,{children:"stream"}),") a ",(0,s.jsx)(n.em,{children:"designator"})," for a ",(0,s.jsx)(n.em,{children:"file position"})," in that ",(0,s.jsx)(n.em,{children:"stream"}),"; that is, the symbol ",":start"," (denoting 0, the first ",(0,s.jsx)(n.em,{children:"file position"})," in that ",(0,s.jsx)(n.em,{children:"stream"}),"), the symbol ",":end"," (denoting the last ",(0,s.jsx)(n.em,{children:"file position"})," in that ",(0,s.jsx)(n.em,{children:"stream"}),"; ",(0,s.jsx)(n.em,{children:"i.e."}),", the position following the last ",(0,s.jsx)(n.em,{children:"element"})," of the ",(0,s.jsx)(n.em,{children:"stream"}),"), or a ",(0,s.jsx)(n.em,{children:"file position"})," (denoting itself)."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"file stream"})," ",(0,s.jsx)(n.em,{children:"n."})," an ",(0,s.jsx)(n.em,{children:"object"})," of ",(0,s.jsx)(n.em,{children:"type"})," ",(0,s.jsx)(n.strong,{children:"file-stream"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"file system"})," ",(0,s.jsx)(n.em,{children:"n."})," a facility which permits aggregations of data to be stored in named ",(0,s.jsx)(n.em,{children:"files"})," on some medium that is external to the ",(0,s.jsx)(n.em,{children:"Lisp image"})," and that therefore persists from ",(0,s.jsx)(n.em,{children:"session"})," to ",(0,s.jsx)(n.em,{children:"session"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"filename"})," ",(0,s.jsx)(n.em,{children:"n."})," a handle, not necessarily ever directly represented as an ",(0,s.jsx)(n.em,{children:"object"}),", that can be used to refer to a ",(0,s.jsx)(n.em,{children:"file"})," in a ",(0,s.jsx)(n.em,{children:"file system"}),". ",(0,s.jsx)(n.em,{children:"Pathnames"})," and ",(0,s.jsx)(n.em,{children:"namestrings"})," are two kinds of ",(0,s.jsx)(n.em,{children:"objects"})," that substitute for ",(0,s.jsx)(n.em,{children:"filenames"})," in Common Lisp."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"fill pointer"})," ",(0,s.jsx)(n.em,{children:"n."})," (of a ",(0,s.jsx)(n.em,{children:"vector"})," ) an ",(0,s.jsx)(n.em,{children:"integer"})," associated with a ",(0,s.jsx)(n.em,{children:"vector"})," that represents the index above which no ",(0,s.jsx)(n.em,{children:"elements"})," are ",(0,s.jsx)(n.em,{children:"active"}),". (A ",(0,s.jsx)(n.em,{children:"fill pointer"})," is a non-negative ",(0,s.jsx)(n.em,{children:"integer"})," no larger than the total number of ",(0,s.jsx)(n.em,{children:"elements"})," in the ",(0,s.jsx)(n.em,{children:"vector"})," . Not all ",(0,s.jsx)(n.em,{children:"vectors"})," have ",(0,s.jsx)(n.em,{children:"fill pointers"}),".)"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"finite"})," ",(0,s.jsx)(n.em,{children:"adj."})," (of a ",(0,s.jsx)(n.em,{children:"type"}),") having a finite number of ",(0,s.jsx)(n.em,{children:"elements"}),'. "The type specifier  (integer 0 5) denotes a finite type, but the type specifiers ',(0,s.jsx)(n.strong,{children:"integer"}),' and (integer 0) do not."']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"fixnum"})," ",(0,s.jsx)(n.em,{children:"n."})," an ",(0,s.jsx)(n.em,{children:"integer"})," of ",(0,s.jsx)(n.em,{children:"type"})," ",(0,s.jsx)(n.strong,{children:"fixnum"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"float"})," ",(0,s.jsx)(n.em,{children:"n."})," an ",(0,s.jsx)(n.em,{children:"object"})," of ",(0,s.jsx)(n.em,{children:"type"})," ",(0,s.jsx)(n.strong,{children:"float"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"for-value"})," ",(0,s.jsx)(n.em,{children:"adj."})," (of a ",(0,s.jsx)(n.em,{children:"reference"})," to a ",(0,s.jsx)(n.em,{children:"binding"}),") being a ",(0,s.jsx)(n.em,{children:"reference"})," that ",(0,s.jsx)(n.em,{children:"reads"}),(0,s.jsx)("sub",{children:"1"})," the ",(0,s.jsx)(n.em,{children:"value"})," of the ",(0,s.jsx)(n.em,{children:"binding"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"form"})," ",(0,s.jsx)(n.em,{children:"n."})," 1. any ",(0,s.jsx)(n.em,{children:"object"})," meant to be ",(0,s.jsx)(n.em,{children:"evaluated"}),". 2. a ",(0,s.jsx)(n.em,{children:"symbol"}),", a ",(0,s.jsx)(n.em,{children:"compound form"}),", or a ",(0,s.jsx)(n.em,{children:"self-evaluating object"}),". 3. (for an ",(0,s.jsx)(n.em,{children:"operator"}),' , as in "\u27e8operator ii form*") a ',(0,s.jsx)(n.em,{children:"compound form"})," having that ",(0,s.jsx)(n.em,{children:"operator"}),' as its first element. "A ',(0,s.jsx)(n.strong,{children:"quote"}),' form is a constant form."']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"formal argument"})," ",(0,s.jsx)(n.em,{children:"n. Trad."})," a ",(0,s.jsx)(n.em,{children:"parameter"})," ."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"formal parameter"})," ",(0,s.jsx)(n.em,{children:"n. Trad."})," a ",(0,s.jsx)(n.em,{children:"parameter"})," ."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"format"})," ",(0,s.jsx)(n.em,{children:"v.t."})," (a ",(0,s.jsx)(n.em,{children:"format control"})," and ",(0,s.jsx)(n.em,{children:"format arguments"}),") to perform output as if by ",(0,s.jsx)(n.strong,{children:"format"}),", using the ",(0,s.jsx)(n.em,{children:"format string"})," and ",(0,s.jsx)(n.em,{children:"format arguments"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"format argument"})," ",(0,s.jsx)(n.em,{children:"n."})," an ",(0,s.jsx)(n.em,{children:"object"})," which is used as data by functions such as ",(0,s.jsx)(n.strong,{children:"format"})," which interpret ",(0,s.jsx)(n.em,{children:"format controls"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"format control"})," ",(0,s.jsx)(n.em,{children:"n."})," a ",(0,s.jsx)(n.em,{children:"format string"}),", or a ",(0,s.jsx)(n.em,{children:"function"})," that obeys the ",(0,s.jsx)(n.em,{children:"argument"})," conventions for a ",(0,s.jsx)(n.em,{children:"function"})," returned by the ",(0,s.jsx)(n.strong,{children:"formatter"})," ",(0,s.jsx)(n.em,{children:"macro"}),". See Section 22.2.1.3 (Compiling Format Strings)."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"format directive"})," ",(0,s.jsx)(n.em,{children:"n."})," 1. a sequence of ",(0,s.jsx)(n.em,{children:"characters"})," in a ",(0,s.jsx)(n.em,{children:"format string"})," which is introduced by a ",(0,s.jsx)(n.em,{children:"tilde"}),", and which is specially interpreted by ",(0,s.jsx)(n.em,{children:"code"})," which processes ",(0,s.jsx)(n.em,{children:"format strings"})," to mean that some special operation should be performed, possibly involving data supplied by the ",(0,s.jsx)(n.em,{children:"format arguments"})," that accompanied the ",(0,s.jsx)(n.em,{children:"format string"}),". See the  ",(0,s.jsx)(n.em,{children:"function"})," ",(0,s.jsx)(n.strong,{children:"format"}),'. "In "~D base 10 = ~8R", the character sequences \u2018~D\u2019 and \u2018~8R\u2019 are format directives." 2. the conceptual category of all ',(0,s.jsx)(n.em,{children:"format directives"}),(0,s.jsx)("sub",{children:"1"}),' which use the same dispatch character. "Both "~3d" and "~3,\u20190D" are valid uses of the \u2018~D\u2019 format directive."']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"format string"})," ",(0,s.jsx)(n.em,{children:"n."})," a ",(0,s.jsx)(n.em,{children:"string"})," which can contain both ordinary text and ",(0,s.jsx)(n.em,{children:"format directives"}),", and which is used in conjunction with ",(0,s.jsx)(n.em,{children:"format arguments"})," to describe how text output should be formatted by certain functions, such as ",(0,s.jsx)(n.strong,{children:"format"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"free declaration"})," ",(0,s.jsx)(n.em,{children:"n."})," a declaration that is not a ",(0,s.jsx)(n.em,{children:"bound declaration"}),". See ",(0,s.jsx)(n.strong,{children:"declare"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"fresh"})," ",(0,s.jsx)(n.em,{children:"adj."})," 1. (of an ",(0,s.jsx)(n.em,{children:"object yielded"})," by a ",(0,s.jsx)(n.em,{children:"function"}),") having been newly-allocated by that ",(0,s.jsx)(n.em,{children:"function"}),". (The caller of a ",(0,s.jsx)(n.em,{children:"function"})," that returns a ",(0,s.jsx)(n.em,{children:"fresh object"})," may freely modify the ",(0,s.jsx)(n.em,{children:"object"})," without fear that such modification will compromise the future correct behavior of that ",(0,s.jsx)(n.em,{children:"function"}),".) 2. (of a ",(0,s.jsx)(n.em,{children:"binding"})," for a ",(0,s.jsx)(n.em,{children:"name"}),") newly-allocated; not shared with other ",(0,s.jsx)(n.em,{children:"bindings"})," for that ",(0,s.jsx)(n.em,{children:"name"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"freshline"})," ",(0,s.jsx)(n.em,{children:"n."})," a conceptual operation on a ",(0,s.jsx)(n.em,{children:"stream"}),", implemented by the ",(0,s.jsx)(n.em,{children:"function"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"fresh-line"})," and by the ",(0,s.jsx)(n.em,{children:"format directive"})," ~&, which advances the display position to the beginning of the next line (as if a ",(0,s.jsx)(n.em,{children:"newline"})," had been typed, or the ",(0,s.jsx)(n.em,{children:"function"})," ",(0,s.jsx)(n.strong,{children:"terpri"})," had been called) unless the ",(0,s.jsx)(n.em,{children:"stream"})," is already known to be positioned at the beginning of a line. Unlike ",(0,s.jsx)(n.em,{children:"newline"}),", ",(0,s.jsx)(n.em,{children:"freshline"})," is not a ",(0,s.jsx)(n.em,{children:"character"})," ."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"funbound"})," [ ",(0,s.jsx)(n.strong,{children:"efunba_und"})," ] ",(0,s.jsx)(n.em,{children:"n."})," (of a ",(0,s.jsx)(n.em,{children:"function name"}),") not ",(0,s.jsx)(n.em,{children:"fbound"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"function"})," ",(0,s.jsx)(n.em,{children:"n."})," 1. an ",(0,s.jsx)(n.em,{children:"object"})," representing code, which can be ",(0,s.jsx)(n.em,{children:"called"})," with zero or more ",(0,s.jsx)(n.em,{children:"arguments"}),", and which produces zero or more ",(0,s.jsx)(n.em,{children:"values"}),". 2. an ",(0,s.jsx)(n.em,{children:"object"})," of ",(0,s.jsx)(n.em,{children:"type"})," ",(0,s.jsx)(n.strong,{children:"function"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"function block name"})," ",(0,s.jsx)(n.em,{children:"n."})," (of a ",(0,s.jsx)(n.em,{children:"function name"}),") The ",(0,s.jsx)(n.em,{children:"symbol"})," that would be used as the name of an ",(0,s.jsx)(n.em,{children:"implicit block"})," which surrounds the body of a ",(0,s.jsx)(n.em,{children:"function"})," having that ",(0,s.jsx)(n.em,{children:"function name"}),". If the ",(0,s.jsx)(n.em,{children:"function name"})," is a ",(0,s.jsx)(n.em,{children:"symbol"}),", its ",(0,s.jsx)(n.em,{children:"function block name"})," is the ",(0,s.jsx)(n.em,{children:"function name"})," itself. If the ",(0,s.jsx)(n.em,{children:"function name"})," is a ",(0,s.jsx)(n.em,{children:"list"})," whose ",(0,s.jsx)(n.em,{children:"car"})," is ",(0,s.jsx)(n.strong,{children:"setf"})," and whose ",(0,s.jsx)(n.em,{children:"cadr"})," is a ",(0,s.jsx)(n.em,{children:"symbol"}),", its ",(0,s.jsx)(n.em,{children:"function block name"})," is the ",(0,s.jsx)(n.em,{children:"symbol"})," that is the ",(0,s.jsx)(n.em,{children:"cadr"})," of the ",(0,s.jsx)(n.em,{children:"function name"}),". An ",(0,s.jsx)(n.em,{children:"implementation"})," which supports additional kinds of ",(0,s.jsx)(n.em,{children:"function names"})," must specify for each how the corresponding ",(0,s.jsx)(n.em,{children:"function block name"})," is computed."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"function cell"})," ",(0,s.jsx)(n.em,{children:"n. Trad."})," (of a ",(0,s.jsx)(n.em,{children:"symbol"}),") The ",(0,s.jsx)(n.em,{children:"place"})," which holds the ",(0,s.jsx)(n.em,{children:"definition"})," of the global ",(0,s.jsx)(n.em,{children:"function binding"}),", if any, named by that ",(0,s.jsx)(n.em,{children:"symbol"}),", and which is ",(0,s.jsx)(n.em,{children:"accessed"})," by ",(0,s.jsx)(n.strong,{children:"symbol-function"}),". See ",(0,s.jsx)(n.em,{children:"cell"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"function designator"})," ",(0,s.jsx)(n.em,{children:"n."})," a ",(0,s.jsx)(n.em,{children:"designator"})," for a ",(0,s.jsx)(n.em,{children:"function"}),"; that is, an ",(0,s.jsx)(n.em,{children:"object"})," that denotes a ",(0,s.jsx)(n.em,{children:"function"})," and that is one of: a ",(0,s.jsx)(n.em,{children:"symbol"})," (denoting the ",(0,s.jsx)(n.em,{children:"function"})," named by that ",(0,s.jsx)(n.em,{children:"symbol"})," in the ",(0,s.jsx)(n.em,{children:"global environment"}),"), or a ",(0,s.jsx)(n.em,{children:"function"})," (denoting itself). The consequences are undefined if a ",(0,s.jsx)(n.em,{children:"symbol"})," is used as a ",(0,s.jsx)(n.em,{children:"function designator"})," but it does not have a global definition as a ",(0,s.jsx)(n.em,{children:"function"}),", or it has a global definition as a ",(0,s.jsx)(n.em,{children:"macro"})," or a ",(0,s.jsx)(n.em,{children:"special form"}),". See also ",(0,s.jsx)(n.em,{children:"extended function designator"})," ."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"function form"})," ",(0,s.jsx)(n.em,{children:"n."})," a ",(0,s.jsx)(n.em,{children:"form"})," that is a ",(0,s.jsx)(n.em,{children:"list"})," and that has a first element which is the ",(0,s.jsx)(n.em,{children:"name"})," of a ",(0,s.jsx)(n.em,{children:"function"})," to be called on ",(0,s.jsx)(n.em,{children:"arguments"})," which are the result of ",(0,s.jsx)(n.em,{children:"evaluating"})," subsequent elements of the ",(0,s.jsx)(n.em,{children:"function form"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"function name"})," ",(0,s.jsx)(n.em,{children:"n."})," 1. (in an ",(0,s.jsx)(n.em,{children:"environment"}),") A ",(0,s.jsx)(n.em,{children:"symbol"})," or a ",(0,s.jsx)(n.em,{children:"list"})," (setf ",(0,s.jsx)(n.em,{children:"symbol"}),") that is the ",(0,s.jsx)(n.em,{children:"name"})," of a ",(0,s.jsx)(n.em,{children:"function"})," in that ",(0,s.jsx)(n.em,{children:"environment"}),". 2. A ",(0,s.jsx)(n.em,{children:"symbol"})," or a ",(0,s.jsx)(n.em,{children:"list"})," (setf ",(0,s.jsx)(n.em,{children:"symbol"}),")."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"functional evaluation"})," ",(0,s.jsx)(n.em,{children:"n."})," the process of extracting a ",(0,s.jsx)(n.em,{children:"functional value"})," from a ",(0,s.jsx)(n.em,{children:"function name"})," or a ",(0,s.jsx)(n.em,{children:"lambda expression"}),". The evaluator performs ",(0,s.jsx)(n.em,{children:"functional evaluation"})," implicitly when it encounters a ",(0,s.jsx)(n.em,{children:"function name"})," or a ",(0,s.jsx)(n.em,{children:"lambda expression"})," in the ",(0,s.jsx)(n.em,{children:"car"})," of a ",(0,s.jsx)(n.em,{children:"compound form"}),", or explicitly when it encounters a ",(0,s.jsx)(n.strong,{children:"function"})," ",(0,s.jsx)(n.em,{children:"special form"}),". Neither a use of a  ",(0,s.jsx)(n.em,{children:"symbol"})," as a ",(0,s.jsx)(n.em,{children:"function designator"})," nor a use of the ",(0,s.jsx)(n.em,{children:"function"})," ",(0,s.jsx)(n.strong,{children:"symbol-function"})," to extract the ",(0,s.jsx)(n.em,{children:"functional value"})," of a ",(0,s.jsx)(n.em,{children:"symbol"})," is considered a ",(0,s.jsx)(n.em,{children:"functional evaluation"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"functional value"})," ",(0,s.jsx)(n.em,{children:"n."})," 1. (of a ",(0,s.jsx)(n.em,{children:"function name N"})," in an ",(0,s.jsx)(n.em,{children:"environment E"}),") The ",(0,s.jsx)(n.em,{children:"value"})," of the ",(0,s.jsx)(n.em,{children:"binding"})," named ",(0,s.jsx)(n.em,{children:"N"})," in the ",(0,s.jsx)(n.em,{children:"function namespace"})," for ",(0,s.jsx)(n.em,{children:"environment E"}),"; that is, the contents of the ",(0,s.jsx)(n.em,{children:"function cell"})," named ",(0,s.jsx)(n.em,{children:"N"})," in ",(0,s.jsx)(n.em,{children:"environment E"}),". 2. (of an ",(0,s.jsx)(n.em,{children:"fbound symbol S"}),") the contents of the ",(0,s.jsx)(n.em,{children:"symbol"}),"\u2019s ",(0,s.jsx)(n.em,{children:"function cell"}),"; that is, the ",(0,s.jsx)(n.em,{children:"value"})," of the ",(0,s.jsx)(n.em,{children:"binding"})," named ",(0,s.jsx)(n.em,{children:"S"})," in the ",(0,s.jsx)(n.em,{children:"function namespace"})," of the ",(0,s.jsx)(n.em,{children:"global environment"}),". (A ",(0,s.jsx)(n.em,{children:"name"})," that is a ",(0,s.jsx)(n.em,{children:"macro name"})," in the ",(0,s.jsx)(n.em,{children:"global environment"})," or is a ",(0,s.jsx)(n.em,{children:"special operator"})," might or might not be ",(0,s.jsx)(n.em,{children:"fbound"}),". But if ",(0,s.jsx)(n.em,{children:"S"})," is such a ",(0,s.jsx)(n.em,{children:"name"})," and is ",(0,s.jsx)(n.em,{children:"fbound"}),", the specific nature of its ",(0,s.jsx)(n.em,{children:"functional value"})," is ",(0,s.jsx)(n.em,{children:"implementation-dependent"}),"; in particular, it might or might not be a ",(0,s.jsx)(n.em,{children:"function"}),".)"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"further compilation"})," ",(0,s.jsx)(n.em,{children:"n. implementation-dependent"})," compilation beyond ",(0,s.jsx)(n.em,{children:"minimal compilation"}),". Further compilation is permitted to take place at ",(0,s.jsx)(n.em,{children:"run time"}),'. "Block compilation and generation of machine-specific instructions are examples of further compilation."']})]})}function a(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>l,a:()=>c});var s=i(67294);const r={},t=s.createContext(r);function c(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);