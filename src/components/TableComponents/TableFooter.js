import { Link } from 'react-router-dom';

const TableFooter = () => {
  return (
    <tfoot>
      <tr>
        <td colSpan='4' style={{ textAlign: 'right' }}>
          <Link to='/input-form'>
            <button>Add horse</button>
          </Link>
        </td>
      </tr>
    </tfoot>
  );
};

export default TableFooter;
