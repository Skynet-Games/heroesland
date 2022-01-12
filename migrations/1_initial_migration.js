const BoxNft = artifacts.require("./nft/BoxNft");

const admin = "0x236Da98d374D4e7821968433C77eFD69819c3cb3";

module.exports = async function(deployer) {
  await deployer.deploy(BoxNft);
  let boxNft = await BoxNft.deployed();
  console.log("xpsToken.address:", boxNft.address);

  // await boxNft.mint(admin, 1, 1, 1000);//hero common
  // await boxNft.mint(admin, 1, 2, 2000);//hero epic
  // await boxNft.mint(admin, 1, 3, 3000);//hero legendary
  // await boxNft.mint(admin, 2, 1, 200);//gear common
  // await boxNft.mint(admin, 2, 2, 500);//gear epic
  // await boxNft.mint(admin, 2, 3, 1000);//gear legendary

};
