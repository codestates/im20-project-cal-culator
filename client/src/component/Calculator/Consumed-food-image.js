import React from "react";
import "@rmwc/data-table/styles";
import {
  DataTable,
  DataTableContent,
  DataTableHead,
  DataTableRow,
  DataTableHeadCell,
  DataTableBody,
  DataTableCell,
} from "@rmwc/data-table";
import { SimpleDialog } from "@rmwc/dialog";
import "@rmwc/dialog/styles";
import { Button } from "@rmwc/button";
import "@rmwc/button/styles";
import { TextField } from "@rmwc/textfield";
import "@rmwc/textfield/styles";

const FoodImage = () => {
  const [sortDir, setSortDir] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [startDate, setStartDate] = React.useState();

  return (
    <>
      <div>
        <img
          src={require("./pasta.jpg")}
          alt="pasta"
          height="200"
          width="200"
        />
      </div>
      <div>
        <DataTable>
          <DataTableContent>
            <DataTableHead>
              <DataTableRow>
                <DataTableHeadCell>Item</DataTableHeadCell>
                <DataTableHeadCell
                  alignEnd
                  sort={sortDir}
                  onSortChange={(sortDir) => {
                    setSortDir(sortDir);
                    console.log(sortDir);
                  }}
                >
                  Quantity (Click Me)
                </DataTableHeadCell>
                <DataTableHeadCell alignEnd>Unit price</DataTableHeadCell>
              </DataTableRow>
            </DataTableHead>
            <DataTableBody>
              <DataTableRow>
                <DataTableCell>Cookies</DataTableCell>
                <DataTableCell alignEnd>25</DataTableCell>
                <DataTableCell alignEnd>$2.90</DataTableCell>
              </DataTableRow>
              <DataTableRow selected>
                <DataTableCell>Pizza</DataTableCell>
                <DataTableCell alignEnd>50</DataTableCell>
                <DataTableCell alignEnd>$1.25</DataTableCell>
              </DataTableRow>
              <DataTableRow>
                <DataTableCell>Icecream</DataTableCell>
                <DataTableCell alignEnd>10</DataTableCell>
                <DataTableCell alignEnd>$2.35</DataTableCell>
              </DataTableRow>
            </DataTableBody>
          </DataTableContent>
        </DataTable>
      </div>
      <div>
    <TextField selected={startDate} onChange={e => setStartDate(e.target.value)} label="date" type="date" />
    </div>
      <div className="addtocart-button">
        <SimpleDialog
          title="ADD TO CART"
          body="Did you really eat this...?"
          open={open}
          onClose={(evt) => {
            console.log(evt.detail.action);
            setOpen(false);
          }}
        />

        <Button raised onClick={() => setOpen(true)}>
          Add to Cart
        </Button>
      </div>
    </>
  );
};

export default FoodImage;
