const express = require("express");
const app = express();
const port = 3005;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

var soap = require("soap");

const wsdlUrl = "https://api.zetasoftware.com/z.apis.asoaparticulosv3?WSDL";
const args = {
  DesarrolladorCodigo: "SGONZALEZ",
  DesarrolladorClave: "7CD8091216BFBE9E66815D44032AB0F1",
  EmpresaCodigo: "PIKESTORE",
  EmpresaClave: "FE0721B69CCC5299F7119E0951F8E98B",
  RolCodigo:3
};
soap.createClient(wsdlUrl, function (err, client) {
  client.QUERY(args, (err, result) => {
    console.log(`The API returned a sum of ${result}`);
  });
});
