import { useSelector } from "react-redux";
import { selectEmail } from "../../redux/features/authSlice";

const AdminOnlyRoute = ({ children }) => {
  const userEmail = useSelector(selectEmail);

  if (userEmail === "dragonflyrn96@gmail.com") {
    return children;
  }
  return null;
};

export default AdminOnlyRoute;
