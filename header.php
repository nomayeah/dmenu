<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title></title>
	<meta name="description" content="">
	<meta name="keywords" content=""/>
	<meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=0">
	<?php // レスポンシブ対応
		$ua = $_SERVER['HTTP_USER_AGENT'];
		if ((strpos($ua, 'Android') !== false) && (strpos($ua, 'Mobile') !== false) || (strpos($ua, 'iPhone') !== false) || (strpos($ua, 'Windows Phone') !== false)) {
	?>
		<!-- スマホ用 -->
		<meta name="viewport" content="width=480,user-scalable=no">

		<?php } elseif ((strpos($ua, 'Android') !== false) || (strpos($ua, 'iPad') !== false)) { ?>

		<!-- タブレット用 -->
		<meta name="viewport" content="width=768,user-scalable=no">

		<?php } else { ?>

		<!-- PC用 -->
		<meta name="viewport" content="width=device-width"/>

	<?php } ?>
	<link rel="stylesheet" href="css/style.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
	<script type="text/javascript" src="js/index.js"></script>
</head>
<body>