import logo from '/vite.svg'

export default function Header () {
    const nowTime = new Date()

    return (
      <header>
        <img src={logo} alt="Logo" />
        {/* <h3>Learn React </h3> */}
  
        <span>Время сейчас: {nowTime.toLocaleTimeString()}</span>
      </header>
    )
  }