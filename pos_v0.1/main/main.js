'use strict';

function printReceipt(inputs) {
  //console.log('请在此实现练习要求，并改写该行代码。');

  var result='';
// barcode      name   unit  price
	var barcode_number=[];
 	for(var i=0,j=0;i<inputs.length;i++){
 		 barcode_number[j++] = inputs[i].barcode;
  	 	}
 	
 	barcode_number = barcode_number.sort();

//	console.log('barcode_number:'+barcode_number + '\n');

 	var arr=[];
 	arr.push(barcode_number[0]);
 	for(var i=1,t=0; i<barcode_number.length; i++){
 		if(barcode_number[i]===barcode_number[t]){
 			continue;
 		}else{
 			arr.push(barcode_number[i]);
 			t=i;
 		}
 	}

// 	console.log('arr: '+arr);

 	var count=[];
 	for(var i=0; i < arr.length; i++){
 		count[i]=0;
 	}

 	for(var i=0; i < arr.length;i++){
 		for(var j=0; j<barcode_number.length;j++){
 			if(arr[i] == barcode_number[j]){
 				count[i]++;
 			}
 		}
 	}

 //	console.log('count:' + count);

 	

 	result+='****/<没钱赚的商店/>收据****\n';
 	
 	
 	var text='';
 	var subtotal=[];
	
 	
 	for(var j=0;j<count.length;j++){
 		for(var i=0;i<inputs.length;i++){
 			if(inputs[i].barcode === arr[j]){
 				subtotal[j]=inputs[i].price*count[j];
 				text='名称：'+ inputs[i].name + ',数量：' + count[j] + inputs[i].unit+'，单价：'
 				+ inputs[i].price.toFixed(2)+'(元)，小计：'+ subtotal[j].toFixed(2)+'(元)\n';
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

