function LogIn () {
  return (
    <div id="login_form">
      <form>
        <label>
          Username:
          <input></input>
        </label>
        <label>
          Password:
          <input></input>
        </label>
        <button className='login_button' type="submit">Login</button>
      </form>
    </div>
  )
};

export default LogIn