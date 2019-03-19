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