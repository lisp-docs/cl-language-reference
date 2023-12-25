 



<ClLinks styled={true} term={"format"}><b>format</b></ClLinks> is useful for producing nicely formatted text, producing good-looking messages, and so on. <ClLinks styled={true} term={"format"}><b>format</b></ClLinks> can generate and return a <ClLinks styled={true} term={"string"}><i>string</i></ClLinks> or output to *destination*. 



The *control-string* argument to <ClLinks styled={true} term={"format"}><b>format</b></ClLinks> is actually a *format control*. That is, it can be either a *format string* or a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks>, for example a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> returned by the <ClLinks styled={true} term={"formatter"}><b>formatter</b></ClLinks> <ClLinks styled={true} term={"macro"}><i>macro</i></ClLinks>. 



If it is a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks>, the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> is called with the appropriate output stream as its first argument and the data arguments to <ClLinks styled={true} term={"format"}><b>format</b></ClLinks> as its remaining arguments. The function should perform whatever output is necessary and return the unused tail of the arguments (if any). 



The compilation process performed by <ClLinks styled={true} term={"formatter"}><b>formatter</b></ClLinks> produces a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> that would do with its <ClLinks styled={true} term={"argument"}><i>arguments</i></ClLinks> as the <ClLinks styled={true} term={"format"}><b>format</b></ClLinks> interpreter would do with those <ClLinks styled={true} term={"argument"}><i>arguments</i></ClLinks>. 



The remainder of this section describes what happens if the *control-string* is a *format string*. *Control-string* is composed of simple text (<ClLinks styled={true} term={"character"}><i>characters</i></ClLinks>) and embedded directives. 



<ClLinks styled={true} term={"format"}><b>format</b></ClLinks> writes the simple text as is; each embedded directive specifies further text output that is to appear at the corresponding point within the simple text. Most directives use one or more elements of *args* to create their output. 



A directive consists of a *tilde*, optional prefix parameters separated by commas, optional <ClLinks styled={true} term={"colon"}><i>colon</i></ClLinks> and <ClLinks styled={true} term={"at-sign"}><i>at-sign</i></ClLinks> modifiers, and a single character indicating what kind of directive this is. There is no required ordering between the <ClLinks styled={true} term={"at-sign"}><i>at-sign</i></ClLinks> and <ClLinks styled={true} term={"colon"}><i>colon</i></ClLinks> modifier. The <ClLinks styled={true} term={"case"}><i>case</i></ClLinks> of the directive character is ignored. Prefix parameters are notated as signed (sign is optional) decimal numbers, or as a <ClLinks styled={true} term={"single-quote"}><i>single-quote</i></ClLinks> followed by a character. For example, &#126;5,’0d can be used to print an *integer* in decimal radix in five columns with leading zeros, or &#126;5,’\*d to get leading asterisks. 



In place of a prefix parameter to a directive, V (or v) can be used. In this case, <ClLinks styled={true} term={"format"}><b>format</b></ClLinks> takes an argument from *args* as a parameter to the directive. The argument should be an *integer* or <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> . If the *arg* used by a V parameter is <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>, the effect is as if the parameter had been 



omitted. # can be used in place of a prefix parameter; it represents the number of *args* remaining to be processed. When used within a recursive format, in the context of &#126;? or &#126;\{, the # prefix parameter represents the number of *format arguments* remaining within the recursive call. 



Examples of *format strings*: 



|<p>"&#126;S" ;This is an S directive with no parameters or modifiers. "&#126;3,-4:@s" ;This is an S directive with two parameters, 3 and -4, ; and both the <ClLinks styled={true} term={"colon"}><i>colon</i></ClLinks> and <ClLinks styled={true} term={"at-sign"}><i>at-sign</i></ClLinks> flags. </p><p>"&#126;,+4S" ;Here the first prefix parameter is omitted and takes ; on its default value, while the second parameter is 4.</p>|

| :-: |





**Figure 22–6. Examples of format control strings** 



<ClLinks styled={true} term={"format"}><b>format</b></ClLinks> sends the output to *destination*. If *destination* is <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>, <ClLinks styled={true} term={"format"}><b>format</b></ClLinks> creates and returns a <ClLinks styled={true} term={"string"}><i>string</i></ClLinks> 



 



 



containing the output from *control-string*. If *destination* is <ClLinks styled={true} term={"non-nil"}><i>non-nil</i></ClLinks>, it must be a <ClLinks styled={true} term={"string"}><i>string</i></ClLinks> with a *fill pointer* , a <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>, or the symbol <ClLinks styled={true} term={"t"}><b>t</b></ClLinks>. If *destination* is a <ClLinks styled={true} term={"string"}><i>string</i></ClLinks> with a *fill pointer* , the output is added to the end of the <ClLinks styled={true} term={"string"}><i>string</i></ClLinks>. If *destination* is a <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>, the output is sent to that <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>. If *destination* is <ClLinks styled={true} term={"t"}><b>t</b></ClLinks>, the output is sent to *standard output*. 



In the description of the directives that follows, the term *arg* in general refers to the next item of the set of *args* to be processed. The word or phrase at the beginning of each description is a mnemonic for the directive. <ClLinks styled={true} term={"format"}><b>format</b></ClLinks> directives do not bind any of the printer control variables (**\*print-...\***) except as specified in the following descriptions. Implementations may specify the binding of new, implementation-specific printer control variables for each <ClLinks styled={true} term={"format"}><b>format</b></ClLinks> directive, but they may neither bind any standard printer control variables not specified in description of a <ClLinks styled={true} term={"format"}><b>format</b></ClLinks> directive nor fail to bind any standard printer control variables as specified in the description. 



