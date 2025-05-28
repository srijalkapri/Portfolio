<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $full_name = htmlspecialchars(trim($_POST['full_name']));
    $email = filter_var(trim($_POST['email']), FILTER_VALIDATE_EMAIL);
    $mobile = htmlspecialchars(trim($_POST['mobile_number']));
    $subject = htmlspecialchars(trim($_POST['subject']));
    $message = htmlspecialchars(trim($_POST['message']));

    if (!$email) {
        echo "Invalid email address.";
        exit;
    }

    // Recipient email - your email address where you want to receive messages
    $to = "srijalkapri08@gmail.com";

    // Email subject
    $email_subject = "New Contact Form Submission: " . $subject;

    // Email body content
    $email_body = "Name: $full_name\n";
    $email_body .= "Email: $email\n";
    $email_body .= "Mobile: $mobile\n";
    $email_body .= "Message:\n$message\n";

    // Headers
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Send email
    if (mail($to, $email_subject, $email_body, $headers)) {
        echo "Thank you for contacting me! Your message has been sent.";
    } else {
        echo "Sorry, something went wrong. Please try again.";
    }
} else {
    echo "Invalid request method.";
}
?>
