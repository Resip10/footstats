import React, { Component } from 'react';
import classNames from 'classnames';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import Typography from "@material-ui/core/Typography/Typography";
import PropTypes from "prop-types";

import './tableItem.scss';

class TableItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes, theme } = this.props;

    return (
      <Table padding='checkbox' className={`table-item ${this.props.tableClassName || ''}`}>
        <TableHead>
          <TableRow>
            {
              Object.keys(this.props.content.columnNames).map(column => {
                return (
                    <TableCell key={this.props.content.columnNames[column]}>
                      {this.props.content.columnNames[column]}
                    </TableCell>
                  );
              })
            }
          </TableRow>
        </TableHead>
        <TableBody>
          {
            this.props.content.data.map(row => {
              return (
                <TableRow
                  className={classes.row}
                  key={row.position}
                  hover={true}
                >
                  {
                    Object.keys(this.props.content.columnNames).map(key => {
                      return(
                        <TableCell
                          key={`${row.position}_${key}`}
                        >
                          {key === 'goalDifference'
                            ? <Typography
                                className={
                                  row[key] < 0
                                    ? 'warning-text'
                                    : row[key] > 0
                                    ? 'success-text' :
                                    ''
                                }
                            >{row[key]}</Typography>
                            : row[key]}
                        </TableCell>
                      );
                    })
                  }
                </TableRow>
              );
            })
          }
        </TableBody>
      </Table>
    );
  }
}

TableItem.propTypes = {
  content: PropTypes.object.isRequired
};

export default TableItem;
