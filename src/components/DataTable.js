import "datatables.net-bs5/css/dataTables.bootstrap5.min.css";
import React, { useCallback, useEffect, useRef } from "react";
import $ from "jquery";
import "datatables.net-bs5";

export default function DataTable({
  data,
  columns,
  iscolumnfooter,
  className = "",
}) {
  const tableRef = useRef();

  const footerExits = () => {
    const tableExisted = tableRef.current;
    const footerExisted = tableExisted.querySelector("tfoot");

    // Check if footer already exists if exist then remove
    if (footerExisted) {
      $(footerExisted).remove();
    }
  };

  const footerCall = useCallback(() => {
    footerExits();
    const footerRow = document.createElement("tr");
    columns.forEach((column) => {
      const footerCell = document.createElement("th");
      const input = column.title;
      footerCell.append(input);
      footerRow.append(footerCell);
    });

    $(tableRef.current).append($("<tfoot>").append(footerRow));
  }, [columns]);

  useEffect(() => {
    if (tableRef.current) {
      const table = $(tableRef.current).DataTable({
        autoWidth: false,
        data: data,
        columns: columns,
        dom: '<"row align-items-center"<"col-md-6" l><"col-md-6" f>><"table-responsive my-3" rt><"row align-items-center" <"col-md-6" i><"col-md-6" p>><"clear">',
        destroy: true,

        initComplete: () => {
          // Footer
          if (iscolumnfooter) {
            footerCall();
          }
        },
      });

      return () => {
        table.destroy();
      };
    }
  }, [iscolumnfooter, columns, data, footerCall]);
  return (
    <>
      <table
        className={"table " + className}
        width="100%"
        ref={tableRef}
      ></table>
    </>
  );
}
