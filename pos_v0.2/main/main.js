'use strict';

function printReceipt(inputs) {
  //console.log('请在此实现练习要求，并改写该行代码。');

	var result_barcode=[];
	result_barcode.push(inputs[0]);
 	for(var i=1,t=0; i<inputs.length; i++){
 		if(inputs[i] === inputs[t]){
 			continue;
 		}else{
 			result_barcode.push(inputs[i]);
 			t=i;
 		}
 	}
 //	console.log(result_barcode);
   
 	var count=[];
 	for(var i=0; i < result_barcode.length; i++){
 		count[i]=0;
 	}

 	for(var i=0; i < result_barcode.length;i++){
 		for(var j=0; j<inputs.length;j++){
 			if(result_barcode[i] == inputs[j]){
 				count[i]++;
 			}
 		}
 	}
 	console.log('\n');
 	var menu=loadAllItems();
 	

 	var result='';
	result+='****/<没钱赚的商店/>收据****\n';
 	
 	
 	var text='';
 	var subtotal=[];
	
 	
 	for(var j=0;j<count.length;j++){
 		for(var i=0;i<menu.length;i++){
 			if(menu[i].barcode === result_barcode[j]){
 				subtotal[j]=menu[i].price*count[j];
 				text='名称：'+ menu[i].name + ',数量：' + count[j] + menu[i].unit+'，单价：'
 				+ menu[i].price.toFixed(2)+'(元)，小计：'+ subtotal[j].toFixed(2)+'(元)\n';
 			}
 		}
 		result+=text;
 	}

 	
 	var sum=0;
 	for(var i in subtotal){
 		sum+=subtotal[i];
 	}
 	result=result + '----------------------------\n总计：' + sum.toFixed(2) + '\n***************************' ;

 	console.log(result);


 

}
