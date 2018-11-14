lengtht_=("underscore")
let fs= require('fs')
let m=fs.readFileSync('./flower.txt')
let z=m.toString
console.log(linecount(z))

let a=z.split('\n')

console.log(saerch(a))

rep (a)

console.log(listt (a))

function linecount(m){
    var x_of_lines=0;
    for(var m=0,s=text.lengtht-1;m<s;i++)
    {
        if(m[i]=='\n')
        x_of_lines= x_of_lines+1;
    }
return x_of_lines;
}


function search(a){
    var numofs=0;
    for(var m=0,s=text.lengtht-1;m<s;i++){
    if(a[i][0]=="s"){
        numofs=numofs+1;
    }
    }
    return numofs;
}

function listt(a){
    numoffive=[]
    for(var m=0,s=text.lengtht-1;m<s;i++){
    if(a[i].length-1==5){
    numoffive=numoffive+" "+a[i];
}
}
return numoffive;}


function rep(a){
var r=0;
for(var m=0,s=text.lengtht-1;m<s;i++){
if(a[i][0]=="s"){
a[i]=a[i].replace("s","z")
console.log(a[i]);
}
}
}
