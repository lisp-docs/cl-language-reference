**2.4.8 Sharpsign** 

*Sharpsign* is a *non-terminating dispatching macro character* . It reads an optional sequence of digits and then one more character, and uses that character to select a *function* to run as a *reader macro function*. 

The *standard syntax* includes constructs introduced by the # character. The syntax of these constructs is as follows: a character that identifies the type of construct is followed by arguments in some form. If the character is a letter, its *case* is not important; #O and #o are considered to be equivalent, for example. 

Certain # constructs allow an unsigned decimal number to appear between the # and the character. 

The *reader macros* associated with the *dispatching macro character* # are described later in this section and summarized in Figure 2–19.  



|**dispatch char purpose dispatch char purpose**|
| :- |
|\<p\>Backspace signals error \{ undefined\* Tab signals error \} undefined\* Newline signals error + read-time conditional Linefeed signals error - read-time conditional Page signals error . read-time evaluation Return signals error / undefined Space signals error A, a array \</p\>\<p\>! undefined* B, b binary rational " undefined C, c complex number # reference to = label D, d undefined $ undefined E, e undefined % undefined F, f undefined & undefined G, g undefined ’ function abbreviation H, h undefined ( simple vector I, i undefined ) signals error J, j undefined * bit vector K, k undefined , undefined L, l undefined : uninterned symbol M, m undefined ; undefined N, n undefined \< signals error O, o octal rational = labels following object P, p pathname \> undefined Q, q undefined ? undefined* R, r radix-\<i\>n\</i\> rational @ undefined S, s structure [ undefined* T, t undefined \ character object U, u undefined ] undefined* V, v undefined \<i\>\<sup\>∧\</sup\>\</i\> undefined W, w undefined undefined X, x hexadecimal rational \</p\>\<p\>‘ undefined Y, y undefined | balanced comment Z, z undefined ~ undefined Rubout undefined\</p\>|


**Figure 2–19. Standard # Dispatching Macro Character Syntax** 

The combinations marked by an asterisk (\*) are explicitly reserved to the user. No *conforming implementation* defines them. 

Note also that *digits* do not appear in the preceding table. This is because the notations #0, #1, ..., #9 are reserved for another purpose which occupies the same syntactic space. When a *digit* follows a *sharpsign*, it is not treated as a dispatch character. Instead, an unsigned integer argument is  



accumulated and passed as an *argument* to the *reader macro* for the *character* that follows the digits. For example, #2A((1 2) (3 4)) is a use of #A with an argument of 2. 

