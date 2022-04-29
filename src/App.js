import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav';
import ClassTable from './views/ClassTable';
import Home from './views/Home';
import Post from './views/Post';

export default class App extends Component{
	constructor(props){
		super(props);
		this.state = {
			data: []
		}
	};
    


	render(){
		return (
			<>
				<Nav />
				<div className="container">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/peepsTable" element={<ClassTable />} />
						<Route path="/posts" element={<Post/>} />
					</Routes>
					{/* <ClassTable classmates={this.state.data}/> */}
				</div>
			</>

		)
	}

};

