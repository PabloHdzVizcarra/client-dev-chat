const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
}

export const device = {
  mobileS: `(min-width: ${size.mobileS})`, //320px
  mobileM: `(min-width: ${size.mobileM})`, // 375px
  mobileL: `(min-width: ${size.mobileL})`, // 425px
  tablet: `(min-width: ${size.tablet})`, // 768px
  laptop: `(min-width: ${size.laptop})`, // 1024px
  laptopL: `(min-width: ${size.laptopL})`, // 1440px
  desktop: `(min-width: ${size.desktop})`, // 2560px
}
