import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
// import DialogTitle from "@mui/material/DialogTitle";
// import DialogContent from "@mui/material/DialogContent";
// import DialogActions from "@mui/material/DialogActions";
// import IconButton from "@mui/material/IconButton";
// import CloseIcon from "@mui/icons-material/Close";
// import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { createPost, updatePost } from "../../actions/post";
import { useSelector } from "react-redux";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

// function BootstrapDialogTitle(props) {
//   const { children, onClose, ...other } = props;

//   return (
//     <DialogTitle className="bg-blue-600 rounded-xl flex justify-center  items-center mx-auto bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 " sx={{ m: 0, p: 2 }} {...other}>
//       {children}
//       {onClose ? (
//         <IconButton
//           aria-label="close"
//           onClick={onClose}
//           sx={{
//             position: "absolute",
//             right: 8,
//             top: 8,
//             color: (theme) => theme.palette.grey[500],
//           }}
//         >
//           <CloseIcon />
//         </IconButton>
//       ) : null}
//     </DialogTitle>
//   );
// }

// BootstrapDialogTitle.propTypes = {
//   children: PropTypes.node,
//   onClose: PropTypes.func.isRequired,
// };

export default function Form({ currentId, setCurrentId }) {
  const post = useSelector((state) =>
    currentId ? state.posts.find((p) => p._id === currentId) : null
  );
  const dispatch = useDispatch();
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    tags: "",
    message: "",
    selectedFile: "",
  });

  useEffect(() => {
    if (post) {
      setPostData(post);
      handleClickOpen();
    }
  }, [post]);

  //we are dispatching the action when the user is submit the form and sending all the data to backend
  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentId) {
      dispatch(updatePost(currentId, postData));
    } else {
      dispatch(createPost(postData));
    }
    clearSubmit();
  };

  const clearSubmit = () => {
    setCurrentId(null);
    setPostData({
      creator: "",
      title: "",
      tags: "",
      message: "",
      selectedFile: "",
    });
  };

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
    <div className="">
      <button
        className="text-white text-xl font-normal"
        onClick={handleClickOpen}
      >
        Create Moment
      </button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <div className="p-8 bg-gray-700 ">
          <div className="">
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  onChange={(e) =>
                    setPostData({ ...postData, creator: e.target.value })
                  }
                  value={postData.creator}
                  type="text"
                  id="first_name"
                  class="bg-gray-50 border outline-none mb-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Creator"
                  required
                />
              </div>

              <div>
                <input
                  onChange={(e) =>
                    setPostData({ ...postData, title: e.target.value })
                  }
                  value={postData.title}
                  type="text"
                  id="first_name"
                  class="bg-gray-50 border outline-none mb-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Title"
                  required
                />
              </div>

              <div>
                <input
                  onChange={(e) =>
                    setPostData({ ...postData, message: e.target.value })
                  }
                  value={postData.message}
                  type="text"
                  id="first_name"
                  class="bg-gray-50 border outline-none mb-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Message"
                  required
                />
              </div>

              <div>
                <input
                  class="block w-full text-sm outline-none mb-4 text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                  id="file_input"
                  type="file"
                  onChange={(e) => {
                    uploadImage(e);
                  }}
                />
              </div>
              <div>
                <input
                  onChange={(e) =>
                    setPostData({ ...postData, tags: e.target.value.split(',') })
                  }
                  value={postData.tags}
                  type="text"
                  id="first_name"
                  class="bg-gray-50 border outline-none mb-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Tags"
                  required
                />
              </div>
              <div className="flex justify-center">
                <button
                  onClick={handleSubmit}
                  type="button"
                  class="text-white bg-gray-800 hover:bg-gray-200  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:border-gray-700"
                >
                  Submit
                </button>
              </div>
              {/* <div className="flex justify-center">
                <button
                  onClick={clearSubmit}
                  class="text-white bg-gray-800 hover:bg-gray-200  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:border-gray-700"
                >
                  clear{" "}
                </button>
              </div> */}
            </form>
          </div>
        </div>

        {/* <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Close
          </Button>
        </DialogActions> */}
      </BootstrapDialog>
    </div>
  );
}
