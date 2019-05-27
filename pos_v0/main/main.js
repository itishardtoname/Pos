'use strict';

function printReceipt(inputs) {
//  // console.log('请在此实现练习要求，并改写该行代码。');
   var result='***<没钱赚的商店>收据***\n';
   var subtotal=[];
   for(var i in inputs){
   	subtotal[i]=inputs[i].count*inputs[i].price;

   	result=result+'名称：'+ inputs[i].name + '，数量：' + inputs[i].count + inputs[i].unit+'，单价：'
  				+ inputs[i].price.toFixed(2)+'(元)，小计：'+ subtotal[i].tofixed(2)+'(元)\n';  
}

  var sum=0;
 	for(var i in subtotal){
 		sum+=subtotal[i];
 	}
 	result=result + '----------------------------\n总计：' + sum.toFixed(2) + '\n***************************' ;

 	console.log(result);




}



