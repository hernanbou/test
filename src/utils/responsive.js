const size = {
  mobile: '640px',
  tablet: {
    min: '641px',
    max: '1024px',
  },
  break: '1024px',
}
export const device = {
  mobile: `(max-width: ${size.mobile})`,
  breakpoint: `(max-width: ${size.break})`,
  tablet: `(min-width: ${size.tablet.min}) and (max-width: ${size.tablet.max})`,
}
