import { connect } from 'react-redux';
import * as components from '../components/Display'
import { about, experience, education, portfolio } from '../actions/actions.js'

export const MainContainer = connect(
  function mapStateToProps(state) {
    return {
      state: state
    }
  }, 
  function mapDispatchToProps(dispatch) {
    return {
      about: () => dispatch(about),
      experience: () => dispatch(experience), 
      education: () => dispatch(education),
      portfolio: () => dispatch(portfolio)
    }
  }
)(components.Display)