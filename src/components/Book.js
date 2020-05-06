import React from 'react';

class Book extends React.Component {
    constructor(props){
        super(props);
        this.state = {hover: false};
        this.toggleHover = this.toggleHover.bind(this);
    }
    toggleHover() {
        this.setState({hover: !this.state.hover})
    }
    render() {
        const borderChange = this.state.hover ? 'solid' : 'none';
        const bookStyle = {
            boxSizing:'border-box',
            cursor: 'pointer',
            height:'280px',
            width:'280px',
            border:`${borderChange}`,
            maxWidth: '195px',  
            display:'flex',
            flexDirection: 'row',
            flexShrink:'0',
            margin:'10px',
            background: `url(${this.props.image}) center no-repeat`,
            backgroundSize: 'cover',
            boxShadow: '16px 11px 32px -13px rgba(0,0,0,0.75)',
         }
        return (
            <div 
                onClick={this.props.onClick}
                className="Book" 
                style={bookStyle} 
                id={this.props.id} 
                title={this.props.title}
                onMouseEnter={this.toggleHover} 
                onMouseLeave={this.toggleHover}>

            </div>
          );

    }
}

export default Book;