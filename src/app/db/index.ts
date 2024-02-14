import User from "../modules/user/user.model";

const superAdminInfo = {
  fullName: "Adnan Sarkar",
  userName: "Adnan",
  role: "super-admin",
  email: "demo@gmail.com",
  password: "123456",
  phone: "01968196515",
  gender: "male",
  age: 24,
  profileImage:
    "https://res.cloudinary.com/dxljyilvl/image/upload/v1707061177/bleku332w7fxd7uu6nkd.png",
};

const seedSuperAdmin = async () => {
  // check is super admin is exists
  const superAdmin = await User.findOne({ role: "super-admin" });

  if (!superAdmin) {
    await User.create(superAdminInfo);
  }
};

export default seedSuperAdmin;
