let num = []

for( let c=0; c < 10; c++){
    num.push(c)
}
/*
for(c =0; c < num.length;c++){
    console.log(num[c])
}
*/
for(c in num ){
    console.log(num[c])
}   

var pos = num.indexOf(7)
console.log(pos)