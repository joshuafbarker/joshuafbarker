import styled from 'styled-components';
import Image from 'next/image';

const Wrapper = styled.div`
  padding: 1rem;

  h1 {
    font-weight: 800;
  }

  p {
    margin: .5rem 0;
  }
`;

const HeyThere = () => {
  return (
    <Wrapper>
      <h1>Hey there!</h1>
      <p>I am currently in the process of redoing my website.</p>
      <p>
        Want to chat? Shoot me an email at{' '}
        <a href="mailto:joshuafbarker@gmail.com">joshuafbarker@gmail.com</a> or
        hit me up on <a href="https://twitter.com/point_ix">twitter</a>.
      </p>
      <p>In the meantime, enjoy this GIF of Jon Snow.</p>
      <Image src="/snow.gif" alt="Jon Snow" width={450} height={252} />
    </Wrapper>
  );
};

export default HeyThere;
