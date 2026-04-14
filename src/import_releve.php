<?php
session_start();
require 'config.php';

if (!isset($_SESSION['user_id'])) {
    header('Location: login.php');
    exit;
}

$resultat = '';
$erreur   = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $url     = $_POST['url_releve'];
    $contenu = @file_get_contents($url);

    if ($contenu !== false) {
        $lignes   = array_filter(explode("\n", trim($contenu)));
        $resultat = count($lignes) . " ligne(s) importée(s).";
        $apercu   = $contenu;
    } else {
        $erreur = "Impossible de récupérer le fichier à l'URL fournie.";
    }
}
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>CryptoBank — Import de relevé</title>
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
    <h1>CryptoBank — Import de relevé</h1>
    <p>Importez votre relevé depuis votre ancienne banque en fournissant l'URL du fichier CSV.</p>

    <?php if ($resultat): ?><p class="ok"><?= $resultat ?></p><?php endif; ?>
    <?php if ($erreur):   ?><p class="ko"><?= $erreur   ?></p><?php endif; ?>
    <?php if (!empty($apercu)): ?>
        <pre style="background:#f4f4f4;padding:12px;overflow:auto;font-size:12px;border:1px solid #ccc"><?= htmlspecialchars($apercu, ENT_QUOTES, 'UTF-8') ?></pre>
    <?php endif; ?>

    <form method="POST">
        <label>URL du relevé (CSV)</label>
        <input type="text" name="url_releve" placeholder="https://monanciennebanque.fr/releve.csv">
        <button type="submit">Importer</button>
    </form>
    <br><a href="dashboard.php">← Retour</a>
</body>
</html>