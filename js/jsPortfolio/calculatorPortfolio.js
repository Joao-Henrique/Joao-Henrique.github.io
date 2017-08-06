$(document).ready(function(){
  
// STORES THE INPUTS
  var inputs=[""];
  
// STRING TO STORE CURRENT INPUT
  var totalString;
  
// OPERATORS ARRAY FOR VALIDATION WITHOUT THE "."
  var operators1= ["+", "-", "/", "*"];
  
// OPERATORS ARRAY FOR VALIDATION WITH THE "."
  var operators2= ["."];
  
// NUMBERS FOR VALIDATION
  var nums= [0,1,2,3,4,5,6,7,8,9];
  
// USER INPUT
  function getValue(input){
    if(operators2.includes(inputs[inputs.length-1]===true && input===".")){
      console.log("Duplicat '.'");
    }
    else if(inputs.length===1 && operators1.includes(input)===false){
      inputs.push(input);
    }
    else if(operators1.includes(inputs[inputs.length-1])===false){
      inputs.push(input);
    }
    else if(nums.includes(Number(input))){
      inputs.push(input);
    }
    update();
  }

// UPDATE
  function update(){
    totalString = inputs.join("");
    $("#calcSteps").html(totalString);
  }
  
// DISPLAYS TOTAL
  function getTotal(){
    totalString = inputs.join("");
    $("#calcSteps").html(eval(totalString));
  }
  
// AC FUNCTION
  $("a").on("click", function(){
    if(this.id==="calcDeleteAll"){
      inputs=[""];
      update();
    }

// CE FUNCTION    
    else if(this.id==="calcBackOne"){
      while(inputs.length>1){
        inputs.pop();
        update();
        break;
      }
    }

// TOTAL SIGN FUNCTION
    else if(this.id==="calcTotal"){
      getTotal();
    }

    
    else{
      if(inputs[inputs.length-1].indexOf("+", "-", "/", "*", ".")===-1){
         getValue(this.id);
         }
      else{
         getValue(this.id);
         }
    }
  })
});