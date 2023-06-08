import { Component, Host, Method, Prop, State, h } from '@stencil/core';

export interface Column {
  title: string;
  prop: string;
  width: string | number;
  align?: 'left' | 'center' | 'right';
}

export type Columns = Array<Column | Record<string, any>>;

export type Rows = Array<Record<string, any>>;

@Component({
  tag: 'ivy-table',
  styleUrl: 'ivy-table.css',
  shadow: true,
})
export class IvyTable {
  @Prop({
    attribute: 'border',
  })
  border: boolean = false;

  @State() columns: Columns = [];
  @State() rows: Rows = [];

  render() {
    return (
      <Host border={this.border}>
        <table>
          <thead>
            <tr>
              {this.columns.map((col, i) => {
                return <th class={`table-cell table-cell-th table-col-${i}`}>{col.title}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {this.rows.length > 0 ? (
              this.rows.map(row => {
                return (
                  <tr>
                    {this.columns.map((col, i) => {
                      return <td class={`table-cell table-col-${i}`}>{row[col.prop]}</td>;
                    })}
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan={this.columns.length} class="table-cell table-cell-empty">
                  暂无数据
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </Host>
    );
  }

  transferColumns(columns: Columns): Columns {
    return columns.map(column => {
      return {
        title: column.title || null,
        prop: column.prop || null,
        width: column.width || null,
      };
    });
  }

  @Method()
  async setColumns(columns: Columns) {
    this.columns = this.transferColumns(columns);
  }
  @Method()
  async setData(data: Rows) {
    this.rows = data;
  }
}
