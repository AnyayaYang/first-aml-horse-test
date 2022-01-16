import TableRows from './TableRows';

const TableBody = ({ horseData, ...rest }) => {
  return (
    <tbody>
      {horseData.map((horse, index) => {
        return <TableRows key={index} {...horse} {...rest} />;
      })}
    </tbody>
  );
};

export default TableBody;
