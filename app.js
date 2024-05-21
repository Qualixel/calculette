function calculatePrice() {
  const materialCost = parseFloat(document.getElementById('material-cost').value);
  const laborCost = parseFloat(document.getElementById('labor-cost').value);
  const overheadCost = parseFloat(document.getElementById('overhead-cost').value);
  const profitMargin = parseFloat(document.getElementById('profit-margin').value);

  if (isNaN(materialCost) || isNaN(laborCost) || isNaN(overheadCost) || isNaN(profitMargin)) {
    alert('Veuillez entrer des valeurs valides pour tous les champs.');
    return;
  }

  const totalCost = materialCost + laborCost + overheadCost;
  const sellingPrice = totalCost * (1 + profitMargin / 100);

  document.getElementById('result').textContent = `Prix de vente recommandé: ${sellingPrice.toFixed(2)} €`;
}
