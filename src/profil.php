<?php
session_start();
require 'config.php';

if (!isset($_SESSION['user_id'])) {
    header('Location: login.php');
    exit;
}

$message = '';

if (isset($_POST['action']) && $_POST['action'] === 'pseudo') {
    $pseudo = $_POST['pseudo'];
    $stmt   = $pdo->prepare("UPDATE clients SET pseudo = :pseudo WHERE id = :id");
    $stmt->execute([':pseudo' => $pseudo, ':id' => $_SESSION['user_id']]);
    $message = "Pseudo mis à jour.";
}

if (isset($_POST['action']) && $_POST['action'] === 'password') {
    $hash = md5($_POST['nouveau_mdp']);
    $stmt = $pdo->prepare("UPDATE clients SET password = :mdp WHERE id = :id");
    $stmt->execute([':mdp' => $hash, ':id' => $_SESSION['user_id']]);
    $message = "Mot de passe mis à jour.";
}

$stmt = $pdo->prepare("SELECT * FROM clients WHERE id = :id");
$stmt->execute([':id' => $_SESSION['user_id']]);
$client = $stmt->fetch();
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>CryptoBank — Mon profil</title>
    <style>
        body    { font-family: Arial, sans-serif; max-width: 600px; margin: 60px auto; }
        h1, h2  { color: #1a3a5c; }
        label   { display: block; margin-top: 12px; font-weight: bold; }
        input   { display: block; width: 100%; margin: 4px 0; padding: 8px; box-sizing: border-box; border: 1px solid #ccc; }
        button  { background: #1a3a5c; color: white; padding: 8px 16px; border: none; cursor: pointer; margin-top: 8px; }
        .ok     { color: green; }
        section { border: 1px solid #ddd; padding: 16px; margin: 20px 0; border-radius: 4px; }
    </style>
</head>
<body>
    <h1>🏦 CryptoBank — Mon profil</h1>
    <?php if ($message): ?><p class="ok"><?= $message ?></p><?php endif; ?>

    <section>
        <h2>Informations</h2>
        <p>Email : <strong><?= $client['email'] ?></strong></p>
        <p>Pseudo : <strong><?= $client['pseudo'] ?></strong></p>
    </section>

    <section>
        <h2>Modifier mon pseudo</h2>
        <form method="POST">
            <input type="hidden" name="action" value="pseudo">
            <label>Nouveau pseudo</label>
            <input type="text" name="pseudo" value="<?= $client['pseudo'] ?>">
            <button type="submit">Mettre à jour</button>
        </form>
    </section>

    <section>
        <h2>Changer mon mot de passe</h2>
        <form method="POST">
            <input type="hidden" name="action" value="password">
            <label>Nouveau mot de passe</label>
            <input type="password" name="nouveau_mdp">
            <button type="submit">Changer</button>
        </form>
    </section>

    <a href="dashboard.php">← Retour</a>
</body>
</html>
