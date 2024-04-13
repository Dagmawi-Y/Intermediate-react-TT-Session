#!/bin/bash

# Directory where your exercise files are located
dir="exercises"

# Loop over all JavaScript files in the directory
for file in $dir/*.js
do
  # Get the base name of the file (without extension)
  base=$(basename "$file" .js)

  # Create a new CSS file with the same base name
  touch "$dir/$base.css"

  # Add an import statement at the top of the JavaScript file
  echo -e "import './$base.css';\n$(cat $file)" > $file
done