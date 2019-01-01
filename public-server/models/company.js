const db = require("../db/index.js");
const company = {};

company.getAllCompanies = (req, res, next) => {
  db
    .manyOrNone("SELECT * FROM companies")
    .then(companies => {
      res.locals.companies = companies;
      next();
    })
    .catch(error => {
      console.log("error from getAllCompanies model", error);
      next(error);
    });
};

company.getAllProducts = (req, res, next) => {
  db
    .manyOrNone("SELECT * from products WHERE company_name=$1", [
      req.params.company_name
    ])
    .then(products => {
      res.locals.products = products;
      next();
    })
    .catch(error => {
      console.log("error from getAllProducts model", error);
      next(error);
    });
};

company.getOneCompany = (req, res, next) => {
  db
    .one("SELECT * FROM companies WHERE id=$1", [req.params.id])
    .then(company => {
      res.locals.company = company;
      next();
    })
    .catch(error => {
      console.log("error from getOneCompany model", error);
      next(error);
    });
};

company.newCompany = (req, res, next) => {
  db
    .one(
      "INSERT INTO companies (name, features) VALUES ($1, $2) RETURNING id",
      [req.body.name, req.body.features]
    )
    .then(id => {
      res.locals.id = id;
      next();
    })
    .catch(error => {
      console.log("error from newCompany model", error);
      next(error);
    });
};

company.editCompany = (req, res, next) => {
  db
    .one("UPDATE companies SET name=$1, features=$2 where id=$3 RETURNING *", [
      req.body.name,
      req.body.features,
      req.params.id
    ])
    .then(company => {
      res.locals.company = company;
      next();
    })
    .catch(error => {
      console.log("error from editCompany model", error);
      next(error);
    });
};

company.deleteCompany = (req, res, next) => {
  db
    .none("DELETE from companies WHERE id=$1", [req.params.id])
    .then(() => {
      next();
    })
    .catch(error => {
      console.log("error from deleteCompany model", error);
      next(error);
    });
};

module.exports = company;
