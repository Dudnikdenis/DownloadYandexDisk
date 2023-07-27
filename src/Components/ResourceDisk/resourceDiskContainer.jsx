import { connect } from "react-redux";
import { getResourceDisk } from "../../Redux/resourceDisk-reducer"; 
import ResourceDisk from "./resourceDisk";

let mapStateToProps = (state) => {
  return {
    userDisk: state.userDisk,
    resourceDisk: state.resourceDisk
  };
};

const ResourceDiskCotainer = connect(mapStateToProps, {getResourceDisk })(ResourceDisk);

export default ResourceDiskCotainer;