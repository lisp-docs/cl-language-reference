 

When the character #\Newline is written to an output file, the implementation must take the appropriate action to produce a line division. This might involve writing out a record or translating #\Newline to a CR/LF sequence. When reading, a corresponding reverse transformation must take place. 

