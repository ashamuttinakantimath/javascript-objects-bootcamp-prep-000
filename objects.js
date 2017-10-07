var playlist ={aaa:'uuu',
kkk:'oooo',
pppp:'yyyyy'
}
function updatePlaylist (obj,key,value){
   return obj[key]=value
}

console.log(updatePlaylist(playlist,'hhhh','rrrr'))

/*function updateObjectWithKeyAndValue(obj, key, value) {

  return Object.assign( obj, { [key]: value })
  return obj
}
  // it's important that we merge everything into
  // a new object such as the empty {}.
    // Otherwise, the object obj will be modified.
    // Test what happens if this line was written as:
    // return Object.assign(obj, { [key]: value })

const recipe = { eggs: 3 }
console.log(updateObjectWithKeyAndValue(recipe, 'chocolate', '1 cup'))*/
