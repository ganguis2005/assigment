import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import CustomButton from './CustomButton';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Book from '../components/Book';

const buttonStyle= {
  marginTop: '0px',
  boxShadow: '22px 24px 101px 3px rgba(0,0,0,0.24)',
  width: '155px', 
  height: '55px', 
  textTransform: 'none',
  position: 'absolute', 
  right: '56px', 
  top: '5px',
  color: 'white',
  fontSize: '20px',
  
  
}
const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
    height: '60px'
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'absolute',
    boxShadow: '22px 24px 101px 3px rgba(0,0,0,0.24)',
    borderRadius: '48px 48px 48px 48px',
    border: '0px solid #000000',
    backgroundColor: fade(theme.palette.common.white, 0.5),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(0),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    marginTop:'10px',
    width: '100%',
    height: '40px',
    [theme.breakpoints.up('md')]: {
      width: '350px',
    },
  },
  
}));

export default function AppBarMu(props) {
  const [open, setOpen] = React.useState(false);
  const [image, setImage] = React.useState('');
  const [author, setAuthor] = React.useState('');
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');

  const updateImage = (event) => {
    setImage(event.target.value);
  }
  const updateAuthor = (event) => {
    setAuthor(event.target.value);
  }
  const updateTitle = (event) => {
    setTitle(event.target.value);
  }
  const updateDescription = (event) => {
    setDescription(event.target.value);
  }




  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleCloseSave = () => {
    const saveBook = {
      id: 1, 
      title: title,
      image: image,
      description: description,
      author: author 
    };
    props.addBook(saveBook);
    setOpen(false);
    console.log('New Booked from Dialog saved');
  };
  const classes = useStyles();
  return (
    <div className={classes.grow}>
      
        <Toolbar>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Start searching for books..."
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <CustomButton id="AddBook" onClick={handleClickOpen} cStyle={buttonStyle} title="Add Book">
              Add Book
          </CustomButton>
          
          <div className={classes.grow} />
          
        </Toolbar>

        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogContent>
            <DialogContentText>
              <h1>Add Books</h1>
               <Book />
               <TextField
                onChange={updateImage}
                autoFocus
                margin="dense"
                id="imageUrl"
                label="image"
                type="url"
                fullWidth
              />
              <TextField
                onChange={updateTitle}
                autoFocus
                margin="dense"
                id="title"
                label="title"
                type="string"
                fullWidth
              />
              <TextField
                onChange={updateAuthor}
                autoFocus
                margin="dense"
                id="author"
                label="author"
                type="string"
                fullWidth
              />
              <TextField
                onChange={updateDescription}
                autoFocus
                margin="dense"
                id="description"
                label="description"
                type=""
                fullWidth
              />
                
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleCloseSave} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>      
    </div>
  );
}