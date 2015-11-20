var sum=0;
for(var i=2; i<=4; i++){
    sum+=process.argv[i];
}
console.log(sum);