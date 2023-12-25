 



Figure 18–1 lists some *defined names* that are applicable to *hash tables*. The following rules apply to *hash tables*. 



– A *hash table* can only associate one value with a given key. If an attempt is made to add a second value for a given key, the second value will replace the first. Thus, adding a value to a *hash table* is a destructive operation; the *hash table* is modified. 



– There are four kinds of *hash tables*: those whose keys are compared with <DictionaryLink styled={true} term={"eq"}><b>eq</b></DictionaryLink>, those whose keys are compared with <DictionaryLink styled={true} term={"eql"}><b>eql</b></DictionaryLink>, those whose keys are compared with <DictionaryLink styled={true} term={"equal"}><b>equal</b></DictionaryLink>, and those whose keys are compared with <DictionaryLink styled={true} term={"equalp"}><b>equalp</b></DictionaryLink>. 



– *Hash tables* are created by <DictionaryLink styled={true} term={"make-hash-table"}><b>make-hash-table</b></DictionaryLink>. <DictionaryLink styled={true} term={"gethash"}><b>gethash</b></DictionaryLink> is used to look up a key and find the associated value. New entries are added to *hash tables* using <DictionaryLink styled={true} term={"setf"}><b>setf</b></DictionaryLink> with <DictionaryLink styled={true} term={"gethash"}><b>gethash</b></DictionaryLink>. <DictionaryLink styled={true} term={"remhash"}><b>remhash</b></DictionaryLink> is used to remove an entry. For example: 



(setq a (make-hash-table)) *→* #<HASH-TABLE EQL 0/120 32536573> 



(setf (gethash ’color a) ’brown) *→* BROWN 



(setf (gethash ’name a) ’fred) *→* FRED 



(gethash ’color a) *→* BROWN, <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm> 



(gethash ’name a) *→* FRED, <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm> 



(gethash ’pointy a) *→* NIL, <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm> 



In this example, the symbols color and name are being used as keys, and the symbols brown and fred are being used as the associated values. The *hash table* has two items in it, one of which associates from color to brown, and the other of which associates from name to fred. 



– A key or a value may be any <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



– The existence of an entry in the *hash table* can be determined from the *secondary value* returned by <DictionaryLink styled={true} term={"gethash"}><b>gethash</b></DictionaryLink>. 



|<p>**clrhash hash-table-p remhash gethash make-hash-table sxhash** </p><p>**hash-table-count maphash**</p>|

| :- |





**Figure 18–1. Hash-table defined names** 



Hash 



 



 



