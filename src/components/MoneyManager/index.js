import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
class MoneyManager extends Component {
  state = {
    updatedListItems: [],
    title: '',
    amount: '',
    type: 'Income',
    balance: 0,
    income: 0,
    expenses: 0,
  }

  updateTitle = event => {
    this.setState({
      title: event.target.value,
    })
  }

  updateAmount = event => {
    this.setState({
      amount: event.target.value,
    })
  }

  updateType = event => {
    this.setState({
      type: event.target.value,
    })
  }

  updateMoneyDetailsTab = () => {
    const {updatedListItems} = this.state
    const incomeList = updatedListItems.filter(
      eachObj => eachObj.type === 'Income',
    )
    const expensesList = updatedListItems.filter(
      eachObj => eachObj.type === 'Expenses',
    )
    const totalIncome = incomeList.reduce(
      (acc, currentObj) => acc + parseInt(currentObj.amount),
      0,
    )
    const totalExpenses = expensesList.reduce(
      (acc, currentObj) => acc + parseInt(currentObj.amount),
      0,
    )
    const totalBalance = totalIncome - totalExpenses

    this.setState({
      balance: totalBalance,
      income: totalIncome,
      expenses: totalExpenses,
    })
  }

  addListItem = () => {
    const {title, amount, type, updatedListItems} = this.state
    const newObj = {
      id: uuidv4(),
      title,
      amount,
      type,
    }
    const amountNum = parseInt(amount)
    if (amount !== '' && title !== '' && !Number.isNaN(amountNum)) {
      this.setState(
        {
          updatedListItems: [...updatedListItems, newObj],
          title: '',
          amount: '',
          type: 'Income',
        },
        () => {
          this.updateMoneyDetailsTab()
        },
      )
    }
  }

  deleteItem = id => {
    const {updatedListItems} = this.state
    const newList = updatedListItems.filter(eachObj => eachObj.id !== id)
    this.setState(
      {
        updatedListItems: newList,
      },
      () => {
        this.updateMoneyDetailsTab()
      },
    )
  }

  render() {
    const {
      title,
      amount,
      type,
      updatedListItems,
      balance,
      income,
      expenses,
    } = this.state

    return (
      <div className="bg-cont">
        <div className="total-cont">
          <div className="name-cont">
            <h1 className="name-text">Hi, Richard</h1>
            <p className="welocome-text">
              Welcome back to your{' '}
              <span className="span-text">Money Manager</span>
            </p>
          </div>
          <ul className="account-details-cont">
            <MoneyDetails
              balance={balance}
              income={income}
              expenses={expenses}
            />
          </ul>
          <div className="bottom-cont">
            <form className="form-cont">
              <h1 className="heading">Add Transaction</h1>
              <label htmlFor="title" className="lables">
                TITLE
              </label>
              <input
                type="text"
                id="title"
                placeholder="TITLE"
                className="input-elements"
                onChange={this.updateTitle}
                value={title}
              />
              <label htmlFor="amount" className="lables">
                AMOUNT
              </label>
              <input
                type="text"
                id="amount"
                placeholder="AMOUNT"
                className="input-elements"
                onChange={this.updateAmount}
                value={amount}
              />
              <label htmlFor="type" className="lables">
                TYPE
              </label>
              <select
                id="type"
                className="input-elements"
                value={type}
                onChange={this.updateType}
              >
                <option
                  value={transactionTypeOptions[0].displayText}
                  id={transactionTypeOptions[0].optionId}
                  defaultValue
                >
                  {transactionTypeOptions[0].displayText}
                </option>
                <option
                  value={transactionTypeOptions[1].displayText}
                  id={transactionTypeOptions[1].optionId}
                >
                  {transactionTypeOptions[1].displayText}
                </option>
              </select>
              <button
                className="add-btn"
                type="button"
                onClick={this.addListItem}
              >
                Add
              </button>
            </form>
            <div className="history-cont">
              <h1 className="heading">History</h1>
              <ul>
                <li className="column-header-tab">
                  <p className="perticular1">Title</p>
                  <p className="perticular2">Amount</p>
                  <p className="perticular3">Type</p>
                </li>{' '}
              </ul>
              <ul>
                {updatedListItems.map(eachObj => (
                  <TransactionItem
                    key={eachObj.id}
                    eachObj={eachObj}
                    deleteItem={this.deleteItem}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
