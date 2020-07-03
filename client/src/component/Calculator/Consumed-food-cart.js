import React from "react";
import "@rmwc/data-table/styles";
import {
  SimpleDataTable,
  DataTable,
  DataTableContent,
  DataTableHead,
  DataTableRow,
  DataTableHeadCell,
  DataTableBody,
  DataTableCell,
} from "@rmwc/data-table";
import "@rmwc/checkbox/styles";
import { Checkbox } from "@rmwc/checkbox";
import { SimpleDialog } from "@rmwc/dialog";
import "@rmwc/dialog/styles";
import { Button } from "@rmwc/button";
import "@rmwc/button/styles";
import { TextField } from "@rmwc/textfield";
import "@rmwc/textfield/styles";


const Cart = () => {
  const [checked, setChecked] = React.useState({});
  const [deleteOpen, setDeleteOpen] = React.useState(false);
  const [confirmOpen, setConfirmOpen] = React.useState(false);
  const [startDate, setStartDate] = React.useState();
  const sampleRows = new Array(3).fill(undefined); // Cart 행의 갯수

  return (
    <div>
    <div>
    <TextField selected={startDate} onChange={e => setStartDate(e.target.value)} label="date" type="date" />
    </div>
      <div>
        <DataTable>
          <DataTableContent>
            <DataTableHead>
              <DataTableRow>
                <DataTableHeadCell hasFormControl>
                </DataTableHeadCell>
                <DataTableHeadCell>Food Name</DataTableHeadCell>
                <DataTableHeadCell>Weight (g)</DataTableHeadCell>
                <DataTableHeadCell>Calorie (kcal)</DataTableHeadCell>
              </DataTableRow>
            </DataTableHead>
            <DataTableBody>
              {sampleRows.map((v, i) => (
                <DataTableRow key={i} selected={checked[i]}>
                  <DataTableCell hasFormControl>
                    <Checkbox
                      checked={checked[i]}
                      onChange={(evt) => {
                        checked[i] = evt.currentTarget.checked;
                        setChecked({ ...checked });
                      }}
                    />
                  </DataTableCell>
                  <DataTableCell>Apple</DataTableCell>
                  <DataTableCell>1000</DataTableCell>
                  <DataTableCell>1000</DataTableCell>
                </DataTableRow>
              ))}
            </DataTableBody>
          </DataTableContent>
        </DataTable>
      </div>
      <div className="total-calorie">
        <SimpleDataTable data={[["Total Calorie", "3000 kcal"]]} />
      </div>
      <div className='cart-button'>
        <span>
          <SimpleDialog
            title="DELETE"
            body="레알 지울까요?"
            open={deleteOpen}
            onClose={(evt) => {
              console.log(evt.detail.action);
              setDeleteOpen(false);
            }}
          />
          <Button raised onClick={() => setDeleteOpen(true)}>
            DELETE
          </Button>
        </span>
        <span>
          <SimpleDialog
            title="CONFIRM"
            body="등록?"
            open={confirmOpen}
            onClose={(evt) => {
              console.log(evt.detail.action);
              setConfirmOpen(false);
            }}
          />
          <Button raised onClick={() => setConfirmOpen(true)}>
            CONFIRM
          </Button>
        </span>
      </div>
    </div>
  );
};

export default Cart;
