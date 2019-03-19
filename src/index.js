module.exports = function check(str, bracketsConfig) {
    let open_br_stack=[], close_br_stack=[], stack=[];
    for(let i=0; i<bracketsConfig.length; i++)
    {
      open_br_stack.push(bracketsConfig[i][0]);
      close_br_stack.push(bracketsConfig[i][1]);
    }
    for(let j=0; j<str.length; j++)
    {
      if(open_br_stack[close_br_stack.indexOf(str[j])]===stack[stack.length-1] && stack.length>0) stack.pop();
      else stack.push(str[j]);
    }
    if(stack.length>0) return false;
    else return true;
}
/*module.exports = function check(str, bracketsConfig) {
  let stack=[];
  for(let i=0; i<str.length; i++)
  {
    console.log('i='+i)
    let ch=str[i];
    for(let j=0; j<bracketsConfig.length; j++)
    {
      if(str[i]===bracketsConfig[j][0]){
        stack.push(str[i]); 
        console.log(' push end of cycle');
        j=bracketsConfig.length;
      }
      else{
        let last=stack.pop();
        if(str[i]!==bracketsConfig[j][1]) 
        {
          console.log('false of close');
          return false;
        }
      }
    }
  }
  if(stack.length!==0) 
  {
    console.log('false of length');
    return false;
  }
  return true;
}*/
/*module.exports = function check(str, bracketsConfig) {
  let open=0, close=0;
  for(let i=0; i<str.length; i++){
  	let c=str[i];
  	if(bracketsConfig[c]) open++;
  	else close++;
  }
  if(open!=close){
  	return false;
  }
  else if(open<close) return false;
  else return true;
}*/
/*let task_item=str.split(' '); //разбивает объект на массив строк указанной подстрокой
  let empty_array=[]; 
  for(int i=0; i<task_item.length; i++)
  {
    for(int j=0; j<empty_array; j++)
    {
      if(emp)
      if(task_item[i]===bracketsConfig[j][0])
        empty_array.push(task_item[j][0]);
    }
  }*/