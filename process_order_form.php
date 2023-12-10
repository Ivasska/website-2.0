<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $name = $_POST['name'];
  $tel = $_POST['tel'];
  $email = $_POST['email'];
	$message = $_POST['message'];

	// Отримайте інформацію про товари
  $products = json_decode($_POST['products'], true);

  // Відправка пошти або збереження в базу даних
  // Наприклад, ви можете відправити листа на електронну пошту:
  $to = 'info@yozhykwotboost.space';  // Адреса отримувача
  $subject = 'New Order';
  $message = "Name: $name\nEmail: $email\nPhone: $tel\nText: $message\n\nProducts:\n";
  foreach ($products as $product) {
    $productImage = $product['image'];
    $productName = $product['name'];
    $productPrice = $product['price'];
    $message .= "Product: $productName, Price: $productPrice\n";
  }

  $headers = "From: $email";

  if (mail($to, $subject, $message, $headers)) {
    $response = array('success' => true, 'message' => 'Thank you! We will contact you soon to confirm the order and clarify the details.');
  } else {
    $response = array('success' => false, 'message' => 'Error sending the message. Please try again later.');
  }

  echo json_encode($response);
}
?>