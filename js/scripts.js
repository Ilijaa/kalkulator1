$(document).ready(function () {
	
	var number = '';
	var op;
	var firstNum;
	
	$('.red').click(function() {
		if(number.length<12)
		{	
			var b = $(this).val();
			number += b;
		};
		$("#output").val(number);
	});
	
	$('#clear').click(function() {
		number = '';
		firstNum= ''
		$("#output").val(number);
	});
	
	
	$('#sabiranje').click(function () {

		firstNum = number;
		number='';
		op = '+';


	});

	$('#oduzimanje').click(function () {

		firstNum = number;
		number='';
		op = '-';



	});
	
	$('#mnozenje').click(function () {
	
		firstNum = number;
		number='';
		op = '*';



	});
	
	$('#deljenje').click(function () {

		firstNum = number;
		number='';
		op = '/';

	});
$('#equals').click(function () {
	
	firstNum=parseFloat(firstNum);
	number=parseFloat(number);
	var x;
	console.log(firstNum, number, op);
  if (op == '+')
	  {
			  x=firstNum+number;
			  $("#output").val(x);
	  } else
  if (op === '-') 
	  	  {
			  x=firstNum-number;
			  $("#output").val(x);	  
	  } else
  if (op === '*') 
	  	  {
			  x=firstNum*number;
			  $("#output").val(x);
	  } else
	  	  {
		  	  x=firstNum/number;
			  $("#output").val(x);
	  } 
});
});
