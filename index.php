<?php
include('functions.php');
include('header.php');
?>

    <h1>Gulpでローカルストレージの使い方を確認</h1>

	<div class="input_form">
		<p class="title">ローカルストレージ sample</p>
		<div class="row">
			<div class="col">
				<form method="post" action="result.php" name="inputForm" id="formId">
					<section>
					<label>性(ひらがな)</label>
						<input type="text" class="hira_sei" name="hira_sei" value="">
					</section>
					<section>
						<label>名(ひらがな)</label>
						<input type="text" class="hira_mei" name="hira_mei" value="">
					</section>
					<section>
						<label class="alignVertical">性(漢字)</label>
						<input type="text" class="kan_sei" name="kan_sei" value="">
					</section>
					<section>
						<label class="alignVertical">名(漢字)</label>
						<input type="text" class="kan_mei" name="kan_mei" value="">
					</section>
					<section>
						<label class="alignVertical">生年月日</label>
						<select class="year" name="year" value=""><?php optionLoop('1950',date('Y'),'1980');?></select>年
						<select class="month" name="month" value=""><?php optionLoop('1','12','1');?></select>月
						<select type="text" class="day" name="day" value=""><?php optionLoop('1','31','1');?></select>日
					</section>
					<input type="submit" class="btn result-btn" name="btn_confirm">
				</form>
				<p class="status"></p>
			</div>
		</div>
	
	</div>

<?php
include('footer.php');
?>