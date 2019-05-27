'use strict';

//TODO: 请在该文件中实现练习要求并删除此注释

'use strict';
//TODO: 请在该文件中实现练习要求并删除此注释

function printReceipt(tags){
	let items = Item.all()  //所有商品是信息
	let fun = Promotion.all();  //买二送一的条码
	let promotions = fun[0].barcodes;
	let new_tags = Updata_Tags(tags); //处理过后的条形码 
	let count = Statistics(new_tags);  //商品数量
	let kind = Kind(new_tags);   //商品种类s

	var sale_result=[];
	let subtotal = Subtotal(items,promotions,kind,count,sale_result);//小计

	let printDate = getDate();

	let result = print(items,promotions,count,kind,sale_result,subtotal,printDate);
	

	console.log(result);
}
function Updata_Tags(tags){
	let arr=[];
	let New_arr=[];
	let specail=[];
	console.log("\n");
	for(let i in tags){
		arr.push(tags[i].split("-"));
		 if(arr[i].length > 1){
		 	specail=arr[i];
		 	arr.splice(i,1,"");//这个有bug！
		}
		if(arr[i][0]!== undefined){
			New_arr.push(arr[i][0]);
		}
	}
	
	for(let j=0;j<Number(specail[1]);j++){
		New_arr.push(specail[0]);
	}
	return New_arr.sort();
}

function Statistics(new_tags){
	let arr = [];
	let count=1;

	for(var i=0;i<new_tags.length;i++){
		if(new_tags[i] === new_tags[i+1]){
			count++;
		}else{
			arr.push(count);
			count=1;
		}
	}
	return arr;
}

function Kind(new_tags){
	var arr=[];
	arr[0]=new_tags[0]
	for(var i=1,t=0;i<new_tags.length;i++){
		if(new_tags[t] == new_tags[i]){
			continue;
		}else{
			arr.push(new_tags[i]);
			t=i;
		}
	}
	return arr.sort();
}

function Subtotal(items,promotions,kind,count,sale_result){
	
	let  items_price=[];
	let  result=[];
	for(var i in items){
		for(var j in kind){
			if(items[i].barcode === kind[j]){
				items_price.push(items[i].price);
			}
		}
	}
	
   for(var i in kind){
   	  if(promotions.indexOf(kind[i]) >= 0){
   	  	let t= count[i]%3;
   	    let t_price=  Math.floor(count[i]/3)*2*items_price[i]+t*items_price[i];
   	  	sale_result.push( count[i]*items_price[i] - t_price);

   	  	result.push(t_price);
   	  }else{
   	  	result.push( count[i]*items_price[i]);
   	  }
   }
	
   return result;

}

function print(items,promotions,count,kind,sale_result,subtotal,printDate){
	 let result='';
	 let t='';
	 result += "***<没钱赚商店>收据***\n打印时间："+printDate+'\n'+'----------------------\n';
	
	
	for(var j in kind){
		for(var i in items){
			if( items[i].barcode === kind[j]){
				t =  "名称：" + items[i].name + "，数量：" + count[j] + items[i].unit + "，单价：" 
				    + items[i].price.toFixed(2) + "(元)，小计：" + subtotal[j].toFixed(2) + "(元)\n";
			}
		}
		result += t;
	}
	result+='----------------------\n';

	let sum=0;
	for(var i in subtotal){
		sum+=subtotal[i];
	}

	let pre_sum=0;
 	for(var i in sale_result){
		pre_sum+=sale_result[i];
	}

	result += "总计："+ sum.toFixed(2) +"(元)\n节省：" + pre_sum.toFixed(2)+"(元)\n**********************";


	return result;
}


function getDate(){
	 let date = new Date(),
	 	 year = date.getFullYear(),
	 	 month = date.getMonth()+1,
	 	 day = date.getDate(),
	 	 hour = date.getHours(),
	 	 minutes = date.getMinutes(),
	 	 second = date.getSeconds();
	let result='';

	result=year+'年'+zeroFill(month)+'月'+zeroFill(day)+'日 '+zeroFill(hour)+':'+zeroFill(minutes)+':'+zeroFill(second);
	return result;
}


function zeroFill(value){
	return value < 10 ? '0' + value : value; 
}
