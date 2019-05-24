<?php

if(!empty($_POST['month'])){
	$moji['month']=strlen($_POST['month']);	
	if($moji['month'] === 1){
		$month = '0'.$_POST['month'];
	}
}
if(!empty($_POST['day'])){
	$moji['day']=strlen($_POST['day']);	
	if($moji['day'] === 1){
		$day = '0'.$_POST['day'];
	}
}

$logic['name']=$_POST['name'];
$logic['hira_sei']=$_POST['hira_sei'];
$logic['hira_mei']=$_POST['hira_mei'];
$logic['kan_sei']=$_POST['kan_sei'];
$logic['kan_mei']=$_POST['kan_mei'];
$logic['birthday']=$_POST['year'].$month.$day;

function optionLoop($start, $end, $value = null){
	for($i = $start; $i <= $end; $i++){
		if(isset($value) && $value == $i){
			echo "<option value=\"{$i}\" selected=\"selected\">{$i}</option>";
		}else{
			echo "<option value=\"{$i}\">{$i}</option>";
		}
	}
}

?>