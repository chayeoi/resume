import ThemeSwitch from '../ThemeSwitch'

type Props = {
  className?: string;
}

function Navbar(props: Props) {
  return (
    <nav {...props}>
      <ul sx={{ display: 'flex', fontSize: 3 }}>
        <li>
          <ThemeSwitch />
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
