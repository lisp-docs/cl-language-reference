 

The total ordering on *characters* is guaranteed to have the following properties: 

*•* If two *characters* have the same *implementation-defined attributes*, then their ordering by **char**&#60; is consistent with the numerical ordering by the predicate &#60; on their code *attributes*. 

*•* If two *characters* differ in any *attribute*, then they are not **char=**. 

*•* The total ordering is not necessarily the same as the total ordering on the *integers* produced by applying **char-int** to the *characters*. 

*•* While *alphabetic*&#60;sub&#62;1&#60;/sub&#62; *standard characters* of a given *case* must obey a partial ordering, they need not be contiguous; it is permissible for *uppercase* and *lowercase characters* to be interleaved. Thus (char&#60;= #\a x #\z) is not a valid way of determining whether or not x is a *lowercase character* . 

Of the *standard characters*, those which are *alphanumeric* obey the following partial ordering: 

A&#60;B&#60;C&#60;D&#60;E&#60;F&#60;G&#60;H&#60;I&#60;J&#60;K&#60;L&#60;M&#60;N&#60;O&#60;P&#60;Q&#60;R&#60;S&#60;T&#60;U&#60;V&#60;W&#60;X&#60;Y&#60;Z 

a&#60;b&#60;c&#60;d&#60;e&#60;f&#60;g&#60;h&#60;i&#60;j&#60;k&#60;l&#60;m&#60;n&#60;o&#60;p&#60;q&#60;r&#60;s&#60;t&#60;u&#60;v&#60;w&#60;x&#60;y&#60;z 

0&#60;1&#60;2&#60;3&#60;4&#60;5&#60;6&#60;7&#60;8&#60;9 

either 9&#60;A or Z&#60;0 

either 9&#60;a or z&#60;0 

This implies that, for *standard characters*, *alphabetic*&#60;sub&#62;1&#60;/sub&#62; ordering holds within each *case* (*uppercase* and *lowercase*), and that the *numeric characters* as a group are not interleaved with *alphabetic characters*. However, the ordering or possible interleaving of *uppercase characters* and *lowercase characters* is *implementation-defined*. 



 

 

