import React from 'react'

const NewForm = ({
  onSubmit,
  name,
  setName,
  price,
  setPrice,
  location,
  setLocation,
  onChange
}) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="input-field">
        <input
          type="text"
          name="name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <label htmlFor="name">Name</label>
      </div>
      <div className="input-field">
        <input
          type="number"
          name="price"
          value={price}
          onChange={e => setPrice(e.target.value)}
        />
        <label htmlFor="price">Price</label>
      </div>
      <h6>ที่อยู่</h6>
      <div className="input-field">
        <input
          type="text"
          name="number"
          value={location.number}
          onChange={e => {
            setLocation({
              ...location,
              number: e.target.value
            })
          }}
        />
        <label htmlFor="number">Number</label>
      </div>
      <div className="input-field">
        <input
          type="number"
          name="moo"
          value={location.moo}
          onChange={e => {
            setLocation({
              ...location,
              moo: e.target.value
            })
          }}
        />
        <label htmlFor="moo">Moo</label>
      </div>
      <div className="input-field">
        <input
          type="text"
          name="soi"
          value={location.soi}
          onChange={e => {
            setLocation({
              ...location,
              soi: e.target.value
            })
          }}
        />
        <label htmlFor="soi">Soi</label>
      </div>
      <div className="input-field">
        <input
          type="text"
          name="street"
          value={location.street}
          onChange={e => {
            setLocation({
              ...location,
              street: e.target.value
            })
          }}
        />
        <label htmlFor="street">Street</label>
      </div>
      <div className="input-field">
        <input
          type="text"
          name="tambon"
          value={location.tambon}
          onChange={e => {
            setLocation({
              ...location,
              tambon: e.target.value
            })
          }}
        />
        <label htmlFor="tambon">Tambon</label>
      </div>
      <div className="input-field">
        <input
          type="text"
          name="amphoe"
          value={location.amphoe}
          onChange={e => {
            setLocation({
              ...location,
              amphoe: e.target.value
            })
          }}
        />
        <label htmlFor="amphoe">Amhpoe</label>
      </div>
      <div className="input-field">
        <input
          type="text"
          name="province"
          value={location.province}
          onChange={e => {
            setLocation({
              ...location,
              province: e.target.value
            })
          }}
        />
        <label htmlFor="province">Province</label>
      </div>
      <div className="input-field">
        <p>
          <label>Accepted Animals</label>
        </p>
        <p>
          <label>
            <input type="checkbox" name="dog" onChange={onChange} />
            <span>Dog</span>
          </label>
        </p>
        <p>
          <label>
            <input type="checkbox" name="cat" onChange={onChange} />
            <span>Cat</span>
          </label>
        </p>
        <p>
          <label>
            <input type="checkbox" name="rabbit" onChange={onChange} />
            <span>Rabbit</span>
          </label>
        </p>
        <p>
          <label>
            <input type="checkbox" name="bird" onChange={onChange} />
            <span>Bird</span>
          </label>
        </p>
        <p>
          <label>
            <input type="checkbox" name="reptile" onChange={onChange} />
            <span>Reptile</span>
          </label>
        </p>
      </div>
      <div className="row">
        <label>Images</label>
        <div className="file-field input-field">
          <div className="btn">
            <span>Browse</span>
            <input type="file" multiple onChange={onChange} />
          </div>

          <div className="file-path-wrapper">
            <input
              className="file-path validate"
              type="text"
              placeholder="Upload multiple files"
            />
          </div>
        </div>
      </div>
      <input
        type="submit"
        value="Submit"
        className="btn waves-effect waves-light"
      />
    </form>
  )
}

export default NewForm
