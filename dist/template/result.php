<?php
include('../functions.php');
include('./header.php');
?>

    <h1>Gulpでローカルストレージの使い方を確認</h1>

	<div class="input_form">
		<p class="title">ローカルストレージ sample結果</p>
		<div class="row">
			<?php var_dump($logic); ?>
		</div>
	</div>

<?php
include('./footer.php');
?>
