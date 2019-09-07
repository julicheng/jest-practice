const functions = {
  add: (num1, num2) => num1 + num2,
  isNull: () => null,
  checkValue: x => x,
  createUser: () => {
    const user = { firstname: "Juli" };
    user["lastname"] = "Cheng";
    return user;
  }
};

module.exports = functions;
