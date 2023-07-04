// Write your code here
import './index.css'

const TransactionItem = props => {
  const {eachObj, deleteItem} = props
  const {id, title, type, amount} = eachObj

  const onClickDelete = () => {
    deleteItem(id)
  }

  return (
    <li className="list-items">
      <div className="title">
        <p className="title-text">{title}</p>
      </div>
      <div className="amount">
        <p className="amount-text">Rs {amount}</p>
      </div>
      <div className="type">
        <p className="type-text">{type}</p>
      </div>
      <div>
        <button
          className="delete-button"
          type="button"
          onClick={onClickDelete}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            alt="delete"
            className="delete-icon"
          />
        </button>
      </div>
    </li>
  )
}

export default TransactionItem
