
function spinalCase(str) {
//   "It's such a fine line between stupid, and clever."
//   --David St. Hubbins
  var resultArray=[];
  var char;
  var strArray=str.split(/[-_\s]/gi);
  for (var i=0; i<strArray.length;i++){

    char=strArray[i][0].toUpperCase();
    strArray[i]=char+strArray[i].slice(1,strArray[i].length);

  }
  var newstr=strArray.join("");

  function upperToHyphenLower(match, offset, string) {
    return (offset ? '-' : '') + match.toLowerCase();
  }
  return newstr.replace(/[A-Z]/g, upperToHyphenLower);
}

spinalCase("Teletubbies say Eh-oh");
