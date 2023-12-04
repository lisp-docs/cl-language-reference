 



The KEYWORD *package* contains *symbols*, called *keywords*<sub>1</sub>, that are typically used as special markers in *programs* and their associated data *expressions*<sub>1</sub>. 



*Symbol tokens* that start with a *package marker* are parsed by the *Lisp reader* as *symbols* in the KEYWORD *package*; see Section 2.3.4 (Symbols as Tokens). This makes it notationally convenient to use *keywords* when communicating between programs in different *packages*. For example, the mechanism for passing *keyword parameters* in a *call* uses *keywords*<sub>1</sub> to name the corresponding *arguments*; see Section 3.4.1 (Ordinary Lambda Lists). 



*Symbols* in the KEYWORD *package* are, by definition, of *type* **keyword**. 



