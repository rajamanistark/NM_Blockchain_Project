
const main = async () => {
  const FoodTracking = await hre.ethers.getContractFactory("FoodTracking");
  const foodTracking = await FoodTracking.deploy();

  await foodTracking.deployed();

  console.log( "Transaction deployed to:" ,foodTracking.address);
}

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

runMain();