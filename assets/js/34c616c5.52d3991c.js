"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[81044],{2103:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>I,contentTitle:()=>T,default:()=>V,frontMatter:()=>L,metadata:()=>A,toc:()=>z});var n=s(85893),t=s(11151);function i(e){return(0,n.jsx)(n.Fragment,{})}function c(e={}){const{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(i,{...e})}):i()}function a(e){const r={em:"em",p:"p",strong:"strong",...(0,t.a)(),...e.components},{ClLinks:s}=r;return s||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ClLinks",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:["A ",(0,n.jsx)(s,{term:"stream",children:(0,n.jsx)("i",{children:"stream"})})," is an ",(0,n.jsx)(s,{term:"object",children:(0,n.jsx)("i",{children:"object"})})," that can be used with an input or output function to identify an appropriate source or sink of ",(0,n.jsx)(s,{term:"character",children:(0,n.jsx)("i",{children:"characters"})})," or ",(0,n.jsx)(s,{term:"byte",children:(0,n.jsx)("i",{children:"bytes"})})," for that operation. A ",(0,n.jsx)(r.em,{children:"character stream"})," is a source or sink of ",(0,n.jsx)(s,{term:"character",children:(0,n.jsx)("i",{children:"characters"})}),". A ",(0,n.jsx)(r.em,{children:"binary stream"})," is a source or sink of ",(0,n.jsx)(s,{term:"byte",children:(0,n.jsx)("i",{children:"bytes"})}),"."]}),"\n",(0,n.jsxs)(r.p,{children:["Some operations may be performed on any kind of ",(0,n.jsx)(s,{term:"stream",children:(0,n.jsx)("i",{children:"stream"})}),"; Figure 21\u20131 provides a list of ",(0,n.jsx)(s,{term:"standardized",children:(0,n.jsx)("i",{children:"standardized"})})," operations that are potentially useful with any kind of ",(0,n.jsx)(s,{term:"stream",children:(0,n.jsx)("i",{children:"stream"})}),"."]}),"\n",(0,n.jsxs)(r.p,{children:["|",(0,n.jsxs)("p",{children:[(0,n.jsx)(r.strong,{children:"close stream-element-type"})," "]}),(0,n.jsxs)("p",{children:[(0,n.jsx)(r.strong,{children:"input-stream-p streamp"})," "]}),(0,n.jsxs)("p",{children:[(0,n.jsx)(r.strong,{children:"interactive-stream-p with-open-stream"})," "]}),(0,n.jsx)("p",{children:(0,n.jsx)(r.strong,{children:"output-stream-p"})}),"|"]}),"\n",(0,n.jsx)(r.p,{children:"| :- |"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Figure 21\u20131. Some General-Purpose Stream Operations"})}),"\n",(0,n.jsxs)(r.p,{children:["Other operations are only meaningful on certain ",(0,n.jsx)(r.em,{children:"stream types"}),". For example, ",(0,n.jsx)(s,{term:"read-char",children:(0,n.jsx)("b",{children:"read-char"})})," is only defined for ",(0,n.jsx)(r.em,{children:"character streams"})," and ",(0,n.jsx)(s,{term:"read-byte",children:(0,n.jsx)("b",{children:"read-byte"})})," is only defined for ",(0,n.jsx)(r.em,{children:"binary streams"}),"."]})]})}function o(e={}){const{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}function l(e){return(0,n.jsx)(n.Fragment,{})}function d(e={}){const{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(l,{...e})}):l()}function h(e){const r={em:"em",p:"p",strong:"strong",...(0,t.a)(),...e.components},{ClLinks:s}=r;return s||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ClLinks",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:["A ",(0,n.jsx)(s,{term:"stream",children:(0,n.jsx)("i",{children:"stream"})}),", whether a ",(0,n.jsx)(r.em,{children:"character stream"})," or a ",(0,n.jsx)(r.em,{children:"binary stream"}),", can be an ",(0,n.jsx)(r.em,{children:"input stream"})," (source of data), an ",(0,n.jsx)(r.em,{children:"output stream"})," (sink for data), both, or (",(0,n.jsx)(r.em,{children:"e.g."}),", when \u201c",":direction"," ",":probe","\u201d is given to ",(0,n.jsx)(s,{term:"open",children:(0,n.jsx)("b",{children:"open"})}),") neither."]}),"\n",(0,n.jsxs)(r.p,{children:["Figure 21\u20132 shows ",(0,n.jsx)(s,{term:"operator",children:(0,n.jsx)("i",{children:"operators"})})," relating to ",(0,n.jsx)(r.em,{children:"input streams"}),"."]}),"\n",(0,n.jsxs)(r.p,{children:["|",(0,n.jsxs)("p",{children:[(0,n.jsx)(r.strong,{children:"clear-input read-byte read-from-string"})," "]}),(0,n.jsxs)("p",{children:[(0,n.jsx)(r.strong,{children:"listen read-char read-line"})," "]}),(0,n.jsx)("p",{children:(0,n.jsx)(r.strong,{children:"peek-char read-char-no-hang read-preserving-whitespace read read-delimited-list unread-char"})}),"|"]}),"\n",(0,n.jsx)(r.p,{children:"| :- |"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Figure 21\u20132. Operators relating to Input Streams."})}),"\n",(0,n.jsxs)(r.p,{children:["Figure 21\u20133 shows ",(0,n.jsx)(s,{term:"operator",children:(0,n.jsx)("i",{children:"operators"})})," relating to ",(0,n.jsx)(r.em,{children:"output streams"}),"."]}),"\n",(0,n.jsxs)(r.p,{children:["|",(0,n.jsxs)("p",{children:[(0,n.jsx)(r.strong,{children:"clear-output prin1 write"})," "]}),(0,n.jsxs)("p",{children:[(0,n.jsx)(r.strong,{children:"finish-output prin1-to-string write-byte"})," "]}),(0,n.jsxs)("p",{children:[(0,n.jsx)(r.strong,{children:"force-output princ write-char"})," "]}),(0,n.jsxs)("p",{children:[(0,n.jsx)(r.strong,{children:"format princ-to-string write-line"})," "]}),(0,n.jsxs)("p",{children:[(0,n.jsx)(r.strong,{children:"fresh-line print write-string"})," "]}),(0,n.jsx)("p",{children:(0,n.jsx)(r.strong,{children:"pprint terpri write-to-string"})}),"|"]}),"\n",(0,n.jsx)(r.p,{children:"| :- |"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Figure 21\u20133. Operators relating to Output Streams."})}),"\n",(0,n.jsxs)(r.p,{children:["A ",(0,n.jsx)(s,{term:"stream",children:(0,n.jsx)("i",{children:"stream"})})," that is both an ",(0,n.jsx)(r.em,{children:"input stream"})," and an ",(0,n.jsx)(r.em,{children:"output stream"})," is called a ",(0,n.jsx)(r.em,{children:"bidirectional stream"}),". See the ",(0,n.jsx)(s,{term:"function",children:(0,n.jsx)("i",{children:"functions"})})," ",(0,n.jsx)(r.strong,{children:"input-stream-p"})," and ",(0,n.jsx)(r.strong,{children:"output-stream-p"}),"."]}),"\n",(0,n.jsxs)(r.p,{children:["Any of the ",(0,n.jsx)(s,{term:"operator",children:(0,n.jsx)("i",{children:"operators"})})," listed in Figure 21\u20132 or Figure 21\u20133 can be used with ",(0,n.jsx)(r.em,{children:"bidirectional streams"}),". In addition, Figure 21\u20134 shows a list of ",(0,n.jsx)(s,{term:"operator",children:(0,n.jsx)("i",{children:"operators"})})," that relate specificaly to ",(0,n.jsx)(r.em,{children:"bidirectional streams"}),"."]}),"\n",(0,n.jsxs)(r.p,{children:["|",(0,n.jsx)(r.strong,{children:"y-or-n-p yes-or-no-p"}),"|"]}),"\n",(0,n.jsx)(r.p,{children:"| :- |"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Figure 21\u20134. Operators relating to Bidirectional Streams."})})]})}function m(e={}){const{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}function p(e){const r={em:"em",p:"p",...(0,t.a)(),...e.components},{ClLinks:s}=r;return s||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ClLinks",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(s,{term:"stream",children:(0,n.jsx)("i",{children:"Streams"})})," are either ",(0,n.jsx)(s,{term:"open",children:(0,n.jsx)("i",{children:"open"})})," or ",(0,n.jsx)(s,{term:"closed",children:(0,n.jsx)("i",{children:"closed"})}),"."]}),"\n",(0,n.jsxs)(r.p,{children:["Except as explicitly specified otherwise, operations that create and return ",(0,n.jsx)(s,{term:"stream",children:(0,n.jsx)("i",{children:"streams"})})," return ",(0,n.jsx)(r.em,{children:"open streams"}),"."]}),"\n",(0,n.jsxs)(r.p,{children:["The action of ",(0,n.jsx)(r.em,{children:"closing"})," a ",(0,n.jsx)(s,{term:"stream",children:(0,n.jsx)("i",{children:"stream"})})," marks the end of its use as a source or sink of data, permitting the ",(0,n.jsx)(s,{term:"implementation",children:(0,n.jsx)("i",{children:"implementation"})})," to reclaim its internal data structures, and to free any external resources which might have been locked by the ",(0,n.jsx)(s,{term:"stream",children:(0,n.jsx)("i",{children:"stream"})})," when it was opened."]}),"\n",(0,n.jsxs)(r.p,{children:["Except as explicitly specified otherwise, the consequences are undefined when a ",(0,n.jsx)(r.em,{children:"closed stream"})," is used where a ",(0,n.jsx)(s,{term:"stream",children:(0,n.jsx)("i",{children:"stream"})})," is called for."]}),"\n",(0,n.jsxs)(r.p,{children:["Coercion of ",(0,n.jsx)(s,{term:"stream",children:(0,n.jsx)("i",{children:"streams"})})," to ",(0,n.jsx)(s,{term:"pathname",children:(0,n.jsx)("i",{children:"pathnames"})})," is permissible for ",(0,n.jsx)(r.em,{children:"closed streams"}),"; in some situations, such as for a ",(0,n.jsx)(s,{term:"truename",children:(0,n.jsx)("i",{children:"truename"})})," computation, the result might be different for an ",(0,n.jsx)(r.em,{children:"open stream"})," and for that same ",(0,n.jsx)(s,{term:"stream",children:(0,n.jsx)("i",{children:"stream"})})," once it has been ",(0,n.jsx)(s,{term:"closed",children:(0,n.jsx)("i",{children:"closed"})}),"."]})]})}function x(e={}){const{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}function j(e){const r={em:"em",p:"p",...(0,t.a)(),...e.components},{ClLinks:s}=r;return s||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ClLinks",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:["An ",(0,n.jsx)(r.em,{children:"interactive stream"})," is one on which it makes sense to perform interactive querying."]}),"\n",(0,n.jsxs)(r.p,{children:["The precise meaning of an ",(0,n.jsx)(r.em,{children:"interactive stream"})," is ",(0,n.jsx)(s,{term:"implementation-defined",children:(0,n.jsx)("i",{children:"implementation-defined"})}),", and may depend on the underlying operating system. Some examples of the things that an ",(0,n.jsx)(s,{term:"implementation",children:(0,n.jsx)("i",{children:"implementation"})})," might choose to use as identifying characteristics of an ",(0,n.jsx)(r.em,{children:"interactive stream"})," include:"]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.em,{children:"\u2022"})," The ",(0,n.jsx)(s,{term:"stream",children:(0,n.jsx)("i",{children:"stream"})})," is connected to a person (or equivalent) in such a way that the program can prompt for information and expect to receive different input depending on the prompt."]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.em,{children:"\u2022"})," The program is expected to prompt for input and support \u201cnormal input editing\u201d."]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.em,{children:"\u2022"})," ",(0,n.jsx)(s,{term:"read-char",children:(0,n.jsx)("b",{children:"read-char"})})," might wait for the user to type something before returning instead of immediately returning a character or end-of-file."]}),"\n",(0,n.jsxs)(r.p,{children:["The general intent of having some ",(0,n.jsx)(s,{term:"stream",children:(0,n.jsx)("i",{children:"streams"})})," be classified as ",(0,n.jsx)(r.em,{children:"interactive streams"})," is to allow them to be distinguished from streams containing batch (or background or command-file) input. Output to batch streams is typically discarded or saved for later viewing, so interactive queries to such streams might not have the expected effect."]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.em,{children:"Terminal I/O"})," might or might not be an ",(0,n.jsx)(r.em,{children:"interactive stream"}),"."]})]})}function u(e={}){const{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(j,{...e})}):j(e)}function f(e){return(0,n.jsx)(n.Fragment,{})}function g(e={}){const{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(f,{...e})}):f()}function b(e){const r={em:"em",p:"p",...(0,t.a)(),...e.components},{ClLinks:s}=r;return s||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ClLinks",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:["Some ",(0,n.jsx)(s,{term:"stream",children:(0,n.jsx)("i",{children:"streams"})}),", called ",(0,n.jsx)(r.em,{children:"file streams"}),", provide access to ",(0,n.jsx)(s,{term:"file",children:(0,n.jsx)("i",{children:"files"})}),". An ",(0,n.jsx)(s,{term:"object",children:(0,n.jsx)("i",{children:"object"})})," of ",(0,n.jsx)(s,{term:"class",children:(0,n.jsx)("i",{children:"class"})})," ",(0,n.jsx)(s,{term:"file-stream",children:(0,n.jsx)("b",{children:"file-stream"})})," is used to represent a ",(0,n.jsx)(r.em,{children:"file stream"}),"."]}),"\n",(0,n.jsxs)(r.p,{children:["The basic operation for opening a ",(0,n.jsx)(s,{term:"file",children:(0,n.jsx)("i",{children:"file"})})," is ",(0,n.jsx)(s,{term:"open",children:(0,n.jsx)("b",{children:"open"})}),", which typically returns a ",(0,n.jsx)(r.em,{children:"file stream"})," (see its dictionary entry for details). The basic operation for closing a ",(0,n.jsx)(s,{term:"stream",children:(0,n.jsx)("i",{children:"stream"})})," is ",(0,n.jsx)(s,{term:"close",children:(0,n.jsx)("b",{children:"close"})}),". The macro ",(0,n.jsx)(s,{term:"with-open-file",children:(0,n.jsx)("b",{children:"with-open-file"})})," is useful to express the common idiom of opening a ",(0,n.jsx)(s,{term:"file",children:(0,n.jsx)("i",{children:"file"})})," for the duration of a given body of ",(0,n.jsx)(s,{term:"code",children:(0,n.jsx)("i",{children:"code"})}),", and assuring that the resulting ",(0,n.jsx)(s,{term:"stream",children:(0,n.jsx)("i",{children:"stream"})})," is closed upon exit from that body."]})]})}function y(e={}){const{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(b,{...e})}):b(e)}function w(e){const r={em:"em",p:"p",strong:"strong",...(0,t.a)(),...e.components},{ClLinks:s}=r;return s||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ClLinks",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:["The ",(0,n.jsx)(s,{term:"class",children:(0,n.jsx)("i",{children:"class"})})," ",(0,n.jsx)(s,{term:"stream",children:(0,n.jsx)("b",{children:"stream"})})," has a number of ",(0,n.jsx)(r.em,{children:"subclasses"})," defined by this specification. Figure 21\u20135 shows some information about these subclasses."]}),"\n",(0,n.jsxs)(r.p,{children:["|",(0,n.jsx)(r.strong,{children:"Class Related Operators"}),"|"]}),"\n",(0,n.jsx)(r.p,{children:"| :- |"}),"\n",(0,n.jsxs)(r.p,{children:["|",(0,n.jsxs)("p",{children:[(0,n.jsx)(r.strong,{children:"broadcast-stream make-broadcast-stream"})," "]}),(0,n.jsxs)("p",{children:[(0,n.jsx)(s,{term:"broadcast-stream-streams",children:(0,n.jsx)("b",{children:"broadcast-stream-streams"})})," "]}),(0,n.jsxs)("p",{children:[(0,n.jsx)(r.strong,{children:"concatenated-stream make-concatenated-stream"})," "]}),(0,n.jsxs)("p",{children:[(0,n.jsx)(r.strong,{children:"concatenated-stream-streams"})," "]}),(0,n.jsxs)("p",{children:[(0,n.jsx)(r.strong,{children:"echo-stream make-echo-stream"})," "]}),(0,n.jsxs)("p",{children:[(0,n.jsx)(r.strong,{children:"echo-stream-input-stream"})," "]}),(0,n.jsxs)("p",{children:[(0,n.jsx)(r.strong,{children:"echo-stream-output-stream"})," "]}),(0,n.jsxs)("p",{children:[(0,n.jsx)(r.strong,{children:"string-stream make-string-input-stream"})," "]}),(0,n.jsxs)("p",{children:[(0,n.jsx)(s,{term:"with-input-from-string",children:(0,n.jsx)("b",{children:"with-input-from-string"})})," "]}),(0,n.jsxs)("p",{children:[(0,n.jsx)(s,{term:"make-string-output-stream",children:(0,n.jsx)("b",{children:"make-string-output-stream"})})," "]}),(0,n.jsxs)("p",{children:[(0,n.jsx)(s,{term:"with-output-to-string",children:(0,n.jsx)("b",{children:"with-output-to-string"})})," "]}),(0,n.jsxs)("p",{children:[(0,n.jsx)(s,{term:"get-output-stream-string",children:(0,n.jsx)("b",{children:"get-output-stream-string"})})," "]}),(0,n.jsxs)("p",{children:[(0,n.jsx)(r.strong,{children:"synonym-stream make-synonym-stream"})," "]}),(0,n.jsxs)("p",{children:[(0,n.jsx)(s,{term:"synonym-stream-symbol",children:(0,n.jsx)("b",{children:"synonym-stream-symbol"})})," "]}),(0,n.jsxs)("p",{children:[(0,n.jsx)(r.strong,{children:"two-way-stream make-two-way-stream"})," "]}),(0,n.jsxs)("p",{children:[(0,n.jsx)(r.strong,{children:"two-way-stream-input-stream"})," "]}),(0,n.jsx)("p",{children:(0,n.jsx)(r.strong,{children:"two-way-stream-output-stream"})}),"|"]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Figure 21\u20135. Defined Names related to Specialized Streams"})})]})}function v(e={}){const{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(w,{...e})}):w(e)}function k(e){const r={em:"em",p:"p",strong:"strong",...(0,t.a)(),...e.components},{ClLinks:s}=r;return s||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ClLinks",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(s,{term:"variable",children:(0,n.jsx)("i",{children:"Variables"})})," whose ",(0,n.jsx)(s,{term:"value",children:(0,n.jsx)("i",{children:"values"})})," must be ",(0,n.jsx)(s,{term:"stream",children:(0,n.jsx)("i",{children:"streams"})})," are sometimes called ",(0,n.jsx)(r.em,{children:"stream variables"}),"."]}),"\n",(0,n.jsxs)(r.p,{children:["Certain ",(0,n.jsx)(r.em,{children:"stream variables"})," are defined by this specification to be the proper source of input or output in various ",(0,n.jsx)(s,{term:"situation",children:(0,n.jsx)("i",{children:"situations"})})," where no specific ",(0,n.jsx)(s,{term:"stream",children:(0,n.jsx)("i",{children:"stream"})})," has been specified instead. A complete list of such ",(0,n.jsx)(r.em,{children:"standardized stream variables"})," appears in Figure 21\u20136. The consequences are undefined if at any time the ",(0,n.jsx)(s,{term:"value",children:(0,n.jsx)("i",{children:"value"})})," of any of these ",(0,n.jsx)(s,{term:"variable",children:(0,n.jsx)("i",{children:"variables"})})," is not an ",(0,n.jsx)(r.em,{children:"open stream"}),"."]}),"\n",(0,n.jsxs)(r.p,{children:["|",(0,n.jsx)(r.strong,{children:"Glossary Term Variable Name"}),"|"]}),"\n",(0,n.jsx)(r.p,{children:"| :- |"}),"\n",(0,n.jsxs)(r.p,{children:["|",(0,n.jsxs)("p",{children:[(0,n.jsx)(r.em,{children:"debug I/O"})," ",(0,n.jsx)(r.strong,{children:"*debug-io*"})," "]}),(0,n.jsxs)("p",{children:[(0,n.jsxs)(r.em,{children:["error output",(0,n.jsx)(s,{term:"t",children:(0,n.jsx)("i",{children:" "})})]}),"*error-output*** "]}),(0,n.jsxs)("p",{children:[(0,n.jsx)(r.em,{children:"query I/O"})," ",(0,n.jsx)(r.strong,{children:"*query-io*"})," "]}),(0,n.jsxs)("p",{children:[(0,n.jsxs)(r.em,{children:["standard input",(0,n.jsx)(s,{term:"t",children:(0,n.jsx)("i",{children:" "})})]}),"*standard-input*** "]}),(0,n.jsxs)("p",{children:[(0,n.jsxs)(r.em,{children:["standard output",(0,n.jsx)(s,{term:"t",children:(0,n.jsx)("i",{children:" "})})]}),"*standard-output*** "]}),(0,n.jsxs)("p",{children:[(0,n.jsx)(r.em,{children:"terminal I/O"})," ",(0,n.jsx)(s,{term:"terminal-io",children:(0,n.jsx)("b",{children:"*terminal-io*"})})," "]}),(0,n.jsxs)("p",{children:[(0,n.jsxs)(r.em,{children:["trace output",(0,n.jsx)(s,{term:"t",children:(0,n.jsx)("i",{children:" "})})]}),"*trace-output***"]}),"|"]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Figure 21\u20136. Standardized Stream Variables"})}),"\n",(0,n.jsxs)(r.p,{children:["Note that, by convention, ",(0,n.jsx)(r.em,{children:"standardized stream variables"})," have names ending in \u201c-input*\u201d if they must be ",(0,n.jsx)(r.em,{children:"input streams"}),", ending in \u201c-output*\u201d if they must be ",(0,n.jsx)(r.em,{children:"output streams"}),", or ending in \u201c-io*\u201d if they must be ",(0,n.jsx)(r.em,{children:"bidirectional streams"}),"."]}),"\n",(0,n.jsxs)(r.p,{children:["User programs may ",(0,n.jsx)(s,{term:"assign",children:(0,n.jsx)("i",{children:"assign"})})," or ",(0,n.jsx)(s,{term:"bind",children:(0,n.jsx)("i",{children:"bind"})})," any ",(0,n.jsx)(r.em,{children:"standardized stream variable"})," except ",(0,n.jsx)(s,{term:"terminal-io",children:(0,n.jsx)("b",{children:"*terminal-io*"})}),"."]})]})}function S(e={}){const{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(k,{...e})}):k(e)}function C(e){const r={em:"em",p:"p",strong:"strong",...(0,t.a)(),...e.components},{ClLinks:s}=r;return s||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ClLinks",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:["The ",(0,n.jsx)(s,{term:"operator",children:(0,n.jsx)("i",{children:"operators"})})," in Figure 21\u20137 accept ",(0,n.jsx)(r.em,{children:"stream arguments"})," that might be either ",(0,n.jsx)(s,{term:"open",children:(0,n.jsx)("i",{children:"open"})})," or ",(0,n.jsx)(r.em,{children:"closed streams"}),"."]}),"\n",(0,n.jsxs)(r.p,{children:["|",(0,n.jsxs)("p",{children:[(0,n.jsx)(r.strong,{children:"broadcast-stream-streams file-author pathnamep"})," "]}),(0,n.jsxs)("p",{children:[(0,n.jsx)(r.strong,{children:"close file-namestring probe-file"})," "]}),(0,n.jsxs)("p",{children:[(0,n.jsx)(r.strong,{children:"compile-file file-write-date rename-file"})," "]}),(0,n.jsxs)("p",{children:[(0,n.jsx)(r.strong,{children:"compile-file-pathname host-namestring streamp"})," "]}),(0,n.jsxs)("p",{children:[(0,n.jsx)(r.strong,{children:"concatenated-stream-streams load synonym-stream-symbol delete-file logical-pathname translate-logical-pathname directory merge-pathnames translate-pathname directory-namestring namestring truename"})," "]}),(0,n.jsxs)("p",{children:[(0,n.jsx)(r.strong,{children:"dribble open two-way-stream-input-stream echo-stream-input-stream open-stream-p two-way-stream-output-stream echo-stream-ouput-stream parse-namestring wild-pathname-p ed pathname with-open-file"})," "]}),(0,n.jsx)("p",{children:(0,n.jsx)(r.strong,{children:"enough-namestring pathname-match-p"})}),"|"]}),"\n",(0,n.jsx)(r.p,{children:"| :- |"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Figure 21\u20137. Operators that accept either Open or Closed Streams"})}),"\n",(0,n.jsxs)(r.p,{children:["The ",(0,n.jsx)(s,{term:"operator",children:(0,n.jsx)("i",{children:"operators"})})," in Figure 21\u20138 accept ",(0,n.jsx)(r.em,{children:"stream arguments"})," that must be ",(0,n.jsx)(r.em,{children:"open streams"}),"."]}),"\n",(0,n.jsxs)(r.p,{children:["|",(0,n.jsxs)("p",{children:[(0,n.jsx)(r.strong,{children:"clear-input output-stream-p read-char-no-hang clear-output peek-char read-delimited-list file-length pprint read-line"})," "]}),(0,n.jsxs)("p",{children:[(0,n.jsx)(r.strong,{children:"file-position pprint-fill read-preserving-whitespace file-string-length pprint-indent stream-element-type finish-output pprint-linear stream-external-format force-output pprint-logical-block terpri"})," "]}),(0,n.jsxs)("p",{children:[(0,n.jsx)(r.strong,{children:"format pprint-newline unread-char fresh-line pprint-tab with-open-stream get-output-stream-string pprint-tabular write"})," "]}),(0,n.jsxs)("p",{children:[(0,n.jsx)(r.strong,{children:"input-stream-p prin1 write-byte"})," "]}),(0,n.jsxs)("p",{children:[(0,n.jsx)(r.strong,{children:"interactive-stream-p princ write-char"})," "]}),(0,n.jsxs)("p",{children:[(0,n.jsx)(r.strong,{children:"listen print write-line"})," "]}),(0,n.jsxs)("p",{children:[(0,n.jsx)(r.strong,{children:"make-broadcast-stream print-object write-string make-concatenated-stream print-unreadable-object y-or-n-p"})," "]}),(0,n.jsxs)("p",{children:[(0,n.jsx)(r.strong,{children:"make-echo-stream read yes-or-no-p"})," "]}),(0,n.jsxs)("p",{children:[(0,n.jsx)(r.strong,{children:"make-synonym-stream read-byte"})," "]}),(0,n.jsx)("p",{children:(0,n.jsx)(r.strong,{children:"make-two-way-stream read-char"})}),"|"]}),"\n",(0,n.jsx)(r.p,{children:"| - |"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Figure 21\u20138. Operators that accept Open Streams only"})})]})}function F(e={}){const{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(C,{...e})}):C(e)}function E(e){const r={em:"em",p:"p",...(0,t.a)(),...e.components},{ClLinks:s}=r;return s||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ClLinks",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:["The consequences are undefined if any ",(0,n.jsx)(r.em,{children:"component"})," of a ",(0,n.jsx)(r.em,{children:"composite stream"})," is ",(0,n.jsx)(s,{term:"closed",children:(0,n.jsx)("i",{children:"closed"})})," before the ",(0,n.jsx)(r.em,{children:"composite stream"})," is ",(0,n.jsx)(s,{term:"closed",children:(0,n.jsx)("i",{children:"closed"})}),"."]}),"\n",(0,n.jsxs)(r.p,{children:["The consequences are undefined if the ",(0,n.jsx)(r.em,{children:"synonym stream symbol"})," is not ",(0,n.jsx)(s,{term:"bound",children:(0,n.jsx)("i",{children:"bound"})})," to an ",(0,n.jsx)(r.em,{children:"open stream"})," from the time of the ",(0,n.jsx)(r.em,{children:"synonym stream"}),"\u2019s creation until the time it is ",(0,n.jsx)(s,{term:"closed",children:(0,n.jsx)("i",{children:"closed"})}),"."]})]})}function O(e={}){const{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(E,{...e})}):E(e)}const L={title:"21.1 Stream Concepts"},T="21.1 Stream Concepts",A={id:"chap-21/cb-b-stream-concepts",title:"21.1 Stream Concepts",description:"21.1.1 Introduction to Streams",source:"@site/docs/chap-21/cb-b-stream-concepts.md",sourceDirName:"chap-21",slug:"/chap-21/cb-b-stream-concepts",permalink:"/cl-language-reference/chap-21/cb-b-stream-concepts",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-21/cb-b-stream-concepts.md",tags:[],version:"current",frontMatter:{title:"21.1 Stream Concepts"},sidebar:"tutorialSidebar",previous:{title:"21. Streams",permalink:"/cl-language-reference/category/21-streams"},next:{title:"21.2 Streams Dictionary",permalink:"/cl-language-reference/category/212-streams-dictionary"}},I={},z=[{value:"21.1.1 Introduction to Streams",id:"2111-introduction-to-streams",level:2},{value:"21.1.1.1 Abstract Classifications of Streams",id:"21111-abstract-classifications-of-streams",level:3},{value:"21.1.1.1.1 Input",id:"211111-input",level:4},{value:"21.1.1.1.2 Open and Closed Streams",id:"211112-open-and-closed-streams",level:4},{value:"21.1.1.1.3 Interactive Streams",id:"211113-interactive-streams",level:4},{value:"21.1.1.2 Abstract Classifications of Streams",id:"21112-abstract-classifications-of-streams",level:3},{value:"21.1.1.2.1 File Streams",id:"211121-file-streams",level:4},{value:"21.1.1.3 Other Subclasses of Stream",id:"21113-other-subclasses-of-stream",level:3},{value:"21.1.2 Stream Variables",id:"2112-stream-variables",level:2},{value:"21.1.3 Stream Arguments to Standardized Functions",id:"2113-stream-arguments-to-standardized-functions",level:2},{value:"21.1.4 Restrictions on Composite Streams",id:"2114-restrictions-on-composite-streams",level:2}];function q(e){const r={h1:"h1",h2:"h2",h3:"h3",h4:"h4",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"211-stream-concepts",children:"21.1 Stream Concepts"}),"\n","\n",(0,n.jsx)(c,{}),"\n",(0,n.jsx)(r.h2,{id:"2111-introduction-to-streams",children:"21.1.1 Introduction to Streams"}),"\n","\n",(0,n.jsx)(o,{}),"\n",(0,n.jsx)(r.h3,{id:"21111-abstract-classifications-of-streams",children:"21.1.1.1 Abstract Classifications of Streams"}),"\n","\n",(0,n.jsx)(d,{}),"\n",(0,n.jsx)(r.h4,{id:"211111-input",children:"21.1.1.1.1 Input"}),"\n","\n",(0,n.jsx)(m,{}),"\n",(0,n.jsx)(r.h4,{id:"211112-open-and-closed-streams",children:"21.1.1.1.2 Open and Closed Streams"}),"\n","\n",(0,n.jsx)(x,{}),"\n",(0,n.jsx)(r.h4,{id:"211113-interactive-streams",children:"21.1.1.1.3 Interactive Streams"}),"\n","\n",(0,n.jsx)(u,{}),"\n",(0,n.jsx)(r.h3,{id:"21112-abstract-classifications-of-streams",children:"21.1.1.2 Abstract Classifications of Streams"}),"\n","\n",(0,n.jsx)(g,{}),"\n",(0,n.jsx)(r.h4,{id:"211121-file-streams",children:"21.1.1.2.1 File Streams"}),"\n","\n",(0,n.jsx)(y,{}),"\n",(0,n.jsx)(r.h3,{id:"21113-other-subclasses-of-stream",children:"21.1.1.3 Other Subclasses of Stream"}),"\n","\n",(0,n.jsx)(v,{}),"\n",(0,n.jsx)(r.h2,{id:"2112-stream-variables",children:"21.1.2 Stream Variables"}),"\n","\n",(0,n.jsx)(S,{}),"\n",(0,n.jsx)(r.h2,{id:"2113-stream-arguments-to-standardized-functions",children:"21.1.3 Stream Arguments to Standardized Functions"}),"\n","\n",(0,n.jsx)(F,{}),"\n",(0,n.jsx)(r.h2,{id:"2114-restrictions-on-composite-streams",children:"21.1.4 Restrictions on Composite Streams"}),"\n","\n","\n",(0,n.jsx)(O,{})]})}function V(e={}){const{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(q,{...e})}):q(e)}},11151:(e,r,s)=>{s.d(r,{Z:()=>a,a:()=>c});var n=s(67294);const t={},i=n.createContext(t);function c(e){const r=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);