import { connect } from 'react-redux'
import Listing from '../Components/Listing'

const mapStateToProps = (state) => {
  console.log("***", state.business)
  return {
    business: state.business
  }
}

export default connect(mapStateToProps)(Listing)