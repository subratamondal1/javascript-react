run-javascript:
	# run javascript files with Node
	node ./src/index.js
	
run-tailwindcss:
	# run tailwindcss
	npx tailwindcss -i ./src/input.css -o ./src/output.css --watch