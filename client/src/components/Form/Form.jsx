import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createPost } from "../../actions/post";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function Form() {
  const dispatch = useDispatch();
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    tags: "",
    message: "",
    selectedFile: "",
  });

  //we are dispatching the action when the user is submit the form and sending all the data to backend
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost(postData));
  };

  const clearSubmit = () => {};

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setPostData({ ...postData, selectedFile: base64 });
    console.log(base64);
    // return base64
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Create a MOMENT
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          MOMENTS
        </BootstrapDialogTitle>
        <div className="">
          <div className=" ">
            <form onSubmit={handleSubmit}>
              <div>
                <label>creator</label>
                <input
                  onChange={(e) =>
                    setPostData({ ...postData, creator: e.target.value })
                  }
                  value={postData.creator}
                  type="text"
                />
              </div>
              <div>
                <label>title</label>
                <input
                  onChange={(e) =>
                    setPostData({ ...postData, title: e.target.value })
                  }
                  value={postData.title}
                  type="text"
                />
              </div>
              
              <div>
                <label>message</label>
                <input
                  onChange={(e) =>
                    setPostData({ ...postData, message: e.target.value })
                  }
                  value={postData.message}
                  type="text"
                />
              </div>
             
              <div>
                <input
                  type="file"
                  onChange={(e) => {
                    uploadImage(e);
                  }}
                />
              </div>
              <div>
                <label>tags</label>
                <input
                  onChange={(e) =>
                    setPostData({ ...postData, tags: e.target.value })
                  }
                  value={postData.tags}
                  type="text"
                />
              </div>
              <button type="submit">submit</button>
              <button onClick={clearSubmit}>clear </button>
            </form>
          </div>
        </div>

        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
