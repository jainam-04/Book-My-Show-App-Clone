import React from "react";
import {Dialog, Transition} from "@headlessui/react";
import {Fragment, useState} from "react";

const PaymentModelComponent = (props) => {
  function closeModal() {
    props.setIsOpen(false);
  }

  const launchRazorpay = () => {
    let options = {
      key: "rzp_test_pCXK0Fnm04GGMy",
      amount: props.price * 100,
      currency: "INR",
      name: "Book My Show Clone",
      description: "To purchase or rent the movie",
      handler: () => {
        setIsOpen(false);
        alert("Payment Successful");
      },
      theme: {
        color: "#c4242d",
      },
    };
    let razorPay = window.Razorpay(options);
    razorPay.open();
  };
  return (
    <>
      <Transition appear show={props.isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Please make a payment
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Hello please meke the payment with the following steps.
                    </p>
                  </div>

                  <div className="mt-4 gap-3">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-red-500 px-4 py-2 text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                      onClick={launchRazorpay}
                    >
                      Pay {props.price}
                    </button>
                    <button
                      type="button"
                      className="ml-2 inline-flex justify-center rounded-md border border-transparent bg-red-500 px-4 py-2 text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Cancel Payment
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default PaymentModelComponent;
