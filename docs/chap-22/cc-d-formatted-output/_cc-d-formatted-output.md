**22.3 Formatted Output** 

**format** is useful for producing nicely formatted text, producing good-looking messages, and so on. **format** can generate and return a *string* or output to *destination*. 

The *control-string* argument to **format** is actually a *format control*. That is, it can be either a *format string* or a *function*, for example a *function* returned by the **formatter** *macro*. 

If it is a *function*, the *function* is called with the appropriate output stream as its first argument and the data arguments to **format** as its remaining arguments. The function should perform whatever output is necessary and return the unused tail of the arguments (if any). 

The compilation process performed by **formatter** produces a *function* that would do with its *arguments* as the **format** interpreter would do with those *arguments*. 

The remainder of this section describes what happens if the *control-string* is a *format string*. *Control-string* is composed of simple text (*characters*) and embedded directives. 

**format** writes the simple text as is; each embedded directive specifies further text output that is to appear at the corresponding point within the simple text. Most directives use one or more elements of *args* to create their output. 

A directive consists of a *tilde*, optional prefix parameters separated by commas, optional *colon* and *at-sign* modifiers, and a single character indicating what kind of directive this is. There is no required ordering between the *at-sign* and *colon* modifier. The *case* of the directive character is ignored. Prefix parameters are notated as signed (sign is optional) decimal numbers, or as a *single-quote* followed by a character. For example, ~5,’0d can be used to print an *integer* in decimal radix in five columns with leading zeros, or ~5,’\*d to get leading asterisks. 

In place of a prefix parameter to a directive, V (or v) can be used. In this case, **format** takes an argument from *args* as a parameter to the directive. The argument should be an *integer* or *character* . If the *arg* used by a V parameter is **nil**, the effect is as if the parameter had been 

omitted. # can be used in place of a prefix parameter; it represents the number of *args* remaining to be processed. When used within a recursive format, in the context of ~? or ~\{, the # prefix parameter represents the number of *format arguments* remaining within the recursive call. 

Examples of *format strings*: 

|\<p\>"~S" ;This is an S directive with no parameters or modifiers. "~3,-4:@s" ;This is an S directive with two parameters, 3 and -4, ; and both the *colon* and *at-sign* flags. \</p\>\<p\>"~,+4S" ;Here the first prefix parameter is omitted and takes ; on its default value, while the second parameter is 4.\</p\>|
| :-: |


**Figure 22–6. Examples of format control strings** 

**format** sends the output to *destination*. If *destination* is **nil**, **format** creates and returns a *string* Printer **22–23**

 

 

containing the output from *control-string*. If *destination* is *non-nil*, it must be a *string* with a *fill pointer* , a *stream*, or the symbol **t**. If *destination* is a *string* with a *fill pointer* , the output is added to the end of the *string*. If *destination* is a *stream*, the output is sent to that *stream*. If *destination* is **t**, the output is sent to *standard output*. 

In the description of the directives that follows, the term *arg* in general refers to the next item of the set of *args* to be processed. The word or phrase at the beginning of each description is a mnemonic for the directive. **format** directives do not bind any of the printer control variables (**\*print-...\***) except as specified in the following descriptions. Implementations may specify the binding of new, implementation-specific printer control variables for each **format** directive, but they may neither bind any standard printer control variables not specified in description of a **format** directive nor fail to bind any standard printer control variables as specified in the description. 

