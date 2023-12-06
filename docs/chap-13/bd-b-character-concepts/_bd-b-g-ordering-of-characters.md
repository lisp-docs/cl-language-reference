 



The total ordering on *characters* is guaranteed to have the following properties: 



*•* If two *characters* have the same *implementation-defined attributes*, then their ordering by **char**&lt; is consistent with the numerical ordering by the predicate &lt; on their code *attributes*. 



*•* If two *characters* differ in any *attribute*, then they are not **char=**. 



*•* The total ordering is not necessarily the same as the total ordering on the *integers* produced by applying **char-int** to the *characters*. 



*•* While *alphabetic*<sub>1</sub> *standard characters* of a given *case* must obey a partial ordering, they need not be contiguous; it is permissible for *uppercase* and *lowercase characters* to be interleaved. Thus (char&lt;= #\a x #\z) is not a valid way of determining whether or not x is a *lowercase character* . 



Of the *standard characters*, those which are *alphanumeric* obey the following partial ordering: 



A&lt;B&lt;C&lt;D&lt;E&lt;F&lt;G&lt;H&lt;I&lt;J&lt;K&lt;L&lt;M&lt;N&lt;O&lt;P&lt;Q&lt;R&lt;S&lt;T&lt;U&lt;V&lt;W&lt;X&lt;Y&lt;Z 



a&lt;b&lt;c&lt;d&lt;e&lt;f&lt;g&lt;h&lt;i&lt;j&lt;k&lt;l&lt;m&lt;n&lt;o&lt;p&lt;q&lt;r&lt;s&lt;t&lt;u&lt;v&lt;w&lt;x&lt;y&lt;z 



0&lt;1&lt;2&lt;3&lt;4&lt;5&lt;6&lt;7&lt;8&lt;9 



either 9&lt;A or Z&lt;0 



either 9&lt;a or z&lt;0 



This implies that, for *standard characters*, *alphabetic*<sub>1</sub> ordering holds within each *case* (*uppercase* and *lowercase*), and that the *numeric characters* as a group are not interleaved with *alphabetic characters*. However, the ordering or possible interleaving of *uppercase characters* and *lowercase characters* is *implementation-defined*. 







 



 



