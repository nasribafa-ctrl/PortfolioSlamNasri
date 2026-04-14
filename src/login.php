<?php
session_start();
require 'config.php';

$erreur = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
 $email = $_POST['email'];
$pass  = $_POST['password'];

$stmt = $pdo->prepare('SELECT * FROM clients WHERE email = :email');
$stmt->bindParam(':email', $email, PDO::PARAM_STR);
$stmt->execute();
$client = $stmt->fetch();

if ($client && md5($pass) !== $client['password']) {
    $client = null;
}

    if ($client) {
        session_regenerate_id(true);
        $_SESSION['user_id'] = $client['id'];
        $_SESSION['email']   = $client['email'];
        $_SESSION['role']    = $client['role'];
        header('Location: dashboard.php');
        exit;
    }

    $erreur = 'Identifiants incorrects.';
}
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>CryptoBank — Connexion</title>
    <style>
        body   { font-family: Arial, sans-serif; max-width: 400px; margin: 80px auto; }
        h1     { color: #1a3a5c; }
        label  { display: block; margin-top: 12px; font-weight: bold; }
        input  { display: block; width: 100%; margin: 4px 0; padding: 8px; box-sizing: border-box; border: 1px solid #ccc; }
        button { background: #1a3a5c; color: white; padding: 10px; border: none; cursor: pointer; width: 100%; margin-top: 16px; }
        .erreur { color: red; }
    </style>
</head>
<body>
    <h1>CryptoBank</h1>
    <h2>Connexion</h2>
    <?php if ($erreur): ?>
        <p class="erreur"><?= $erreur ?></p>
    <?php endif; ?>
    <form method="POST">
        <label>Email</label>
        <input type="text" name="email">
        <label>Mot de passe</label>
        <input type="password" name="password">
        <button type="submit">Se connecter</button>
    </form>
</body>
</html>
