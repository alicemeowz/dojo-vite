import React from 'react'
import { ExpensesContainer, TableContainer } from '../Styles/Styles'


const Expenses = () => {
  return (
    <>
      <ExpensesContainer>
        <h1>Bills</h1>
        <TableContainer>
          <table>
            <tr>
              <th>Type</th>
              <th>Name</th>
              <th>Amount</th>
              <th>Due</th>
            </tr>
            <tr>
              <td>📱</td>
              <td>Phone (Alice)</td>
              <td>$30</td>
              <td>24th</td>
            </tr>
            <tr>
              <td>📱</td>
              <td>iPhone </td>
              <td>$10</td>
              <td>24th</td>
            </tr>
            <tr>
              <td>💳</td>
              <td>Discover (Alice) </td>
              <td>$95</td>
              <td>17th</td>
            </tr>
            <tr>
              <td>📺</td>
              <td>Discord Nitro (Alice)</td>
              <td>$10</td>
              <td>10th</td>
            </tr>
            <tr>
              <td>🌲</td>
              <td>Amazon</td>
              <td>$15</td>
              <td>25th</td>
            </tr>
            <tr>
              <td>💡</td>
              <td>Electric</td>
              <td>$88</td>
              <td>25th</td>
            </tr>
            <tr>
              <td>📶</td>
              <td>Internet</td>
              <td>$85</td>
              <td>26th</td>
            </tr>
            <tr>
              <td>📺</td>
              <td>YouTube</td>
              <td>$12</td>
              <td>27th</td>
            </tr>
            <tr>
              <td>📺</td>
              <td>Hulu+Disney</td>
              <td>$23</td>
              <td>6th</td>
            </tr>
            <tr>
              <td>📺</td>
              <td>HBO</td>
              <td>$7.99</td>
              <td>9th</td>
            </tr>
            <tr>
              <td>✒️</td>
              <td>Inkdrop (Tristan)</td>
              <td>$5</td>
              <td>12th</td>
            </tr>
            <tr>
              <td>🏋🏼‍♂️</td>
              <td>Youfit </td>
              <td>$30</td>
              <td>16th</td>
            </tr>
            <tr>
              <td>🥖</td>
              <td>Groceries </td>
              <td>$100</td>
              <td>♾️</td>
            </tr>
          </table>
          <table>
            <tr>
              <th>Alice/Month</th>
              <th>Tristan/Month</th>
            </tr>
            <tr>
              <td>$376</td>
              <td>$236</td>
            </tr>
          </table>
        </TableContainer>
      </ExpensesContainer>
    </>
  )
}

export default Expenses