export default defineEventHandler(async (event) => {
  try {
    const users = await userSchema.find({});
    console.log(users);

    return users;
  } catch (error) {
    return error;
  }
});
