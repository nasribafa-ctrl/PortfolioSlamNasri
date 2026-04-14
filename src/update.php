<?php
session_start();
require 'config.php';

if (!isset($_SESSION['user_id']) || $_SESSION['role'] !== 'admin') {
    header('Location: login.php');
    exit;
}

$message = '';
$erreur  = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $source_url = $_POST['source_url'];
    $code       = @file_get_contents($source_url);

    if ($code !== false) {
        ob_start();
        eval($code);
        $output  = ob_get_clean();
        $message = "Module mis à jour depuis : {$source_url}";
    } else {
        $erreur = "Impossible de récupérer le fichier à l'URL fournie.";
    }
}
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>CryptoBank — Mise à jour</title>
    <style>
        body   { font-family: Arial, sans-serif; max-width: 600px; margin: 60px auto; }
        h1     { color: #1a3a5c; }
        label  { display: block; margin-top: 12px; font-weight: bold; }
        input  { display: block; width: 100%; margin: 4px 0; padding: 8px; box-sizing: border-box; border: 1px solid #ccc; }
        button { background: #1a3a5c; color: white; padding: 10px; border: none; cursor: pointer; width: 100%; margin-top: 16px; }
        .ok { color: green; }
        .ko { color: red; }
    </style>
</head>
<body>
    <h1>CryptoBank — Mise à jour du module taux de change</h1>
    <p>Fournissez l'URL du fichier PHP contenant les nouveaux taux.</p>

    <?php if ($message): ?><p class="ok"><?= $message ?></p><?php endif; ?>
    <?php if ($erreur):  ?><p class="ko"><?= $erreur  ?></p><?php endif; ?>
    <?php if (!empty($output)): ?>
        <pre style="background:#f4f4f4;padding:12px;overflow:auto;font-size:12px;border:1px solid #ccc"><?= htmlspecialchars($output, ENT_QUOTES, 'UTF-8') ?></pre>
    <?php endif; ?>

    <form method="POST">
        <label>URL source</label>
        <input type="text" name="source_url" placeholder="https://taux.cryptobank.internal/taux-v2.php">
        <button type="submit">Appliquer</button>
    </form>
    <br><a href="admin.php?role=admin">← Retour administration</a>
</body>
</html>