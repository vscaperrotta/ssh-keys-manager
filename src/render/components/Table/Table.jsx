/**
 *
 * Table
 *
 * @author Vittorio Scaperrotta
 * @date 25-Jun-2025
*/

import React from 'react';
import PropTypes from 'prop-types';
import { Eye, Trash2, Key } from 'react-feather';
import Button from '@components/Button';
import Badge from '@components/Badge';
import './Table.scss';

const Table = (props) => {
  return (
    <div className='table__container'>
      <table>
        <thead>
          <tr>
            {props.headers.map(item => (
              <th key={item}>
                <span className='table__header-name'>
                  {item}
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {props.sshKeys.map(item => (
            <tr key={item.id}>
              <td>
                <span className='table__name'>
                  <Key size={16} />
                  {item.name}
                </span>
              </td>
              <td>
                <span>
                  {item.type}
                </span>
              </td>
              <td>
                <span>
                  {item.file}
                </span>
              </td>
              <td>
                <span>
                  {item.note}
                </span>
              </td>
              <td>
                <div className='table__status'>
                  <Badge
                    label={item.status}
                    type={item.status === 'complete' ? 'primary' : 'secondary'}
                  />
                </div>
              </td>
              <td>
                <span>
                  {item.creation}
                </span>
              </td>
              <td>
                <div className='table__actions'>
                  <Button
                    label='Detail'
                    onClick={() => props.onClickDetails(item.id)}
                    type='secondary'
                    icon={<Eye size={16} />}
                  />
                  <Button
                    label='Delete'
                    onClick={() => props.onClickDelete(item.id)}
                    type='primary'
                    color='error'
                    icon={<Trash2 size={16} />}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

Table.propTypes = {
  sshKeys: PropTypes.array,
  headers: PropTypes.array,
  onClickDetails: PropTypes.func,
  onClickDelete: PropTypes.func
};

Table.defaultProps = {
  sshKeys: [],
  headers: [],
  onClickDetails: () => { },
  onClickDelete: () => { }
};

export default Table;
