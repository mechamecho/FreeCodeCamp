
function uniteUnique(arr) {
  var args=Array.from(arguments);
  var totalArray=[];

  for(var i=0; i<args.length;i++){
    totalArray=totalArray.concat(args[i]);
  }
  var result=args.reduce(function(a,v){

      for(var i=0; i<v.length; i++){
        if(!a.includes(v[i])){
          a.push(v[i]);
        }
      }
    return a;

  });
  return result;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
