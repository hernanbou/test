import styled from 'styled-components'
import { device } from '../../utils/responsive'

export const Container = styled.div`
  width: 302px;
  height: 191px;

  display: flex;
  gap: 22px;

  background: #252529;
  border: 1px solid #313136;
  border-radius: 4px;

  @media ${device.breakpoint} {
    width: 350px;
    height: 203.65px;
  }
`

export const Poster = styled.div`
  padding-top: 21px;
  padding-left: 22px;

  @media ${device.breakpoint} {
    padding-top: 22.39px;
    padding-left: 23.49px;
  }

  img {
    width: 98px;
    height: 147px;
    border-radius: 4px;

    @media ${device.breakpoint} {
      width: 104.49px;
      height: 156.74px;
    }
  }
`

export const Info = styled.main`
  padding-top: 34px;

  @media ${device.breakpoint} {
    padding-top: 23.25px;
  }
`

export const Title = styled.h2`
  color: var(--text);

  font-weight: 500;
  font-size: 1.375rem;
  line-height: 2.0625rem;

  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media ${device.breakpoint} {
    font-size: 1.46625rem;
    line-height: 2.199375rem;
  }
`

export const Genres = styled.div`
  color: var(--pink);

  font-weight: 300;
  line-height: 1.5rem;

  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media ${device.breakpoint} {
    font-size: 0.75rem;
    line-height: 1.125rem;
  }
`

export const Rate = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  gap: 11.2px;
  padding-top: 2px;

  @media ${device.breakpoint} {
    gap: 8.51px;
  }

  img {
    width: 15.99px;
    height: 14.84px;

    @media ${device.breakpoint} {
      width: 12.15px;
      height: 11.28px;
    }
  }
  p {
    color: var(--text);
    font-weight: 400;
    line-height: 1.5rem;

    @media ${device.breakpoint} {
      font-size: 0.76rem;
      line-height: 1.14rem;
    }
  }
`
