import styled from 'styled-components'
import play from '../../assets/play.svg'
import { device } from '../../utils/responsive'

export const Container = styled.div`
  position: relative;
  margin-top: 5px;
  width: ${(props) => (props.display ? '494.25px' : '100%')};
  height: 251px;
  display: flex;

  @media ${device.mobile} {
    width: 100%;
    height: 100%;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
`
export const Poster = styled.section`
  position: relative;
  align-items: center;
  justify-content: center;
  width: 156.74px;
  height: 231.74px;
  border-radius: 4px;
  transition: all 0.3s ease-in;

  &:hover {
    background-color: var(--pink);
    img {
      opacity: 0.8;
      filter: drop-shadow(0px 0px 5px var(--shadow));
    }
  }
  img {
    width: 100%;
    height: 100%;
    border-radius: 4px;
    transition: all 0.3s ease-in;
  }
  &::before {
    position: absolute;
    content: '';
    top: 30%;
    left: 30%;
    z-index: 2;
    display: block;
    opacity: 0;
    width: 5em;
    height: 5rem;
    background: url(${play});
    background-size: cover;
    background-repeat: no-repeat;
    transition: all 0.3s ease-in;
  }
  &:hover::before {
    opacity: 1;
  }

  @media ${device.mobile} {
    width: 129px;
    height: 183.33px;
  }
`
export const Info = styled.main`
  position: relative;
  padding-left: 28.85px;
  width: 65%;

  @media ${device.mobile} {
    padding: 0;
    width: 100%;
  }
`
export const Title = styled.h2`
  position: relative;
  width: 100%;
  padding-top: 0px;

  color: var(--text);
  font-weight: 400;
  font-size: 1.375rem;
  line-height: 33px;

  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;

  cursor: pointer;

  @media ${device.mobile} {
    display: block;
  }
`
export const Genres = styled.div`
  width: 100%;

  font-weight: 300;
  line-height: 24px;
  color: var(--pink);

  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  @media ${device.mobile} {
    padding-top: 10px;

    font-size: 0.75rem;
    line-height: 1.125rem;
  }
`
export const Rate = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 9.62px;
  padding: 12.5px 0;

  img {
    width: 15.99px;
    height: 14.84px;
  }
  p {
    font-weight: 400;
    line-height: 1.5rem;
  }

  @media ${device.mobile} {
    gap: 8.48px;
    padding: 3.16px 0;

    img {
      width: 13.63px;
      height: 11.89px;
    }
    p {
      font-size: 0.7575rem;
      line-height: 1.135625rem;
    }
  }
`
export const Overview = styled.div`
  display: block;
  width: 100%;

  p {
    font-weight: 300;
    font-size: 0.78125rem;
    line-height: 1.171875rem;
    color: var(--text-desc);
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  @media ${device.mobile} {
    display: none;
  }
`

export const OverviewMobile = styled(Overview)`
  display: none;

  @media ${device.mobile} {
    display: block;
    grid-area: 2 / 1 / 3 / 4;
    padding-top: 20px;

    p {
      display: -webkit-box;
      -webkit-line-clamp: 7;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }
`
