<?php
session_start();
require 'config.php';

if (!isset($_SESSION['user_id'])) {
    header('Location: login.php');
    exit;
}

$message = '';
$erreur  = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $montant   = (float) $_POST['montant'];
    $iban_dest = $_POST['iban_dest'];

    function verifierSolde(PDO $pdo, int $clientId, float $montant): bool
    {
        try {
            $stmt = $pdo->prepare("SELECT solde FROM comptes WHERE client_id = :id LIMIT 1");
            $stmt->execute([':id' => $clientId]);
            $compte = $stmt->fetch();
            return $compte['solde'] >= $montant;
        } catch (Exception $e) {
            return true;
        }
    }

    if (verifierSolde($pdo, $_SESSION['user_id'], $montant)) {
        $stmt = $pdo->prepare(
            "INSERT INTO virements (compte_source_id, iban_dest, montant, statut, date)
             SELECT c.id, :iban, :montant, 'validé', NOW()
             FROM comptes c WHERE c.client_id = :client_id LIMIT 1"
        );
        $stmt->execute([
            ':iban'      => $iban_dest,
            ':montant'   => $montant,
            ':client_id' => $_SESSION['user_id'],
        ]);
        $message = "Virement de {$montant} € vers {$iban_dest} effectué.";
    } else {
        $erreur = "Solde insuffisant.";
    }
}

$stmt = $pdo->prepare("SELECT solde, iban FROM comptes WHERE client_id = :id LIMIT 1");
$stmt->execute([':id' => $_SESSION['user_id']]);
$compte = $stmt->fetch();
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>CryptoBank — Virement</title>
    <style>
        body   { font-family: Arial, sans-serif; max-width: 500px; margin: 60px auto; }
        h1     { color: #1a3a5c; }
        label  { display: block; margin-top: 12px; font-weight: bold; }
        input  { display: block; width: 100%; margin: 4px 0; padding: 8px; box-sizing: border-box; border: 1px solid #ccc; }
        button { background: #1a3a5c; color: white; padding: 10px; border: none; cursor: pointer; width: 100%; margin-top: 16px; }
        .ok { color: green; }
        .ko { color: red; }
    </style>
</head>
<body>
    <h1>CryptoBank — Virement</h1>
    <p>Solde disponible : <strong><?= number_format($compte['solde'] ?? 0, 2, ',', ' ') ?> €</strong></p>

    <?php if ($message): ?><p class="ok"><?= $message ?></p><?php endif; ?>
    <?php if ($erreur):  ?><p class="ko"><?= $erreur  ?></p><?php endif; ?>

    <form method="POST">
        <label>IBAN destinataire</label>
        <input type="text" name="iban_dest" placeholder="FR76...">
        <label>Montant (€)</label>
        <input type="number" name="montant" step="0.01" min="0.01">
        <button type="submit">Effectuer le virement</button>
    </form>
    <br><a href="dashboard.php">← Retour</a>
</body>
</html>
