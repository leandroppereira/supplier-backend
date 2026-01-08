const express = require('express');

const app = express();
const PORT = 3000;

app.get('/suppliers', (req, res) => {
  const { id } = req.query;

  if (id === '0101') {
    return res.json({
      id: "0101",
      company_name: "Super portal",
      contact_name: "Mr Clean",
      phone: "(510) 555-5445"
    });
  }

  return res.status(404).json({
    error: "Supplier not found"
  });
});

app.listen(PORT, () => {
  console.log(`Supplier backend running on port ${PORT}`);
});