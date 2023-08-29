import { useSortableTable } from "./useSortableTable";
import TableBody from "./TableBody";
import TableHead from "./TableHead";

const Table = ({ caption, data, columns }) => {
    const [tableData, handleSorting] = useSortableTable(data, columns);
    return (
        <>
            <table className="table">
                <caption>{caption}</caption>
                <TableHead {...{ columns, handleSorting }} />
                <TableBody {...{ columns, tableData }} />
            </table>
        </>
    );
};

export default Table;