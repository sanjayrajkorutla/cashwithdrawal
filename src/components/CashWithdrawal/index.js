import {Component} from 'react'
import './index.css'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {
    amount: 2000,
  }

  decreaseAmount = value => {
    this.setState(prevState => ({amount: prevState.amount - value}))
  }

  render() {
    const {denominationsList} = this.props
    const {amount} = this.state
    return (
      <div className="bg">
        <div className="card">
          <div className="profile-cont">
            <div className="profile">S</div>
            <h1>Sarah Williams</h1>
          </div>
          <div className="balance-cont">
            <p className="balance">Your Balance</p>
            <p>{amount}</p>
          </div>
          <p className="rup">Rupees</p>
          <p>Withdraw</p>
          <p className="balance">CHOOSE SUM (IN RUPEES)</p>
          <ul className="buttins">
            {denominationsList.map(eachItem => (
              <DenominationItem
                userDetails={eachItem}
                decreaseAmount={this.decreaseAmount}
                key={eachItem.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal
