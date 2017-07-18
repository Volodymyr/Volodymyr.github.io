<?
	$to = 'hello@silverduck.net';
	$subject = 'Скачать чек лист бесплатно';
	$message = '
		<html>
			<head>
				<title>'.$subject.'</title>
			</head>
			<body>
				<p>Email: '.$_POST['mail'].'</p>
			</body>
		</html>';
	$headers  = "Content-type: text/html; charset=utf-8 \r\n";
	$headers .= "From: Отправитель <hello@silverduck.net>\r\n";
	mail($to, $subject, $message, $headers);
?>