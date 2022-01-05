import { logout } from "../firebase/config";

export const handleLogout = async () => {
  try {
    await logout();
  } catch (error) {
    alert("Error.");
  }
};
