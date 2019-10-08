const express = require("express");

// database access using knex
const db = require("../data/dbConfig");

const router = express.Router();

router.get("/", (req, res) => {
  db.select("*")
    .from("accounts")
    .then(accounts => {
      res.status(200).json(accounts);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  db.select("*")
    .from("accounts")
    .where("id", "=", req.params.id)
    .then(account => {
      res.status(200).json(account);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  const accountData = req.body;
  db("accounts")
    .insert(accountData, "id")
    .then(ids => {
      res.status(200).json(ids);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.put("/:id", (req, res) => {
  db("accounts")
    .where("id", "=", req.params.id)
    .update(req.body)
    .then(put => {
      res.status(200).json(put);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.delete("/:id", (req, res) => {
  db("accounts")
    .where("id", "=", req.params.id)
    .del()
    .then(put => {
      res.status(200).json(put);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;
