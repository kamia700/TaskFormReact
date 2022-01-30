import React from 'react';

function Form({ value, text, onInputChange, onRadioChange, onClickSave, onClickLoad }) {
  
  return (
    <div className="form-wrap">
      <form action="">
        <input type="text" name="text" value={text || ""}className="text-input" onChange={onInputChange}/>
        <div className="radioBtns-block">
          <input className="radio" type="radio" 
            id="usd"
            name="radio" 
            value="usd"
            checked={value === "usd"}
            onChange={onRadioChange} />
          <label htmlFor="usd">USD</label>
      
          <input className="radio" type="radio" 
            id="rub"
            name="radio" 
            value="rub"
            checked={value === "rub"}
            onChange={onRadioChange} />
          <label htmlFor="rub">RUB</label>
      
          <input className="radio" type="radio" 
            id="eur"
            name="radio" 
            value="eur"
            checked={value === "eur"}
            onChange={onRadioChange} />
          <label htmlFor="eur">EUR</label>
        </div>
        <div>
          <button className="save" onClick={onClickSave}>Save</button>
          <button className="load" onClick={onClickLoad}>Load</button>
      </div>
      </form>
    </div>
  );
}

export default Form;