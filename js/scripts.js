$(document).ready(function () {
	
	var number = '';
	var op;
	var firstNum;
	
	$('#num0').click(function() {
		if(number.length<12)
		{
			number += '0';
		};
		$("#output").val(number);
	});
	
	
	$('#num1').click(function() {
		if(number.length<12)
		{
			number += '1';
		};
		$("#output").val(number);
	});
	
	$('#num2').click(function() {
	if(number.length<12)
		{
			number += '2';
		};
		$("#output").val(number);
	});
	$('#num3').click(function() {
		if(number.length<12)
		{
			number += '3';
		};
		$("#output").val(number);
	});
	$('#num4').click(function() {
		if(number.length<12)
		{
			number += '4';
		};
		$("#output").val(number);
	});
	$('#num5').click(function() {
		if(number.length<12)
		{
			number += '5';
		};
		$("#output").val(number);
	});
	$('#num6').click(function() {
		if(number.length<12)
		{
			number += '6';
		};
		$("#output").val(number);
	});
	$('#num7').click(function() {
		if(number.length<12)
		{
			number += '7';
		};
		$("#output").val(number);
	});
	$('#num8').click(function() {
		if(number.length<12)
		{
			number += '8';
		};
		$("#output").val(number);
	});
	$('#num9').click(function() {
		if(number.length<12)
		{
			number += '9';
		};
		$("#output").val(number);
	});
	

		$('#clear').click(function() {
		number = '';
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