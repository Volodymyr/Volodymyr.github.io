<?
	$to = 'shtraf@silverduck.net';
	$subject = 'Заказали консультацию по штрафам роскомнадзора';
	$message = '
		<html>
			<head>
				<title>'.$subject.'</title>
			</head>
			<body>
				<p>Телефон: '.$_POST['tel'].'</p>
			</body>
		</html>';
	$headers  = "Content-type: text/html; charset=utf-8 \r\n";
	$headers .= "From: Отправитель <shtraf@silverduck.net>\r\n";
	mail($to, $subject, $message, $headers);
?>