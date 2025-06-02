function TableData({ col = [], data = [] }) {
  const colList = col.map((c) => <th key={c.key}>{c.lable}</th>);
  //map return index
  const dataList = data.map((dataItem, index) => (
    <tr key={index}>
      {col.map((c) => (
        <td key={c.key}>{dataItem[c.key]}</td>
      ))}
    </tr>
  ));

  return (
    <table className="table">
      <thead>
        <tr>{colList}</tr>
      </thead>
      <tbody>{dataList}</tbody>
    </table>
  );
}
export default TableData;
