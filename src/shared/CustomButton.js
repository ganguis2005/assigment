import React from 'react';
import Button from '@material-ui/core/Button';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { yellow, orange } from '@material-ui/core/colors';

const muiTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#52A5E2',
    },
    secondary: yellow,
    error: orange,
  },
  typography: {
    fontFamily:
        'roboto, sans-serif',
  },
});
const buttonStyle= {
    marginTop:'30px',
    width: '200px', 
    maxHeight: '40px', 
    minHeight: '40px',
    textTransform: 'none'
}

class CustomButtom extends React.Component {
  render () {

    return(
      <div>
        {this.props.cStyle === ''       
        ? 
            <MuiThemeProvider theme={muiTheme}>
              <Button onClick={this.props.onClick} style={buttonStyle}  variant="contained" color="secondary">
                {this.props.title}
              </Button>
            </MuiThemeProvider>        
           
         
        : 
            <MuiThemeProvider theme={muiTheme}> 
              <Button onClick={this.props.onClick} style={this.props.cStyle}  variant="contained" color="primary">
              {this.props.title}
              </Button>
            </MuiThemeProvider>   
        }
      </div>   
    
    );
  }
  
}
CustomButtom.defaultProps = {
  cStyle:'', 
};
export default CustomButtom;