function gethistory() {
    return document.getElementById("history-value").innerText;
    
}
function printhistory(num) {
    document.getElementById("history-value").innerText=num;
    
}
function getoutput() {
    return document.getElementById("output-value").innerText;
    
}
function printoutput(num) {
    if (num=="") {
        document.getElementById("output-value").innerText=num;
    }
    else{
    document.getElementById("output-value").innerText=formater(num);
    }
}
function formater(num) {
    if(num=="-"){
        return "";
    }
    var n=Number(num);
    var value=n.toLocaleString("en");
    return value;
}
// printoutput("5600");
function revformat(num) {
   
    return Number(num.replace(/,/g,''));
}
var operator = document.getElementsByClassName("operator");
for(var i =0;i<operator.length;i++){
	operator[i].addEventListener('click',function(){
	if(this.id=='clear'){
        printhistory("");
        printoutput("");
    }
    else if(this.id=="backspace"){
        var output=revformat(getoutput()).toString();
        if(output){//if output has a value
            output= output.substr(0,output.length-1);
            printoutput(output);
        }
    }
    else{
        var ot=getoutput();
        var hy=gethistory();
        if(ot==""&&hy!=""){
            if(isNaN(hy[hy.length-1])){
                hy= hy.substr(0,hy.length-1);
            }
        }
        if(ot!="" || hy!=""){
            ot=ot==""?ot:revformat(ot);
            hy=hy+ot;
            if(this.id=="="){
                var result= eval(hy);
                printoutput(result);
                printhistory("");
            }
            else{
                hy=hy+this.id;
                printhistory(hy);
                printoutput("")
            }
        }
    }
		})
    }
var number = document.getElementsByClassName("number");
for(var i =0;i<number.length;i++){
	number[i].addEventListener('click',function(){
        var output=revformat(getoutput());
        if(output!=NaN){
            output=output+this.id;
            printoutput(output);
        }
		})
    }