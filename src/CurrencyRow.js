// import React from 'react';

// export default function CurrencyRow({
//   currencyOptions,
//   selectedCurrency,
//   onChangeCurrency,
//   amount,
//   onChangeAmount,
// }) {
//   return (
//     <div>
//       <input
//         type="number"
//         className="input"
//         value={amount}
//         onChange={onChangeAmount}
//       />
//       <select value={selectedCurrency} onChange={onChangeCurrency}>
//         {currencyOptions.map((currency) => {
//           return (
//             <option key={currency} value={currency}>
//               {currency}
//             </option>
//           );
//         })}
//       </select>
//     </div>
//   );
// }

import React from 'react';

export default function CurrencyRow(props) {
  const {
    currencyOptions,
    selectedCurrency,
    onChangeCurrency,
    onChangeAmount,
    amount,
  } = props;
  return (
    <div>
      <input
        type="number"
        className="input"
        value={amount}
        onChange={onChangeAmount}
      />
      <select value={selectedCurrency} onChange={onChangeCurrency}>
        {currencyOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
