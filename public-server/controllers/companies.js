const router = require("express").Router();
const company = require("../models/company");

router.get("/", company.getAllCompanies, (req, res) => {
  const { companies } = res.locals;
  res.json(companies);
});

router.get("/:company_name/products", company.getAllProducts, (req, res) => {
  const { products } = res.locals;
  res.json(products);
});

router.get("/:id", company.getOneCompany, (req, res) => {
  const { company } = res.locals;
  res.json(company);
});

router.post("/", company.newCompany, (req, res) => {
  res.json(res.locals);
});

router.put("/:id", company.editCompany, (req, res) => {
  const { company } = res.locals;
  res.json(company);
});

router.delete("/:id", company.deleteCompany, (req, res) => {
  console.log("company deleted");
});

module.exports = router;
