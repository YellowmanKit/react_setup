const uiReducer = (
  state = {
    minWidth: 360,
    maxWidth: 840,
    minHeight: 540,
    maxHeight: 1440,
    windowWidth: 0,
    windowHeight: 0,
    basicStyle: {
      width: 0,
      height: 0,
      display: 'flex',
      flexFlow: 'column nowrap',
      alignItems: 'center'
    },
    styles: {
      container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundSize: '100% 100%',
        flexShrink: 0
      }
    },
    colors: {
      green: '#91c33b'
    }
  }, action)=>{
  switch (action.type) {
    case 'setDimension':
      const windowWidth = action.payload.width;
      const windowHeight = action.payload.height;
      const basicStyle =
      {...state.basicStyle,
        width:
        windowWidth < state.minWidth? state.minWidth:
        windowWidth > state.maxWidth? state.maxWidth:
        windowWidth * 0.9999,
        height:
        windowHeight < state.minHeight? state.minHeight:
        windowHeight > state.maxHeight? state.maxHeight:
        windowHeight * 0.9999};
      return {...state,
              windowWidth: windowWidth,
              windowHeight: windowHeight,
              basicStyle: basicStyle};
    default:
      return state;
  }
}

export default uiReducer;
