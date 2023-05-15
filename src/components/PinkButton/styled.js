import styled from 'styled-components'

export const Container = styled.button`
  width: 161px;
  height: 44.86px;
  margin: ${(props) => (props.center ? '75px auto' : '')};

  font-weight: 600;
  font-size: 0.90125rem;
  line-height: 1.351875rem;

  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 12px;

  border: none;
  border-radius: 4px;
  filter: drop-shadow(0px 0px 6px var(--shadow));
  transition: filter 0.2s ease-in;

  background: linear-gradient(180deg, #fe3189 0%, #fe3189 100%),
    linear-gradient(0deg, #fe3189, #fe3189);

  &:hover {
    filter: drop-shadow(0px 0px 12px var(--shadow));
  }
`
