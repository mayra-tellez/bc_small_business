import { connect } from 'react-redux'
import Listing from '../Components/Listing'

const mapStateToProps = (state) => {
  return {
    business: state.business
  }
}

export default connect(mapStateToProps)(Listing)