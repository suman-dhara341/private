import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import DeleteIcon from "@mui/icons-material/Delete";

const TableHeads = [
  {
    name: "SL#",
  },
  {
    name: "Product Name",
  },
  {
    name: "Images",
  },
  {
    name: "Price",
  },
  {
    name: "Action",
  },
];

const products = [
  {
    name: "Classmate Notebook - Single Line, 120 ages",
    img: "https://s3-alpha-sig.figma.com/img/66a0/6447/8975f20fea828fa7c55523ae2f41da8e?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=EwwgqhLYuSTaNBPSwMNCQ2JPw8mRnHBtZB0ot1kuXd8Q56e~D47rhaUVBK51w94ROBA7vdCDPS6~~-WOl3E-hnyFOrrDiab6tq9GbxfF6YSd~CuRc8-fnHI1NndtZk2h5N7W~x5IVyREtBGbjkE0KsuIgAAwiPV690NuvqcBU9LSvO8~EW5FFgd07LPXAOUhBuczjaxVxDoDj3Ok6jL2BLTTfyoZamFepVHvsc6iyBXlOTDBL1svsafAnmP2mxs7-6JIswNnb~VRNyhVC5koJWFW-tJuhL-Gmy6n-HL0a2ZCECbf7bNtMEKurEPl9Kvg-lK1GwwSPE~ppS0CKxvHYA__",
    price: "$15.00",
  },
  {
    name: "Classmate Notebook - Single Line, 120 ages",
    img: "https://s3-alpha-sig.figma.com/img/66a0/6447/8975f20fea828fa7c55523ae2f41da8e?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=EwwgqhLYuSTaNBPSwMNCQ2JPw8mRnHBtZB0ot1kuXd8Q56e~D47rhaUVBK51w94ROBA7vdCDPS6~~-WOl3E-hnyFOrrDiab6tq9GbxfF6YSd~CuRc8-fnHI1NndtZk2h5N7W~x5IVyREtBGbjkE0KsuIgAAwiPV690NuvqcBU9LSvO8~EW5FFgd07LPXAOUhBuczjaxVxDoDj3Ok6jL2BLTTfyoZamFepVHvsc6iyBXlOTDBL1svsafAnmP2mxs7-6JIswNnb~VRNyhVC5koJWFW-tJuhL-Gmy6n-HL0a2ZCECbf7bNtMEKurEPl9Kvg-lK1GwwSPE~ppS0CKxvHYA__",
    price: "$15.00",
  },
];

const MyProduct = () => {
  const [open, setOpen] = useState(true);
  return (
    <div className="bg-white rounded-xl p-4 my-3 mx-2">
      {open ? (
        <div>
          <div className="flex items-center justify-between px-2 py-4">
            <p className="text-2xl font-semibold">My Products</p>
            <button
              className="bg-[#5AAD18] px-3 py-2 rounded-full w-32 text-white text-sm"
              onClick={() => setOpen(false)}
            >
              Add Products
            </button>
          </div>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow className="bg-[#000000]">
                {TableHeads?.map((item, index) => (
                  <TableCell key={index} sx={{ color: "white" }}>
                    {item?.name}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {products?.map((item, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="left">{index + 1}</TableCell>
                  <TableCell component="th" scope="row">
                    {item.name}
                  </TableCell>
                  <TableCell align="left">
                    <img src={item.img} className="h-14 object-cover" />
                  </TableCell>
                  <TableCell align="left">{item.price}</TableCell>
                  <TableCell align="left">
                    <MoreVertIcon />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-semibold">Add Product</h1>
          <div className="flex items-center flex-col gap-2">
            <div className="">
              <p className="text-[#444444] mb-2">Product Name</p>
              <input
                type="text"
                className="border outline-none rounded-md h-10 w-[30rem] px-3 py-1 border-[#CFCFCF] "
              />
            </div>
            <div>
              <p className="text-[#444444] mb-2">Description</p>
              <textarea
                name=""
                className="border outline-none rounded-md w-[30rem] px-3 py-1 border-[#CFCFCF] "
                rows={4}
              ></textarea>
            </div>

            <div className="bg-[#ecf4e7] w-[30rem] flex items-center flex-col p-14 gap-2 rounded-2xl border border-dashed border-[#42940f] ">
              <InsertPhotoIcon />
              <p className="font-semibold">Upload Product Image</p>
              <p className="text-[#444444] text-sm">
                maximum of 5 images are allowed
              </p>
              <label
                htmlFor="addImg"
                className="bg-white border border-[#5AAD18] px-4 py-2 rounded-full mt-1"
              >
                Browse
              </label>
              <input
                type="file"
                accept="image/*"
                name=""
                id="addImg"
                className="hidden"
              />
            </div>
            <div className="w-[30rem] flex gap-2">
              {[1, 2, 2, 2].map(() => (
                <div className="w-20 flex gap-2 flex-col">
                  <img
                    src="https://s3-alpha-sig.figma.com/img/66a0/6447/8975f20fea828fa7c55523ae2f41da8e?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=EwwgqhLYuSTaNBPSwMNCQ2JPw8mRnHBtZB0ot1kuXd8Q56e~D47rhaUVBK51w94ROBA7vdCDPS6~~-WOl3E-hnyFOrrDiab6tq9GbxfF6YSd~CuRc8-fnHI1NndtZk2h5N7W~x5IVyREtBGbjkE0KsuIgAAwiPV690NuvqcBU9LSvO8~EW5FFgd07LPXAOUhBuczjaxVxDoDj3Ok6jL2BLTTfyoZamFepVHvsc6iyBXlOTDBL1svsafAnmP2mxs7-6JIswNnb~VRNyhVC5koJWFW-tJuhL-Gmy6n-HL0a2ZCECbf7bNtMEKurEPl9Kvg-lK1GwwSPE~ppS0CKxvHYA__"
                    alt=""
                    className="h-16 w-20 object-cover border border-[#CFCFCF]  rounded-2xl"
                  />
                  <div className="border border-[#CFCFCF] w-full flex items-center justify-center py-1">
                    <DeleteIcon fontSize="small" />
                  </div>
                </div>
              ))}
            </div>
            <div className="w-[30rem]">
              <p className="text-[#4c4c4c] mb-1 mt-1">Product Price ($)</p>
              <input
                type="text"
                className="border border-[#CFCFCF] outline-none rounded-md h-10 w-80 px-3 py-1 "
              />
            </div>
          </div>
          <div className="border-t border-[#CFCFCF] w-[30rem] mt-4 text-center p-4">
            <button className="bg-[#5AAD18] px-3 py-2 rounded-full w-32 text-white">
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyProduct;
