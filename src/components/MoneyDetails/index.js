// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {balance, income, expenses} = props
  return (
    <>
      <li className="details-list-item balance-style">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
            alt="balance"
            className="details-image"
          />
        </div>
        <div className="details-text-cont">
          <p className="title">Your Balance</p>
          <p className="money-in-rs" data-testid="balanceAmount">
            Rs {balance}
          </p>
        </div>
      </li>

      <li className="details-list-item income-style">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png "
            alt="income"
            className="details-image"
          />
        </div>
        <div className="details-text-cont">
          <p className="title">Your Income</p>
          <p className="money-in-rs" data-testid="incomeAmount">
            Rs {income}
          </p>
        </div>
      </li>

      <li className="details-list-item expenses-style">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
            alt="expenses"
            className="details-image"
          />
        </div>
        <div className="details-text-cont">
          <p className="title">Your Expenses</p>
          <p className="money-in-rs" data-testid="expensesAmount">
            Rs {expenses}
          </p>
        </div>
      </li>
    </>
  )
}

export default MoneyDetails
