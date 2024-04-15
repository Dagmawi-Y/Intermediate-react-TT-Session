#!/bin/bash


dir="exercises"

for file in $dir/*.js
do

  base=$(basename "$file" .js)


  touch "$dir/$base.css"


  echo -e "import './$base.css';\n$(cat $file)" > $file
done
