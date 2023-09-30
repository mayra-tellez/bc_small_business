import { connect } from 'react-redux';
import AddListing from '../Components/AddListing';
import { addListing } from '../Redux/Actions'

const mapStateToProps = (state) => {
  return {
    listings: state.listings
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addListing: (listing) => dispatch(addListing(listing))
  }
}

export default connect (mapStateToProps, mapDispatchToProps)(AddListing);