for FILE in *.md ; do 
    aider --message-file=/path/to/repo/cl-language-reference/FORMAT-FIX-INSTRUCTIONS.md $FILE 
done

# --model=gemini/gemini-2.0-flash-lite
# --model=gemini/gemini-2.5-flash-lite
# --model=gemini/gemini-2.0-flash