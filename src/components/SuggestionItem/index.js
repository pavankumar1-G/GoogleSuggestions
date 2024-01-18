// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionDetails, onUpdateSearchInput} = props
  const {suggestion} = suggestionDetails

  const onArrow = () => {
    onUpdateSearchInput(suggestion)
  }

  return (
    <li className="suggestion-item">
      <div className="suggestion-arrow-container">
        <p className="suggestion">{suggestion}</p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow-logo"
          onClick={onArrow}
        />
      </div>
    </li>
  )
}
export default SuggestionItem
