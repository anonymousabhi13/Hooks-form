import React, { useState } from 'react';
import './App.css';
const App = () => {
  const [errros, seterrors] = useState({
    email: '',
    password: '',
    address: '',
    city: ''
  });

  const [data, setdata] = useState({
    email: '',
    password: '',
    address: '',
    city: ''
  })

  const submithandler = (e) => {
    e.preventDefault();
    if (data.email.includes('@' && '.')) { console.log("shi hai") }
    else {
      seterrors({ email: 'invalid email' })
    }
  }
  const emailchange = (e) => {
    console.log(data.email);

    setdata({ ...data, email: e.target.value })
  }
  const passwordchange = (e) => {
    console.log(data.password);
    setdata({ ...data, password: e.target.value })

  }
  const addresschange = (e) => {
    console.log(data.address);
    setdata({ ...data, address: e.target.value })

  }
  const citychange = (e) => {
    console.log(data.city);
    setdata({ ...data, city: e.target.value })

  }
  console.log(data)
  return <form className="row g-3  my-5 mx-5 col-md-4  m-auto" onSubmit={submithandler}>
    <div className="col-md-6">
      <input
        type="text"
        className="form-control"
        onChange={emailchange}
        value={data.email}
        name='email'
        autoComplete='off'
        placeholder='email'

      />
      <label htmlFor="inputEmail4" className="form-label" id='email'>{errros.email}</label>
    </div>
    <div className="col-md-6">
      <input
        type="password"
        className="form-control"
        onChange={passwordchange}
        value={data.password}
        name='password'
        autoComplete='off'
        placeholder='password'

      />
      <label htmlFor="inputPassword4" className="form-label">Password</label>
    </div>
    <div className="col-12">
      <input
        type="text"
        className="form-control"
        placeholder="address"
        onChange={addresschange}
        value={data.address}
        name='address'
        autoComplete='off'

      />
      <label htmlFor="inputAddress" className="form-label" id='address'>Address</label>
    </div>

    <div className="col-md-6">
      <input
        type="text"
        className="form-control"
        onChange={citychange}
        value={data.city}
        name='city'
        autoComplete='off'
        placeholder='city'
      />
      <label htmlFor="inputCity" className="form-label">City</label>
    </div>
    <div className="col-12">
      <button
        type="submit"
        className="btn btn-primary"

      >Sign in</button>
    </div>
  </form>
    ;
};

export default App;
