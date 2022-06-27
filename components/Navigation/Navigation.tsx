import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

// NavBar component
const NavBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 0;
`;

// PictureLink Component
const PictureLink = styled.div`
  display: flex;
  align-items: center;

  img {
    border-radius: 9999px;
  }

  a {
    position: relative;
    margin-left: 1rem;
    font-size: 1.5rem;
    text-decoration: none;
    font-weight: 800;
    color: #2b2b2b;
    transition: color 150ms ease-out;
  }

  a:hover {
    color: #4b4b4b;
  }
`;

// Navigation Component
const Navigation = () => {
  return (
    <NavBar>
      <PictureLink>
        <Image
          src="/images/me.jpg"
          width={75}
          height={75}
          alt="Joshua Barker"
        />
        <Link href="/">jb.</Link>
      </PictureLink>
      <div>
        <a href="#">link 1</a>
        <a href="#">link 2</a>
        <a href="#">link 3</a>
      </div>
    </NavBar>
  );
};

export default Navigation;
