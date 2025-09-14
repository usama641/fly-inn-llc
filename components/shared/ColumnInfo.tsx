"use client";

import { useState } from "react";
import { BsInfoCircleFill } from "react-icons/bs";

const ColumnInfo = ({open, setOpen}) => {

  return (
    <>
           <Modal
        open={open}
        onCancel={() => setOpen(false)}
        footer={null}
        width={350}
        centered
        >
            <div className="w-full flex flex-col items-center text-sm text-black">
                <BsInfoCircleFill color="#9DE0F6" size={44} className="mb-3" />
                <span className="text-center">
                    Please scroll right and left to view more columns.
                </span>
                 <button
                    onClick={() => setOpen(false)}
                    className="text-white bg-[#CE2029] px-4 py-2 rounded-md mt-4"
                    >
                      OK
                    </button>
                </div>
    </Modal>
    </>
  );
};

export default ColumnInfo;