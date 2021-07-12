const result = document.getElementById("result");

function edit(elem) {
  if(result.value === "0"){
    result.value = elem.value;
  }else if(result.value === "00"){
    result.value = elem.value;
  }else{
    result.value = result.value + elem.value;
  }
}

function calc() {
  result.value = new Function("return " + result.value)();
}

function calculation(elem) {
  if(result.value.slice(-1) === '+'){
    const l = result.value.slice(0,-1);
    result.value = l + elem.value;
  }else if(result.value.slice(-1) === '-'){
    const l = result.value.slice(0,-1);
    result.value = l + elem.value;
  }else if(result.value.slice(-1) === '*'){
    const l = result.value.slice(0,-1);
    result.value = l + elem.value;
  }else if(result.value.slice(-1) === '/'){
    const l = result.value.slice(0,-1);
    result.value = l + elem.value;
  }else{
    result.value = result.value + elem.value;
  }
}

function update() {
  result.value = "";
}