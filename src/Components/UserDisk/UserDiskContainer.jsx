import { connect } from "react-redux";
import UserDisk from './UserDisk'
import { getUserDisk } from "../../Redux/userDisk-reducer"; 

let mapStateToProps = (state) => {
  return {
    userDisk: state.userDisk
  };
};

const UserDiskCotainer = connect(mapStateToProps, {getUserDisk })(UserDisk);

export default UserDiskCotainer;