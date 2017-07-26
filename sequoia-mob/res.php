<?
	$to = 'projectmanager4@silverduck.net';
	$subject = 'Заявка';
	$message = '
		<html>
			<head>
				<title>'.$subject.'</title>
			</head>
			<body>
				<p>ИМЯ: '.$_POST['name'].'</p>
				<p>ТЕЛЕФОН: '.$_POST['usrtel'].'</p>
				<br />
				<p>КОЛЛИЧЕСТВО ДЕРЕВЬЕВ: '.$_POST['tree-count'].'</p>
				<p>СРЕДНИЙ ДИАМЕТР: '.$_POST['diameter-size'].'</p>
				<br/>
				<p>ТРЕБУЕТСЯ ЗАВЕС: '.$_POST['curtains-1'].'</p>
				<p>РЯДОМ СТРОЕНИЕ: '.$_POST['curtains-2'].'</p>
				<p>РАСПИЛ НА ДРОВА: '.$_POST['curtains-3'].'</p>
				<p>ПЕРЕРАБОТКА В ЩЕПУ: '.$_POST['curtains-4'].'</p>
				<p>СУХОЕ ДЕРЕВО: '.$_POST['curtains-5'].'</p>
				<p>РЯДОМ ПРОВОДА: '.$_POST['curtains-6'].'</p>
				<p>РЯДОМ ЗАБОР: '.$_POST['curtains-7'].'</p>
				<p>РАСПИЛ НА ЭЛЕМЕНТЫ: '.$_POST['curtains-8'].'</p>
				<p>ТРЕБУЕТСЯ ВЫВОЗ: '.$_POST['curtains-9'].'</p>
				<p>ВЫЗВОВ НА СЕГОДНЯ: '.$_POST['curtains-10'].'</p>
				<br/>
				<p>Команда: '.$_POST['man'].'</p>
				<br/>
				<p>Цена: '.$_POST['size'].'</p>
			</body>
		</html>';
	$headers  = "Content-type: text/html; charset=utf-8 \r\n";
	$headers .= "From: Отправитель <from@example.com>\r\n";
	mail($to, $subject, $message, $headers);
?>