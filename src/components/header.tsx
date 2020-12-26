import { Link } from 'gatsby'

type Props = {
  title?: string
}

const Header = ({ title = '' }: Props) => (
  <header>
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
        >
          {title}
        </Link>
      </h1>
    </div>
  </header>
)

export default Header
