<?php
session_start();
require 'config.php';

if (!isset($_SESSION['user_id'])) {
    header('Location: login.php');
    exit;
}

// Récupération des comptes de l'utilisateur connecté
$stmt_nav = $pdo->prepare("SELECT id, iban, solde FROM comptes WHERE client_id = :id");
$stmt_nav->execute([':id' => $_SESSION['user_id']]);
$mes_comptes = $stmt_nav->fetchAll();

// Sélection du compte à afficher
if (isset($_GET['compte_id'])) {
    $compte_id = (int) $_GET['compte_id'];
} elseif (!empty($mes_comptes)) {
    $compte_id = $mes_comptes[0]['id'];
} else {
    $compte_id = null;
}

$compte    = null;
$virements = [];

if ($compte_id !== null) {
    $stmt = $pdo->prepare(
        "SELECT comptes.*, clients.nom AS nom_titulaire
         FROM comptes
         JOIN clients ON clients.id = comptes.client_id
         WHERE comptes.id = :id
         AND comptes.client_id = :user_id"
    );
    $stmt->execute([
        ':id'      => $compte_id,
        ':user_id' => $_SESSION['user_id'],
    ]);
    $compte = $stmt->fetch();
   

    if ($compte) {
        $stmt2 = $pdo->prepare(
            "SELECT v.*, c.nom AS nom_dest
             FROM virements v
             LEFT JOIN clients c ON c.id = v.client_dest_id
             WHERE v.compte_source_id = :id
             ORDER BY v.date DESC LIMIT 10"
        );
        $stmt2->execute([':id' => $compte_id]);
        $virements = $stmt2->fetchAll();
    }
}
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>CryptoBank — Tableau de bord</title>
    <style>
        body  { font-family: Arial, sans-serif; max-width: 900px; margin: 40px auto; }
        h1    { color: #1a3a5c; }
        nav a { margin-right: 16px; color: #1a3a5c; }
        table { width: 100%; border-collapse: collapse; margin-top: 16px; }
        th    { background: #1a3a5c; color: white; padding: 8px; text-align: left; }
        td    { padding: 8px; border-bottom: 1px solid #ddd; }
        .solde { font-size: 1.8em; font-weight: bold; color: #1a3a5c; }
        ul    { list-style: none; padding: 0; }
        li    { margin: 6px 0; }
    </style>
</head>
<body>
    <h1>CryptoBank</h1>
    <nav>
        <a href="dashboard.php">Accueil</a>
        <a href="virement.php">Virement</a>
        <a href="import_releve.php">Importer un relevé</a>
        <a href="profil.php">Mon profil</a>
        <?php if (($_SESSION['role'] ?? '') === 'admin'): ?>
            <a href="admin.php">Administration</a>
        <?php endif; ?>
        <a href="logout.php">Déconnexion</a>
    </nav>
    <hr>

    <h2>Mes comptes</h2>
    <ul>
    <?php foreach ($mes_comptes as $c): ?>
        <li>
            <a href="dashboard.php?compte_id=<?= $c['id'] ?>">
                <?= $c['iban'] ?> — <?= number_format($c['solde'], 2, ',', ' ') ?> €
            </a>
        </li>
    <?php endforeach; ?>
    </ul>

    <hr>

    <?php if ($compte): ?>
        <h2>Détail — compte #<?= $compte_id ?></h2>
        <p>Titulaire : <strong><?= $compte['nom_titulaire'] ?></strong></p>
        <p class="solde"><?= number_format($compte['solde'], 2, ',', ' ') ?> €</p>
        <p>IBAN : <strong><?= $compte['iban'] ?></strong></p>

        <h3>Derniers mouvements</h3>
        <table>
            <tr><th>Date</th><th>Bénéficiaire</th><th>Montant</th><th>Statut</th></tr>
            <?php foreach ($virements as $v): ?>
            <tr>
                <td><?= $v['date'] ?></td>
                <td><?= $v['nom_dest'] ?></td>
                <td><?= number_format($v['montant'], 2, ',', ' ') ?> €</td>
                <td><?= $v['statut'] ?></td>
            </tr>
            <?php endforeach; ?>
        </table>
    <?php elseif (empty($mes_comptes)): ?>
        <p>Aucun compte associé à votre profil.</p>
    <?php endif; ?>
</body>
</html>