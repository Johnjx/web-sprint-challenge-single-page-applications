import React from "react";

const OrderForm = (props) => {
    const { values, change, errors, submit } = props;

    const onChange = evt => {
        const { name, value, checked, type } = evt.target;
        const valueToUse = type === "checkbox"? checked: value;
        change(name, valueToUse);
    }

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    return (
        <form id="pizza-form" onSubmit={onSubmit}>
            <h2>Build Your Own Pizza</h2>
            <div className='form-group names'>
                <h4>Enter your Name</h4>
                <div className="errors">{errors.name}</div>
                <label>Name
                    <input
                        id="name-input"
                        name="name"
                        type="text"
                        value={values.name}
                        onChange={onChange}
                    />
                </label>
            </div>
            <div className='form-group dropdowns'>
                <h4>Choice of Size</h4>
                <div className="errors">{errors.size}</div>
                <label>Size
                    <select
                        id="size-dropdown"
                        name="size"
                        value={values.size}
                        onChange={onChange}
                    >
                        <option value="">Select</option>
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                    </select>
                </label>
            </div>
            <div className='form-group checkboxes'>
                <h4>Add Toppings</h4>
                <label>Pepperoni
                    <input
                        type="checkbox"
                        name="pepperoni"
                        checked={values.pepperoni}
                        onChange={onChange}
                    />
                </label>
                <label>Sausage
                    <input
                        type="checkbox"
                        name="sausage"
                        checked={values.sausage}
                        onChange={onChange}
                    />
                </label>
                <label>Bacon
                    <input
                        type="checkbox"
                        name="bacon"
                        checked={values.bacon}
                        onChange={onChange}
                    />
                </label>
                <label>Chicken
                    <input
                        type="checkbox"
                        name="chicken"
                        checked={values.chicken}
                        onChange={onChange}
                    />
                </label>
            </div>
            <div className='form-group instructions'>
                <h4>Special Instructions</h4>
                <label>Details
                    <input
                        id="special-text"
                        name="special"
                        type="text"
                        placeholder="Anything else you'd like to add?"
                        value={values.special}
                        onChange={onChange}
                    />
                </label>
            </div>
            <div className='form-group submit'>
            <button id="order-button">Add to Order</button>
            </div>
       </form>
       
    )

}

export default OrderForm