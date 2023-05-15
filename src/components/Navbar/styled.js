import styled from 'styled-components'
import { device } from '../../utils/responsive'

export const Container = styled.ul`
  position: relative;
  display: flex;
  gap: 62px;
  z-index: 999;

  @media ${device.breakpoint} {
    top: 107px;
    left: 0;
    height: 100vh;
    width: 40vw;

    position: fixed;

    background-color: var(--background);
    border-top: 2px solid var(--background-page);

    padding-top: 107px;
    padding-left: 10px;

    gap: 100px;

    flex-flow: column nowrap;
    transform: ${(props) =>
    props.open ? 'translateX(0)' : 'translateX(-100%)'};
    transition: all 0.3s;
  }

  li {
    position: relative;
    text-transform: uppercase;
    font-weight: 500;
    line-height: 24px;
    transform: ${(props) =>
    props.open ? 'translateX(0)' : 'translateX(-100%)'};
    transition: transform 0.5s;
    &:last-child {
      transition: transform 0.8s;
    }
    cursor: pointer;
    a {
      color: var(--text);
      &:hover {
        color: var(--shape);
      }
    }

    &:after {
      content: '';
      position: absolute;
      background-color: transparent;
      height: 3px;
      width: 100%;
      left: 0;
      bottom: 0;
      transition: all 0.2s ease;
    }
    &.active::after,
    &:hover::after {
      bottom: -41px;
      background-color: var(--pink);
    }
  }
`
