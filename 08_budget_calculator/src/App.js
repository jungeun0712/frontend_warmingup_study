import React, { Component } from 'react';
import './App.css';

export default class App extends Component {

  state = {
    budgetData: [
      // { id: 1, name: '교통비', cost: 400 },
    ],
    itemValue: "",
    costValue: 0,
    allCount: 0,
    itemCreate: false,
    itemUpdate: false,
    itemDelete: false,
  }

  submitBtn = document.getElementsByClassName('submit-btn');

  handleItemChange = (e) => {
    this.setState({ itemValue: e.target.value });
  }

  handleCostChange = (e) => {
    this.setState({ costValue: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    let findItem = this.state.budgetData.find(item => item.name === this.state.itemValue);
    console.log(findItem);
    if(findItem) {
      const existItem = {
        id: findItem.id,
        name: findItem.name,
        cost: this.state.costValue,
      };

      let idx = this.state.budgetData.findIndex(data => data.id === findItem.id);
      this.state.budgetData.splice(idx, 1);
  
      this.setState({
        budgetData: [...this.state.budgetData, existItem],
        itemValue: "",
        costValue: 0,
        allCount: (parseInt(this.state.allCount) - parseInt(findItem.cost)) + parseInt(this.state.costValue),
        itemCreate: false,
        itemUpdate: true,
        itemDelete: false,
      });
    } else {
      const newItem = {
        id: this.state.budgetData.length + 1,
        name: this.state.itemValue,
        cost: this.state.costValue,
      };
  
      this.setState({
        budgetData: [...this.state.budgetData, newItem],
        itemValue: "",
        costValue: 0,
        allCount: parseInt(this.state.allCount) + parseInt(this.state.costValue),
        itemCreate: true,
        itemUpdate: false,
        itemDelete: false,
      });
    }
 
    // let cnt = 0;
    // this.state.budgetData.forEach(item => {
    //   cnt = cnt + item.cost;
    //   console.log(cnt)
    // })

    // this.setState({ allCount: cnt });

    this.submitBtn[0].textContent = "제출";
  }

  handleDelete = (item) => {
    const filteredData = this.state.budgetData.filter(data => data.id !== item.id);
    console.log(filteredData);
    this.setState({ 
      budgetData: filteredData,
      allCount: parseInt(this.state.allCount) - item.cost,
      itemCreate: false,
      itemUpdate: false, 
      itemDelete: true 
    });
  }

  handleEdit = (item) => {
    this.setState({ itemValue: item.name, costValue: item.cost, itemCreate: false, itemUpdate: false, itemDelete: false });
    this.submitBtn[0].textContent = "수정";
  }

  handleDeleteAll = () => {
    this.setState({ budgetData: [], itemCreate: false, itemUpdate: false, itemDelete: true });
  }

  render() {
    return (
      <div className="container">
        <span>예산 계산기</span>
        { this.state.itemCreate ? 
          <div className="alert alert-primary mt-1" role="alert">
            지출 항목이 생성되었습니다.
          </div>
          : null
        } 
        { this.state.itemUpdate ? 
          <div className="alert alert-primary mt-3" role="alert">
            지출 항목이 수정되었습니다.
          </div>
          : null
        } 
        { this.state.itemDelete ? 
          <div className="alert alert-danger mt-3" role="alert">
            지출 항목이 삭제되었습니다.
          </div>
          : null
        } 
        <div className="item">
          <form onSubmit={this.handleSubmit}>
            <div className="d-flex" style={{ gap : 10 }}>
              <div className="d-flex flex-column w-50">
                <span>지출 항목</span>
                <input type="text" className="form-control" placeholder="예) 렌트비" value={this.state.itemValue} onChange={this.handleItemChange} />
              </div>
              <div className="d-flex flex-column w-50">
                <span>비용</span>
                <input type="number" className="form-control" value={this.state.costValue} onChange={this.handleCostChange} />
              </div>
            </div>
            <div className="d-flex justify-content-end mt-1">
              <button type="submit" className="btn btn-primary btn-sm submit-btn">제출</button>
            </div>
          </form>
  
          <div className="mt-3">
            {this.state.budgetData.map(item => (
              <div className="d-flex mt-2 budget-list" key={item.id}>
                <div style={{ width: '50%' }}>{item.name}</div>
                <div style={{ width: '43%' }}>{item.cost}원</div>
                <div className="d-flex justify-content-between" style={{ width: '7%' }}>
                  <div onClick={() => this.handleEdit(item)}><i className="bi bi-pencil-square" style={{ cursor: 'pointer', color: 'green' }}></i></div>
                  <div onClick={() => this.handleDelete(item)}><i className="bi bi-trash" style={{ cursor: 'pointer', color: 'red' }}></i></div>
                </div>
              </div>
            ))}
            { this.state.budgetData.length > 0 ? 
              <div className="d-flex align-items-center justify-content-between">
                <button type="button" className="btn btn-danger btn-sm mt-2" onClick={this.handleDeleteAll}>목록 지우기</button>
                <div>총 지출 : {this.state.allCount}</div>
              </div>
              : null
            }
          </div>
        </div>
      </div>
    );
  }
}
