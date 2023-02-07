import './index.css'

const DenominationItem = props => {
  const {userDetails, decreaseAmount} = props
  const {value} = userDetails
  const onDecrease = () => {
    decreaseAmount(value)
  }
  return (
    <li>
      <button className="buttin" type="button" onClick={onDecrease}>
        {value}
      </button>
    </li>
  )
}
export default DenominationItem
