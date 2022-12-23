import * as React from "react";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import { useState, useEffect } from "react";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function Login() {
  const handleSubmit = () => {};

  const handleChange = () => {};

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
        className="text-white font-medium rounded text-base"
        onClick={handleClickOpen}
      >
        Login
      </button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <div className="p-8 bg-gray-700">
          <h1>LogIn</h1>
          <div className="">
            <form>
              <div>
                <input
                  type="text"
                  id="first_name"
                  class="bg-gray-50 border outline-none mb-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Username"
                  required
                />
              </div>

              <div>
                <input
                  type="text"
                  id="first_name"
                  class="bg-gray-50 border outline-none mb-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Password"
                  required
                />
              </div>

              <div className="flex justify-center">
                <button
                  type="button"
                  class="text-white bg-gray-800 hover:bg-gray-200  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:border-gray-700"
                >
                  LogIn
                </button>
              </div>
            </form>
          </div>
        </div>
      </BootstrapDialog>
    </div>
  );
}
