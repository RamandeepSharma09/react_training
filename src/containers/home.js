import React from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import List from '../components/list';
import Search from '../components/search';
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Todo Demo App',
            value: '',
            button: 'Add',
            list:[],
            value_index: null,
            search_value: null,
            search_result: []
        };
       this.delete = this.delete.bind(this);
       this.onSave = this.onSave.bind(this);
       this.edit = this.edit.bind(this);
       this.onSearch = this.onSearch.bind(this);
    }

    onSave(){
       const list = this.state.list;
        if(this.refs.demo.value.trim() != ''){
               if(this.state.button != 'Add'){
                console.log("Update hit");
                this.state.list[this.state.value_index] = this.refs.demo.value;
                console.log(this.state.list);
                 this.setState({list});
                    this.refs.demo.value = '';
                    this.setState({
                          button: 'Add'
                        });
                     
               } 
               else{
                list.push(this.refs.demo.value);
                this.setState({list});
                this.refs.demo.value = '';
                this.setState({
                      button: 'Add'
                    });
                 }
            }
    }
    delete(i){
        const list = this.state.list;
        //console.log('delete',i);
        console.log(this.state.list);
        this.state.list.splice(i,1);
        console.log(this.state.list);
        this.setState({list});
    }

    edit(index){
        const list = this.state.list;
        console.log("edit function called");
        this.refs.demo.value = this.state.list[index];
        this.setState({
              button: 'Update',
              value_index: index
            });
       
        // this.state.list.splice(i,1);
        // console.log(this.state.list);
        // this.setState({list});
    }

    onSearch(value){
        console.log("search hit");
        var search_text = this.state.search_value;
        const list = this.state.list;
        var search_result = [];
        // console.log(search_result);
        // list.map( (x) => { if(x === search_text){ 
        //     //console.log(x, search_text);
        //     search_result.push(x);
        //          }
        //  } );
        // if(search_result.length == 0 ){  search_result = []; search_result.push("No result found"); }
        // console.log(search_result);

        //USING FILTER

        search_result = list.filter( (x) => x == search_text); 
        
        this.setState({search_result});
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-6">
                        <h1>{this.state.name}</h1>
                        <input 
                            type="text"
                            ref="demo"
                            //onChange={(event) =>  this.setState({value: event.target.value })}
                            //value={this.state.value}
                            />
                            <button onClick={this.onSave}>{this.state.button}</button>
                            <br/>
                            <List 
                                list={this.state.list} 
                                _delete={this.delete}
                                _edit={this.edit}
                            />
                    </div>
                    <div className="col-6">
                        <h1>Search box</h1>
                       <input 
                            type="text"
                            ref="demoa"
                            onChange={(event) =>  this.setState({search_value: event.target.value })}
                            //value={this.state.search_value}
                            />
                            <button onClick={this.onSearch}>Search</button>
                            <br/>

                            <Search 
                                    list={this.state.search_result} 
                                    
                            />
                            {!this.state.search_result.length && (
                                <p>No record found</p>
                                )}
                    </div>
                </div>
            </div>
        );
    }
}

Home.propTypes = {
};

const mapStateToProps = (state) =>
    ({
    });

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
