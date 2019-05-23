<?php

$logic['hira_sei']=$_POST['hira_sei'];
$logic['hira_mei']=$_POST['hira_mei'];
$logic['kan_sei']=$_POST['kan_sei'];
$logic['kan_mei']=$_POST['kan_mei'];
$logic['birthday']=$_POST['year'].$_POST['month'].$_POST['day'];

// 年月日のドロップダウン変えようかな。。
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