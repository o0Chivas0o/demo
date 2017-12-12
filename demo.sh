if [ -d $1 ]; then
  echo 'error: dir exists'
  exit
else
  mkdir $1
  cd $1
  mkdir css js
  touch index.html && echo "<!DOCTYPE>;<title>Hello</title>;<h1>hi</h1>" > index.html
  touch css/style.css && echo "h1{color:red}" > css/style.css
  touch js/main.js && echo "var string = 'Hello World';alert(string)" > js/main.js
  echo 'success'
  exit
fi
