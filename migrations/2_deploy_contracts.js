const miContrato = artifacts.require("miContrato");

module.exports = function(deployer) {
  deployer.deploy(miContrato);
};
