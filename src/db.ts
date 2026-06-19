import mongoose, { model, Schema } from "mongoose";

const connectionString = "mongodb://mongo:27017/testDB";

async function main() {
  await mongoose
    .connect(connectionString)
    .then(() => {
      console.log("The DB is Connnected");
    })
    .catch((e) => {
      console.log("Error Ocured", e);
    });
}
main();

interface IUser {
  name: string;
  age: number;
  email: string;
}

const userSchema: Schema = new Schema<IUser>({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: true },
});

export const user=model <IUser> ("user", userSchema) 