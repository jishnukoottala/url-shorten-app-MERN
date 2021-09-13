import theme from '@carbonplan/theme'


const themeObj = {
    ...theme,
    styles: {
      ...theme,
    },
    buttons: {
        primary: {
          color: 'colors.purple',
          bg: 'gray',
          '&:hover': {
            bg: 'text',
          }
        },
        secondary:{
            bg:"#fff"
        }
    }
}
export default themeObj;