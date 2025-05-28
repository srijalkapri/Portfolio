<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $fullName = htmlspecialchars($_POST["full_name"]);
    $email = htmlspecialchars($_POST["email"]);
    $mobileNumber = htmlspecialchars($_POST["mobile_number"]);
    $subject = htmlspecialchars($_POST["subject"]);
    $message = htmlspecialchars($_POST["message"]);
    
    // Recipient's email address (your Gmail)
    $to = "your-email@gmail.com"; // replace with your Gmail address
    $emailSubject = "New Contact Form Submission: " . $subject;

    // Email content
    $body = "Full Name: $fullName\n";
    $body .= "Email: $email\n";
    $body .= "Mobile Number: $mobileNumber\n\n";
    $body .= "Message:\n$message";

    // Set headers
    $headers = "From: $email";

    // Send email
    if (mail($to, $emailSubject, $body, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "Failed to send message.";
    }
}
?>
