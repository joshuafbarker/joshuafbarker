import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

// NavBar component
const NavBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
    transition: color 150ms ease-out;
    color: #4b4b4b;
    
    &:hover {
      color: #2b2b2b;
    }
  }
`;

// NavLink component
const NavLink = styled.a`
  padding: .5rem 1rem;
  margin: 0 .25rem;
  border-radius: .25rem;
  transition: background-color 150ms ease-out;
  text-decoration: none;
  color: #4b4b4b;
  font-weight: 600;


  &:hover {
    background-color: #cfcfcf;
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
        <NavLink href="#">Blog</NavLink>
      </div>
    </NavBar>
  );
};

export default Navigation;
