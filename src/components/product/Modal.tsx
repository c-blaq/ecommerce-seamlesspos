import React from "react";
import * as Dialog from "@radix-ui/react-dialog";

interface ModalProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal = ({ open, setOpen }: ModalProps) => (
  <Dialog.Root
    open={open}
    onOpenChange={(open) => {
      !open && setOpen(false);
    }}
  >
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black/20 z-50 data-[state=open]:animate-overlayShow fixed inset-0" />
      <Dialog.Content className="z-50 data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
        <Dialog.Title className="font-semibold">
          Log in to continue
        </Dialog.Title>

        <Dialog.Description className="mt-3 mb-10 text-sm leading-normal">
          You need to log in to proceed with your purchase.{" "}
          <br className="hidden sm:block" /> Click the 'Login' button to log
          into your account.
        </Dialog.Description>

        <div className="">
          <button className="bg-primary text-textGray-100 px-3 py-1 sm:px-5 sm:py-2 rounded hover:bg-primary-dark transition duration-300">
            Login
          </button>
          <Dialog.Close asChild>
            <button
              className="bg-red-500 ml-4 text-textGray-100 px-3 py-1 sm:px-5 sm:py-2 rounded hover:bg-red-400 transition duration-300"
              aria-label="Close"
            >
              Close
            </button>
          </Dialog.Close>
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export default Modal;
