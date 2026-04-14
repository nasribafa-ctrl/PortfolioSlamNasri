<?php
session_start();
require 'config.php';

if (!isset($_SESSION['user_id'])) {
    header('Location: login.php');
    exit;
}

// Vérification du rôle directement en base de données
$stmt = $pdo->prepare('SELECT role FROM clients WHERE id = :id');
$stmt->execute([':id' => $_SESSION['user_id']]);
$client = $stmt->fetch();

if (!$client || $client['role'] !== 'admin') {
    header('Location: dashboard.php');
    exit;
}

$clients      = $pdo->query("SELECT id, nom, email, pseudo, role FROM clients")->fetchAll();
$comptes      = $pdo->query("SELECT * FROM comptes")->fetchAll();
$nb_virements = $pdo->query("SELECT COUNT(*) AS nb FROM virements")->fetch()['nb'];
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>CryptoBank — Administration</title>
    <style>
        body  { font-family: Arial, sans-serif; max-width: 1000px; margin: 40px auto; }
        h1    { color: #c0392b; }
        table { width: 100%; border-collapse: collapse; margin: 16px 0; }
        th    { background: #c0392b; color: white; padding: 8px; text-align: left; }
        td    { padding: 8px; border-bottom: 1px solid #ddd; }
    </style>
</head>
<body>
    <h1>Administration — CryptoBank</h1>

    <h2>Clients (<?= count($clients) ?>)</h2>
    <table>
        <tr><th>ID</th><th>Nom</th><th>Email</th><th>Pseudo</th><th>Rôle</th></tr>
        <?php foreach ($clients as $c): ?>
        <tr>
            <td><?= $c['id'] ?></td>
            <td><?= $c['nom'] ?></td>
            <td><?= $c['email'] ?></td>
            <td><?= $c['pseudo'] ?></td>
            <td><?= $c['role'] ?></td>
        </tr>
        <?php endforeach; ?>
    </table>

    <h2>Comptes (<?= count($comptes) ?>)</h2>
    <table>
        <tr><th>ID</th><th>Client ID</th><th>IBAN</th><th>Solde</th></tr>
        <?php foreach ($comptes as $c): ?>
        <tr>
            <td><?= $c['id'] ?></td>
            <td><?= $c['client_id'] ?></td>
            <td><?= $c['iban'] ?></td>
            <td><?= number_format($c['solde'], 2, ',', ' ') ?> €</td>
        </tr>
        <?php endforeach; ?>
    </table>

    <p>Virements enregistrés : <strong><?= $nb_virements ?></strong></p>
    <br><a href="update.php">Mise à jour du module taux de change</a>
    <br><a href="dashboard.php">← Retour</a>
</body>
</html>
