import inquirer from "inquirer";

type AnsType = {
  UserGuess: number;
};

async function guessTheNumber() {
  const systemGeneratedNo = Math.floor(Math.random() * 100) + 1; // Generate a random number between 1 and 100
  let attempts = 0;

  while (true) {
    attempts++;
    const answers: AnsType = await inquirer.prompt([
      {
        type: "number",
        name: "UserGuess",
        message: "Write your guess number between 1 to 100",
      },
    ]);

    const { UserGuess } = answers;
    console.log(UserGuess, "userGuess", systemGeneratedNo, "sys");

    if (UserGuess === systemGeneratedNo) {
      console.log(`Hurray! Your answer is correct. You win in ${attempts} attempts!`);
      break;
    } else {
      console.log("Retry. Try again.");
    }
  }
}

guessTheNumber();
